import { NextRequest, NextResponse } from 'next/server';
import { prismaClient } from '@/infrastructure/database/prisma-client';
import { container } from '@/infrastructure/di-container';
import { RegisterUserCommandHandler } from '@/application/commands/register-user.command';
import { UserRegisteredEventHandler } from '@/application/event-handlers/user-registered.handler';
import { UserRegisteredEvent } from '@/core/events/user-registered.event';

export async function POST(req: NextRequest) {
  try {
    // Parse request body
    const { name, email, password } = await req.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // Check if user exists
    const existingUser = await prismaClient.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'User with this email already exists' },
        { status: 409 } // Conflict
      );
    }

    // Get dependencies from container
    const userWriteRepository = container.userWriteRepository;
    const eventBus = container.eventBus;

    // Create command handler
    const commandHandler = new RegisterUserCommandHandler(userWriteRepository, eventBus);

    // Setup event handler for the user registered event
    // In a real app, this would be done at startup, not on each request
    const userRegisteredHandler = new UserRegisteredEventHandler({
      createUserProgress: async (userId: string) => {
        // Create default user progress
        await prismaClient.userProgress.create({
          data: {
            userId,
            totalXp: 0,
            level: 1,
            currentStreak: 0,
            longestStreak: 0,
          },
        });
      }
    } as any); // TypeScript hack since we don't have a full implementation

    // Register the event handler
    eventBus.subscribe(UserRegisteredEvent, userRegisteredHandler);

    // Execute the command
    const userId = await commandHandler.execute({
      email,
      name,
      password,
    });

    return NextResponse.json(
      { success: true, message: 'User registered successfully' },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Registration error:', error);
    
    return NextResponse.json(
      { message: 'Error registering user', error: error.message },
      { status: 500 }
    );
  }
}

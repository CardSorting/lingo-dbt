import { NextRequest, NextResponse } from 'next/server';
import { prismaClient } from '@/infrastructure/database/prisma-client';
import { hashPassword } from '@/utils/auth';
import { RegisterUserCommandHandler } from '@/application/commands/register-user.command';
import { UserWriteRepository } from '@/infrastructure/repositories/user/user-write.repository';

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

    // Create a UserWriteRepository instance
    const userWriteRepository = new UserWriteRepository();

    // Create a command handler
    const commandHandler = new RegisterUserCommandHandler(userWriteRepository);

    // Execute the command
    const userId = await commandHandler.execute({
      email,
      name,
      password,
    });

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

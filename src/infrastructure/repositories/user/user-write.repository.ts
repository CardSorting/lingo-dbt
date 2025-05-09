import { IUserWriteRepository } from '../../../core/repositories/user-repository.interface';
import { prismaClient } from '../../database/prisma-client';
import { User } from '../../../core/types';

export class UserWriteRepository implements IUserWriteRepository {
  async create(user: Omit<User, 'id' | 'createdAt' | 'updatedAt'>): Promise<User> {
    const createdUser = await prismaClient.user.create({
      data: {
        email: user.email,
        name: user.name,
        image: user.image,
        emailVerified: user.emailVerified,
        lastActive: user.lastActive,
        // If password is provided in the user object, include it
        ...(user as any).password ? { password: (user as any).password } : {}
      }
    });

    return this.mapPrismaUserToEntity(createdUser);
  }

  async update(id: string, user: Partial<User>): Promise<User> {
    const updatedUser = await prismaClient.user.update({
      where: { id },
      data: {
        email: user.email,
        name: user.name,
        image: user.image,
        emailVerified: user.emailVerified,
        lastActive: user.lastActive
      }
    });

    return this.mapPrismaUserToEntity(updatedUser);
  }

  async updateLastActive(id: string): Promise<void> {
    await prismaClient.user.update({
      where: { id },
      data: { lastActive: new Date() }
    });
  }

  async delete(id: string): Promise<void> {
    await prismaClient.user.delete({
      where: { id }
    });
  }

  // Helper method to map Prisma User model to our domain User entity
  private mapPrismaUserToEntity(user: any): User {
    return {
      id: user.id,
      email: user.email,
      name: user.name || undefined,
      image: user.image || undefined,
      emailVerified: user.emailVerified || undefined,
      lastActive: user.lastActive,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt
    };
  }
}

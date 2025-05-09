import { prismaClient } from '../../database/prisma-client';
import { IUserReadRepository } from '../../../core/repositories/user-repository.interface';
import { User as UserEntity } from '../../../core/types';

export class UserReadRepository implements IUserReadRepository {
  async findById(id: string): Promise<UserEntity | null> {
    const user = await prismaClient.user.findUnique({
      where: { id }
    });

    return this.mapPrismaUserToEntity(user);
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await prismaClient.user.findUnique({
      where: { email }
    });

    return this.mapPrismaUserToEntity(user);
  }

  async findAll(): Promise<UserEntity[]> {
    const users = await prismaClient.user.findMany();
    return users.map(user => this.mapPrismaUserToEntity(user) as UserEntity);
  }

  // Helper method to map Prisma User model to our domain User entity
  private mapPrismaUserToEntity(user: any | null): UserEntity | null {
    if (!user) return null;

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

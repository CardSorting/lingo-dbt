import { prismaClient } from '../../database/prisma-client';
export class UserReadRepository {
    async findById(id) {
        const user = await prismaClient.user.findUnique({
            where: { id }
        });
        return this.mapPrismaUserToEntity(user);
    }
    async findByEmail(email) {
        const user = await prismaClient.user.findUnique({
            where: { email }
        });
        return this.mapPrismaUserToEntity(user);
    }
    async findAll() {
        const users = await prismaClient.user.findMany();
        return users.map((user) => this.mapPrismaUserToEntity(user));
    }
    // Helper method to map Prisma User model to our domain User entity
    mapPrismaUserToEntity(user) {
        if (!user)
            return null;
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

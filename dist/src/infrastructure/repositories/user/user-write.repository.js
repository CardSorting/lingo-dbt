import { prismaClient } from '../../database/prisma-client';
export class UserWriteRepository {
    async create(user) {
        const createdUser = await prismaClient.user.create({
            data: Object.assign({ email: user.email, name: user.name, image: user.image, emailVerified: user.emailVerified, lastActive: user.lastActive }, user.password ? { password: user.password } : {})
        });
        return this.mapPrismaUserToEntity(createdUser);
    }
    async update(id, user) {
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
    async updateLastActive(id) {
        await prismaClient.user.update({
            where: { id },
            data: { lastActive: new Date() }
        });
    }
    async delete(id) {
        await prismaClient.user.delete({
            where: { id }
        });
    }
    // Helper method to map Prisma User model to our domain User entity
    mapPrismaUserToEntity(user) {
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

import { PrismaClient } from '@prisma/client';
// Create a singleton Prisma client instance
export const prismaClient = global.prisma || new PrismaClient({
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
});
// Save the client instance in development to prevent multiple instances
if (process.env.NODE_ENV === 'development') {
    global.prisma = prismaClient;
}

import { prismaClient } from './src/infrastructure/database/prisma-client';

async function testConnection() {
  try {
    console.log('Testing database connection...');
    const userCount = await prismaClient.user.count();
    console.log('Connection successful! User count:', userCount);
  } catch (error) {
    console.error('Database connection error:', error);
  } finally {
    await prismaClient.$disconnect();
  }
}

testConnection();

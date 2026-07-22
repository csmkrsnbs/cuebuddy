import 'dotenv/config';
import { PrismaClient } from './generated/prisma/client.js';
import { PrismaNeon } from '@prisma/adapter-neon';

export const isDatabaseConfigured = Boolean(process.env.DATABASE_URL);

let prismaInstance: PrismaClient | null = null;

export function getPrisma(): PrismaClient | null {
  if (!isDatabaseConfigured) {
    return null;
  }

  if (prismaInstance) {
    return prismaInstance;
  }

  const adapter = new PrismaNeon({
    connectionString: process.env.DATABASE_URL!,
  });

  prismaInstance = new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['error', 'warn'] : ['error'],
  });

  return prismaInstance;
}

export async function disconnectPrisma(): Promise<void> {
  if (prismaInstance) {
    await prismaInstance.$disconnect();
    prismaInstance = null;
  }
}

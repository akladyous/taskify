import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

export const db =
  globalThis.prisma ||
  new PrismaClient({
    log: [
      { level: 'warn', emit: 'event' },
      { level: 'info', emit: 'event' },
      { level: 'error', emit: 'event' },
      { level: 'query', emit: 'event' },
    ],
  });

// if (process.env.NODE_ENV !== 'production') {
//   globalThis.prisma = db;
// }

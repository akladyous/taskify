import { db } from '@/lib/db/db';
import { User } from '@prisma/client';

/**
 *
 * @param email: string
 * @param createdAt: number
 * Finds the first record with the given attributes, or creates a record with the attributes if one is not found:
 */

export async function findOrCreateBy(email: string, createdAt: number): Promise<User | null> {
  const user = await db.user.findFirst({ where: { email: email } });

  if (!user) {
    const User = await db.user.create({
      data: {
        email: email as string,
        createdAt: new Date(createdAt),
      },
    });
  }

  return user;
}

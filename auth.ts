import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from '@/app/lib/definitions';
import bcrypt from 'bcrypt';
import { revalidatePath } from 'next/cache';
 
async function getUser(email: string): Promise<User | undefined> {
  console.log('entro aca: getUser: Auth.ts', email);
  try {
    const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
    console.log('user encontrado en Auth.ts: ', user);
    return user.rows[0];
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}
 
export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ 
            email: z.string().email(),
            password: z.string().min(6)
          })
          .safeParse(credentials);
 
        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          console.log('entro aca: ParsedCredentials.success, Auth.ts', email)

          const user = await getUser(email);
          if (!user) {
            console.log('entro aca: parseCredentials.success user, Auth.ts: ', user);
            return null;
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);
 
          if (passwordsMatch) return user;
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],
}

);
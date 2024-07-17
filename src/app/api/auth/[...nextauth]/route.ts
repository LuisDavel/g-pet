import { api } from '@/lib/fetcher/fetch';
import NextAuth, { NextAuthOptions } from 'next-auth';

import CredentialsProvider from 'next-auth/providers/credentials';

async function login(credentials: any) {
  const user = await api.post<{ token: string }>('áp', { body: credentials });
  return user;
}

export const config: NextAuthOptions = {
  pages: { signIn: '/login' },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          return login(credentials);
        } catch (e) {
          return {};
        }
      }
    })
  ],
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.user = token.user;
      return session;
    }
  }
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);

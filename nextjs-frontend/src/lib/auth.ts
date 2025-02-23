import { API_ENDPOINTS } from "@/app/constants/apiEndpoints";
import NextAuth, { User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials): Promise<User | null> => {
        const response = await fetch(API_ENDPOINTS.LOGIN, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            identifier: credentials.email,
            password: credentials.password,
          }),
        });

        if (!response.ok) {
          return null;
        }

        const data = await response.json();

        const user = data.user;

        if (!user) {
          return null;
        }

        return {
          id: user.id.toString(),
          name: user.username,
          email: user.email,
          jwt: data.jwt,
        } as User;
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.jwt = user.jwt;
        token.id = user.id;
      }
      return token;
    },
    session: async ({ session, token }) => {
      session.jwt = token.jwt as string;
      session.user.id = token.id as string;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});

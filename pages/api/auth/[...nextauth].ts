import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { client } from "@/src/prisma/client";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(client),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || "",
      clientSecret: process.env.GOOGLE_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session }) {
      const { user } = session || {};
      const dbUser =
        user?.email != null
          ? await client.user.findUnique({
              where: {
                email: user.email,
              },
            })
          : null;

      return {
        ...session,
        user: {
          ...user,
          roles: dbUser?.roles || [],
        },
      };
    },
  },
};

export default NextAuth(authOptions);

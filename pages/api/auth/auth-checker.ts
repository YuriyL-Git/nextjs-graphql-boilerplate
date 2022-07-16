import { AuthChecker } from "type-graphql";
import { User } from "@generated/type-graphql";
import { Claims, getSession } from "@auth0/nextjs-auth0";
import { prisma } from "@/src/prisma/prisma";
import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { getToken } from "next-auth/jwt";
import { authOptions } from "./[...nextauth]";
import { unstable_getServerSession } from "next-auth";

export interface Context {
  user?: {
    name: string;
    roles: string[];
  };
  accessToken?: string;
  prisma: PrismaClient;
}

export interface ContextProps {
  req: NextApiRequest;
  res: NextApiResponse;
}

export async function createContext({
  req,
  res,
}: ContextProps): Promise<Context> {
  const session = await unstable_getServerSession(req, res, authOptions);
  console.log("SESSION =", session);

  // if the user is not logged in, omit returning the user and accessToken
  if (!session) return { prisma };

  /*  const { user, accessToken } = session;

  return {
    user,
    accessToken,
    prisma,
  };*/
  return {
    prisma,
    user: {
      name: "My",
      roles: ["ADMIN"],
    },
  };
}

export const authChecker: AuthChecker<Context> = ({ context }, roles) => {
  const { user } = context;
  console.log("USER = ", user);

  if (roles.length === 0) {
    // if `@Authorized()`, check only if user exists
    return user != null;
  }

  if (!user) {
    // and if no user, restrict access
    return false;
  }
  if (user?.roles.some((role: string) => roles.includes(role))) {
    console.log("RESOLVE TRUE!");
    // grant access if the roles overlap
    return true;
  }

  // no roles matched, restrict access
  return false;
};

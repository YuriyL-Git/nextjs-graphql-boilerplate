import { AuthChecker } from "type-graphql";
import { client } from "@/src/prisma/client";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "./[...nextauth]";
import { unstable_getServerSession } from "next-auth";
import { ContextProps, Nullable } from "@/src/consts/types/types";

export interface ContextUser {
  name?: Nullable<string>;
  email?: Nullable<string>;
  image?: Nullable<string>;
  roles: string[];
}

export interface Context {
  user?: ContextUser;
  prisma: PrismaClient;
}

export async function createContext({
  req,
  res,
}: ContextProps): Promise<Context> {
  const session = await unstable_getServerSession(req, res, authOptions);
  const { user } = session || {};

  // if the user is not logged in, omit returning the user and accessToken
  if (!session || !user) return { prisma: client };
  return {
    prisma: client,
    user: user as ContextUser,
  };
}

export const authChecker: AuthChecker<Context> = ({ context }, roles) => {
  const { user } = context;

  if (roles.length === 0) {
    return user != null;
  }

  if (!user) {
    return false;
  }

  if (user?.roles.some((role: string) => roles.includes(role))) {
    return true;
  }

  return false;
};

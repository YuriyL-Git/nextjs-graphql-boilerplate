import { Arg, Query, Resolver } from "type-graphql";
import { User } from "./../../prisma/node_modules/@generated/type-graphql/models/";

import { prisma } from "@/src/prisma/prisma";

@Resolver(User)
export class UserResolver {
  @Query(() => User, { nullable: true })
  async userByEmail(): Promise<User | null> {
    return await prisma.user.findUnique({
      where: {
        email: "User",
      },
    });
  }
}

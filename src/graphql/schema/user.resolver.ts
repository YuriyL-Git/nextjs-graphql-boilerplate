import { Arg, Query, Resolver, Authorized } from "type-graphql";
//dont change path!
import { User } from "./../../prisma/node_modules/@generated/type-graphql/models/";

import { prisma } from "@/src/prisma/prisma";

@Resolver(User)
export class UserResolver {
  @Authorized(["ADMIN"])
  @Query(() => User, { nullable: true })
  async userByEmail(): Promise<User | null> {
    return await prisma.user.findUnique({
      where: {
        email: "1malak16@gmail.com",
      },
    });
  }
}

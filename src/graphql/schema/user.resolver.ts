import { Query, Resolver, Authorized } from "type-graphql";
import { client } from "@/src/prisma/client";
import { User } from "@generated/type-graphql";

@Resolver(User)
export class UserResolver {
  @Authorized(["ADMIN"])
  @Query(() => User, { nullable: true })
  async userByEmail(): Promise<User | null> {
    return await client.user.findUnique({
      where: {
        email: "1malak16@gmail.com",
      },
    });
  }
}

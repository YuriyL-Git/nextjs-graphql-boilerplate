import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpdateOneVerificationTokenArgs } from "./args/UpdateOneVerificationTokenArgs";
import { VerificationToken } from "../../../models/VerificationToken";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationToken)
export class UpdateOneVerificationTokenResolver {
  @TypeGraphQL.Mutation(_returns => VerificationToken, {
    nullable: true
  })
  async updateOneVerificationToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneVerificationTokenArgs): Promise<VerificationToken | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).verificationToken.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { UpsertOneVerificationTokenArgs } from "./args/UpsertOneVerificationTokenArgs";
import { VerificationToken } from "../../../models/VerificationToken";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationToken)
export class UpsertOneVerificationTokenResolver {
  @TypeGraphQL.Mutation(_returns => VerificationToken, {
    nullable: false
  })
  async upsertOneVerificationToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneVerificationTokenArgs): Promise<VerificationToken> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).verificationToken.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

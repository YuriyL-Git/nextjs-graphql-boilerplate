import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { DeleteOneVerificationTokenArgs } from "./args/DeleteOneVerificationTokenArgs";
import { VerificationToken } from "../../../models/VerificationToken";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => VerificationToken)
export class DeleteOneVerificationTokenResolver {
  @TypeGraphQL.Mutation(_returns => VerificationToken, {
    nullable: true
  })
  async deleteOneVerificationToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneVerificationTokenArgs): Promise<VerificationToken | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).verificationToken.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}

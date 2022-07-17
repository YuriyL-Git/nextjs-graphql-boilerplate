import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateVerificationTokenArgs } from "./args/AggregateVerificationTokenArgs";
import { CreateManyVerificationTokenArgs } from "./args/CreateManyVerificationTokenArgs";
import { CreateOneVerificationTokenArgs } from "./args/CreateOneVerificationTokenArgs";
import { DeleteManyVerificationTokenArgs } from "./args/DeleteManyVerificationTokenArgs";
import { DeleteOneVerificationTokenArgs } from "./args/DeleteOneVerificationTokenArgs";
import { FindFirstVerificationTokenArgs } from "./args/FindFirstVerificationTokenArgs";
import { FindManyVerificationTokenArgs } from "./args/FindManyVerificationTokenArgs";
import { FindUniqueVerificationTokenArgs } from "./args/FindUniqueVerificationTokenArgs";
import { GroupByVerificationTokenArgs } from "./args/GroupByVerificationTokenArgs";
import { UpdateManyVerificationTokenArgs } from "./args/UpdateManyVerificationTokenArgs";
import { UpdateOneVerificationTokenArgs } from "./args/UpdateOneVerificationTokenArgs";
import { UpsertOneVerificationTokenArgs } from "./args/UpsertOneVerificationTokenArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { VerificationToken } from "../../../models/VerificationToken";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateVerificationToken } from "../../outputs/AggregateVerificationToken";
import { VerificationTokenGroupBy } from "../../outputs/VerificationTokenGroupBy";

@TypeGraphQL.Resolver(_of => VerificationToken)
export class VerificationTokenCrudResolver {
  @TypeGraphQL.Query(_returns => AggregateVerificationToken, {
    nullable: false
  })
  async aggregateVerificationToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateVerificationTokenArgs): Promise<AggregateVerificationToken> {
    return getPrismaFromContext(ctx).verificationToken.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyVerificationToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyVerificationTokenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).verificationToken.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => VerificationToken, {
    nullable: false
  })
  async createOneVerificationToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneVerificationTokenArgs): Promise<VerificationToken> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).verificationToken.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyVerificationToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyVerificationTokenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).verificationToken.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

  @TypeGraphQL.Query(_returns => VerificationToken, {
    nullable: true
  })
  async findFirstVerificationToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstVerificationTokenArgs): Promise<VerificationToken | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).verificationToken.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VerificationToken], {
    nullable: false
  })
  async verificationTokens(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyVerificationTokenArgs): Promise<VerificationToken[]> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).verificationToken.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => VerificationToken, {
    nullable: true
  })
  async verificationToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueVerificationTokenArgs): Promise<VerificationToken | null> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).verificationToken.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [VerificationTokenGroupBy], {
    nullable: false
  })
  async groupByVerificationToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByVerificationTokenArgs): Promise<VerificationTokenGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).verificationToken.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyVerificationToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyVerificationTokenArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformFields(
      graphqlFields(info as any)
    );
    return getPrismaFromContext(ctx).verificationToken.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

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

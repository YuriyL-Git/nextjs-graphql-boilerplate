import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Roles } from "../../enums/Roles";

@TypeGraphQL.InputType("EnumRolesNullableListFilter", {
  isAbstract: true
})
export class EnumRolesNullableListFilter {
  @TypeGraphQL.Field(_type => [Roles], {
    nullable: true
  })
  equals?: Array<"USER" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => Roles, {
    nullable: true
  })
  has?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => [Roles], {
    nullable: true
  })
  hasEvery?: Array<"USER" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => [Roles], {
    nullable: true
  })
  hasSome?: Array<"USER" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  isEmpty?: boolean | undefined;
}

import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Roles } from "../../enums/Roles";

@TypeGraphQL.InputType("UserUpdaterolesInput", {
  isAbstract: true
})
export class UserUpdaterolesInput {
  @TypeGraphQL.Field(_type => [Roles], {
    nullable: true
  })
  set?: Array<"USER" | "ADMIN"> | undefined;

  @TypeGraphQL.Field(_type => [Roles], {
    nullable: true
  })
  push?: Array<"USER" | "ADMIN"> | undefined;
}

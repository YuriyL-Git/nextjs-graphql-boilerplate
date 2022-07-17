import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Roles } from "../../enums/Roles";

@TypeGraphQL.InputType("UserCreaterolesInput", {
  isAbstract: true
})
export class UserCreaterolesInput {
  @TypeGraphQL.Field(_type => [Roles], {
    nullable: false
  })
  set!: Array<"USER" | "ADMIN">;
}

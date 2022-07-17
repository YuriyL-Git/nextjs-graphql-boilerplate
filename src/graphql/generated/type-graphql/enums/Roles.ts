import * as TypeGraphQL from "type-graphql";

export enum Roles {
  USER = "USER",
  ADMIN = "ADMIN"
}
TypeGraphQL.registerEnumType(Roles, {
  name: "Roles",
  description: undefined,
});

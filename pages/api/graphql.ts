import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { DogsResolver } from "@/src/graphql/schema/dogs.resolver";
import { UserResolver } from "@/src/graphql/schema/user.resolver";
import { HOST_NAME } from "@/src/config/config";
import { runMiddleware } from "@/src/utils/run-middleware";
import { authChecker, createContext } from "./auth/auth-checker";
import path from "path";
import Cors from "cors";

//don't change full paths here!
import {
  crudResolvers,
  relationResolvers,
} from "./../../src/graphql/generated/type-graphql/index";

const SCHEMA_PATH = "./../../../../src/graphql/generated/schema.graphql";

const cors = Cors({
  methods: ["GET", "HEAD", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  credentials: true,
  origin: ["https://studio.apollographql.com", HOST_NAME as string],
});

const schema = await buildSchema({
  resolvers: [
    DogsResolver,
    UserResolver,
    ...crudResolvers,
    ...relationResolvers,
  ],
  emitSchemaFile: {
    path: path.join(__dirname, SCHEMA_PATH),
    commentDescriptions: false,
    sortedSchema: false,
  },
  authChecker,
});

const server = new ApolloServer({
  schema,
  context: createContext,
});
const startServer = server.start();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await server.createHandler({ path: "/api/graphql" })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};

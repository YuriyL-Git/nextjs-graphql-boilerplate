import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { DogsResolver } from "@/src/graphql/schema/dogs.resolver";
import path from "path";
import Cors from "cors";
import { HOST_NAME } from "@/src/config/config";
import { runMiddleware } from "@/src/utils/run-middleware";

const SCHEMA_PATH = "./../../../../src/graphql/generated/schema.graphql";

const cors = Cors({
  methods: ["GET", "HEAD", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  credentials: true,
  origin: ["https://studio.apollographql.com", HOST_NAME as string],
});

const schema = await buildSchema({
  resolvers: [DogsResolver],
  emitSchemaFile: {
    path: path.join(__dirname, SCHEMA_PATH),
    commentDescriptions: false,
    sortedSchema: false,
  },
});

const server = new ApolloServer({
  schema,
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

import { ApolloServer } from "apollo-server-micro";
import { NextApiRequest, NextApiResponse } from "next";
import "reflect-metadata";
import { buildSchema } from "type-graphql";
import { DogsResolver } from "../../src/schema/dogs.resolver";
import path from "path";

const schema = await buildSchema({
  resolvers: [DogsResolver],
  emitSchemaFile: {
    path: path.join(__dirname, "./../../../../src/generated/schema.graphql"),
    commentDescriptions: false,
    sortedSchema: false,
  },
});

const server = new ApolloServer({
  schema,
});

const startServer = server.start();

function setHeaders(res: NextApiResponse): void {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://studio.apollographql.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Methods, Access-Control-Allow-Origin, Access-Control-Allow-Credentials, Access-Control-Allow-Headers"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, PATCH, DELETE, OPTIONS, HEAD"
  );
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  setHeaders(res);
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

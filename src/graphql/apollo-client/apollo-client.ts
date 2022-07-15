import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HOST_NAME } from "@/src/config/config";

const client = new ApolloClient({
  uri: `${HOST_NAME}/api/graphql`,
  cache: new InMemoryCache(),
});

export default client;

import { GraphQLClient } from "graphql-request";
import { QueryClient } from "react-query";
import { getSdk } from "./generated/query-types";
import { HOST_NAME } from "../config/config";

const gglClient = new GraphQLClient(`${HOST_NAME}/api/graphql`, {});

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

//generated exports!
const { getDogs, getUser, getDogByName, getDogByBreed } = getSdk(gglClient);

export { getDogs, getUser, getDogByName, getDogByBreed };

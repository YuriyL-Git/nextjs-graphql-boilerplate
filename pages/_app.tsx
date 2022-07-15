import type { AppProps } from "next/app";
import { queryClient } from "@/src/graphql/api";
import { Hydrate, QueryClientProvider } from "react-query";
import client from "@/src/graphql/apollo-client/apollo-client";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;

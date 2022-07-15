import type { AppProps } from "next/app";
import { queryClient } from "@/src/graphql/api";
import { Hydrate, QueryClientProvider } from "react-query";
import apolloClient from "@/src/graphql/apollo-client/apollo-client";
import { ApolloProvider } from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;

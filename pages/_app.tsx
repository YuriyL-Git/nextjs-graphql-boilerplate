import type { AppProps } from "next/app";
import { queryClient } from "@/src/graphql/clients/request-clients";
import { Hydrate, QueryClientProvider } from "react-query";
import apolloClient from "@/src/graphql/clients/apollo-client";
import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Hydrate>
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default MyApp;

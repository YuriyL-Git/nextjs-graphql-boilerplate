import type { AppProps } from "next/app";
import { queryClient } from "@/src/graphql/api";
import { Hydrate, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />;
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;

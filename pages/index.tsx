import type { NextPage } from "next";
import { dehydrate, useQuery } from "react-query";
import { queryClient, getDogs } from "../src/api";
import Head from "next/head";

export async function getServerSideProps() {
  await queryClient.prefetchQuery("dogs", () => getDogs());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const Home: NextPage = () => {
  const { data } = useQuery(["dogs"], () => getDogs());

  return <div>{JSON.stringify(data?.dogs)}</div>;
};

export default Home;

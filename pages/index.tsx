import type { NextPage } from "next";
import { dehydrate, useQuery } from "react-query";
import { queryClient, getDogs } from "../src/graphql/api";
import Head from "next/head";
import client from "@/src/graphql/apollo-client/apollo-client";
import { gql } from "@apollo/client";
import {
  GetDogsQuery,
  useGetDogByNameQuery,
  useGetDogsQuery,
} from "@/src/graphql/generated/query-hooks";

/*export async function getServerSideProps() {
  await queryClient.prefetchQuery("dogs", () => getDogs());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}*/

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query GetDogs {
        dogs {
          sex
          name
        }
      }
    `,
  });

  return {
    props: {
      dogs: data.dogs,
    },
  };
}

const Home: NextPage = ({ dogs }: any) => {
  // const { data } = useQuery(["dogs"], () => getDogs());
  const { loading, error, data } = useGetDogsQuery();
  if (loading) return <p>Loading...</p>;
  console.log("DATA =", data);
  //{JSON.stringify(dogs)}
  return <div>{JSON.stringify(data)}</div>;
};

export default Home;

import type { NextPage } from "next";
import {
  useGetDogByBreedQuery,
  useGetDogsQuery,
} from "@/src/graphql/generated/query-hooks";

const Home: NextPage = ({ dogs }: any) => {
  const { loading, error, data } = useGetDogByBreedQuery({
    variables: {
      breed: "American Pit Bull",
    },
  });
  if (loading) return <p>Loading...</p>;
  return <div>{JSON.stringify(data)}</div>;
};

export default Home;

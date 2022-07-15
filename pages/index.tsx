import type { NextPage } from "next";
//import { useGetDogsQuery } from "@/src/graphql/generated/query-hooks";

const Home: NextPage = ({ dogs }: any) => {
  // const { loading, error, data } = useGetDogsQuery();
  //if (loading) return <p>Loading...</p>;
  //return <div>{JSON.stringify(data)}</div>;
  return <div>test</div>;
};

export default Home;

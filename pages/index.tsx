import type { NextPage } from "next";
import {
  useGetDogByBreedQuery,
  useGetDogsQuery,
  useGetUserByEmailQuery,
} from "@/src/graphql/generated/query-hooks";
import { signIn } from "next-auth/react";

const Home: NextPage = ({ dogs }: any) => {
  /*  const { loading, error, data } = useGetDogByBreedQuery({
    variables: {
      breed: "American Pit Bull",
    },
  });*/
  const { loading, error, data } = useGetUserByEmailQuery();
  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <p>User={JSON.stringify(data)}</p>{" "}
      <a
        href={`/api/auth/signin`}
        onClick={(e) => {
          e.preventDefault();
          signIn();
        }}
      >
        Sign in
      </a>
    </div>
  );
};

export default Home;

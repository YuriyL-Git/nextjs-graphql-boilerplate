import React from "react";
import { dehydrate, useQuery } from "react-query";

import { queryClient, getDogByName } from "@/src/graphql/api";

interface IProps {
  params: {
    name: string;
  };
}

export async function getServerSideProps({ params }: IProps) {
  await queryClient.prefetchQuery(["dog"], () =>
    getDogByName({ name: params.name })
  );

  return {
    props: {
      name: params.name,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

const DogDetail: React.FunctionComponent<{
  name: string;
}> = ({ name }) => {
  const { data } = useQuery(["dog"], () => getDogByName({ name }));

  if (!data?.dog) {
    return <div>No dog found</div>;
  }

  return <div>{JSON.stringify(data?.dog)}</div>;
};

export default DogDetail;

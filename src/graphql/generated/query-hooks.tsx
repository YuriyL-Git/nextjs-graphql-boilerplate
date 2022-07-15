import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Dog = {
  __typename?: 'Dog';
  ageInWeeks: Scalars['Int'];
  attributes: Array<DogAttribute>;
  availableDate: Scalars['String'];
  breed: Scalars['String'];
  color: Scalars['String'];
  description: Array<Scalars['String']>;
  fee: Scalars['Float'];
  image: Scalars['String'];
  name: Scalars['ID'];
  sex: Scalars['String'];
  weight: Scalars['Float'];
};

export type DogAttribute = {
  __typename?: 'DogAttribute';
  key: Scalars['ID'];
  value: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  dog?: Maybe<Dog>;
  dogs: Array<Dog>;
  dogsByBreed: Array<Dog>;
};


export type QueryDogArgs = {
  name: Scalars['String'];
};


export type QueryDogsByBreedArgs = {
  breed: Scalars['String'];
};

export type GetDogsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetDogsQuery = { __typename?: 'Query', dogs: Array<{ __typename?: 'Dog', name: string, breed: string, ageInWeeks: number, image: string, sex: string }> };

export type GetDogByNameQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetDogByNameQuery = { __typename?: 'Query', dog?: { __typename?: 'Dog', name: string, breed: string, ageInWeeks: number, attributes: Array<{ __typename?: 'DogAttribute', key: string, value: string }> } | null };

export type GetDogByBreedQueryVariables = Exact<{
  breed: Scalars['String'];
}>;


export type GetDogByBreedQuery = { __typename?: 'Query', dogsByBreed: Array<{ __typename?: 'Dog', name: string, sex: string, breed: string, weight: number }> };


export const GetDogsDocument = gql`
    query getDogs {
  dogs {
    name
    breed
    ageInWeeks
    image
    sex
  }
}
    `;

/**
 * __useGetDogsQuery__
 *
 * To run a query within a React component, call `useGetDogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDogsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDogsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDogsQuery(baseOptions?: Apollo.QueryHookOptions<GetDogsQuery, GetDogsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDogsQuery, GetDogsQueryVariables>(GetDogsDocument, options);
      }
export function useGetDogsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDogsQuery, GetDogsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDogsQuery, GetDogsQueryVariables>(GetDogsDocument, options);
        }
export type GetDogsQueryHookResult = ReturnType<typeof useGetDogsQuery>;
export type GetDogsLazyQueryHookResult = ReturnType<typeof useGetDogsLazyQuery>;
export type GetDogsQueryResult = Apollo.QueryResult<GetDogsQuery, GetDogsQueryVariables>;
export const GetDogByNameDocument = gql`
    query getDogByName($name: String!) {
  dog(name: $name) {
    name
    breed
    ageInWeeks
    breed
    attributes {
      key
      value
    }
  }
}
    `;

/**
 * __useGetDogByNameQuery__
 *
 * To run a query within a React component, call `useGetDogByNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDogByNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDogByNameQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetDogByNameQuery(baseOptions: Apollo.QueryHookOptions<GetDogByNameQuery, GetDogByNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDogByNameQuery, GetDogByNameQueryVariables>(GetDogByNameDocument, options);
      }
export function useGetDogByNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDogByNameQuery, GetDogByNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDogByNameQuery, GetDogByNameQueryVariables>(GetDogByNameDocument, options);
        }
export type GetDogByNameQueryHookResult = ReturnType<typeof useGetDogByNameQuery>;
export type GetDogByNameLazyQueryHookResult = ReturnType<typeof useGetDogByNameLazyQuery>;
export type GetDogByNameQueryResult = Apollo.QueryResult<GetDogByNameQuery, GetDogByNameQueryVariables>;
export const GetDogByBreedDocument = gql`
    query getDogByBreed($breed: String!) {
  dogsByBreed(breed: $breed) {
    name
    sex
    breed
    weight
  }
}
    `;

/**
 * __useGetDogByBreedQuery__
 *
 * To run a query within a React component, call `useGetDogByBreedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDogByBreedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDogByBreedQuery({
 *   variables: {
 *      breed: // value for 'breed'
 *   },
 * });
 */
export function useGetDogByBreedQuery(baseOptions: Apollo.QueryHookOptions<GetDogByBreedQuery, GetDogByBreedQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDogByBreedQuery, GetDogByBreedQueryVariables>(GetDogByBreedDocument, options);
      }
export function useGetDogByBreedLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDogByBreedQuery, GetDogByBreedQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDogByBreedQuery, GetDogByBreedQueryVariables>(GetDogByBreedDocument, options);
        }
export type GetDogByBreedQueryHookResult = ReturnType<typeof useGetDogByBreedQuery>;
export type GetDogByBreedLazyQueryHookResult = ReturnType<typeof useGetDogByBreedLazyQuery>;
export type GetDogByBreedQueryResult = Apollo.QueryResult<GetDogByBreedQuery, GetDogByBreedQueryVariables>;
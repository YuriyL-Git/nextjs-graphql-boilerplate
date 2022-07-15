import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getDogs(variables?: GetDogsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDogsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDogsQuery>(GetDogsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDogs', 'query');
    },
    getDogByName(variables: GetDogByNameQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDogByNameQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDogByNameQuery>(GetDogByNameDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDogByName', 'query');
    },
    getDogByBreed(variables: GetDogByBreedQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetDogByBreedQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetDogByBreedQuery>(GetDogByBreedDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'getDogByBreed', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;
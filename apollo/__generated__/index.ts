import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type Query = {
  __typename?: 'Query';
  signIn: User;
  getCurrentUser?: Maybe<User>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QuerySignInArgs = {
  user: SignInInput;
};


export type QueryUserArgs = {
  userId: Scalars['String'];
};

/** General database */
export type User = {
  __typename?: 'User';
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  username: Scalars['String'];
  roles: Array<UserRole>;
  groups: Array<Group>;
};


export enum UserRole {
  Student = 'STUDENT',
  Teacher = 'TEACHER',
  Admin = 'ADMIN'
}

export type Group = {
  __typename?: 'Group';
  _id: Scalars['String'];
  createdAt: Scalars['DateTime'];
  updatedAt: Scalars['DateTime'];
  deletedAt: Scalars['DateTime'];
  name: Scalars['String'];
  users: Array<User>;
};

export type SignInInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  signUp: User;
};


export type MutationSignUpArgs = {
  user: SignUpInput;
};

export type SignUpInput = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export type GetUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type GetUserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export type GetSignedInUserQueryVariables = Exact<{
  password: Scalars['String'];
  username: Scalars['String'];
}>;


export type GetSignedInUserQuery = (
  { __typename?: 'Query' }
  & { signIn: (
    { __typename?: 'User' }
    & UserFieldsFragment
  ) }
);

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = (
  { __typename?: 'Query' }
  & { getCurrentUser?: Maybe<(
    { __typename?: 'User' }
    & UserFieldsFragment
  )> }
);

export type UserFieldsFragment = (
  { __typename?: 'User' }
  & Pick<User, '_id' | 'firstName' | 'lastName'>
);

export const UserFieldsFragmentDoc = gql`
    fragment UserFields on User {
  _id
  firstName
  lastName
}
    `;
export const GetUsersDocument = gql`
    query getUsers {
  users {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, baseOptions);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserDocument = gql`
    query getUser($userId: String!) {
  user(userId: $userId) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions?: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, baseOptions);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const GetSignedInUserDocument = gql`
    query getSignedInUser($password: String!, $username: String!) {
  signIn(user: {password: $password, username: $username}) {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useGetSignedInUserQuery__
 *
 * To run a query within a React component, call `useGetSignedInUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSignedInUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSignedInUserQuery({
 *   variables: {
 *      password: // value for 'password'
 *      username: // value for 'username'
 *   },
 * });
 */
export function useGetSignedInUserQuery(baseOptions?: Apollo.QueryHookOptions<GetSignedInUserQuery, GetSignedInUserQueryVariables>) {
        return Apollo.useQuery<GetSignedInUserQuery, GetSignedInUserQueryVariables>(GetSignedInUserDocument, baseOptions);
      }
export function useGetSignedInUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSignedInUserQuery, GetSignedInUserQueryVariables>) {
          return Apollo.useLazyQuery<GetSignedInUserQuery, GetSignedInUserQueryVariables>(GetSignedInUserDocument, baseOptions);
        }
export type GetSignedInUserQueryHookResult = ReturnType<typeof useGetSignedInUserQuery>;
export type GetSignedInUserLazyQueryHookResult = ReturnType<typeof useGetSignedInUserLazyQuery>;
export type GetSignedInUserQueryResult = Apollo.QueryResult<GetSignedInUserQuery, GetSignedInUserQueryVariables>;
export const GetCurrentUserDocument = gql`
    query getCurrentUser {
  getCurrentUser {
    ...UserFields
  }
}
    ${UserFieldsFragmentDoc}`;

/**
 * __useGetCurrentUserQuery__
 *
 * To run a query within a React component, call `useGetCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
        return Apollo.useQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, baseOptions);
      }
export function useGetCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCurrentUserQuery, GetCurrentUserQueryVariables>) {
          return Apollo.useLazyQuery<GetCurrentUserQuery, GetCurrentUserQueryVariables>(GetCurrentUserDocument, baseOptions);
        }
export type GetCurrentUserQueryHookResult = ReturnType<typeof useGetCurrentUserQuery>;
export type GetCurrentUserLazyQueryHookResult = ReturnType<typeof useGetCurrentUserLazyQuery>;
export type GetCurrentUserQueryResult = Apollo.QueryResult<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
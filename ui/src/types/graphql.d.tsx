import gql from 'graphql-tag'
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Mutation = {
  __typename?: 'Mutation'
  register: User
  login?: Maybe<User>
  confirmUser: Scalars['Boolean']
}

export type MutationRegisterArgs = {
  data: RegisterInput
}

export type MutationLoginArgs = {
  password: Scalars['String']
  email: Scalars['String']
}

export type MutationConfirmUserArgs = {
  token: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  hello: Scalars['String']
  user?: Maybe<User>
}

export type RegisterInput = {
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
  fullName: Scalars['String']
}
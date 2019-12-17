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

export type ChangePasswordInput = {
  token: Scalars['String']
  password: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  confirmUser: User
  sendResetPasswordEmail: Scalars['Boolean']
  changePassword: User
  login: User
  register: User
  resendConfirmationEmail: Scalars['Boolean']
}

export type MutationConfirmUserArgs = {
  token: Scalars['String']
}

export type MutationSendResetPasswordEmailArgs = {
  email: Scalars['String']
}

export type MutationChangePasswordArgs = {
  data: ChangePasswordInput
}

export type MutationLoginArgs = {
  password: Scalars['String']
  email: Scalars['String']
}

export type MutationRegisterArgs = {
  data: RegisterInput
}

export type MutationResendConfirmationEmailArgs = {
  data: ResendEmailInput
}

export type Query = {
  __typename?: 'Query'
  user?: Maybe<User>
}

export type RegisterInput = {
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
  password: Scalars['String']
}

export type ResendEmailInput = {
  id: Scalars['ID']
  email: Scalars['String']
}

export type User = {
  __typename?: 'User'
  id: Scalars['ID']
  firstName: Scalars['String']
  lastName: Scalars['String']
  email: Scalars['String']
  confirmed: Scalars['Boolean']
  fullName: Scalars['String']
}

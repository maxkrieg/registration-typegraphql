import { gql } from 'apollo-boost'

export const GET_USER_INFO = gql`
  query GetUserInfo {
    user {
      id
      firstName
      lastName
      fullName
      email
      confirmed
    }
  }
`

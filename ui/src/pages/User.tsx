import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { User as UserEntity } from '../types/graphql.d'

const userQuery = gql`
  query getUser {
    user {
      id
      firstName
      lastName
      fullName
    }
  }
`

const User: React.FC<RouteComponentProps> = props => {
  const { loading, data, error } = useQuery<UserEntity>(userQuery)
  if (error) {
    console.dir(error.graphQLErrors)
  }
  if (loading) {
    console.log(loading)
  }
  if (data) {
    console.log(data)
  }
  return <div>User home page</div>
}

export default User

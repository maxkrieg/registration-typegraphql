import React from 'react'
import './css/User.css'
import { RouteComponentProps } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { User as UserEntity } from '../types/graphql.d'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import ListGroup from 'react-bootstrap/ListGroup'

const userQuery = gql`
  query getUser {
    user {
      id
      firstName
      lastName
      fullName
      email
    }
  }
`

const User: React.FC<RouteComponentProps> = props => {
  const { loading, data, error } = useQuery<{ user: UserEntity }>(userQuery)
  if (error) {
    return <div>Error loading user info</div>
  }
  let content
  if (!data || loading) {
    content = <Spinner animation="border" />
  } else {
    content = (
      <>
        <ListGroup>
          <ListGroup.Item>
            <strong>Name:</strong> {data.user.fullName}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Email:</strong> {data.user.email}
          </ListGroup.Item>
        </ListGroup>
      </>
    )
  }
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <h3 className="user_header">User Account</h3>
          {content}
        </Col>
      </Row>
    </Container>
  )
}

export default User

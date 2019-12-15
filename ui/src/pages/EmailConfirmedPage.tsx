import React, { useState, useEffect } from 'react'
import { RouteComponentProps, useParams, Link } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'

const CONFIRM_USER = gql`
  mutation ConfirmUser($token: String!) {
    confirmUser(token: $token) {
      id
      firstName
      lastName
      email
      confirmed
    }
  }
`

const EmailConfirmedPage: React.FC<RouteComponentProps> = props => {
  const { token } = useParams()
  const [user, setUser] = useState()

  const [sendConfirmation, { loading: confirmUserLoading, error: confirmUserError }] = useMutation(
    CONFIRM_USER,
    {
      onCompleted: response => {
        setUser(response.confirmUser)
      },
    },
  )

  useEffect(() => {
    sendConfirmation({
      variables: { token },
    })
  }, [token, sendConfirmation])

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6" style={{ textAlign: 'center' }}>
          <h3 className="user_header">Email Confirmation</h3>
          {user && (
            <Alert variant="primary">
              Thanks, <strong>{user.firstName}</strong>. Your email address{' '}
              <strong>{user.email}</strong> has been confirmed.{' '}
              <Link to="/user">Go to User home.</Link>
            </Alert>
          )}
          {confirmUserLoading && <Spinner animation="border" />}
          {confirmUserError && (
            <Alert variant="danger" style={{ textAlign: 'center' }}>
              <p>Error confirming your email.</p>
              <Link to="/user">Go to User home to resend email confirmation</Link>
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default EmailConfirmedPage

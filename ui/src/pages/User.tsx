import React, { ReactNode, useState } from 'react'
import './css/User.css'
import { RouteComponentProps } from 'react-router-dom'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import { User as UserEntity } from '../types/graphql.d'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Spinner from 'react-bootstrap/Spinner'
import ListGroup from 'react-bootstrap/ListGroup'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

const userQuery = gql`
  query getUser {
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

const RESEND_CONFIRMATION_EMAIL = gql`
  mutation ResendConfirmationEmail($data: ResendEmailInput!) {
    resendConfirmationEmail(data: $data)
  }
`

interface UserPageWrapperProps {
  children: ReactNode
}

const UserPageWrapper: React.FC<UserPageWrapperProps> = ({ children }) => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <h3 className="user_header">User Account</h3>
          {children}
        </Col>
      </Row>
    </Container>
  )
}

const EMAIL_NOT_SENT = 'not sent'
const EMAIL_SENT = 'sent'
const EMAIL_FAILED = 'failed'

const UserPage: React.FC<RouteComponentProps> = props => {
  const { loading, data, error } = useQuery<{ user: UserEntity }>(userQuery)
  const [emailStatus, setEmailStatus] = useState(EMAIL_NOT_SENT)
  const [resendEmail] = useMutation(RESEND_CONFIRMATION_EMAIL, {
    onCompleted: responseData => {
      if (responseData.resendConfirmationEmail) {
        setEmailStatus(EMAIL_SENT)
      }
    },
  })
  if (error) {
    return (
      <UserPageWrapper>
        <Alert variant="danger" style={{ textAlign: 'center' }}>
          Error loading user info
        </Alert>
      </UserPageWrapper>
    )
  }

  if (!data || loading) {
    return (
      <UserPageWrapper>
        <Spinner animation="border" />
      </UserPageWrapper>
    )
  }

  const resendEmailButtonText = () => {
    let text = 'Resend confirmation email'
    if (emailStatus === EMAIL_SENT) {
      text = 'Email sent'
    } else if (emailStatus === EMAIL_FAILED) {
      text = 'Error sending email'
    }
    return text
  }

  return (
    <UserPageWrapper>
      {!data.user.confirmed && (
        <Alert variant="warning" style={{ textAlign: 'center' }}>
          <span className="user_confirm-email-alert-text">
            You still need to confirm your email.
          </span>
          <Button
            variant="primary"
            disabled={emailStatus === EMAIL_SENT}
            onClick={() => {
              console.log(data.user)
              resendEmail({
                variables: { data: { id: parseInt(data.user.id), email: data.user.email } },
              })
            }}
          >
            {resendEmailButtonText()}
          </Button>
        </Alert>
      )}

      <ListGroup>
        <ListGroup.Item>
          <strong>Name:</strong> {data.user.fullName}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Email:</strong> {data.user.email}
        </ListGroup.Item>
      </ListGroup>
    </UserPageWrapper>
  )
}

export default UserPage

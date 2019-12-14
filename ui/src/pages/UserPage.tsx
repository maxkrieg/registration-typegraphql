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

const GET_USER_INFO = gql`
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

const RESEND_CONFIRMATION_EMAIL = gql`
  mutation ResendConfirmationEmail($data: ResendEmailInput!) {
    resendConfirmationEmail(data: $data)
  }
`

// const EMAIL_NOT_SENT = 'not sent'
// const EMAIL_SENT = 'sent'
// const EMAIL_FAILED = 'failed'

const emailStates = {
  EMAIL_NOT_SENT: 'not sent',
  EMAIL_SENT: 'sent',
  EMAIL_FAILED: 'failed',
}

const UserPage: React.FC<RouteComponentProps> = props => {
  const { loading: userQueryLoading, data: userData, error: userQueryError } = useQuery<{
    user: UserEntity
  }>(GET_USER_INFO)

  const [emailState, setEmailState] = useState(emailStates.EMAIL_NOT_SENT)

  const [resendEmail, { loading: resendEmailLoading }] = useMutation(RESEND_CONFIRMATION_EMAIL, {
    onCompleted: responseData => {
      if (responseData.resendConfirmationEmail) {
        setEmailState(emailStates.EMAIL_SENT)
      } else {
        setEmailState(emailStates.EMAIL_FAILED)
      }
    },
    onError: _ => setEmailState(emailStates.EMAIL_FAILED),
  })

  if (userQueryError) {
    return (
      <UserPageWrapper>
        <Alert variant="danger" style={{ textAlign: 'center' }}>
          Error loading user info
        </Alert>
      </UserPageWrapper>
    )
  }

  if (!userData || userQueryLoading) {
    return (
      <UserPageWrapper>
        <Spinner animation="border" />
      </UserPageWrapper>
    )
  }

  const resendEmailButtonText = () => {
    if (resendEmailLoading) {
      return (
        <>
          <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
          Sending...
        </>
      )
    }

    let text
    switch (emailState) {
      case emailStates.EMAIL_SENT:
        text = 'Email sent'
        break
      case emailStates.EMAIL_FAILED:
        text = 'Error sending email'
        break
      default:
        text = 'Resend confirmation email'
    }
    return text
  }

  return (
    <UserPageWrapper>
      {!userData.user.confirmed && (
        <Alert variant="warning" style={{ textAlign: 'center' }}>
          <span className="user_confirm-email-alert-text">
            You still need to confirm your email.
          </span>
          <Button
            variant={emailState === emailStates.EMAIL_FAILED ? 'danger' : 'primary'}
            disabled={emailState !== emailStates.EMAIL_NOT_SENT}
            onClick={() => {
              resendEmail({
                variables: { data: { id: parseInt(userData.user.id), email: userData.user.email } },
              })
            }}
          >
            {resendEmailButtonText()}
          </Button>
        </Alert>
      )}

      <ListGroup>
        <ListGroup.Item>
          <strong>Name:</strong> {userData.user.fullName}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Email:</strong> {userData.user.email}
        </ListGroup.Item>
      </ListGroup>
    </UserPageWrapper>
  )
}

export default UserPage

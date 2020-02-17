import React, { useState, useEffect, ChangeEvent } from 'react'
import { Container, Row, Col, Form, Button, Spinner, Alert } from 'react-bootstrap'
import { RouteComponentProps, useParams } from 'react-router-dom'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'

import { MutationChangePasswordArgs } from '../../types/graphql.d'
import './index.css'

const CHANGE_PASSWORD = gql`
  mutation ChangePassword($data: ChangePasswordInput!) {
    changePassword(data: $data) {
      id
      firstName
      lastName
      email
      confirmed
    }
  }
`

const ResetPasswordPage: React.FC<RouteComponentProps> = props => {
  const { token } = useParams<{ token: string }>()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [isPasswordMatch, setPasswordMatch] = useState(false)
  const [formSubmissionError, setFormSubmissionError] = useState(false)
  const [validated, setValidated] = useState(false)

  useEffect(() => {
    if (!password || !confirmPassword) return

    if (password === confirmPassword) {
      setPasswordMatch(true)
    } else if (password !== confirmPassword) {
      setPasswordMatch(false)
    }
  }, [password, confirmPassword])

  const [
    submitPasswordChange,
    { loading: changePasswordLoading, error: changePasswordError },
  ] = useMutation(CHANGE_PASSWORD, {
    onCompleted: _ => props.history.push('/user'),
  })

  const createChangeHandler = (stateChangeHandler: React.Dispatch<React.SetStateAction<any>>) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target
      setFormSubmissionError(false)
      stateChangeHandler(value)
    }
  }

  const handleSubmitClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setValidated(true)

    if (!password || !confirmPassword || !isPasswordMatch) {
      setFormSubmissionError(true)
      return
    }

    const variables: MutationChangePasswordArgs = { data: { token, password } }
    submitPasswordChange({ variables })
  }

  return (
    <Container className="reset-password_container">
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <h2>Reset your password</h2>
          <Form noValidate validated={validated}>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>New Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={createChangeHandler(setPassword)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPasswordConfirmation">
              <Form.Label>Confirm New Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Reenter password"
                value={confirmPassword}
                onChange={createChangeHandler(setConfirmPassword)}
                isInvalid={!!confirmPassword && !isPasswordMatch}
              />
              <Form.Text className="register_no-password-match">
                {confirmPassword && !isPasswordMatch && 'Passwords must match'}
              </Form.Text>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={handleSubmitClick}
              disabled={changePasswordLoading}
            >
              Change password{' '}
              {changePasswordLoading && (
                <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
              )}
            </Button>
            {formSubmissionError && (
              <Alert variant="danger" style={{ marginTop: '10px', textAlign: 'center' }}>
                Please fix fields highlighted in red.
              </Alert>
            )}
          </Form>
          {changePasswordError && (
            <Alert variant="danger" style={{ textAlign: 'center' }}>
              Password reset error: {changePasswordError.graphQLErrors[0].message}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  )
}

export default ResetPasswordPage

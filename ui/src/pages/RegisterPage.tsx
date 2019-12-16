import React, { useState, useEffect, ChangeEvent } from 'react'
import './css/RegisterPage.css'
import { RouteComponentProps, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Alert from 'react-bootstrap/Alert'
import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import { isValidEmailAddress } from '../utils/email'

const REGISTER = gql`
  mutation Register($data: RegisterInput!) {
    register(data: $data) {
      id
      firstName
      lastName
      email
      fullName
    }
  }
`

const RegisterPage: React.FC<RouteComponentProps> = props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
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
    submitRegistration,
    { loading: registrationLoading, error: registrationError },
  ] = useMutation(REGISTER, {
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

    if (
      !firstName ||
      !lastName ||
      !email ||
      !isValidEmailAddress(email) ||
      !password ||
      !confirmPassword ||
      !isPasswordMatch
    ) {
      setFormSubmissionError(true)
      return
    }
    submitRegistration({
      variables: {
        data: {
          firstName,
          lastName,
          email,
          password,
        },
      },
    })
  }

  return (
    <Container className="register_container">
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <h2>Register</h2>
          <Form noValidate validated={validated}>
            <Form.Row>
              <Col>
                <Form.Group controlId="formFirstName">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    value={firstName}
                    type="text"
                    placeholder="Enter first name"
                    onChange={createChangeHandler(setFirstName)}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formLastName">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    value={lastName}
                    type="text"
                    placeholder="Enter last name"
                    onChange={createChangeHandler(setLastName)}
                  />
                </Form.Group>
              </Col>
            </Form.Row>

            <div style={{ height: '10px' }} />

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                value={email}
                type="email"
                isValid={isValidEmailAddress(email)}
                placeholder="Enter email"
                onChange={createChangeHandler(setEmail)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={createChangeHandler(setPassword)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicPasswordConfirmation">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Reenter password"
                value={confirmPassword}
                onChange={createChangeHandler(setConfirmPassword)}
                isInvalid={confirmPassword && !isPasswordMatch ? true : false}
              />
              <Form.Text className="register_no-password-match">
                {confirmPassword && !isPasswordMatch && 'Passwords must match'}
              </Form.Text>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={handleSubmitClick}
              disabled={registrationLoading}
            >
              Register{' '}
              {registrationLoading && (
                <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
              )}
            </Button>
            {formSubmissionError && (
              <Alert variant="danger" style={{ marginTop: '10px', textAlign: 'center' }}>
                Please fix fields highlighted in red.
              </Alert>
            )}
          </Form>
          {registrationError && (
            <Alert variant="danger" style={{ textAlign: 'center' }}>
              Registration Error: {registrationError.graphQLErrors[0].message}
            </Alert>
          )}
          <div className="register_login-cta-group">
            <p>Already have an account?</p>
            <Link to="/login">
              Login now
              <i className="fas fa-arrow-circle-right register_login-link-icon" />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default RegisterPage

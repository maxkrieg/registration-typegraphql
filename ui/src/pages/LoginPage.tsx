import React, { useState, ChangeEvent } from 'react'
import './css/LoginPage.css'
import { RouteComponentProps, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useMutation } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import { isValidEmailAddress } from '../utils/email'

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      id
      firstName
      lastName
      fullName
      email
      confirmed
    }
  }
`

const LoginPage: React.FC<RouteComponentProps> = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formSubmissionError, setFormSubmissionError] = useState(false)
  const [validated, setValidated] = useState(false)

  const [submitLogin, { loading: loginLoading, error: loginError }] = useMutation(LOGIN, {
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

    if (!email || !password || !isValidEmailAddress(email)) {
      setFormSubmissionError(true)
      return
    }
    submitLogin({
      variables: {
        email,
        password,
      },
    })
  }

  return (
    <Container className="login_container">
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <h2>Login</h2>
          <Form noValidate validated={validated}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                required
                value={email}
                type="email"
                placeholder="Enter email"
                isValid={isValidEmailAddress(email)}
                onChange={createChangeHandler(setEmail)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="password"
                placeholder="Password"
                value={password}
                onChange={createChangeHandler(setPassword)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleSubmitClick}>
              Login{' '}
              {loginLoading && (
                <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
              )}
            </Button>
            {formSubmissionError && (
              <Alert variant="danger" style={{ marginTop: '10px', textAlign: 'center' }}>
                Please fix fields highlighted in red.
              </Alert>
            )}
          </Form>
          {loginError && (
            <Alert variant="danger" style={{ textAlign: 'center' }}>
              Registration Error: {loginError.graphQLErrors[0].message}
            </Alert>
          )}
          <div className="login_register-cta-group">
            <p>Dont' have an account?</p>
            <Link to="/register">
              Create one now
              <i className="fas fa-arrow-circle-right login_register-link-icon" />
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default LoginPage

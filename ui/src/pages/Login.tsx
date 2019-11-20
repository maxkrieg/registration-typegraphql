import React, { useState } from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Login: React.FC<RouteComponentProps> = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Container>
      <h1>Login Page</h1>
      <Row>
        <Col>
          <h2>Login</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                value={email}
                type="email"
                placeholder="Enter email"
                onChange={(e: any) => setEmail(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={() => alert(email)}>
              Submit
            </Button>
          </Form>
        </Col>
        <Col>
          <h2>Register</h2>All props {JSON.stringify(props, null, 2)}
        </Col>
      </Row>
    </Container>
  )
}

export default Login

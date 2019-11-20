import React, { useState } from 'react'
import './css/Register.css'
import { RouteComponentProps, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Register: React.FC<RouteComponentProps> = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  return (
    <Container className="register_container">
      <Row className="justify-content-md-center">
        <Col xs lg="6">
          <h2>Register</h2>
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
            <Form.Group controlId="formBasicPasswordConfirmation">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={confirmPassword}
                onChange={(e: any) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={() => alert(email)}>
              Register
            </Button>
          </Form>
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

export default Register

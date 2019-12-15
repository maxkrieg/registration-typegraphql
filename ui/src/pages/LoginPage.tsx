import React, { useState } from 'react'
import './css/LoginPage.css'
import { RouteComponentProps, Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const LoginPage: React.FC<RouteComponentProps> = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  return (
    <Container className="login_container">
      <Row className="justify-content-md-center">
        <Col xs lg="6">
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
              Login
            </Button>
          </Form>
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

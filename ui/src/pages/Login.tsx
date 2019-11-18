import React from 'react'
import { RouteComponentProps } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home: React.FC<RouteComponentProps> = props => {
  return (
    <Container>
      Login Page
      <Row>
        <Col>Match {JSON.stringify(props.match, null, 2)}</Col>
        <Col>All props {JSON.stringify(props, null, 2)}</Col>
      </Row>
    </Container>
  )
}

export default Home

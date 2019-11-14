import React from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const App: React.FC = () => {
  const sections = [
    {
      title: 'about',
      description: 'lmgtfy',
    },
    {
      title: 'portfolio',
      description: 'lmgtfy',
    },
    {
      title: 'blog',
      description: 'lmgtfy',
    },
    {
      title: 'skills',
      description: 'lmgtfy',
    },
    {
      title: 'work',
      description: 'lmgtfy',
    },
    {
      title: 'contact',
      description: 'lmgtfy',
    },
  ]
  return (
    <Container fluid style={{ padding: '0' }}>
      <Row>
        <Col>
          <div style={{ height: '200px', backgroundColor: 'lightblue' }}>
            Cool stuff with picture here
          </div>
        </Col>
      </Row>
      <Navbar expand="lg" sticky="top" bg="light" variant="light">
        <Navbar.Brand>MAX KRIEG</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            {sections.map(section => (
              <Nav.Link href={`#${section.title.toLowerCase()}`}>{section.title}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {sections.map(section => (
        <Row id={section.title}>
          <Container fluid>
            <Row>
              <Col>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </Col>
            </Row>
            <Row>
              <Col>Column 1</Col>
              <Col>Column 2</Col>
            </Row>
          </Container>
        </Row>
      ))}
    </Container>
  )
}

export default App

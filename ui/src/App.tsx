import React from 'react'
import './App.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

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
        <Image src="https://via.placeholder.com/1400x300" style={{ width: '100%' }} />
      </Row>
      <Navbar expand="sm" sticky="top" bg="light" variant="light">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href={window.location.href}>MAX KRIEG</Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            {sections.map((section, i) => {
              const navLink = (
                <Nav.Link key={i} href={`#${section.title.toLowerCase()}`}>
                  {section.title}
                </Nav.Link>
              )
              return navLink
            })}
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

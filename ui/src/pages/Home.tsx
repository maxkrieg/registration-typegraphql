import React from 'react'
import './css/Home.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'

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

const Home: React.FC = () => {
  return (
    <Container fluid className="home-container">
      <Row>
        <Image src="https://via.placeholder.com/1400x300" style={{ width: '100%' }} />
      </Row>

      <Navbar expand="sm" sticky="top" bg="light" variant="light">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href={window.location.href}>MAX KRIEG</Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            {sections.map(({ title }) => (
              <Nav.Link key={title} href={`#${title}`}>
                {title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {sections.map(({ title, description }) => (
        <Row id={title} key={title}>
          <Container fluid className="home-section-container">
            <Row>
              <Col>
                <h2>{title}</h2>
                <p>{description}</p>
              </Col>
            </Row>
          </Container>
        </Row>
      ))}
    </Container>
  )
}

export default Home

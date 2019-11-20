import React from 'react'
import './css/Home.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { sections } from '../content/home'

const Home: React.FC = () => {
  return (
    <Container fluid className="home_container">
      <Row>
        <Image src="https://via.placeholder.com/1400x300" style={{ width: '100%' }} />
      </Row>
      {sections.map(({ title, description }) => (
        <Row id={title} key={title}>
          <Container fluid className="home_section-container">
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

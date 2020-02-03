import React from 'react'
import './css/HomePage.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { sections } from './homePage/content'
import banner from './homePage/zion-background.jpg'

const HomePage: React.FC = () => {
  return (
    <Container fluid>
      <Row>
        <Image src={banner} style={{ width: '100%' }} />
      </Row>
      {sections.map(({ title, content }) => (
        <Row id={title} key={title}>
          <Container fluid className="home_section-container">
            <Row>
              <Col>
                <h2>{title}</h2>
                {content}
              </Col>
            </Row>
          </Container>
        </Row>
      ))}
    </Container>
  )
}

export default HomePage

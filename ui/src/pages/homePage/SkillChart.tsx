import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const languages = [
  {
    name: 'JavaScript',
    value: 80,
  },
  {
    name: 'TypeScript',
    value: 60,
  },
  {
    name: 'Python',
    value: 90,
  },
  {
    name: 'SQL',
    value: 65,
  },
]


const SkillBarChart: React.FC = () => {
  return (
    <Container fluid style={{ width: '60%', border: '1px solid black' }}>
      {languages.map(item => (
        <Row style={{ margin: '5px 0' }}>
          <Col xs={2} style={{ textAlign: 'right', height: '50px', lineHeight: '50px' }}>{item.name}</Col>
          <Col style={{ height: '50px' }}>
            <div style={{ height: '100%', backgroundColor: 'blue', width: `${item.value}%` }} />
          </Col>
        </Row>
      ))}
    </Container>
  )
}

export default SkillBarChart

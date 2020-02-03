import React from 'react'
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { Container, Tabs, Tab, Row, Col } from 'react-bootstrap'

const SKILL_SECTIONS = [
  {
    name: 'Languages',
    data: [
      { name: 'JavaScript', value: 90 },
      { name: 'Typescript', value: 75 },
      { name: 'Python', value: 85 },
      { name: 'Ruby', value: 60 },
      { name: 'SQL', value: 75 },
      { name: 'HTML', value: 90 },
      { name: 'CSS', value: 80 },
    ]
  },
  {
    name: 'Front End',
    data: [
      { name: 'React.js', value: 95 },
      { name: 'HTML', value: 90 },
      { name: 'CSS', value: 80 },
      { name: 'Sass', value: 70 },
      { name: 'webpack', value: 85 },
      { name: 'mocha', value: 90 },
      { name: 'jest', value: 90 }
    ]
  },
  {
    name: 'Back End',
    data: [
      { name: 'Node.js', value: 90 },
      { name: 'Express.js', value: 90 },
      { name: 'GraphQL', value: 75 },
      { name: 'Flask', value: 75 },
      { name: 'RxJS', value: 50 },
      { name: 'Ruby on Rails', value: 60 }
    ]
  },
  {
    name: 'Data',
    data: [
      { name: 'PostgreSQL', value: 90 },
      { name: 'MonogoDB', value: 70 },
      { name: 'RabbitMQ', value: 65 },
      { name: 'Memcached', value: 70 },
      { name: 'Redis', value: 65 },
    ]
  },
  {
    name: 'DevOps',
    data: [
      { name: 'Docker', value: 75 },
      { name: 'Kubernetes', value: 50 },
      { name: 'Helm', value: 40 },
      { name: 'SaltStack', value: 70 },
      { name: 'Virtual Machines', value: 65 },
    ]
  },
  {
    name: 'Methodologies',
    data: [
      { name: 'Mob & Pair Programming', value: 90 },
      { name: 'LEAN', value: 90 },
      { name: 'CI/CD', value: 85 },
      { name: 'Microservice Architecture', value: 88 },
      { name: 'Remote Collaboration', value: 75 }
    ]
  }
]

interface ChartProps {
  data: any
}

const SkillRadarChart: React.FC<ChartProps> = ({ data }) => {
  const newData = data.map((skill: any) => ({ ...skill, fullMark: 100 }))
  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={625}
      height={500}
      data={newData}
      style={{ margin: '0 auto' }}
    >
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      <Radar name="Skill Level" dataKey="value" stroke="#007BFF" fill="#007BFF" fillOpacity={0.7} />
    </RadarChart>
  )
}


const WrappedChart: React.FC = () => {
  return (
    <Container fluid style={{ textAlign: 'center' }}>
      <Row className="justify-content-md-center">
        <Col sm={12} md={10} lg={8}>
          <Tabs defaultActiveKey="languages" id="uncontrolled-tab-example" style={{ width: '625px', margin: '0 auto' }}>
            {SKILL_SECTIONS.map(section => (
              <Tab eventKey={section.name.toLowerCase().replace(' ', '-')} title={section.name}>
                <SkillRadarChart data={section.data} />
              </Tab>
            ))}
          </Tabs>
        </Col>
      </Row>
    </Container>
  )
}

export default WrappedChart

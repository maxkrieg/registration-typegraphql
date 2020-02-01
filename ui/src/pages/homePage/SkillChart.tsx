import React from 'react'
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { Container, Tabs, Tab, Row } from 'react-bootstrap'

const SKILL_SECTIONS = [
  {
    name: 'Languages',
    data: [
      { name: 'JavaScript', value: 90 },
      { name: 'Typescript', value: 75 },
      { name: 'Python', value: 85 },
      { name: 'SQL', value: 60 },
      { name: 'HTML', value: 90 },
      { name: 'CSS', value: 80 }
    ]
  },
  {
    name: 'Front End',
    data: [
      { name: 'React.js', value: 85 },
      { name: 'HTML', value: 90 },
      { name: 'CSS', value: 75 },
      { name: 'jQuery', value: 70 },
      { name: 'webpack', value: 85 }
    ]
  },
  {
    name: 'Back End',
    data: [
      { name: 'Node.js', value: 80 },
      { name: 'Express.js', value: 90 },
      { name: 'GraphQL', value: 70 },
      { name: 'Flask', value: 65 },
      { name: 'RxJS', value: 50 },
    ]
  },
  {
    name: 'Data',
    data: [
      { name: 'PostgreSQL', value: 90 },
      { name: 'MonogoDB', value: 70 },
      { name: 'RabbitMQ', value: 65 },
      { name: 'Memcached', value: 70 },
      { name: 'Redis', value: 60 },
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
      { name: 'Continuous Delivery & Deployment (CI/CD)', value: 85 },
      { name: 'Microservice Architecture', value: 88 },
      { name: 'Remote Collaboration', value: 75 }
    ]
  }
]

interface ChartProps {
  data: any
}

const SkillBarChart: React.FC<ChartProps> = ({ data }) => {
  return (
    <BarChart width={800} height={250} data={data} layout="vertical">
      <YAxis dataKey="name" type="category" />
      <XAxis dataKey="value" type="number" />
      <Bar dataKey="value" fill="#8884d8" />
    </BarChart>
  )
}

const SkillRadarChart: React.FC<ChartProps> = ({ data }) => {
  const newData = data.map((skill: any) => ({ ...skill, fullMark: 100 }))
  return (
    <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={newData}>
      <PolarGrid />
      <PolarAngleAxis dataKey="name" />
      {/* <PolarRadiusAxis /> */}
      <Radar name="Skill Level" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      {/* <Tooltip /> */}
    </RadarChart>
  )
}


const WrappedChart: React.FC = () => {
  return (
    <Container fluid style={{ textAlign: 'center' }}>
      <Row className="justify-content-md-center">
        <Tabs defaultActiveKey="languages" id="uncontrolled-tab-example">
          {SKILL_SECTIONS.map(section => (
            <Tab eventKey={section.name.toLowerCase().replace(' ', '-')} title={section.name}>
              <SkillRadarChart data={section.data} />
            </Tab>
          ))}
        </Tabs>
      </Row>
    </Container>
  )
}

export default WrappedChart

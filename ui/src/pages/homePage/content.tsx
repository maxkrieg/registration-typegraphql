import React from 'react'
import { Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from 'recharts'

const SkillChart: React.FC = () => {
  const data01 = [
    {
      name: 'Group A',
      value: 400,
    },
    {
      name: 'Group B',
      value: 300,
    },
    {
      name: 'Group C',
      value: 300,
    },
    {
      name: 'Group D',
      value: 200,
    },
    {
      name: 'Group E',
      value: 278,
    },
    {
      name: 'Group F',
      value: 189,
    },
  ]
  const data02 = [
    {
      name: 'Group A',
      value: 2400,
    },
    {
      name: 'Group B',
      value: 4567,
    },
    {
      name: 'Group C',
      value: 1398,
    },
    {
      name: 'Group D',
      value: 9800,
    },
    {
      name: 'Group E',
      value: 3908,
    },
    {
      name: 'Group F',
      value: 4800,
    },
  ]

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart width={800} height={400}>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

export const sections = [
  {
    title: 'about',
    description: (
      <p>
        I'm a passionate Software Engineer who loves to collaborate with others to solve hard
        problems. I enjoy full-stack web development as well as Dev Ops work. I believe in{' '}
        <a href="https://en.wikipedia.org/wiki/Lean_software_development" target="_blank">
          lean software development
        </a>
        , flow efficiency, and mob programming. Outside of coding, I enjoy hiking, climbing, or
        skiing. I'm a lifelong learner obsessed with constantly bettering myself in all facets of
        life.
      </p>
    ),
  },
  {
    title: 'portfolio',
    description: (
      <p>
        While most of my code is written for work, I have some personal projects on{' '}
        <a href="https://github.com/maxkrieg" target="_blank">
          github
        </a>
        .
      </p>
    ),
  },
  {
    title: 'skills',
    description: <SkillChart />,
  },
  {
    title: 'work',
    description: <p>lmgtfy</p>,
  },
  {
    title: 'contact',
    description: <p>lmgtfy</p>,
  },
]

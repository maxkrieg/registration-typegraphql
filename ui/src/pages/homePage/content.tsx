import React from 'react'
import SkillBarChart from './SkillChart'

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
    description: <SkillBarChart />,
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

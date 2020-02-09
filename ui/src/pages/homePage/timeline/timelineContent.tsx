import React from 'react'
import psLogo from './ps-logo.png'
import { ListGroup } from 'react-bootstrap'

const PluralsightIcon: React.FC = () => <img src={psLogo} className="timeline__icon" />
const SchoolIcon: React.FC = () => <i className="fas fa-book timeline__icon"></i>

interface TimelineItem {
  icon: JSX.Element
  title: string
  company: string
  location: string
  dates: string
  description: JSX.Element
}

export const timelineContent: TimelineItem[] = [
  {
    icon: <PluralsightIcon />,
    title: 'Software Engineer',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'August 2015 - Present',
    description: (
      <ListGroup variant="flush" style={{ textAlign: 'left' }}>
        <ListGroup.Item>
          <strong>Environments</strong>
          <p style={{ margin: '0' }}>Yeah did stuff</p>
        </ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>
    ),
  },
  {
    icon: <PluralsightIcon />,
    title: 'Software Engineer, Interactive Challenges',
    company: 'Pluralsight',
    location: 'Salt Lake City, Utah',
    dates: 'November 2018 - December 2019',
    description: <p>Foo bar foo</p>,
  },
  {
    icon: <PluralsightIcon />,
    title: 'Software Engineer, Skill IQ Tooling',
    company: 'Pluralsight',
    location: 'Salt Lake City, Utah',
    dates: 'November 2018 - December 2019',
    description: <p>Foo bar foo</p>,
  },
  {
    icon: <PluralsightIcon />,
    title: 'Software Engineer, Skill IQ Analytics',
    company: 'Pluralsight',
    location: 'Salt Lake City, Utah',
    dates: 'November 2018 - December 2019',
    description: <p>Foo bar foo</p>,
  },
  {
    icon: <PluralsightIcon />,
    title: 'Software Engineer, Skill IQ',
    company: 'Pluralsight',
    location: 'Salt Lake City, Utah',
    dates: 'November 2018 - December 2019',
    description: <p>Foo bar foo</p>,
  },
]

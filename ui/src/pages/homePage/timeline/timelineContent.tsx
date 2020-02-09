import React from 'react'
import psLogo from './ps-logo.png'
import ipLogo from './ip-logo.png'
import gniLogo from './gni-logo.png'
import { ListGroup } from 'react-bootstrap'

const PluralsightIcon: React.FC = () => <img src={psLogo} className="timeline__icon" />
const IProspectIcon: React.FC = () => <img src={ipLogo} className="timeline__icon" />
const GNIIcon: React.FC = () => <img src={gniLogo} className="timeline__icon" />

interface TimelineItem {
  icon: JSX.Element
  title: string
  company: string
  team?: string
  location: string
  dates: string
  description?: JSX.Element
  position?: string
}

export const timelineContent: TimelineItem[] = [
  {
    icon: <PluralsightIcon />,
    title: 'Software Engineer',
    company: 'Pluralsight',
    team: 'Cloud Environments Platform',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'Dec 2019 - Present',
    description: <p>As an engineer working on cloud Environments, I do cool stuff.</p>,
  },
  {
    icon: <PluralsightIcon />,
    title: 'Software Engineer, Tech Lead',
    team: 'Interactive Course Tools Experience',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'Nov 2018 – Dec 2019',
    description: <p>Tech Lead for Interactive Course Tooling</p>,
  },
  {
    icon: <PluralsightIcon />,
    title: 'Software Engineer, Tech Lead',
    team: 'Skill IQ Author Tools Experience',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'Jan 2018 – Nov 2018',
    description: <p>Tech Lead for Interactive Course Tooling</p>,
  },
  {
    icon: <PluralsightIcon />,
    title: 'Software Engineer, Tech Lead',
    team: 'Skill IQ Tech Leader Experience',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'Feb 2017 – Feb 2018',
    description: <p>Tech Lead for Interactive Course Tooling</p>,
  },
  {
    icon: <PluralsightIcon />,
    title: 'Software Engineer',
    team: 'Skill IQ Learner Experience',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'July 2015 – Feb 2017',
    description: <p>Tech Lead for Interactive Course Tooling</p>,
  },
  {
    icon: <IProspectIcon />,
    title: 'Search Engine Marketing Account Lead',
    company: 'iProspect',
    location: 'Boston, MA',
    dates: 'Jan 2015 – Apr 2015',
    description: <p>Yep</p>,
  },
  {
    icon: <IProspectIcon />,
    title: 'Search Engine Marketing Account Specialist',
    company: 'iProspect',
    location: 'Boston, MA',
    dates: 'May 2014 – Dec 2014',
    description: <p>Foo bar foo</p>,
  },
  {
    icon: <IProspectIcon />,
    title: 'Search Engine Marketing Account Coordinator',
    company: 'iProspect',
    location: 'Boston, MA',
    dates: 'Jun 2013 – Apr 2014',
    description: <p>Foo bar foo</p>,
  },
  {
    icon: <GNIIcon />,
    title: 'Data Analyst',
    company: 'Global News Intelligence (GNI)',
    location: 'Boston, MA',
    dates: 'May 2011 – Jun 2013',
    description: <p>Foo bar foo</p>,
  },
]

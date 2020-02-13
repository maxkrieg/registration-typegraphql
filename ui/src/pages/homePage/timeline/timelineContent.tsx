import React from 'react'
import psLogo from './logos/ps-logo.png'
import ipLogo from './logos/ip-logo.png'
import gniLogo from './logos/gni-logo.png'
import gaLogo from './logos/ga-logo.png'
import uvmLogo from './logos/uvm-logo.png'
import sevillaLogo from './logos/sevilla-logo.png'
import nolsLogo from './logos/nols-logo.png'
import pcLogo from './logos/pc-logo.png'

interface IconProps {
  src: string
  url: string
}

const Icon: React.FC<IconProps> = ({ src, url }) => (
  <a href={url} className="timeline__icon-wrapper" target="_blank" rel="noopener noreferrer">
    <img src={src} className="timeline__icon" alt="icon" />
  </a>
)

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
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Software Engineer',
    company: 'Pluralsight',
    team: 'Cloud Environments Platform',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'Dec 2019 - Present',
    description: (
      <p className="timeline__element-description">
        <ul>
          <li>
            Management of Kubernetes cluster that services other hands-on learner experiences such
            as Interactive Courses, Labs, and Projects
          </li>
          <li>
            Service that provides safe and secure execution environments (Docker containers) for
            learners and authors
          </li>
          <li>
            <strong>Technologies:</strong> Kubernetes, Docker, Node.js, Typescript, NestJS, GraphQL
          </li>
        </ul>
      </p>
    ),
  },
  {
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Software Engineer, Tech Lead',
    team: 'Interactive Course Author Experience',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'Nov 2018 – Dec 2019',
    description: (
      <p className="timeline__element-description">
        <ul>
          <li>
            Led technical discovery, design, and creation of new Author experience for Interactive
            Courses
          </li>
          <li>
            Trained team in LEAN practices, optimization for flow efficiency, and mob programming
          </li>
          <li>
            <strong>Technologies:</strong> Node.js, React, Apollo GraphQL, Typescript, Docker,
            PostgreSQL
          </li>
        </ul>
      </p>
    ),
  },
  {
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Software Engineer, Tech Lead',
    team: 'Skill IQ Author Experience',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'Jan 2018 – Nov 2018',
    description: (
      <p className="timeline__element-description">
        <ul>
          <li>Led team in rebuild of Skill IQ Author application from legacy codebase</li>
          <li>Architected and built internal dashboard for Skill IQ data analytics</li>
          <li>Transitioned legacy codebase from Python 2 to Python 3</li>
          <li>
            <strong>Technologies:</strong> Python, React, Sqlalchemy, PostgreSQL
          </li>
        </ul>
      </p>
    ),
  },
  {
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Software Engineer, Tech Lead',
    team: 'Skill IQ Tech Leader Experience',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'Feb 2017 – Feb 2018',
    description: (
      <p className="timeline__element-description">
        <ul>
          <li>Created Skill IQ data analytics dashboard for customers</li>
          <li>Delivered 3 premium features than enabled higher price points and increased sales</li>
          <li>
            Built asynchronous data aggregation and calculation service and calculation service
          </li>
          <li>
            <strong>Technologies:</strong> Python, React, Sqlalchemy, PostgreSQL
          </li>
        </ul>
      </p>
    ),
  },
  {
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Software Engineer',
    team: 'Skill IQ Learner Experience',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'July 2015 – Feb 2017',
    description: (
      <p className="timeline__element-description">
        <ul>
          <li>Led front end development of brand new Skill IQ learner experience in React</li>
          <li>
            Evolved CI/CD practices and pipelines using a number of tools (Jenkins, Ansible, Puppet,
            etc)
          </li>
          <li>Transitioned legacy codebase from Python 2 to Python 3</li>
          <li>
            <strong>Technologies:</strong> Python, React, Sqlalchemy, PostgreSQL
          </li>
        </ul>
      </p>
    ),
  },
  {
    icon: <Icon src={gaLogo} url="https://generalassemb.ly/" />,
    title: 'Student',
    team: 'Web Development Immersive',
    company: 'General Assembly',
    location: 'Boston, MA',
    dates: 'Apr 2015 – July 2015',
    description: <p>Foo bar foo</p>,
  },
  {
    icon: <Icon src={ipLogo} url="https://www.iprospect.com/en/us/" />,
    title: 'Search Engine Marketing Account Lead',
    company: 'iProspect',
    location: 'Boston, MA',
    dates: 'Jan 2015 – Apr 2015',
    description: <p>Yep</p>,
  },
  {
    icon: <Icon src={ipLogo} url="https://www.iprospect.com/en/us/" />,
    title: 'Search Engine Marketing Account Specialist',
    company: 'iProspect',
    location: 'Boston, MA',
    dates: 'May 2014 – Dec 2014',
    description: <p>Foo bar foo</p>,
  },
  {
    icon: <Icon src={ipLogo} url="https://www.iprospect.com/en/us/" />,
    title: 'Search Engine Marketing Account Coordinator',
    company: 'iProspect',
    location: 'Boston, MA',
    dates: 'Jun 2013 – Apr 2014',
    description: <p>Foo bar foo</p>,
  },
  {
    icon: (
      <Icon src={gniLogo} url="https://www.linkedin.com/company/newsimaging-inc-dba-gni-/about/" />
    ),
    title: 'Data Analyst',
    company: 'Global News Intelligence (GNI)',
    location: 'Boston, MA',
    dates: 'May 2011 – Jun 2013',
    description: <p>Foo bar foo</p>,
  },
  {
    icon: <Icon src={uvmLogo} url="https://www.uvm.edu/" />,
    title: 'Student',
    team: 'B.A. in Global Studies & Spanish',
    company: 'University of Vermont',
    location: 'Burlington, VT',
    dates: 'Jun 2009 – Dec 2010',
    description: <p>Foo bar foo</p>,
  },
  {
    icon: <Icon src={sevillaLogo} url="https://www.us.es/" />,
    title: 'Student',
    team: 'Global Studies & Spanish',
    company: 'Universidad de Sevilla',
    location: 'Sevilla, Spain',
    dates: 'Jan 2010 – Jun 2010',
    description: <p>Semester abroad in Sevilla, Spain</p>,
  },
  {
    icon: <Icon src={nolsLogo} url="https://www.nols.edu/en/" />,
    title: 'Student',
    team: 'Wilderness Expedition Leadership',
    company: 'National Outdoor Leadership School (NOLS)',
    location: 'Coyhaique, Chile',
    dates: 'Jan 2009 – Jun 2009',
    description: <p>Semester in Chilean Patagonia</p>,
  },
  {
    icon: <Icon src={pcLogo} url="https://www.providence.edu/" />,
    title: 'Student',
    team: 'Global Studies & Spanish',
    company: 'Providence College',
    location: 'Providence, RI',
    dates: 'Sep 2006 – Dec 2008',
  },
]

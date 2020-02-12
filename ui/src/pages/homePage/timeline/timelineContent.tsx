import React from 'react'
import psLogo from './ps-logo.png'
import ipLogo from './ip-logo.png'
import gniLogo from './gni-logo.png'
import gaLogo from './ga-logo.png'
import uvmLogo from './uvm-logo.png'
import sevillaLogo from './sevilla-logo.png'
import nolsLogo from './nols-logo.png'
import pcLogo from './pc-logo.png'

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
    description: <p>As an engineer working on cloud Environments, I do cool stuff.</p>,
  },
  {
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Software Engineer, Tech Lead',
    team: 'Interactive Course Tools Experience',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'Nov 2018 – Dec 2019',
    description: <p>Tech Lead for Interactive Course Tooling</p>,
  },
  {
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Software Engineer, Tech Lead',
    team: 'Skill IQ Author Experience',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'Jan 2018 – Nov 2018',
    description: <p>Tech Lead for Interactive Course Tooling</p>,
  },
  {
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Software Engineer, Tech Lead',
    team: 'Skill IQ Tech Leader Experience',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'Feb 2017 – Feb 2018',
    description: <p>Tech Lead for Interactive Course Tooling</p>,
  },
  {
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Software Engineer',
    team: 'Skill IQ Learner Experience',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'July 2015 – Feb 2017',
    description: <p>Tech Lead for Interactive Course Tooling</p>,
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

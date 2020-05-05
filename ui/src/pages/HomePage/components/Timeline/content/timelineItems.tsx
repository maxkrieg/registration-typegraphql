import React from 'react'
import psLogo from './logos/ps-logo.png'
import ipLogo from './logos/ip-logo.png'
import gniLogo from './logos/gni-logo.png'
import gaLogo from './logos/ga-logo.png'
import uvmLogo from './logos/uvm-logo.png'
import sevillaLogo from './logos/sevilla-logo.png'
import nolsLogo from './logos/nols-logo.png'

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
  descriptionBullets?: (string | JSX.Element)[]
  position?: string
}

const timelineItems: TimelineItem[] = [
  {
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Software Engineer',
    company: 'Pluralsight',
    team: 'Cloud Environments Platform',
    location: 'Salt Lake City, UT',
    dates: 'Dec 2019 - Present',
    descriptionBullets: [
      'Management of Kubernetes cluster that services other hands-on learner experiences such as Interactive Courses, Labs, and Projects',
      'Development of service that provides safe and secure execution environments (Docker containers) for learners and authors',
      <span>
        <strong>Technologies:</strong> Kubernetes, Docker, Node.js, Typescript, NestJS, GraphQL
      </span>,
    ],
  },
  {
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Software Engineer, Tech Lead',
    team: 'Interactive Course Author Experience',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'Nov 2018 – Dec 2019',
    descriptionBullets: [
      'Led technical discovery, architectural design, and creation of new Author experience for Interactive Courses',
      'Trained team in LEAN practices, optimization for flow efficiency, and mob programming',
      'Built embeddable "smart" React component for use by other learner experiences',
      <span>
        <strong>Technologies:</strong> Node.js, React, Apollo GraphQL, Typescript, Docker,
        PostgreSQL
      </span>,
    ],
  },
  {
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Software Engineer, Tech Lead',
    team: 'Skill IQ Author Experience',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'Jan 2018 – Nov 2018',
    descriptionBullets: [
      'Led team in rebuild of Skill IQ Author application from legacy codebase',
      'Architected and built internal dashboard for Skill IQ data analytics',
      'Transitioned legacy codebase from Python 2 to Python 3',
      <span>
        <strong>Technologies:</strong> Python, React, Sqlalchemy, PostgreSQL
      </span>,
    ],
  },
  {
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Software Engineer, Tech Lead',
    team: 'Skill IQ Tech Leader Experience',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'Feb 2017 – Feb 2018',
    descriptionBullets: [
      'Created Skill IQ data analytics experience for customers',
      'Delivered 3 premium features than enabled higher price points and increased sales',
      'Built asynchronous data aggregation and calculation service',
      <span>
        <strong>Technologies:</strong> Python, React, Sqlalchemy, PostgreSQL
      </span>,
    ],
  },
  {
    icon: <Icon src={psLogo} url="https://www.pluralsight.com/" />,
    title: 'Software Engineer',
    team: 'Skill IQ Learner Experience',
    company: 'Pluralsight',
    location: 'Salt Lake City, UT & Boston, MA',
    dates: 'July 2015 – Feb 2017',
    descriptionBullets: [
      'Led front end development of brand new Skill IQ learner experience in React',
      'Evolved CI/CD practices and pipelines using a number of tools (Jenkins, Ansible, Puppet, etc)',
      'Transitioned legacy codebase from Python 2 to Python 3',
      <span>
        <strong>Technologies:</strong> Python, React, Sqlalchemy, PostgreSQL
      </span>,
    ],
  },
  {
    icon: <Icon src={gaLogo} url="https://generalassemb.ly/" />,
    title: 'Student',
    team: 'Web Development Immersive',
    company: 'General Assembly',
    location: 'Boston, MA',
    dates: 'Apr 2015 – July 2015',
    descriptionBullets: [
      '3-month full time immersive course where I learned best practices for web application architecture, front-end and back end development',
      <span>
        <strong>Technologies:</strong> JavaScript, Node.js, Express, Angular, jQuery, HTML, CSS,
        MongoDB, Ruby on Rails, PostgreSQL
      </span>,
    ],
  },
  {
    icon: <Icon src={ipLogo} url="https://www.iprospect.com/en/us/" />,
    title: 'Search Engine Marketing Account Lead',
    company: 'iProspect',
    location: 'Boston, MA',
    dates: 'Jan 2015 – Apr 2015',
    descriptionBullets: [
      'Team leader of 5+ person marketing team to ensure goals of Fortune 500 e-commerce client were met efficiently',
      'Designed advertising strategy to optimize for client-specified KPIs',
      'Primary point of contact for client, helped develop and strengthen client-agency relationship',
    ],
  },
  {
    icon: <Icon src={ipLogo} url="https://www.iprospect.com/en/us/" />,
    title: 'Search Engine Marketing Account Specialist',
    company: 'iProspect',
    location: 'Boston, MA',
    dates: 'May 2014 – Dec 2014',
    descriptionBullets: [
      'Automated data analysis reporting for 5 teams with VBA scripts, saving over 10 person hrs/wk',
      'Managed multi-million dollar ad budget by developing spend projection tool in Excel',
      'Redesigned strategy for a Product Listing Account, leading to +20% ROI YoY',
    ],
  },
  {
    icon: <Icon src={ipLogo} url="https://www.iprospect.com/en/us/" />,
    title: 'Search Engine Marketing Account Coordinator',
    company: 'iProspect',
    location: 'Boston, MA',
    dates: 'Jun 2013 – Apr 2014',
    descriptionBullets: [
      'Optimized ad campaigns by doing analysis of search keyword metrics (impressions, click through rate, conversion rate)',
      'Led execution for Holiday marketing campaigns, driving YoY ROI increases in multiple ad types',
      'Executed all client reporting of ad campaign performance and tracking against KPIs',
    ],
  },
  {
    icon: (
      <Icon src={gniLogo} url="https://www.linkedin.com/company/newsimaging-inc-dba-gni-/about/" />
    ),
    title: 'Data Analyst',
    company: 'Global News Intelligence (GNI)',
    location: 'Boston, MA',
    dates: 'May 2011 – Jun 2013',
    descriptionBullets: [
      'Data analyst and consultant of open-source media content for corporate, political, and military clients',
      'Designed analytics strategy and methodology for multiple client projects',
      'Assisted software engineers to improve experience of web application',
      'Managed 3-5 team members, interns and part-time staff on multiple projects',
    ],
  },
  {
    icon: <Icon src={uvmLogo} url="https://www.uvm.edu/" />,
    title: 'Student',
    team: 'B.A. in Global Studies & Spanish',
    company: 'University of Vermont',
    location: 'Burlington, VT',
    dates: 'Graduated Dec 2010',
    descriptionBullets: [
      "Interdisciplinary degree covering relationship between global politics, economics, and culture in influencing today's world",
      'Founder of UVM Global Studies club',
      'Opinion Columnist for The Vermont Cynic newspaper',
      "Teacher's Assistant for Anthropology Department",
    ],
  },
  {
    icon: <Icon src={sevillaLogo} url="https://www.us.es/" />,
    title: 'Student',
    team: 'Global Studies & Spanish',
    company: 'Universidad de Sevilla',
    location: 'Sevilla, Spain',
    dates: 'Jan 2010 – Jun 2010',
    descriptionBullets: [
      'Semester abroad in Sevilla, Spain',
      'Studies focused on politics, economics, and linguistics',
      'All classes taught in Spanish',
    ],
  },
  {
    icon: <Icon src={nolsLogo} url="https://www.nols.edu/en/" />,
    title: 'Student',
    team: 'Wilderness Expedition Leadership',
    company: 'National Outdoor Leadership School (NOLS)',
    location: 'Coyhaique, Chile',
    dates: 'Jan 2009 – Jun 2009',
    descriptionBullets: [
      "3-month semester long program in southern Chile's Patagonia wilderness region consisting of backpacking and sea kayaking",
      'Trained in large-group, extended backcountry expedition planning and leadership',
      'Led group of 21 for multiple days of mountain travel and sea kayaking',
      'Certification in Wilderness First Aid (WFA) and Leave No Trace (LNT)',
    ],
  },
]

export default timelineItems

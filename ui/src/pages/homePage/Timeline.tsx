import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './timeline/Timeline.css'
import logo from './timeline/ps-logo.png'
import { timelineContent } from './timeline/timelineContent'

const WorkIcon: React.FC = () => <img src={logo} className="timeline__icon" />
const SchoolIcon: React.FC = () => <i className="fas fa-book timeline__icon"></i>

const Timeline: React.FC = () => {
  return (
    <div>
      <VerticalTimeline>
        {timelineContent.map(timelineItem => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date={timelineItem.dates}
            iconStyle={{
              background: '#fff',
              color: '#fff',
            }}
            icon={<WorkIcon />}
          >
            <h4 className="vertical-timeline-element-title">{timelineItem.title}</h4>
            <h5 className="vertical-timeline-element-subtitle">{timelineItem.company}</h5>
            <h6 className="vertical-timeline-element-subtitle">{timelineItem.location}</h6>
            <div style={{ height: '16px' }} />
            {timelineItem.description}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default Timeline

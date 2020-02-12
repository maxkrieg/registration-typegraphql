import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './timeline/Timeline.css'
import { timelineContent } from './timeline/timelineContent'

const Timeline: React.FC = () => {
  return (
    <div>
      <VerticalTimeline>
        {timelineContent.map(timelineItem => (
          <VerticalTimelineElement
            className="timeline__timeline-element"
            date={timelineItem.dates}
            iconStyle={{
              background: '#FFFFFF',
              boxShadow: 'none',
            }}
            icon={timelineItem.icon}
          >
            <h4
              className="vertical-timeline-element-title"
              style={{ fontSize: '20px', fontWeight: 800 }}
            >
              {timelineItem.title}
            </h4>
            <h5
              className="vertical-timeline-element-subtitle"
              style={{ fontSize: '18px', fontWeight: 300 }}
            >
              {timelineItem.team}
            </h5>
            <div style={{ height: '10px' }} />
            <h5
              className="vertical-timeline-element-subtitle"
              style={{ fontSize: '18px', color: '#555555' }}
            >
              {timelineItem.company}
            </h5>
            <h6
              className="vertical-timeline-element-subtitle"
              style={{ fontSize: '16px', color: '#555555' }}
            >
              <em>{timelineItem.location}</em>
            </h6>
            <div style={{ height: '16px' }} />
            {timelineItem.description}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default Timeline

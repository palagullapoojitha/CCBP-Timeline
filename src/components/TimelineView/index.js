// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimeLineCard from '../ProjectTimelineCard'
import CourseTimeLineCard from '../CourseTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const formatToObject = title => ({title})
  const items = timelineItemsList.map(each => formatToObject(each.title))

  return (
    <div className="chrono-container">
      <div className="time-head">
        <h1 className="h-1">MY JOURNEY OF CCBP 4.0</h1>
        <h1 className="h-1">CCBP 4.O</h1>
      </div>
      <Chrono mode="VERTICAL_ALTERNATING" items={items}>
        {timelineItemsList.map(each => {
          if (each.categoryId === 'PROJECT') {
            return <ProjectTimeLineCard data={each} key={each.id} />
          }
          return <CourseTimeLineCard data={each} key={each.id} />
        })}
      </Chrono>
    </div>
  )
}
export default TimelineView

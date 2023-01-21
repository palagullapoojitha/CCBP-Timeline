import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimeLineCard = props => {
  const {data} = props
  return (
    <div className="project-card">
      <div className="project-head">
        <h1 className="p-heading1">{data.courseTitle}</h1>
        <div className="p-d">
          <AiFillClockCircle />
          <p className="p-para-1">{data.duration}</p>
        </div>
      </div>
      <p className="p-para-2">{data.description}</p>
      <div className="p-items-card">
        {data.tagsList.map(each => (
          <div key={each.id} className="p-item">
            <p className="p1"> {each.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CourseTimeLineCard

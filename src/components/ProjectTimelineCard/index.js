// Write your code here
import './index.css'
import {AiFillCalendar} from 'react-icons/ai'

const ProjectTimeLineCard = props => {
  const {data} = props
  return (
    <div className="project-card">
      <img alt="project" src={data.imageUrl} className="img1" />
      <div className="c-head">
        <h1 className="c-heading1">{data.projectTitle}</h1>
        <div className="p-d">
          <AiFillCalendar />
          <p className="c-para-1">{data.duration}</p>
        </div>
      </div>
      <p className="c-para-2">{data.description}</p>
      <a href={data.projectUrl} className="p-link">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimeLineCard

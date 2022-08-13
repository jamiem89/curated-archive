import './ProjectList.css';
import Project from './Project';

function ProjectList(props) {
    return (
        <div className="project-list">
            <Project title={props.data[0].title} desc={props.data[0].desc} link={props.data[0].link} />
        </div>
    )
}

export default ProjectList;
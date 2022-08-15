import './ProjectList.css';
import Project from './Project';

function ProjectList(props) {
    return (
        <div className="project-list">
            {props.data.map(project => {
                return <Project title={project.title} desc={project.desc} link={project.link} />
            })}
        </div>
    )
}

export default ProjectList;
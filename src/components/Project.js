import './Project.css';
import RoundButton from './RoundButton'

function Project(props) {
    return (
        <article className="project">
            <h2 className="project__title">{props.title}</h2>
            <p className="project__desc">{props.desc}</p>
            <RoundButton target={props.link} text="View" />
        </article>
    )
}

export default Project;
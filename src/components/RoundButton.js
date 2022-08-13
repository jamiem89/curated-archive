import './RoundButton.css';

function RoundButton(props) {
    return (
        <a href={props.target} className="btn">{props.text}</a>
    )
}

export default RoundButton;
import './Button.css'


const Button = (props) => {
    return (
        <div className="btn-clear-all">
            <button onClick={props.handleClick}>{props.label}</button>
        </div>
    )
}

export default Button
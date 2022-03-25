const Input = (props) => {
    return (
        <input
            type={props.type}
            placeholder={props.placeholder}
            onChange={props.onChange}
            value={props.value}
        />
    )
}

const AddButton = (props) => {
    return (
        <div className="col-lg-2 col-md-3 col-sm-12">
            <button
                className="btn btn--add"
                onClick={props.onClick}
            >
                {props.label}
            </button>
        </div>
    )
}
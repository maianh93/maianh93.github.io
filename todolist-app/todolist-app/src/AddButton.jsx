import './App.css'

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

export default AddButton
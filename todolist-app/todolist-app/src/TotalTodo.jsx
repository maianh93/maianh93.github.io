import './App.css'

const DeleteAllButton = (props) => {
    return (
        <button 
            className="btn btn--delete"
            onClick={props.onClick} >
            {props.label}
        </button>
    )
}

const TotalTodos = (props) => {
    return (
        <span>
            <div className="todos-list">
                <p>You have <b>{props.total}</b> pending tasks</p>
                <div><DeleteAllButton 
                    label  = "Clear All"
                    onClick = {props.onDeleteAll}
                    />
                </div>
            </div>
        </span>
    )
}

export default TotalTodos
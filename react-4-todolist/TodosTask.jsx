const TodoTask = (props) => {
    return (
        <div className="container">
            <div className="row mt-2 todo-task">
                <div className="col-lg-10 col-md-9 col-sm-12 todo-task-name">{props.name}</div>
                <div className="col-lg-2 col-md-3 col-sm-12">
                    <DeleteButton 
                        // onClick = {() => props.onDelete(props.id)}
                        onClick = {props.onDelete}
                    />
                </div>
            </div>
            
        </div>
    )
}

const DeleteButton = (props) => {
    return (
        <button
         className="btn btn--delete"
         onClick={props.onClick}
         >
            <i class="bi bi-trash"></i>
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

const DeleteAllButton = (props) => {
    return (
        <button 
            className="btn btn--delete"
            onClick={props.onClick} >
            {props.label}
        </button>
    )
}
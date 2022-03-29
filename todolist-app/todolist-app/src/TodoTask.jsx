import './App.css'

const DeleteButton = (props) => {
    return (
        <button
         className="btn btn--delete"
         onClick={props.onClick}
         >
        <img src="./src/trash.svg" alt="trash-icon" />
        </button>
    )
}

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

export default TodoTask


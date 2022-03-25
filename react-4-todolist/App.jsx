
const { useState } = React;

const Label = (props) => {
    return <h2>{props.label}</h2>
}



const App = () => {
    const [newTask, setNewTask] = useState(
        ""
    );

    // const [placeholder, setPlaceholder] = useState(
    //   " Add new todo"
    // );

    const [tasks, setTasks] = useState(todos.map(todos => todos));
    console.log(tasks);
    const handleChange = (e) => {
        setNewTask(
            e.target.value,
        )
    }

    const handleAddClick = () => {
        if (newTask) {
            let arr = [{
                id: makeid(),
                name: newTask,
            }, ...tasks];
            setTasks(arr);
            setNewTask("");
            // setPlaceholder(" Add new todo")
        } else {
            alert("Please fill a new task!!!")
        }

    }

    const handleDeleteClick = (id) => {
        setTasks(tasks.filter(t => t.id != id))
    }

    const handleDeleteAllClick = () => {
        console.log("here!")
        setTasks([])
        setNewTask("");
    }

    const length = tasks.length;

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="app" onSubmit={handleSubmit}>
            <Label
                label="Simple Todo App"
            />
            <div className="container">
                <div className="row p-3">
                    <div className="add-new-todo col-lg-10 col-md-9 col-sm-12">
                        <Input
                            type="text"
                            // placeholder = {placeholder}
                            placeholder="Add new todo"
                            onChange={handleChange}
                            value={newTask}
                        />
                    </div>

                    <AddButton
                        onClick={handleAddClick}
                        label="Add"
                    />
                </div>
            </div>

            {
                tasks.map((task) =>
                    <TodoTask
                        // id = {task.id}
                        name={task.name}
                        // onDelete = {handleDeleteClick}       
                        onDelete={() => handleDeleteClick(task.id)}
                    />)
            }

            <TotalTodos
                total={length}
                onDeleteAll={() => handleDeleteAllClick()}
            />
        </div>
    )
    setDataToLocalStorage(todos)
}

const getDataFromLocalStorage = () => {
    //VD đã lưu mảng trong localStorage trong todolist
    let value = localStorage.getItem("todos");
    if (value) {
        todos = JSON.parse(value)
    } else {
        todos = [];
    }
    setDataToLocalStorage(todos)
}

window.onload = getDataFromLocalStorage;

const setDataToLocalStorage = (arr) => {
    localStorage.setItem("todos", JSON.stringify(arr));
}

setDataToLocalStorage(todos)

ReactDOM.render(<App />, app);
import { useState } from 'react'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Input from "./AddNewTodo.jsx"
import AddButton from './AddButton.jsx'
import TodoTask from './TodoTask.jsx'
import TotalTodos from './TotalTodo'

const Label = (props) => {
  return <h2>{props.label}</h2>
}



const App = () => {
  function makeid() {
    var length = 16;
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

const todos = [
    {
        id: makeid(),
        name: "Buy a new laptop",
    },
    {
        id: makeid(),
        name: "Complete previous homeworks",
    },
    {
        id: makeid(),
        name: "Learning Javascript DOM"
    },
    {
        id: makeid(),
        name: "Create a beautifull Todo App"
    },
    {
        id: makeid(),
        name: "Complete all tasks"
    }
] 

  const [newTask, setNewTask] = useState(
      ""
  );

  // const [placeholder, setPlaceholder] = useState(
  //   " Add new todo"
  // );

  const [tasks, setTasks] = useState(todos.map(todos => todos));//Set localStorage vào đây
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
      setTasks([]);
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
}

export default App

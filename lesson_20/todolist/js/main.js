//*
// Các chức năng:
// 1. Hiển thị công việc
// 2. Thêm công việc
// 3. Thay đổi trạng thái công việc
// 4. Xóa công việc
// 5. Chỉnh sửa tên công việc
// 6. Lọc công việc theo trạng thái

// Đối tượng công việc bao gồm:
// - id
// - title (tên công việc)
// - status (trạng thái công việc)

// 1. Hiển thị công việc
const randomID = () => {
    return Math.floor(Math.random() * 100000);
}
let todos = []

const todoListElement = document.querySelector(".todo-list");
const todoInputElement = document.getElementById("todo-input");
const allRadio = document.querySelector("#all");
const pendingRadio = document.querySelector("#unactive");
const doneRadio = document.querySelector ("#active");
const btnAdd = document.getElementById("btn-add"); 
const btnUpdate = document.getElementById("btn-update");
const editingTodoElementId = {
    id: -1
}
// console.log(btnAdd)


const renderTodos = (arr) => {
    //B1: Xóa hết nội dung trước khi render
    todoListElement.innerHTML = "";
    // arr.length = 0;
    //Trường hợp mảng rỗng
    if (arr.length == 0) {
        todoListElement.innerHTML = "Không có công việc nào trong danh sách";
    }

    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        todoListElement.innerHTML += `
        <div class="todo-item ${t.status ? ["active-todo"] : ""}">
        <div class="todo-item-title">
            <input type="checkbox" ${t.status ? ["checked"] : ""}
            onclick = "toggleStatus(${t.id})"/>
            <p>${t.title}</p>
        </div>
        <div class="option">
            <button class="btn btn-update" onclick = "updateTodo(${t.id}, '${t.title}')">
                <img src="./img/pencil.svg" alt="icon" />
            </button>
            <button class="btn btn-delete" onclick = "deleteTodo(${t.id})">
                <img src="./img/remove.svg" alt="icon" />
            </button>
        </div>
    </div>
        `
        
    }
}

/// 2. Thêm công việc
btnAdd.addEventListener("click", () => {
    // Lấy nội dung trong ô input
    let title = todoInputElement.value;

    // Kiểm tra nội dung
    if (title.trim() == "") {
        alert("Tiêu đề không được để trống");
        return;
    }

    // Tạo ra công việc mới
    let newTodo = {
        id: randomID(),
        title: title,
        status: false,
    }

    // Thêm vào mảng todos
    todos.push(newTodo);

    // Render lại giao diện
    setDataToLocalStorage(todos)
    todoInputElement.value = ""
})

btnUpdate.addEventListener("click", () => {
    // Lấy nội dung trong ô được chọn
    let title = todoInputElement.value;

    // Kiểm tra nội dung
    if (title.trim() == "") {
        alert("Tiêu đề không được để trống");
        return;
    }
    // Tìm đến todoElement dang sua va update   
    todos.forEach(e => {
        if (e.id == editingTodoElementId.id) {
            e.title = todoInputElement.value;
        } 
    });

    editingTodoElementId.id = -1;
    btnUpdate.style.visibility = "hidden";
    btnAdd.style.visibility = "visible";


    // Render lại giao diện
    setDataToLocalStorage(todos)
    todoInputElement.value = "";
})



// 3. Thay đổi trạng thái công việc
const toggleStatus = (id) => {
    for (let i = 0; i < todos.length; i++) {
        // Nếu tìm được thì thay đổi trạng thái
       if(todos[i].id == id) {
          // Nếu công việc có status là true thì đặt lại là false và ngược lại
          if(todos[i].status == true) {
            todos[i].status = false
          } else {
              todos[i].status = true
          }
       }
   }
   // render lại giao diện
   setDataToLocalStorage(todos)
}

//Render lại giao diện
renderTodos(todos);
// 4. Xóa công việc
const deleteTodo = (id) => {
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id == id) {
            todos.splice(i, 1);
        }
    }
    setDataToLocalStorage(todos)
}

// 5. Sửa công việc
const updateTodo = (id, title) => {
    //B1: update value to input
    todoInputElement.value = title;

    //B2: update addBtn to updateBtn
    editingTodoElementId.id = id;
    btnUpdate.style.visibility = "visible";
    btnAdd.style.visibility = "hidden";
}

// 6.Loc cong viec
doneRadio.addEventListener ("click", () => {
    // Khi click vao se loc ra nhung cv co trang thai true
    let newTodos = todos.filter (e => {
        if (e.status == true) {
            return true;
        } else {
            return false;
        }
    });

    // render ra giao dien
    renderTodos(newTodos);
})

allRadio.addEventListener ("click", () => {
                renderTodos(todos); 
})

pendingRadio.addEventListener ("click", () => {
            // Khi click vao se loc ra nhung cv co trang thai false
            let newTodos = todos.filter (e => {
                if (e.status == false) {
                    return true;
                } else {
                    return false;
                }
            });
        
            // render ra giao dien
            renderTodos(newTodos);
    
})


// Lấy dữ liệu tử localStorage
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
    renderTodos(arr);
}
//Render lại giao diện
renderTodos(todos);
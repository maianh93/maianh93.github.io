const getUsersAPI = () => {
    return axios.get("/users");
}

let users = [];

// Lấy danh sách users
async function refreshUsers () {
    try {
        const res = await getUsersAPI();
        users = res.data;
        console.log(users)
        // Render ra ngoài giao diện
        renderUI(users);
    } catch (error) {
        console.log(error);
    }
}

const userListElement = document.querySelector("#users-list tbody");

// Render UI - Hiển thị danh sách user ra ngoài giao diện
function renderUI(arr) {
    userListElement.innerHTML = "";

    // Kiểm tra mảng rỗng
    if (arr.length == 0) {
        userListElement.innerHTML = "Không có học viên nào trong danh sách";
        return;
    }

    // Trường hợp có danh sách
    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        userListElement.innerHTML += `
                    <tr>
                        <td>${t.name}</td>
                        <td>${t.birthday}</td>
                        <td>${t.email}</td>
                        <td>${t.phone}</td>
                        <td>
                            <a href="/edit.html?id=${t.id}" class="text-info"><i class="fa fa-edit"></i> Chỉnh sửa</a>
                            |
                            <a href="#" class="text-danger" onclick="deleteOrNot(); return false;"><i class="fa fa-trash-alt"></i> Xóa</a>
                        </td>
                    </tr>
        `;
    }
}
const deleteOrNot = () => {
    let text = "Bạn có chắc chắn xóa không?"
    if (confirm(text) == true) {
        console.log("OK")
      } else {
        console.log("Cancel")
      }
}

refreshUsers();

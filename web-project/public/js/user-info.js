import {} from "./login.js";

const updateBtnElement = document.getElementById("update-btn");
const firstNameInputElement = document.getElementById("firstname");
const lastNameInputElement = document.getElementById("lastname");
const addressInputElement = document.getElementById("address");
const signUpEmailInputElement = document.getElementById("email_address");
const phoneNumberInputElement = document.getElementById("phone_number");


// API update
let userId = localStorage.getItem("userId")
function updateUserAPI(user) {
    return axios({
        method: "post",
        url: `http://auth.taminhduc.com/user/${userId}`,
        data: user,
    })
}

//Hàm xử lý việc update
async function updateUser(updateUser) {
    try {
        const res = await updateUserAPI(updateUser);
        //Render lại giao diện

    } catch (error) {
        console.log(error);
    }
}


// Thêm thông tin cập nhật
updateBtnElement.addEventListener("click", () => {
    if (firstNameInputElement.value === "" || lastNameInputElement.value === "" || addressInputElement.value === "" || signUpEmailInputElement.value === "" || phoneNumberInputElement.value === "" ||signUpPasswordInputElement.value === "" || signUpConfirmPasswordInputElement.value === "") {
        alert ("Hãy nhập đầy đủ thông tin!");
    } else {
        alert ("Đã đăng ký thành công!");
        let updateUser = {
            firstName: firstNameInputElement.value,
            lastName: lastNameInputElement.value,
            address: addressInputElement.value,
        }
        updateUser(updateUser);
    }
})



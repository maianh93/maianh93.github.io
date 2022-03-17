const loginBtnElement = document.getElementById("login-btn");
const loginEmailInputElement = document.getElementById("login_email_address");
const loginPasswordInputElement = document.getElementById("login_password");

// Ham xu ly viec click vao nut dang nhap
function loginUser(loginInfo) {
    callPostLoginAPI(loginInfo)
    .then(res => {
        console.log(res)
        let tokenValue = res.data.token["base64"];
        let userId = res.data.token.claims["userId"];
        let loginEmail = res.data.token.claims["email"];
        console.log("loginEmail: " + loginEmail);  
        localStorage.setItem("email", loginEmail);
        localStorage.setItem("token", tokenValue);
        localStorage.setItem("userId", userId);
        window.location = "/index.html"
    })
    .catch(error => {
        console.log(error.response.data);  
        console.log(error.response.status);  
        console.log(error.response.headers);
        toastr.error('Vui lòng đăng nhập lại', 'Tài khoản không hợp lệ');
    });
}

// Ham lang nghe va xu ly viec login
loginBtnElement.addEventListener("click", () => {
    if (loginEmailInputElement.value === "" || loginPasswordInputElement.value === "") {
        toastr.error('Vui lòng nhập đủ thông tin', 'Thiếu thông tin đăng nhập');
    }
    let loginInfo = {
        id: loginEmailInputElement.value,
        password: loginPasswordInputElement.value
    }

    
    loginUser(loginInfo)
})
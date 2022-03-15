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
        alert("Tài khoản không hợp lệ");
    });
}

// Ham lang nghe va xu ly viec login
loginBtnElement.addEventListener("click", (toastr) => {
    if (loginEmailInputElement.value === "" || loginPasswordInputElement.value === "") {
        toastr.warning('My name is Inigo Montoya. You killed my father, prepare to die!')
    }
    let loginInfo = {
        id: loginEmailInputElement.value,
        password: loginPasswordInputElement.value
    }

    
    loginUser(loginInfo)
})
const signupBtnElement = document.getElementById("sign-up-btn");
const firstNameInputElement = document.getElementById("firstname");
const lastNameInputElement = document.getElementById("lastname");
const addressInputElement = document.getElementById("address");
const signUpEmailInputElement = document.getElementById("signup-email_address");
const phoneNumberInputElement = document.getElementById("phone_number");
const signUpPasswordInputElement = document.getElementById("signup-password");
const signUpConfirmPasswordInputElement = document.getElementById("signup-confirm-password");

const loginBtnElement = document.getElementById("login-btn");
const loginEmailInputElement = document.getElementById("login_email_address");
const loginPasswordInputElement = document.getElementById("login_password");

console.log(signUpConfirmPasswordInputElement)

// API thêm user
function signUpUserAPI(user) {
    return axios({
        method: "post",
        url: "http://auth.taminhduc.com/sign-up/",
        data: user,
    })
}

//Hàm xử lý việc thêm
async function signUpUser(newUser) {
    try {
        const res = await signUpUserAPI(newUser);
        //Render lại giao diện

    } catch (error) {
        console.log(error);
    }
}


//API đăng nhập
function loginUserAPI(user) {
    return axios({
        method: "post",
        url: "http://auth.taminhduc.com/session/login",
        data: user,
    })
}

//Hàm xử lý việc đăng nhập
async function loginUser(userLogin) {
    try {
        const res = await loginUserAPI(userLogin);
        //Render lại giao diện
        let tokenValue = res.data.token["base64"];
        let userId = res.data.token.claims["userId"];
        localStorage.setItem("token", tokenValue);
        localStorage.setItem("userId", userId);
        window.location = "/index.html";
    } catch (error) {
        console.log(error);
        alert("Thông tin đăng nhập sai");
    }
}


// Thêm thông tin đăng ký
signupBtnElement.addEventListener("click", () => {
    if (firstNameInputElement.value === "" || lastNameInputElement.value === "" || addressInputElement.value === "" || signUpEmailInputElement.value === "" || phoneNumberInputElement.value === "" || signUpPasswordInputElement.value === "" || signUpConfirmPasswordInputElement.value === "") {
        alert("Hãy nhập đầy đủ thông tin!");
    } else if (signUpPasswordInputElement.value != signUpConfirmPasswordInputElement.value) {
        signUpConfirmPasswordInputElement.classList.add("error-sign");
        document.querySelector(".alert").classList.add("error");
        document.querySelector(".alert small").innerText="Mật khẩu không trùng khớp";

    } else {
        signUpConfirmPasswordInputElement.classList.remove("error-sign");
        document.querySelector(".alert.error").classList.remove("error");
        document.querySelector(".alert small").innerText="";
        alert("Đã đăng ký thành công!");
        
        let newUser = {
            password: signUpPasswordInputElement.value,
            email: signUpEmailInputElement.value,
            firstName: firstNameInputElement.value,
            lastName: lastNameInputElement.value,
            address: addressInputElement.value,
            city: optionProvinceSelectionElement.value,
            district: optionDistrictSelectionElement.value,
            ward: optionWardsSelectionElement.value
        }
        signUpUser(newUser);
    }
})

// Thêm thông tin đăng nhập
loginBtnElement.addEventListener("click", () => {
    let userLogin = {
        password: loginPasswordInputElement.value,
        id: loginEmailInputElement.value,
        firstName: firstNameInputElement.value,
        lastName: lastNameInputElement.value,
        address: addressInputElement.value,
        city: optionProvinceSelectionElement.value,
        district: optionDistrictSelectionElement.value,
        ward: optionWardsSelectionElement.value
    }
    loginUser(userLogin);
})

const optionProvinceSelectionElement = document.getElementById("province-list");
const optionDistrictSelectionElement = document.getElementById("district-list");
const optionWardsSelectionElement = document.getElementById("ward-list");


// Vừa load trang phải gọi API để render danh sách tất cả các tỉnh
// API: https://provinces.open-api.vn/api/p/

async function getProvinceList() {
    // Gọi API để hiển thị danh sách tỉnh
    try {
        let res = await axios.get("https://provinces.open-api.vn/api/p/");
        //Sau khi có data thì hiển thị kết quả lên trên giao diện
        // console.log(res.data);
        renderProvinces(res.data);
        getProvinceCode(res.data);
    } catch (error) {
        console.log(error);
    }
}

function renderProvinces(provinces) {
    // Duyệt qua provinces -> tạo thẻ option -> gắn vào DOM
    for (const key of provinces) {
        const optionProvinceSelection = document.createElement("option");
        optionProvinceSelection.innerText = key.name;
        optionProvinceSelection.value = key.name;
        optionProvinceSelectionElement.appendChild(optionProvinceSelection);
    }
}


// Sau khi chọn tỉnh thành phố, gắn vào api để hiển thị ra Quận Huyện
// API: https://provinces.open-api.vn/api/p/1?depth=2

const getProvinceCode = (provinces) => {
    optionDistrictSelectionElement.addEventListener ("click", () => { 
        for (const key of provinces) { 
            if (optionProvinceSelectionElement.value == key.name) {
                getDistrictList(key.code);
            }
        }
    })
}


async function getDistrictList(districtCode) {
    // Gọi API để hiển thị danh sách tỉnh
    try {
        let res = await axios.get(`https://provinces.open-api.vn/api/p/${districtCode}?depth=2`);

        //Sau khi có data thì hiển thị kết quả lên trên giao diện
        renderDistricts(res.data.districts);
        getWardsCode(res.data.districts);
    } catch (error) {
        console.log(error);
    }
}

function renderDistricts(districts) {
    // Duyệt qua districts -> tạo thẻ option -> gắn vào DOM
    //bộ chọn not
    optionDistrictSelectionElement.innerHTML = "";
    for (const key of districts) {
            const optionDictrictSelection = document.createElement("option");
            optionDictrictSelection.innerText = key.name;
            optionDictrictSelection.value = key.name;
            optionDistrictSelectionElement.appendChild(optionDictrictSelection);
    }
}

// Sau khi chọn quận huyện, gắn vào api để hiển thị ra Thị xã
// API: https://provinces.open-api.vn/api/w/

const getWardsCode = (wards) => {
    optionWardsSelectionElement.addEventListener ("click", () => { 
        for (const key of wards) { 
            if (optionDistrictSelectionElement.value == key.name) {
                getWardList(key.code);
            }
        }
    })
}

async function getWardList(wardCode) {
    // Gọi API để hiển thị danh sách tỉnh
    try {
        let res = await axios.get(`https://provinces.open-api.vn/api/d/${wardCode}?depth=2`);

        //Sau khi có data thì hiển thị kết quả lên trên giao diện
        renderWards(res.data.wards);
    } catch (error) {
        console.log(error);
    }
}

function renderWards(wards) {
    optionWardsSelectionElement.innerHTML = "";
    // Duyệt qua districts -> tạo thẻ option -> gắn vào DOM
    for (const key of wards) {
        const optionWardSelection = document.createElement("option");
        optionWardSelection.innerText = key.name;
        optionWardSelection.value = key.name;
        optionWardsSelectionElement.appendChild(optionWardSelection);
    }
}


getProvinceList();

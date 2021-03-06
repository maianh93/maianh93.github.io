// const windowExceptSubMenu= document.querySelectorAll("window:not(.menu-dropdown);(.user-dropdown)")

// Hiển thị sub-nav menu

const dropdownMenuBtnElement = document.getElementById("menu-nav-btn");
const dropdownMenuElement = document.querySelector(".menu-dropdown");
const windowElement = document.querySelector(".fake-face");

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}


async function loadMainMenu() {
        try {
            const res = await callGetAllCategoriesAPI();
            renderProductDropdown(filterNotPromotion(res.data))
            renderPromotion(filterPromotion(res.data))
            console.log(res.data)
            checkLogin();
        } catch (error) {
            console.log(error);
        }
    }

const renderProductDropdown = (arr) => {
    if (arr.length == 0) {
        // mainMenuElement.innerHTML = "<li>Không có sản phẩm nào trong thực đơn</li>";
        return
    }
    let htmlContent = "";
    for (let i = 0; i < arr.length; i++) {
        let t = arr[i];

        htmlContent += `
        <a onclick="redirectPageDetail(${t.id}, '${t.descriptions.VN.text}')" class="dropdown-item">${t.descriptions.VN.text}</a>
        `
    }
    document.getElementById("product-dropdown").innerHTML = htmlContent;
}

const renderPromotion = (arr) => {
    if (arr.length == 0) {
        // mainMenuElement.innerHTML = "<li>Không có sản phẩm nào trong thực đơn</li>";
        return
    }
    let htmlContent = "";
    for (let i = 0; i < arr.length; i++) {
        let t = arr[i];

        htmlContent += `
        <a onclick="redirectPagePromotion(${t.id}, '${t.descriptions.VN.text}')" class="">Khuyến Mại</a>
        `
    }
    document.getElementById("promotion-menu").innerHTML = htmlContent;
}

const redirectPageDetail = (categoryId, categoryName) => {
    window.location = `/page/detail-menu.html?id=${categoryId}&name=${categoryName}`;
}

const redirectPagePromotion = (categoryId, categoryName) => {
    window.location = `/page/promotion-menu.html?id=${categoryId}&name=${categoryName}`;
}


dropdownMenuBtnElement.addEventListener("click", () => {   
    dropdownMenuElement.classList.toggle("disable");
    windowElement.classList.remove("disable");
});

windowElement.addEventListener("click", () => {
    dropdownMenuElement.classList.add("disable");
    windowElement.classList.add("disable");
})


// Hiển thị sub-nav user
const dropdownUserBtnElement = document.getElementById("user-nav-btn");
const dropdownUserElement = document.querySelector(".user-dropdown");


dropdownUserBtnElement.addEventListener('click', () => {   
    dropdownUserElement.classList.toggle("disable");
    windowElement.classList.remove("disable");
});

windowElement.addEventListener("click", () => {
    dropdownUserElement.classList.add("disable");
    windowElement.classList.add("disable");
})

const filterNotPromotion = (obj) => {
    let result = [];
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].point > 0) {
            result.push(obj[i]);
        }
    }
    return result;
}

const filterPromotion = (obj) => {
    let result = [];
    for (let i = 0; i < obj.length; i++) {
        if (obj[i].point < 0) {
            result.push(obj[i]);
        }
    }
    return result;
}

// if (isLogin()) {
//     console.log(document.getElementById("dropdown-user"))
//     document.getElementById("dropdown-user").innerHTML = `
//     <a class="dropdown-item" href="./user-info.html">Thông tin tài khoản</a>
//     <a class="dropdown-item" href="./user-info.html">Lịch sử đơn hàng</a>
//     <a id="log-out-btn" class="dropdown-item" href="./login.html">Đăng xuất</a>`
// } else {
//     document.getElementById("dropdown-user").innerHTML = `
//     <a class="dropdown-item" href="./login.html">Đăng nhập</a>
//     <a class="dropdown-item" href="./sign-up.html">Đăng ký</a>
//     `
// }

const checkLogin = () => {
    isLogin()
        .then(result => {
            if (result) {
                document.getElementById("user-nav-btn").innerHTML = `<img
                src="../public/image/anonymous-user.jpg"
                onerror="this.onerror=null;this.src='/resources/image/anonymous-user.jpg';"
                alt="Avatar" class="navbar-user-avatar-img" aria-labelledby="navbarDropdown_1">`
                document.getElementById("dropdown-user").innerHTML = `
                <a class="dropdown-item" href="./user-info.html">Thông tin tài khoản</a>
                <a class="dropdown-item" href="./order-info.html">Lịch sử đơn hàng</a>
                <a onclick = "setUndefinedToken()" id="log-out-btn" class="dropdown-item" href="./login.html">Đăng xuất</a>`
                return callGetAllOrderByUserIdAPI(localStorage.getItem("userId"));
            } else {
                document.getElementById("user-nav-btn").innerHTML = `<img
                src="../public/image/login-user-image.jpg"
                onerror="this.onerror=null;this.src='/resources/image/anonymous-user.jpg';"
                alt="Avatar" class="navbar-user-avatar-img" aria-labelledby="navbarDropdown_1">`
                document.getElementById("dropdown-user").innerHTML = `
                <a class="dropdown-item" href="./login.html">Đăng nhập</a>
                <a class="dropdown-item" href="./sign-up.html">Đăng ký</a>
                `
                return null;
            }
        })
        .then(res => {
            if (res) {
                let items = res.data[0].items;
                console.log(res.data)
                let cartNumber = items
                    .filter(i => i.quantity > 0)
                    .length;
                localStorage.setItem("cartItemCount", cartNumber);
                updateCartItemCount();
            }
        }) 
        .catch (error => {
            console.log(error)
        })

}


loadMainMenu()
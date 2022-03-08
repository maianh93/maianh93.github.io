// const windowExceptSubMenu= document.querySelectorAll("window:not(.menu-dropdown);(.user-dropdown)")

// Hiển thị sub-nav menu

const dropdownMenuBtnElement = document.getElementById("menu-nav-btn");
const dropdownMenuElement = document.querySelector(".menu-dropdown");
const windowElement = document.querySelector(".fake-face");

async function loadMainMenu() {
    try {
        const res = await callGetAllCategoriesAPI()
        renderProductDropdown(res.data)
        console.log(res.data)
        console.log(res.data[0].descriptions.VN.text)
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
        <a onclick="redirectPage(${t.id}, '${t.descriptions.VN.text}')" class="dropdown-item">${t.descriptions.VN.text}</a>
        `
    }
    document.getElementById("product-dropdown").innerHTML = htmlContent;
}

const redirectPage = (categoryId, categoryName) => {
    window.location = `/page/detail-menu.html?id=${categoryId}&name=${categoryName}`;
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

loadMainMenu()
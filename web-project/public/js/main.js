// const windowExceptSubMenu= document.querySelectorAll("window:not(.menu-dropdown);(.user-dropdown)")

// Hiển thị sub-nav menu

const dropdownMenuBtnElement = document.getElementById("menu-nav-btn");
const dropdownMenuElement = document.querySelector(".menu-dropdown");
const windowElement = document.querySelector(".fake-face");


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
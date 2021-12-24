const btnElement = document.querySelector(".brand-icon");
const menuElement = document.querySelector(".menu");
const navElement = document.querySelector("nav");



// Hiện nhưng không mượt
// btnElement.addEventListener("click", () => {
//     menuElement.classList.toggle("show");
// })

//Hiện mượt
let isShow = false;
btnElement.addEventListener("click", () => {
    // const heigh = navElement.clientHeight;
    const height = 270;

    isShow = !isShow;
    isShow ? menuElement.style.height = `${height}px` : menuElement.style.height = "0px";
})

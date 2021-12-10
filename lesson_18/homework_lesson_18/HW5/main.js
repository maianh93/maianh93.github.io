// Giá trị mặc định của counter ban đầu = 0
// Bấm vào Cộng tăng counter lên 1
// Truy cập btn cộng
const listOfnextBtn = document.getElementsByClassName('btn counterBtn nextBtn');
console.log(listOfnextBtn)
// Tạo event
const time = document.getElementById("counter");
// nextBtn.addEventListener('click', () => {
//     console.log("ssss");
// });
listOfnextBtn[0].addEventListener("click", () => {
    time.innerText = parseInt(time.innerText) + 1;
    if (time.innerText > 0) {
        document.body.classList = "";
        document.body.classList.add("green-background");
    } else if(time.innerText < 0) {
        document.body.classList = "";
        document.body.classList.add("red-background");
    } else {
        document.body.classList = "";
        document.body.classList.add("grey-background")
    }
});
// Bấm vào Trừ giảm counter đi 1
const listOfprevBtn = document.getElementsByClassName('btn counterBtn prevBtn');
// console.log(prevBtn)
listOfprevBtn[0].addEventListener("click", () => {
    time.innerText = parseInt(time.innerText) -1;
    if (time.innerText > 0) {
        document.body.classList = "";
        document.body.classList.add("green-background");
    } else if(time.innerText < 0) {
        document.body.classList = "";
        document.body.classList.add("red-background");
    } else {
        document.body.classList = "";
        document.body.classList.add("grey-background")
    }
});
// Nếu counter > 0 có màu green
// Nếu counter = 0 có màu #333333
// Nếu counter < 0 có màu red1 

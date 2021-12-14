// Giá trị mặc định của counter ban đầu = 0
// Bấm vào Cộng tăng counter lên 1
// Truy cập btn cộng
const listOfnextBtn = document.getElementsByClassName("btn counterBtn nextBtn");
console.log(listOfnextBtn)
const numberH1 = document.getElementById("counter");
console.log(numberH1)
// Tạo event
const time = document.getElementById("counter");
listOfnextBtn[0].addEventListener("click", () => {
    time.innerText = parseInt(time.innerText) + 1;
    changeColor();
});




// Bấm vào Trừ giảm counter đi 1
const listOfprevBtn = document.getElementsByClassName('btn counterBtn prevBtn');
// console.log(prevBtn)
listOfprevBtn[0].addEventListener("click", () => {
    time.innerText = parseInt(time.innerText) -1;
    changeColor();
});

const changeColor = () => {
    if (time.innerText > 0) {
        numberH1.style.color = "green";
    } else if(time.innerText < 0) {
        numberH1.style.color = "red";
    } else {
        numberH1.style.color = "#333333";
    }
}
// Nếu counter > 0 có màu green
// Nếu counter = 0 có màu #333333
// Nếu counter < 0 có màu red1 

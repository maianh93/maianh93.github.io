// ## Random Calculator
let numbers = [1,2,3,4,5,6,7,8,9,10];
let operators = ["+", "-", "*"]
let score = 0;
var timer = undefined;
const duration = 30;

const containersElement = document.querySelector("#container");
const primaryNumberElement = document.querySelector("#primary-number");
const secondaryNumberElement = document.querySelector("#secondary-number");
const operatorElement = document.querySelector("#operator");
const resultElement = document.querySelector("#result");
const timeElement = document.querySelector(".time");
const scoreElement = document.querySelector(".score");


// Ban đầu khi load trang web, random sẵn 2 số nguyên có giá trị trong khoảng **1 → 10**, và 1 phép tính trong 3 phép tính (+, -, *) để thực hiện tính toán
const renderPage = () => {
    resultElement.value = "";
    primaryNumberElement.innerHTML = numbers[Math.floor(Math.random() * 10)]; 

    secondaryNumberElement.innerHTML = numbers[Math.floor(Math.random() * 10)];

    operatorElement.innerHTML = operators[Math.floor(Math.random() * 3)];
}

// Thời gian chơi do học viên tự đặt, có thể 30s, 45s, 60s. Khi vào trang thì thời gian tự động đếm ngược (sử dụng **setInterval**)

const startTimer = () => {
    var minutes, seconds;
    timer = 30;
    setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        timeElement.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
            doTimeOut();
        }
    }, 1000);
}

// ![](./image/img-01.png)
// Khi chơi game người chơi thực hiện điền kết quả vào ô input, và thực hiện bấm **enter** để kiểm tra kết quả

const getResult = () => {
    let result = 0;
    if (operatorElement.innerHTML == "+") {
        result = Number(primaryNumberElement.innerHTML) + Number(secondaryNumberElement.innerHTML);
    } else if (operatorElement.innerHTML == "-") {
        result = Number(primaryNumberElement.innerHTML) - Number(secondaryNumberElement.innerHTML);
    }
    else {
        result = Number(primaryNumberElement.innerHTML) * Number(secondaryNumberElement.innerHTML);
    }
    return result;
}



// **Nếu kết quả đúng**, lúc này random 2 số và phép tính khác đồng thời điểm của người chơi tăng lên 1
// **Nếu ô input để trống**, thì thông báo cho người chơi (Ví dụ: "**Kết quả không được để trống**")

// **Nếu kết quả sai** thì cho phép người chơi trả lời lại câu hỏi đó
scoreElement.innerHTML = `<span class="score">0</span></div>`;
resultElement.addEventListener("keypress", ( (event) => {
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if (keycode == '13') {
        if (resultElement.value === "") {
        alert("Kết quả không được để trống!")
        }  else {
            let result = getResult();
            if (resultElement.value == result) {
                score += 1;
                scoreElement.innerHTML = `<span class="score">${score}</span></div>`;
                timer = duration;
                renderPage();   

            } else {
                resultElement.value = "";
            }
        }
        
    }
}))


// ![](./image/img-02.png)

// Khi **thời gian đếm ngược = 0**, lúc này thông báo điểm của người chơi đã đạt được

// ![](./image/img-03.png)
const doTimeOut = () => {
    alert(`Số điểm bạn đạt được là : ${score}`)    
}

const main = () => {
    renderPage(); 
    startTimer();
};

main();

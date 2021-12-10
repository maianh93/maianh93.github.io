const heading = document.getElementById ("heading");
console.log(heading.classList);
console.log(heading.classList.length);
console.log(heading.classList[0]);


//Thêm class
heading.classList.add("text-big", "text-color");

//Xóa class
heading.classList.remove("text-big", "text-color");

//contain: Kiểm tra 1 class có tồn tại trong phần tử hay không -> boolean
console.log(heading.classList.contains("text-big"));
console.log(heading.classList.contains("text-red"));

//toogle: Kiểm tra 1 class có tồn tại trong phần tử hay không -> Nếu có: xóa đi, nếu không: thêm vào

// Thực hiện lặp đi lặp lại 1 công việc, sau 1 khoảng thời gian được chỉ định(ms)
// let count = 0;
// let interval = setInterval(function () {
//     heading.classList.toggle("text-red");
//     count++
    
//     if(count == 10) {
//         // Xóa setInterval
//         clearInterval(interval)
//     }
// }, 1000) //1000ms = 1s

let time = 10;
let interval = setInterval(function (){
    //Giảm thời gian đi 1
    time--
    // Cập nhật lên html
    document.querySelector('#time span').innerText = time;
    // Nếu về 0 thì dừng lại
    if (time == 0) {
        heading.classList.remove("text-hide");
        document.querySelector('#time').classList.add("text-hide");
        clearInterval(interval)
    }
}, 100)

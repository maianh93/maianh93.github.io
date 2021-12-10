// //Cách 1
// const sayHello = () => {
//     alert ("Xin chào các bạn 1");
// }

// //Cách 2
// const btn2 = document.getElementById("btn-2");
// // btn2.onclick = function () {
// //     alert("Xin chào các bạn 2")
// // }
// btn2.onclick = sayHello2;
// function sayHello2 () {
//     alert("Xin chào các bạn 2");
// }

// //Cách 3
// const btn3 = document.getElementById("btn-3");
// // btn3.addEventListener('click', function() {
// //     alert("Xin chào các bạn 3");
// // })

// btn3.addEventListener('click', sayHello3);

// function sayHello3() {
//     alert("Xin chào các bạn 3");
// }

// //Mouse event

// document.addEventListener("mousemove", function (event) {
//     // Xóa tất hình trong đi sau đó mới tạo
//     const boxes = document.querySelectorAll('.box')
//     Array.from(boxes).map(box => document.body.removeChild(box))

//     // Tạo thẻ div
//     const box = document.createElement("div");

//     // Thêm class box cho thẻ div vừa tạo
//     box.classList.add("box");

//     // Cập nhật vị trí tại nơi ấn chuột
//     box.style.top = `${event.offsetY - 50}px`;
//     box.style.left = `${event.offsetX - 50}px`;

//     // Gắn vào DOM
//     document.body.appendChild(box);
// });

// document.addEventListener('mousedown', function(){
//     console.log('mousedown'); // ấn chuột xuống
// });

// document.addEventListener('mouseup', function(){
//     console.log('mouseup'); //nhả chuột ra
// });

// document.addEventListener('mousemove', function(){
//     console.log('mousemove'); //di chuột
// });

//Keyboard event
// document.addEventListener('keydown', function(event){
//     console.log(event); // ấn bàn phím
//     if (event.keyCode == 13) {
//         console.log("Bạn rất đẹp trai");
//     } else {
//         console.log("Bấm phím enter đi, có điều bất ngờ đó!!!")
//     }
// });

// document.addEventListener('keyup', function(){
//     console.log('keyup'); //nhả bàn phím
// });

// document.addEventListener('keypress', function(){
//     console.log('keypress'); //giữ chuột
// });

//Sự kiện scroll
const btn = document.getElementById('btn');
window.addEventListener('scroll', function(){
    // console.log(scroll);
    if (document.documentElement.scrollTop > 300) {
        btn.classList.remove('hide');
    } else {
        btn.classList.add('hide');
    }
})

btn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

// Lập trình đồng bộ

// Có 2 công việc: cv1, cv2


// Thực hiện trong 3s
const funcA = () => {
    console.log("one");
}


// Thực hiện trong 4s
const funcB = () => {
    console.log("two");
}

// Tổng thời gian thực hiện: 7s
// funcA();
// funcB();

// Lập trình bất đồng bộ
const funcC = () => {
    setTimeout(function() {
        console.log("three");
    }, 3000)
}

const funcD = () => {
    setTimeout(function() {
        console.log("four");
    }, 5000)
}

// Tổng thời gian thực hiện: 5s
// funcD()
// funcC()
// funcB()

// Để xử lý lập trình bất đồng bộ:
//1. Callback function
//2. Promise
//3. Async await

// == 1. Callback function
// funcA, funcB
// const funcA = (funcB) => {
//     //...
//     funcB()
// }

// let arr = [1,2,3,4,5];

// arr.forEach(function(value) {
//     console.log(value);
// })

// Mô tả về hoạt động hàng ngày
//1. Làm bài tập: 3s
//2. Đá bóng: 4s
//3. Nấu cơm: 5s

const doTask1 = (name, callBack) => {
    console.log("Bắt đầu công việc");
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function(){
        callBack()
    }, 3000)
}

const doTask2 = (name, callBack) => {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function(){
        callBack()
    }, 4000)
}

const doTask3 = (name, callBack) => {
    console.log(`Thực hiện công việc ${name}`);
    setTimeout(function(){
        callBack()
    }, 5000)
}

const finish = () => {
    console.log ("Kết thúc công việc")
}

doTask1("Làm bài tập", function() {
    doTask2("Đá bóng", function() {
        doTask3("Nấu cơm", finish)
    })
})

// doTask1("Làm bài tập", function() {
//     console.log("Làm bài tập xong");
// })

// doTask2("Đá bóng", function() {
//     console.log("Đá bóng xong");
// })

// doTask3("Nấu cơm", function() {
//     console.log("Nấu cơm xong");
// })

// Nếu nhiều công việc => dẫn đến tình trạng callback hell
// Để khắc phục tình trạng callback hell => Dẫn đến sự ra đời của promise (ES6);
// == 2. Promise
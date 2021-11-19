// Định nghĩa function

function sayHello() {
    console.log("Xin chào các bạn");
}

//Thực thi function
sayHello()

// Định nghĩa function với tham số
function sayHellowithName(name) {
    console.log(`Xin chào ${name}`);
}

sayHellowithName("Phạm Văn Thiên");
sayHellowithName("Phùng Mai Anh");

let name = "Nguyễn Văn A";
sayHellowithName(name);

// Viết function in ra message
// Xin chào -name-, năm nay -age- tuổi


function sayHellowithNameandAge(name, age) {
    sayHellowithName(name)
    console.log(`Xin chào ${name}, năm nay ${age} tuổi`);
}
sayHellowithNameandAge("Phùng Mai Anh", 27);
sayHellowithNameandAge("Phùng Mai Anh", 27);
sayHellowithNameandAge("Phùng Mai Anh", 27);
sayHellowithNameandAge("Phùng Mai Anh", 27);
sayHellowithNameandAge("Phùng Mai Anh", 27);

let fullName = "Phùng Mai Anh";
let age = 27;
sayHellowithNameandAge(fullName, age);

// Tính tổng 2 số a và b

// Định nghĩa
function sum(a, b) {
    return a + b;
}
//Thực thi
let data = sum(3, 4) //=>7
console.log(data);

let data1 = sum(data, 10);
console.log(data1)

// Quick
//1
function sayHello() {
    console.log(`Xin chào các bạn`)
}
sayHello()
//2,3
function sayHelloName(name) {
    console.log(`Xin chào ${name}`)
}
sayHelloName("Phùng Mai Anh");

//4
function sum(b, c) {
    return b + c;
}
let result = sum(9, 10);
console.log(result);
//5
function square(d, e) {
    return d ** e
}
let data3 = square(3, 2);
console.log(data3);
//6
function square2(d) {
    return d ** 2
}
let data4 = square2(3);
console.log(data4);
//7
function year(f) {
    return ((f - f % 100) / 100) + 1;
}
let data5 = year(2051);
console.log(data5)

//8
function perimeter(a) {
    return a * 3.14
}
console.log(perimeter(20));

//9
function area(n) {
    return 3.14 * (((n * 3.14)) ** 2)
}
console.log(area(30))
//10
function exchange(k) {
    return k / 100
}
console.log(exchange(20))
//11
function exchange1(l) {
    return l / 60
}
console.log(exchange1(150))
//12
function equation(a, b, c) {
    return (c - b) / a
}
console.log(equation(3, 4, 5))
//13
function exchange2(b) {
    return ((b * 1.8) + 32)
}
console.log(exchange2(37))
//14

//Phạm vi sử dụng của biến
{
    let number = 10;
    console.log(number + 10);
}
// console.log (number +10)

// Định nghĩa
function sum(a = 10, b = 20) {
    return a + b;
}
//Thực thi
let data10 = sum() //=>7
console.log(data10);

//boolean: dùng để hiển thị tính đúng sai của 1 biến, 1 biểu thức, 1 function
// let a = true;
// let b = false;
// let c = !a;
// let d = !b;

// console.log (a,b,c,d)

let a = 5;
console.log(Boolean(a));

console.log(Boolean(sum(3, 4) > 10))

//Truthy Falsy: Quan trọng

//Câu lệnh điều kiện

let hour = 6;
if (hour < 10) {
    console.log(`Good morning`)
}

let ages = 15;
// if(ages < 18){
//     console.log (`Tuổi teen`);
// } else {
//     console.log(`Tuổi trưởng thành`);
// }
if (ages < 18) {
    console.log(`Tuổi teen`);
} else if (ages >= 18 && ages < 50) {
    console.log(`Tuổi trưởng thành`)
} else {
    console.log(`Tuổi già`)
}


//Quick

function gomark(mark) {
    if (mark >= 85) {
        console.log(`A`);
    } else if (mark >= 70 && mark < 85) {
        console.log(`B`);
    } else if (mark >= 40 && mark < 70) {
        console.log(`C`)
    } else {
        console.log(`D`)
    }
}

gomark(100)

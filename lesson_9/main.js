console.log ("Xin chào");

// Khai báo biến

let number
console.log(number);

number = 10;
console.log (number);

// Vừa khai báo biến, vừa khởi tạo giá trị

let email = "maianhphung291093@gmail.com";
console.log (email);

// Khai báo biến sử dụng const

const pi = 3.14;
console.log (pi);

let age

// pi = 4;

// Kiểm tra dữ liệu của 1 biến
console.log(typeof number); // -> "number"
console.log(typeof email); // -> "string"
console.log(typeof age); // -> "undefined"

age = 30;
console.log(typeof age);

age = "40"
console.log(typeof age);

// Khai báo chuỗi rỗng
let strEmpty = "";

let firstName = "Nguyễn";
let lastName = "An";
let fullName = firstName + " " + lastName;
console.log(fullName);

let message = "\"Hà Nội\" hôm nay trời đẹp lắm";
console.log(message);

// Template string: Important
// ``
// Cho phép truyền biến, biểu thức, giá trị,...

let message1 = `\"Hà Nội\" hôm nay trời đẹp lắm`;
console.log(message1);

let year = 1990;
let text = `Xin chào ${fullName}. Năm nay ${2021-year} tuổi`
console.log(text);

//Number
let num1 = 10;
let num2 = 3;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); //lấy phần dư
console.log(num1 ** num2); //lũy thừa
console.log(Math.PI);
//Math.floor: làm tròn xuống số nguyên gần nhất
//Math.cel: làm tròn lên số nguyên gần nhất

//Kết hợp string + number
console.log("Hello" + 1); //"Hello" + "1"
console.log("4" - 1); // 4-1
console.log("4" - "1");// 4-1
console.log("Hello" - 1);//naN Not a number

console.log(typeof(7)+1)

let a=1;
let b=22;
let name="John";
alert (`1+2=${a+b}`);

let numberA = 1;
let numberB = 2;
console.log (`numberA + number B = ${numberA + numberB}`);

//Array
let arr = [];
arr[0] = 1;
arr[1] = "hello";
arr[2] = true;

console.log(arr); //Cách 1

let number = [1,2,3,4,5];
console.log(number); //Cách 2

console.log(number[0]);
console.log(number[4]);
console.log(number[number.length - 1]); //thường được sử dụng nhiều hơn

//Array là kiểu tham chiếu (tham chiếu đến nhau - thay đổi 1 phần tử, những phần tử được tham chiếu cũng thay đổi)
let number1 = number;
// number1[0] = 10;

console.log(number1);
console.log(number);

//So sánh
let number2 = [1,2,3,4,5];
console.log(number2)

console.log(number == number1); //true
console.log(number == number2); //false
console.log(number1 == number2); //false
console.log(number == "1,2,3,4,5"); // true

//tìm hiểu value type (so sánh về mặt giá trị); reference type (so sánh tham chiếu)

//Duyệt mảng
let sum = 0; //Cộng mảng
for (let i = 0; i<number.length; i++) {
    if(number[i]%2 == 1) {
        sum += number[i];
    }
}

console.log(sum)

//Bài tập
//Kiểm tra mảng có phải là mảng tăng dần hay không
function checkArrayASC(arr) {
    for (let i=0; i<arr.length-1; i++) {
        if(arr[i]>arr[i+1]) {
            return false;
        }
    }
    return true;
}

console.log(checkArrayASC([5,2,3,4,1]))

//Kiểm tra mảng có phải là mảng giảm dần hay không
function checkArrayDESC(arr) {
    for (let i=0; i<arr.length-1; i++) {
        if(arr[i]<arr[i+1]) {
            return false;
        }
    }
    return true;
}

console.log(checkArrayDESC([5,4,3,2,3]))

//Kiểm tra mảng có phải là mảng số chẵn tăng dần hay không
function checkArrayEvenASC(arr) {
    for (let i=0; i<arr.length-1; i++) {
        if (arr[i]%2 == 1) {
            return false;
        }
    } return checkArrayASC(arr);
}

console.log(checkArrayEvenASC([2,6,8,10]))

// Kiểm tra mảng có phải là mảng số lẻ giảm dần hay không
function checkArrayOddDESC(arr) {
    for (let i=0; i<arr.length-1; i++) {
        if (arr[i]%2 == 0) {
            return false;
        }
    } return checkArrayDESC(arr);
}

console.log(checkArrayOddDESC([8,5,3,1]))

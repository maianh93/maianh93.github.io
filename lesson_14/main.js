// Về tìm hiểu ES6 là gì: let/const; template string; default parameter; spread operator; rest parameter
// spread operator: duỗi ra thành chuỗi
console.log(...[1,2,3,4])
console.log(..."Hello")
console.log([..."Hello"])//=
console.log("Hello".split(""))

// rest parameter: thu vào thành mảng

// Nối mảng
let arr = [1,2,3];
let arr1 = [4,5,6];
let arr2 = arr.concat(arr1);
console.log(arr2)
//=
let arr3 = [...arr,...arr1]; //Toán tử ...
console.log(arr3)

//rest parameter: gom những tham số truyền vào, không giới hạn tham số truyền vào
function sum(...number) {
    console.log(number)
}

sum(1,2,3)
sum(1,2,3,4,5,6,7)

// Khái niêm về first-class function
// Chúng ta có thể gán 1 function cho 1 biến
let sum1 = function(a,b) {
    return a + b
}
console.log(sum1(3,4))

//làm lại bài 3 theo cách này

// higher order function (HOC) (về tìm hiểu)
// (Có thể truyền 1 function vào 1 function khác để làm tham số
// function có thể trả về 1 function)

// Arrow Function ///
// function expression
// const sum = function (a,b) {
//     return a + b;
// };
// //Anonymous function: function không có tên

// //=> Arrow function đầy đủ
// const sum1 = (a,b) => {
//     return a + b
// }
// => lược bớt đối với những trường hợp đơn giản, chỉ có 1 câu lệnh return
const sum2 = (a,b) => a + b;
//VD
const arrayMax = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }  
    return max;
}
console.log(arrayMax([40, 100, 1, 5, 25, 10]))

//Bài tập
//Bài 1: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?
// checkElementExist([1,2,3,4,5], 5) => true
// checkElementExist([1,2,3,4,5], 6) => false
const checkElementExist = (arr,number) => {
    return arr.includes(number)
}

console.log(checkElementExist([1,2,3,4,5], 5))

//Bài 2: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào
// getElementGreater([1,2,3,4,5], 3) => [4,5]
// getElementGreater([1,2,3,4,5], 5) => []
const getElementGreater = (arr,number) => {
    let result = [];
    for (let i=0; i<arr.length; i++) {
        if (arr[i]>number) {
            result.push(arr[i])
        }
    }
    return result;
}

console.log(getElementGreater([1,2,3,4,5], 3))
console.log(getElementGreater([1,2,3,4,5], 5))

//Bài 3: Viết function để tạo mã màu HEX ngẫu nhiên.
// randomHexCode() => #728a98
// randomHexCode() => #a72938 
const randomHexCode = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i=0; i<6; i++) {
      color = color + letters[Math.floor(Math.random() * 16)]; //tìm số ngẫu nhiên trong 1 khoảng cố định, giá trị trả về là từ 0-15
    }
    return color;
}
console.log(randomHexCode())

// Bài 4: Viết function để tạo mã màu RGB ngẫu nhiên.
// randomRgbCode() => rgb(213,43,133)
// randomRgbCode() => rgb(12,32,122)
const randomRgbCode = () => {
    let rValue = Math.floor(Math.random() * 256);
    let gValue = Math.floor(Math.random() * 256);
    let bValue = Math.floor(Math.random() * 256);
    return `rgb (${rValue}, ${gValue}, ${bValue})`
}
console.log (randomRgbCode())

//forEach, for...of
let number = [1,2,3,4,5,6]
let total = 0;

//Sử dụng for
for (let i = 0; i < number.length; i++) {
    total += number[i];
}
console.log (total)


//Sử dụng forEach
let total1 = 0;
number.forEach(function(value) {
    //console.log (value, index);
    total1 += value
})
console.log (total1)

//Tính tổng sử dụng array function + forEach
let total2 = 0;
number.forEach((value) => total2 += value)
console.log (total2)

//for ... of
let total3 = 0;
for (const value of number) {
    //console.log(value)
    total3 += value
}
console.log(total3)

// Các biến thể khác của for : map, reduce, filter, some, every, find, findIndex
//Về nhà tìm hiểu trước : map, filter

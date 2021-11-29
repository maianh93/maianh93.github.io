// Tìm số lớn nhất trong mảng
function arrayMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }  
    return max;
}
console.log(arrayMax([40, 100, 1, 5, 25, 10]))

// Tìm số nhỏ nhất trong mảng
function arrayMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }  
    return min;
}
console.log(arrayMin([40, 100, 1, 5, 25, 10]))

// Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số
// dư tương ứng khi chia mảng cũ cho 2
// Vd : [4,2,5,6,2,7] => [0,0,1,0,0,1]
function remainderResult(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] % 2);
    }
    return result;
}
console.log(remainderResult([1,2,3,4,5]))

// Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần
function repeatString(arr) {
    let result = [];
    for (let i = 0; i < 10; i++) {
        result = result.push(arr);
    }
    return result.join("")
}
console.log(repeatString(["a"]))

// Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu
// gạch ngang.
// Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'
function repeatString(arr) {
    let result = [];
    for (let i = 0; i < 10; i++) {
        result = result.push(arr);
    }
    return result.join("-")
}
console.log(repeatString([1, 2, 3]))


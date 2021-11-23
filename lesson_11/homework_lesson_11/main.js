//Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.
function repeatString(str) {
    let string = "";
    for (let i = 0; i < 10; i++) {
        string = string + str 
    }
    return string
}

//Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang
function repeatString1(str) {
    let string = str;
    for (let i = 0; i < 9; i++) {
        string = string + "-" + str;
    }
    return string;
}

// Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.
function repeatString2(str, time) {
    let string = str;
    for (let i = 0; i < time - 1; i++) {
        string = string + "-" + str;
    }
    return string;
}

// Tính tổng các số chia hết cho 5 từ 0 -> 100
function sumOfNumbersDivisibleby5And10 () {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 5 == 0 && i % 10 == 0) {
            sum = sum + i
        }
    }
    return sum
}

//Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
function calculateSphereVolume(radius) {
    return 4/3 * Math.PI * Math.pow(radius, 3);
}

// Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với
// tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).
// Note : Kết quả xuôi và ngược là như nhau
function sumRange(fromNumber, toNumber) {
    return (fromNumber + toNumber)*(Math.abs(fromNumber - toNumber) + 1)/2 - (fromNumber + toNumber);
}

// Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.
function testPrimeNumber(number) {
    if (number < 1) {
        return false
    }

    if (!Number.isInteger(number)) {
        return false
    }
    if (number == 2) {
        return true
    }
    for (let i = 3; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

// Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham
// số truyền vào.
function sumOfPrimeNumber(number) {
    let result = 0;
    for (let i = 1; i <= number; i++) {
        if (testPrimeNumber(i)) {
            result = result + i
        }
    }
    return result;
}

// Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.   
function sumOfDivisor(number) {
    let result = 0;
    for (let i = 1; i <= number; i++) {
        if (number % i == 0) {
            result = result + i;
        }
    }
    return result;
}

//Function testing...
console.log("repeatString(a): " + repeatString("a"));
console.log("repeatString1(b): " + repeatString1("b"));
console.log("repeatString2(a,5): " + repeatString2("a",5));
console.log("-------------------");
console.log("calculateSphereVolume(10): " + calculateSphereVolume(10));
console.log ("sumOfNumbersDivisibleby5And10(): " + sumOfNumbersDivisibleby5And10());
console.log("-------------------");
console.log("testPrimeNumber(25): " + testPrimeNumber(25));
console.log("sumOfPrimeNumber(7): " + sumOfPrimeNumber(7));
console.log("-------------------");
console.log("sumRange(8, 10): " + sumRange(8, 10));
console.log("sumRange(7, 10): " + sumRange(7, 10));
console.log("sumRange(10, 6):" + sumRange(10, 6));
console.log("-------------------");
console.log ("sumOfDivisor(5): " + sumOfDivisor(5));
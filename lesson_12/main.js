//Bài 1: Viết function truyền vào 1 số nguyên dương. Tính giai thừa của số đó
// Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120
function calculateFactorial(number) {
    if (number == 0 || number == 1) {
        return 1;
    }
    let result = 1;
    if (number > 1) {
        return result = calculateFactorial (number -1) * number;
    }
}

console.log (calculateFactorial (5))

// Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
// Ví dụ: reverseString('hello') => olleh
function reverseString(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result = str[i] + result;
    }
    return result;
}
console.log (reverseString ("hello"))

// Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là "Xin chào", tương ứng với mã quốc gia được truyền vào
// Ví dụ: translate('VN') => "Xin chào"
// translate('EN') => "Hello"




// Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu "..." ở cuối chuỗi.
// Ví dụ : subString("xinchaocacbandenvoiTechmaster") => "xinchaocac..."



// Bài 5: viết function in ra màn hình các số từ 1 đến 100 sao cho những giá trị là chẵn sẽ có màu xanh, những giá trị là lẻ có màu đỏ.

// Gợi ý: sử dụng document.write để in ra ngoài giao diện



// function print(row, col) {
//     let html = "";
//     for (let i = 0; i < row; i++) {
//         for (let j = 0; j < col; j++) {
//             html += "* "
//         }
//         html += '<br />'
//     }
//     document.write(`<pre>${html}</pre>`)
// }
// print(5,4)

function print(row, col) {
    let html = "";
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (i == 0 || j == 0 || i == row - 1 || j == col - 1) {
                html += "* ";
            } else {
                html += "  ";
            }
        }
        html += "<br />";
    }

    document.write(`<pre>${html}</pre>`);
}
print(5,4)

function printX(n) {
    let html = "";
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (i == j || i == n - j - 1) {
                html += "* ";
            } else {
                html += "  ";
            }
        }
        html += "<br />";
    }
    document.write(`<pre>${html}</pre>`);
}
printX(7);


// Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false
// Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra
// Ví dụ:
// checkStringExist("i love you", "you") => true
// checkStringExist("i love you", "hate") => false
function checkStringExist(str, substring) {
    if (str.indexOf(substring) > 0) {
        return true;
    } else {
        return false; 
   }
}

console.log(checkStringExist("Phung Mai Anh", "Mai Anh"))
console.log(checkStringExist("i love you", "hate"))

// Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên
// Ví dụ:
// shortenString("Xin chào các bạn") => "Xin chào..."
// shortenString("hello') => "hello"    
function shortenString (str) {
    if (str.length > 8) {
        return str.substring(0, 8) + "...";
    } else {
        return str;
    }
}
console.log(shortenString ("Phùng Mai Anh"))
console.log(shortenString("hello"))


// Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.
// Ví dụ
// "Race car" => true,
// "hello world" => false.
function isSymmetry(someString) {
    let i = 0;
    let j = someString.length - 1;
    let result = true;
    for (;;) {
        for (; i < someString.length; i++) {
            if (someString[i] !== " ")
                break;
        }

        for (; j >= 0; j--) {
            if (someString[j] !== " ")
                break;
        }

        if (i >= j)
            break;
            
        if (someString[i] !== someString[j]) {
            result = false;
            break;
        } else {
            i++;
            j--;
        }
    } 
    return result;
}
console.log("isSymmetry: " + isSymmetry(" 2 734 1   1 437 2"));


// Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).

// Ví dụ

// 53751 -> 13557
// 14350 -> 10345
// 203950 -> 200359

function splitNumber(number) {
    let arr = [];
    let c = number;
    while (c != 0) {
        let m = c % 10;
        arr.push(m);
        c = Math.floor(c/10); 
    }
    return arr.reverse();
}

function mergeNumber(numberArr) {
    let result = 0;
    let n = 1;
    for (let i = numberArr.length - 1; i >= 0; i--) {
        result = result + numberArr[i] * n;
        n = n * 10;
    }
    return result;
}

function convertToSmallestNum(number) {
    let arr = splitNumber(number);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (arr[j] > arr[i]) {
                let temp = arr[j];
                arr[j] = arr[i];
                arr[i] = temp;
            }
        } 
    }
    if (arr.length > 2) {
        if (arr[0] == 0) {
            arr[0] = arr[1];
            arr[1] = 0;
        }
    }
    return mergeNumber(arr);
}
console.log(convertToSmallestNum(1203123));


// Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường

// Ví dụ:

// "HELLO world" => "hello_world"
// "Xin Chào Các BẠN" => "xin_chào_các_bạn"

function convertPhraseIntoLowerCaseSnakeCase(phrase) {
    let result = phrase.toString();
    result = result.toLocaleLowerCase();
    result = result.replaceAll(" ", "_");
    return result;
}
console.log(convertPhraseIntoLowerCaseSnakeCase("hello Js toi la Mai Anh PhÙng"));

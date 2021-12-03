// Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.

// Hãy cẩn thận trường hợp trong mảng có nhiều số lớn nhất

// // Ví dụ:
// max2Numbers([2, 1, 3, 4]) => 3
// max2Numbers([2, 1, 4, 3, 4]) => 3
// Duỗi mảng thành 1 chuỗi
// Dùng hàm sort để return tìm xem số nào lớn hơn
// Gán giá trị max là giá trị đầu tiên của mảng
// Gán giá trị cần tìm là giá trị rỗng
// Sử dụng vòng lặp qua mảng, chạy tới từng giá trị của mảng, ví dụ giá trị newArr[0] là max, thì giá trị nào nhỏ hơn sẽ là giá trị nhì, ra khỏi vòng lặp và trả về kết quả newArr[i]
// Nếu không đúng thì sẽ trả kết quả rỗng và chạy lại vòng lặp
const max2Numbers = (arr) => {
    let newArr = [...arr]
    newArr.sort((a, b) => - (a - b));
    let max = newArr[0];
    let result = null;
    for (let i = 1; i < newArr.length; i++) {
        if (max > newArr[i]) {
            result = newArr[i];
            break;
        }
    }
    return result;
}
console.log(`Số lớn thứ nhì của mảng là: ${max2Numbers([2, 1, 3, 4, 4])}`)
// Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

// // Ví dụ:
// getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']) => ['aba', 'vcd'].
// Chuyển đổi mảng bằng để lấy về 1 mảng mới có giá trị độ dài của biến
// Dùng hàm sort để return xem độ dài nào lớn hơn
// Gán độ dài lớn nhất là độ dài tại vị trí đầu tiên
// Dùng filter để chạy qua các phần tử của mảng và trả về một mảng với điều kiện giá trị độ dài của mảng bằng độ dài lớn nhất của mảng
const getStringHasMaxLength = (arr) => {
    let lenghtArr = arr.map((value) => value.length);
    lenghtArr.sort((a, b) => - (a - b));
    let lenghtOfLongestString = lenghtArr[0];
    let result = arr.filter((value) => value.length == lenghtOfLongestString);
    return result;
}
console.log("Các chuỗi có độ dài lớn nhất là:")
console.log(getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']))

// Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó

// // Ví dụ:
// getRandomElement([3, 7, 9, 11]) => 3
// getRandomElement([3, 7, 9, 11]) => 9
// Truyền vào function 1 mảng
// Sử dụng hàm Math.floor(Math.random() * arr.length) để lấy 1 giá trị ngẫu nhiên với khoảng giá trị là từ 0 đến độ dài của mảng
// Kết quả trả ra vị trí của phần tử thứ "ngẫu nhiên" trong mảng
const getRandomElement = (arr) =>  {
    let result;
    result = arr[Math.floor(Math.random() * arr.length)];
    return result;
}
console.log(`Phần tử ngẫu nhiên từ mảng là: ${getRandomElement([3, 7, 9, 11])}`)

// Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó

// // Ví dụ:
// similarity([1, 2, 3], [1, 2, 4]) => [1,2]
// similarity([1, 2, 3], [3, 4, 5]) => [3]
// Sử dụng includes để tìm 1 giá trị trong arr2
// Sử dụng filter để trả về kết quả là 1 mảng có các giá trị đã tìm trong arr2, nếu có trong arr1 thì thêm vào kêt quả
const similarity = (arr1, arr2) => {
    result = [];
    result = arr1.filter(value => arr2.includes(value));
    return result;
}
console.log("Mảng chứa các phần tử xuất hiện trong cả hai mảng truyền vào là:")
console.log(similarity([1, 2, 3], [1, 2, 4]))

// Bài 5 (2 điểm). Viết function truyền vào 2 tham số:

// Tham số 1: Là 1 chuỗi thời gian (t) có dạng "giờ:phút:giây"
// Tham số 2: Là 1 số x <= 1000
// Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.

// // Ví dụ: 
// getTime("9:20:56", 7) => "9:21:3"
// Gợi ý : Hãy quy đổi ra thời gian từ hh:mm:ss ra giây => tính toán => Quy đổi ngược lại từ giây ra hh:mm:ss
// const getTime = ()
// Gán giá trị date là giá trị truyền vào
// Sử dụng hàm setSeconds để trả về giá trị giây + tham số secondsAfter truyền vào
// Trả kết quả là giờ : phút: giây(là giá trị thời gian mới sau khi cộng với tham số truyền vào)
// Các hàm getHours, getMinutes, getSeconds được sử dụng để lần lượt lấy ra các giá trị giờ, phút, giây.
const getTime = (time, secondsAfter) => {
    let date = new Date(`01-01-2021 ${time}`);
    date.setSeconds(date.getSeconds() + secondsAfter);
    let result = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
    return result;
}
console.log(`Chuỗi biểu thị thời gian sau x giây kể từ thời điểm t là: ${getTime("9:20:56", 7)}`)

// Bài 6 (2 điểm). Cho mảng users như sau:

users = [
    {
        name : "Bùi Công Sơn",
        age : 30,
        isStatus : true
    },
    {
        name : "Nguyễn Thu Hằng",
        age : 27,
        isStatus : false
    },
    {
        name : "Phạm Văn Dũng",
        age : 20,
        isStatus : false
    }
]
// Viết function truyền vào 1 mảng các object user lấy ra những user có age > 25 và isStatus = true
//filter lấy kết quả sao cho thỏa mãn điều kiện age>25 và isStatus = true
const listOfAgeAndIsstatus = (arr) => {
    return arr.filter(e => (e.age > 25 && e.isStatus == true))
}
console.log("Mảng các object user lấy ra những user có age > 25 và isStatus = true là:")
console.log(listOfAgeAndIsstatus(users))

// Viết function truyền vào 1 mảng các object user. Hãy sắp xếp mảng users có age tăng dần
// Truyền vào 1 hàm result để không làm thay đổi arr cũ
// Dùng hàm sort để return ra 1 số, nếu e1.age > e2.age thì return ra số dương => là mảng có age tăng dần
// Trả về kết quả mảng đã sắp xếp
const sortByAge = (arr) => {
    let result = [...arr];
    return result.sort((e1, e2) => {
        return e1.age - e2.age;
    });
}
console.log("Mảng users có age tăng dần là:")
console.log(sortByAge(users))


// Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

// getCountElement(["one", "two", "three", "one", "one", "three"])

// // Kết quả

// {
//     one : 3,
//     two : 1,
//     three : 2
// }
// Gọi 2 biến uniqueValueArr và result là mảng rỗng
// Chạy các giá trị trong mảng truyền vào, nếu giá trị chưa có trong uniqueValueArr thì thêm giá trị đó vào mảng uniqueValueArr, kết quả trả về là các mảng sao cho mỗi mảng chỉ có 1 giá trị duy nhất
// Sau khi đã thêm giá trị vào mảng uniqueValueArr, thì chạy lọc các giá trị bằng hàm filter để trả kết quả là các mảng mới (a) có giá trị giống nhau
// Gán hàm đếm giá trị của các mảng trên, chính là độ dài của các mảng mới (a)
// Sử dụng hàm parse để chuyển sang kiểu dữ liệu object, truyyền vào các giá trị value và count
// Mỗi lần chạy xong thì thêm vào mảng result, ra kết quả là result
const getCountElement = (arr) => {
    let uniqueValueArr = [];
    let result = [];

    arr.forEach((value) => {
        if (uniqueValueArr.indexOf(value) === -1) {
            uniqueValueArr.push(value);
        }
    });
    uniqueValueArr.forEach((value1) => {
        let tempArr = arr.filter((value2) => value1 === value2);
        let count = tempArr.length;
        let jsonObj = JSON.parse(`{"${value1}": ${count}}`);
        result.push(jsonObj);
    });

    return result;
}
console.log(`Object hiển thị số lần mỗi phần tử trong mảng xuất là:`)
console.log(getCountElement(["one", "two", "three", "one", "one", "three"]))

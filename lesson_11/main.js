//Switch case

let money = 30000;
switch (money) {
    case 12000:
    case 20000:
    case 30000: {
        console.log("Cafe sữa");
        break
    }
    case 10000: {
        console.log("Cafe đá");
        break
    }
    case 8000: {
        console.log("Sting dâu");
        break
    }
    case 2000: {
        console.log("Trà đá");
        break
    }
    default: {
        console.log("Không có đồ uống nào phù hợp");
        break
    }
}

//Quick

function testDayofWeek(day) {
    switch (day) {
        case 0: {
            console.log("Chủ nhật");
            break
        }
        case 1: {
            console.log("Thứ hai");
            break
        }
        case 2: {
            console.log("Thứ ba");
            break
        }
        case 3: {
            console.log("Thứ tư");
            break
        }
        case 4: {
            console.log("Thứ năm");
            break
        }
        case 5: {
            console.log("Thứ sáu");
            break
        }
        case 6: {
            console.log("Thứ bảy");
            break
        }
        case 7: {
            console.log("Chủ nhật");
            break
        }
        default: {
            console.log("Không có ngày nào phù hợp");
            break
        }
    }
}

testDayofWeek(5)

//Quick 2

function testSeason(month) {
    switch (month) {
        case 1:
        case 2:
        case 3: {
            console.log("Mùa xuân");
            break
        }
        case 4:
        case 5:
        case 6: {
            console.log("Mùa hạ");
            break
        }
        case 7:
        case 8:
        case 9: {
            console.log("Mùa thu");
            break
        }
        case 10:
        case 11:
        case 12: {
            console.log("Mùa đông");
            break
        }
        default: {
            console.log("Không có mùa nào phù hợp");
            break
        }
    }
}

testSeason(8)

//for
//Thực hiện việc thức dậy lúc 5:00 trong 30 ngày
// for(let day = 1; day <=30; day = day + 1){
//     console.log(`Ngày ${day} thức dậy lúc 5h00`);
// }

// //Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày vào các ngày lẻ
// for (let day = 1; day <= 30; day = day + 1) {
//     if (day % 2 == 1) {
//         console.log(`Ngày ${day} thức dậy lúc 5h00`);
//     }
// }

// //Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày. Cách 7 ngày nghỉ 1 lần
// for (let day = 1; day <= 30; day = day + 1) {
//     if (day % 7 == 0) {
//         console.log(`Nghỉ`);
//         continue;
//     }
//     console.log(`Ngày ${day} thức dậy lúc 5h00`)
// }

// //Thực hiện công việc thức dậy lúc 5:00 trong 30 ngày. Đến ngày 20 nghỉ không dậy sớm nữa
// for (let day = 1; day <= 30; day = day + 1) {
//     if (day == 20) {
//         console.log(`Chán quá nghỉ thôi`);
//         break;
//     }
//     console.log(`Ngày ${day} thức dậy lúc 5h00`)
// }

//Tính tổng tiền tiết kiệm
// Thực hiện tiết kiệm trong 10 ngày, mỗi ngày tiết kiệm 100.000
// Biến ban đầu: day = 1, điều kiệN thực thi: day <=10
// Trước khi bắt đầu: Tiền = 0
// let totalMoney = 0;
// for (let day = 1; day <=10; day++) {
//     totalMoney = totalMoney + 100000
// }
// console.log(totalMoney);

//Tính tổng tiền tiết kiệm
// Thực hiện tiết kiệm trong 10 ngày, ngày chẵn tiết kiệm 200.000, ngày lẻ tiết kiệm 100.000
// Biến ban đầu: day = 1, điều kiệN thực thi: day <=10

let totalMoney1 = 0;
for (let day = 1; day <= 10; day++) {
    if (day % 2 == 1) {
        totalMoney1 = totalMoney1 + 100000
    } else { totalMoney1 = totalMoney1 + 200000 }
}
console.log(totalMoney1);

//Tiết kiệM đến ngày thứ 8 thì dừng lại

let totalMoney2 = 0;
for (let day = 1; day <= 10; day++) {
    if (day == 8) {
        break
    } else {
        totalMoney2 = totalMoney2 + 100000
    }
}
console.log(totalMoney2);

//Quick 3
//Tính tổng các số lẻ từ 1->100

function sumOfoddNumber() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 2 == 1) {
            sum = sum + i
        }
    }
    return sum

}
console.log(sumOfoddNumber())

//Tính tổng các số chia hết cho 3 và 5 trong khoảng 0->100

function sumOfnumber() {
    let sum = 0;
    for (let i = 1; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            sum = sum + i
        }
    }
    return sum
}
console.log(sumOfnumber())

//Chạy vòng lặp từ 0 ->20

function evenOrodd() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 == 0) {
            console.log(`${i} là số chẵn`)
        } else { console.log(`${i} là số lẻ`) }
    }
}
evenOrodd()

// //Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần
function copyString(str) {
    let string = "";
    for (let i = 1; i <= 10; i++) {
        string = string + str
    }
    return string
}
console.log(copyString("1"))

// Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang. 
// Ví dụ: repeatString('a') => Kết quả trả về là 'a-a-a-a-a-a-a-a-a-a'

function copyStringwithStick(str) {
    let string = "";
    for (let i = 1; i <= 10; i++) {
        if (i < 10) {
            string = string + str + "-"
        } else {
            break 
        }
    }
    return string
}
console.log(copyStringwithStick("m"))
//1
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
gomark(15)
gomark(55)
gomark(90)
gomark(72)

//2
function max(a, b) {
    if (a - b > 0) {
        console.log(`Số lớn hơn là ${a}`)
    } else if (a - b <0) {
        console.log(`Số lớn hơn là ${b}`)
    } else {
        console.log (`Hai số bằng nhau`)
    }
}
max(10, 15)
max(9, 1)
max(10,10)

//3
function test(a) {
    if (a > 0) {
        console.log(`${a} là số dương`)
    } else if (a == 0) {
        console.log(`${a} là số 0`)
    } else {
        console.log(`${a} là số âm`)
    }
}
test(-100)
test(10)
test(0)

//4
function oddNumber(a) {
    if (a % 2 == 0) {
        console.log(`${a} là số chẵn`)
    } else {
        console.log(`${a} là số lẻ`)
    }
}
oddNumber(10)
oddNumber(11)

//5
function numBer(a) {
    if (a % 3 == 0 && a % 5 == 0) {
        console.log(`${a} là số chia hết cho cả 3 và 5`)
    } else {
        console.log(`${a} không phải là số chia hết cho cả 3 và 5`)
    }
}
numBer(15)
numBer(9)

//6
function test2(a, b, c) {
    if (a + b == c) {
        console.log(`${c} là tổng của ${a} và ${b}`)
    } else {
        console.log(`${c} không là tổng của ${a} và ${b}`)
    }
}
test2(1, 2, 3)
test2(1, 2, 5)

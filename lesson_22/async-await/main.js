// Khai báo tiếp
let money = 35;
// Khai báo: get
let buyIphone = function() {
    return new Promise(function(resolve, reject) {
    if(money > 30) {
        resolve("Enough money"); // Lời hứa được thực hiện thành công
    } else {
        reject("Not enough money"); // Lời hứa được thực hiện thất bại
    }
})
}

// Khai báo tiếp
// Nếu mua iphone xong, còn thừa tiền thì mua airpod (4tr)
let buyAirpod = function () {
    return new Promise(function(resolve, reject) {
    if(money - 30 - 4 > 0) {
        resolve("Enough money for Airpod");
    } else {
        reject("Not enough money for Airpod")
    }
})
}

async function buy() {
    try {
        let res = await buyIphone(); // chỉ nằm trong async function và chỉ làm việc với promise
        console.log(res);

        let res1 = await buyAirpod();
        console.log(res1)

    } catch (error) {
        console.log(error)
    }
    return "Về nhà thôi" // luôn trả về promise
}

buy().then(res => console.log(res))
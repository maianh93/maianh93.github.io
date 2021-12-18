// Promise

// Hứa: Nếu có trên 30tr, mua iphone promax
let money = 35;

// Khai báo: get
let buyIphone = new Promise(function(resolve, reject) {
    if(money > 30) {
        resolve("Enough money"); // Lời hứa được thực hiện thành công
    } else {
        reject("Not enough money"); // Lời hứa được thực hiện thất bại
    }
})

// Khai báo tiếp
// Nếu mua iphone xong, còn thừa tiền thì mua airpod (4tr)
let buyAirpod = new Promise(function(resolve, reject) {
    if(money - 30 - 4 > 0) {
        resolve("Enough money for Airpod");
    } else {
        reject("Not enough money for Airpod")
    }
})

// Nếu mua cả 2 xong, mua tiếp ipad (5tr)
let buyIpad = new Promise(function(resolve, reject) {
    if(money - 30 - 4 - 5   > 0) {
        resolve("Enough money for Ipad");
    } else {
        reject("Not enough money for Ipad")
    }
})

// Gọi: set

// Promise.all(buyIphone, buyAirpod, buyIpad)
buyIphone
.then(res => {
    console.log(res); // res là nội dung trong resolve
    return buyAirpod;
})

.then(res => {
    console.log(res);
    return buyIpad;
})

.then(res => {
    console.log(res);
})

.catch(error => {
    console.log(error) // error là nội dung trong reject
})

.finally( () => { // luôn được thực hiện kể cả thành công hay thất bại
    console.log("Đi về nhà")
})



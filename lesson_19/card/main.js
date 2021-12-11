// Yêu cầu: Sử dụng Javascript để thực hiện các công việc sau
// 1. Một tính năng mới  vào gói Pro: '24/7 Phone support'
const addLi = document.createElement("li");
console.log(addLi);

addLi.innerText = "24/7 Phone support";

const lastli = document.querySelector(".card-body li:last-child");
console.log(lastli);
const firstUl = document.querySelector("ul");
console.log(firstUl);

firstUl.insertBefore(addLi, lastli);

// 2. Đổi vị trí 2 card pricing (pro, basic) => (basic, pro)
const proPricing = document.querySelector(".col-md-4:first-child");
console.log(proPricing);

const basicPricing = document.querySelector(".col-md-4:last-child");
console.log(basicPricing);

const parentPricing = document.querySelector(".row.justify-content-center");
console.log(parentPricing);

parentPricing.insertBefore(basicPricing, proPricing);


// 3. Trong gói Pro hãy cập nhật nút 'Get Started' hiện tại thành màu xanh có màu background: #82DACA, có chữ màu #fff và có dòng chữ 'Buy Now'
const getStartPro = document.querySelector("#pro-plan .card-body button");
console.log(getStartPro);
getStartPro.innerText = "Buy Now";
getStartPro.classList.add("new-class-list");


// 4. Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50%
const proStorage = document.querySelector("#pro-plan .storage-amount");
console.log(proStorage);
const basicStorage = document.querySelector("#basic-plan .storage-amount");
console.log(basicStorage);

proStorage.innerText = parseInt(proStorage.innerText)*125/100;
basicStorage.innerText = parseInt(basicStorage.innerText)*150/100;
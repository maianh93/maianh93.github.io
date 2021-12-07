// id
const heading = document.getElementById ('heading');

// console.log (heading)

//tag name
const para = document.getElementsByTagName ('p');
// Array.from(para).map(ele => console.log(ele))
// console.log(para)

// Tìm hiểu html selection là gì

const paraClassName = document.getElementsByClassName ('para');
console.log(paraClassName)

//query selector
const headingSelector = document.querySelector ('#heading');
console.log(headingSelector)

const para2 = document.querySelector('.para');
console.log(para2)

// Truy cập thẻ para 3
const para3 = document.querySelector(':nth-child(4).para');
console.log(para3)

// const para3 = document.querySelector('p:nth-child(4)');
// console.log(para3)

// const para3 = document.querySelector('.para + p');
// console.log(para3)

// const para3 = document.querySelector('.para ~ p');
// console.log(para3)

// const para3 = document.querySelector('.para:nth-of-type(3)');
// console.log(para3)

//Truy cập vào thẻ ul thứ 2
// const ul2 = document.querySelector ('.box ~ ul');
// console.log(ul2)

// const ul2 = document.querySelector ('.box + ul');
// console.log(ul2)

// const ul2 = document.querySelector ('ul:nth-child(6)');
// console.log(ul2)

// const ul2 = document.querySelector ('body > ul');
// console.log(ul2)

//Truy cập li44
// const li44 = document.querySelector ('li:last-child');
// console.log(li44)

// const li44 = document.querySelector ('li:nth-of-type(4)');
// console.log(li44)

// const li44 = document.querySelector ('.box ul li:last-child');
// console.log(li44)

const box = document.querySelector('.box')
const li44Other = box.querySelector
console.log(li44Other)


//Truy cập li2
// const li44 = document.querySelector ('body > ul > .li');
// console.log(li44)

//querySelectorAll
const paraSelectorAll = document.querySelectorAll ("p");
console.log(paraSelectorAll)

//Tìm hiểu nodeList, khác nhau giữa nodeList và htmlCollection
//Element Node -> html Collection
console.log(box.parentElement) //body
console.log(box.children)
console.log(box.previousElementSibling)
console.log(box.nextElementSibling)

//comment Node
console.log(box.childNodes)
console.log(box.parentNode)
console.log(box.previousSibling)
console.log(box.nextSibling)


//Text Node

//GET
// console.log (heading.innerHTML); -> sử dụng được thẻ
// console.log (heading.innerText) -> Chỉ set được nội dung
// console.log (heading.textContent) -> Chỉ set được nội dung

const ul1 = document.querySelector ('.box ul')
console.log (ul1.innerHTML); //file html
console.log (ul1.innerText) //text
console.log (ul1.textContent) // y nguyên

heading.innerHTML = "Xin chào các bạn"
heading.style.color = "red";
heading.style.backgroundColor = "black";
//mặc định là inline style

para2.innerText = "Para2 new content"
para3.textContent = "Para3 new content"

//Tạo phần tử
const paraNew = document.createElement('p');
console.log (paraNew)

paraNew.innerText = "New paragraph"

//Truy cập trực tiếp vào cha
document.body.prepend(paraNew) // Thêm vào đầu
document.body.appendChild(paraNew) // Thêm vào cuối
document.body.insertBefore(paraNew, para3)

//document.cha.lệnh(element muốn chèn)

//Tạo li giữa li44 và li33
//B1: Tạo thẻ
const liNew = document.createElement('li');
console.log(liNew)
// //B2: Chèn nội dung cho thẻ
liNew.innerText = "liNew"
// //B3: Xác định vị trí
const firstUl = document.querySelector ('.box ul')
console.log(firstUl)

const liNextInsert = document.querySelector('.box ul li:last-child')
console.log(liNextInsert)

// //B4 Thay thế
firstUl.insertBefore(liNew, liNextInsert)

//Tạo li55
//B1: Tạo thẻ
const li55 = document.createElement('li');
console.log(li55);

li55.innerText = "li55";

firstUl.appendChild(li55);

//Tạo thẻ a link đến google.com đằng sau thẻ para3
//B1: Tạo thẻ
const linkNew = document.createElement('a');


//B2: Chèn nội dung
linkNew.innerText = "Link truy cập google.com";
linkNew.href = "https://www.google.com.vn/";
linkNew.target = "blank"
console.log(linkNew);

//B3: Xác định vị trí và phương thức
// document.body.insertBefore(linkNew, box);
// box.insertAdjacentElement('beforebegin', linkNew)

//targetElement.insertAdjacentHTML(position, text);
// ❖ targetElement.insertAdjacentElement(position, element);
// ❖ targetElement.insertAdjacentText(position, text)

box.insertAdjacentHTML ("beforebegin", '<a href = "https://www.google.com.vn/" </a>'); //Kiểm tra lại

//Xóa, thay thế, sao chép



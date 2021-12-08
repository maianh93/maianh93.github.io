//Bài 1
const para = document.getElementById('text');
console.log(para);

para.style.color = "#777";
para.style.fontSize = "2rem";
para.innerHTML = "Tôi có thể làm <em> bất cứ điều gì </em> tôi muốn với JavaScript."

//Bài 2: Sử dụng vòng lặp để đặt màu chữ cho tất cả thẻ li thành màu blue (tạo thẻ ul-li bằng html)
// let c = document.querySelector('ul');
// c.style.color = "blue";

const ul1 = document.querySelector('ul');
const liByUL = ul1.querySelectorAll ('li');
console.log(liByUL)
for (let i = 0; i < liByUL.length; i++) {
  liByUL[i].style.color = "blue";
}

// Bài 3: Sử dụng javascript để thực hiện những công việc sau

// Thêm 3 thẻ <li> có nội dung Item 8, Item 9, Item 10 vào cuối danh sách

const addLi = document.querySelector('#list');
for (let i = 8; i < 10; i++) {
    let li = document.createElement('li');
    li.innerText = (`Item ${i}`)
    addLi.appendChild(li)
}


// Sửa nội dung cho thẻ <li> 1 thành màu đỏ (color)
const li1 = document.querySelector ('#list li:first-child');
li1.style.color = "red";

// Sửa background cho thẻ <li> 3 thành màu xanh (background-color)
const li3 = document.querySelector ('#list li:nth-child(3)');
li3.style.background = "blue";

// Remove thẻ <li> 4
// Xác định cha con
const parent = document.getElementById('list');
const li4 = document.querySelector ('#list li:nth-child(4)');

// Thực hiện xóa
parent.removeChild(li4);

// Thêm thẻ <li> mới thay thế cho thẻ <li> 4 bị xóa ở bước trước, thẻ <li> mới có nội dung bất kỳ
// B1: Tạo phần tử (tạo thẻ)

const li4New = document.createElement('li');

// B2: Chèn nội dung cho thẻ

li4New.innerText = "liNew";


//  B3: Xác định vị trí (nếu chưa truy cập vào các vị trí cần chèn thì phải truy cập trước)

const li5 = document.querySelector ('#list li:nth-child(4)');
// B4: Chọn phương thức
parent.insertBefore(li4New, li5);



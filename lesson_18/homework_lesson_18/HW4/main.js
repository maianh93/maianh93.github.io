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
for (let i = 8; i <= 10; i++) {
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

// Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).
const btn = document.createElement('button');
btn.innerText = "Add"

const input = document.createElement('input');
document.body.insertBefore(btn, parent);
document.body.insertBefore(input, parent);

// Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul
btn.addEventListener('click', () =>  {
  const newLi = document.createElement('li');
  newLi.innerText = input.value;
  parent.appendChild(newLi);
  input.value = "";
})

// Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)

// Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul
const removeBtn = document.createElement('button');
removeBtn.innerText = "Remove";
document.body.insertBefore(removeBtn, parent);

removeBtn.addEventListener('click', () => {
  const lastLi = document.querySelector('#list li:last-child');
  if (parent.childElementCount > 0) {
    parent.removeChild(lastLi);
  } else {
    alert("Nothing to remove!");
  }
});

// Thêm 1 nút Hide trên đầu của danh sách 
const hideBtn = document.createElement('button');
hideBtn.innerText = "Hide"
document.body.insertBefore(hideBtn, parent);

// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide
hideBtn.addEventListener('click', () => {

  if (hideBtn.innerText === "Show") {
    parent.classList.add("show");
    parent.classList.remove("hide");
    hideBtn.innerText = "Hide";
  } else {
    parent.classList.add("hide");
    parent.classList.remove("show");
    hideBtn.innerText = "Show";
  }
})
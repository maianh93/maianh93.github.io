# Nội dung bài học buổi 17: Javascript DOM
## Khái niệm
<li> Document Object Model (DOM) được tạo ra bởi trình duyệt khi trang web được tải
<li> DOM được tổ chức theo dạng cây (DOM tree), mỗi thành phần trên cây gọi là một node

## Tác dụng
<li> Thay đổi phần tử HTML
<li> Thay đổi thuộc tính của phần tử HTML
<li> Thay đổi style CSS
<li> Xóa phần tử và thuộc tính hiện có
<li> Tạo phần tử và thuộc tính mới
<li> Phản ứng với các sự kiện
<li> Tạo sự kiện mới
<li> …

## Truy cập vào các phần tử của DOM
> Phải lưu ý trước khi truy cập xem mình cần kết quả là bao nhiêu phần tử, vị trí tương quan của những phần tử cần truy cập so với các phần tử khác như thế nào

<li> document.getElementById: Truy cập thông qua ID <br>
Ví dụ:

```java
const heading = document.getElementById ('heading');
console.log (heading)
```

<li> document.getElementsByTagName: Truy cập thông qua Tag , trả về 1 mảng các phần tử <br>
Ví dụ:

```java
const para = document.getElementsByTagName ('p');
console.log(para)
```
Kết quả trả về 1 mảng các phần tử HTML Selection: là danh sách các nút. Một nút riêng lẻ có thể được truy cập bằng chỉ mục thứ tự hoặc thuộc tính tên hoặc id của nút.

> Chỉ sử dụng được loop, length đối với mảng được trả về, nếu muốn truy cập thì phải truy cập qua phần tử bằng cách lấy ra chỉ số của nó <br>
Nếu muốn thao tác map, filter phải chuyển sang array

<li> document.getElementsByClassName: Truy cập thông qua tên Class , trả về 1 mảng các phần tử <br>

Ví dụ:

```java
const paraClassName = document.getElementsByClassName ('para');
console.log(paraClassName)
```
<li> document.querySelector: Truy cập thông qua CSS Selector, trả về phần tử đầu tiên tìm thấy

```java
const headingSelector = document.querySelector ('#heading');
console.log(headingSelector)
hoặc
const para2 = document.querySelector('.para');
console.log(para2)

```
<li> document.querySelectorAll: Truy cập thông qua CSS Selector, trả về 1 mảng các phần tử <br>

```java
const paraSelectorAll = document.querySelectorAll ("p");
console.log(paraSelectorAll)
```

Kết quả trả về là một nodeList: là tập hợp các nút theo thứ tự. Các mục trong NodeList có thể truy cập thông qua một chỉ mục tích phân, bắt đầu từ 0.

## Khác nhau giữa nodeList và HTMLCollection
<li> HTMLCollection: Chỉ chứa các nút phần tử
<li> nodeList: Chứa tất cả các nút (nút phần tử, nút thuộc tính, nút văn bản, nút bình luận)

## Truy cập gián tiếp qua các phần tử
<li> Element Node -> html Collection

```java
console.log(box.parentElement) //body
console.log(box.children)
console.log(box.previousElementSibling)
console.log(box.nextElementSibling)
```


<li> comment Node

```java
console.log(box.childNodes)
console.log(box.parentNode)
console.log(box.previousSibling)
console.log(box.nextSibling)
```


<li> Text Node <br>

## GET/SET nội dung của phần tử

### GET

```java
console.log (heading.innerHTML); // sử dụng được thẻ (là các thẻ html)
console.log (heading.innerText) //Chỉ set được nội dung (text thuần)
console.log (heading.textContent) //Chỉ set được nội dung (định dạng ban đầu)
```
### SET

Làm qua các bước:
<li> B1: Tạo phần tử (tạo thẻ)

```java
const liNew = document.createElement('li');
console.log(liNew)
```
<li> B2: Chèn nội dung cho thẻ

```java
liNew.innerText = "liNew"
```

<li> B3: Xác định vị trí (nếu chưa truy cập vào các vị trí cần chèn thì phải truy cập trước)

```java
const firstUl = document.querySelector ('.box ul')
console.log(firstUl)

const liNextInsert = document.querySelector('.box ul li:last-child')
console.log(liNextInsert)
```
<li> B4: Thay thế, xác định phương thức chèn <br>
- parentNode.appendChild(newNode) <br>
- parentNode.prepend(newNode) <br>
- parentNode.insertBefore(newNode, referNode)

```java
firstUl.insertBefore(liNew, liNextInsert)
```

## Xóa phần tử

<li> Phương thức: parentNode.removeChild(childNode);
<li> Để xóa phần tử, cần phải biết phần tử cha <br>

VD: Xóa phần tử có id=“child” nằm trong phần tử có id=“parent”

```java
// Truy cập vào phần tử cha và con
const parent = document.getElementById('parent');
const child = document.getElementById('child');

//Thực hiện xóa
parent.removeChild(child);

```

## Thay thế phần tử
<li> Phương thức: parentNode.replaceChild(newNode, oldNode);
<li> Để thay thế phần tử, cần phải biết phần tử cha và phần tử cần thay thế <br>
VD: Thay thế phần tử có id=“child” nằm trong phần tử có id=“parent” bằng 1 thẻ p có nội dung “New para”

```java
// Truy cập vào phần tử cha và con
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Tạo thẻ p mới và gán nội dung
const para =  document.createElement('p');
para.innerText = "New para";

//Thực hiện thay thế phần tử con
parent.replaceChild(para, child);
```

## Sao chép phần tử
<li> Phương thức: node.cloneNode(deep)
<li> Trong đó: <br>
- node: Phần tử được clone  <br>
- deep: Không bắt buộc <br>
▪ true - sao chép node, attributes và thành phần con của nó <br>
▪ false: - chỉ sao chép Node và attributes (mặc định)


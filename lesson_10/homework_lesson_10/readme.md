# Tổng quan về Function và câu lệnh điều kiện (If/else)

Function (hàm) là tập hợp các đoạn code dùng để thực hiện một tác vụ cụ thể nào đó. <br  >

<li> Cú pháp định nghĩa function:

```javascript
function functionName(para_1, …, para_n) {
// function code
}
```
Trong đó, para_1,..., para_n gọi là tham số. Tham số là những giá trị chưa biết tại thời điểm khai báo hoặc là những giá trị thay đổi mà sau này sẽ nhận vào

<li> Thực thi function:

```javascript
functionName(para_1, …, para_n)
}
```
Trong đó, para_1,..., para_n ở đây gọi là đối số. Đối số là những giá trị sẽ được truyền vào hàm tại thời điểm chạy code.


## Một số loại function

<li>Function có tham số, hoặc không có tham số <br>

VD về function với tham số:

```javascript
function sayHellowithName(name) {
    console.log(`Xin chào ${name}`);
}

sayHellowithName("Phùng Mai Anh");
}
```
VD về function không có tham số:

```javascript
function sayHello() {
    console.log(`Xin chào các bạn`);
}

sayHello()
}
```
<li>Function có giá trị trả về hoặc không <br>

VD về function có giá trị trả về:

```javascript
function sum(a, b) {
    return a + b;
}

console.log(sum(3,4))
}
```

> Lưu ý: Tất cả những câu lệnh viết sau return sẽ không được thực thi (return là kết thúc).


## Function default values – ES6

<li>Cho phép khởi tạo function với những default value nếu như chúng được định nghĩa sai. <br>
<li>Khi sử dụng chức năng này sẽ giúp function dễ kiểm soát và ít lỗi hơn.<br>
VD:

```javascript
function sum(a=10, b=20) {
    return a + b;
}

console.log(sum(3))
console.log(sum())
}
```

Kết quả của việc thực thi function trên lần lượt là 23 và 30.

## Phạm vi của biến
 <li> Global scope: 1 biến được khai báo ngoài function

```javascript
    let fullName = "Phùng Mai Anh";
    console.log(`Xin chào ${fullName}`)
```

 <li>Function scope: 1 biến được khai báo bên trong function, chỉ được sử dụng trong phạm vi của function được khai báo

```javascript
function sayHellowithName(name) {
    console.log(`Xin chào ${name}`);
}
sayHellowithName("Phùng Mai Anh");
```

 <li> Block scope: Được đặt trong cặp dấu { } và chỉ thực thi lệnh bên trong dấu { }

```javascript
{
    let number = 10;
    console.log(number + 10);
}
```

<br>

> Khi một biến được khai báo bên trong function mà không có từ khóa khai báo biến, thì khi thực thi, biến đó sẽ trở thành biến global

## Câu lệnh điều kiện if/else

### Kiểu dữ liệu Boolean
<li> Giá trị của kiểu dữ liệu này chỉ có thể là true hoặc false

<li> Ví dụ

```javascript
{
 let a = true;
 let b = false;
 let c = !a;
 let d = !b;
}
```

<li> Để xác định giá trị boolean cho biến, biểu thức,… ta sử dụng hàm Boolean()

```javascript
let a = 5;
console.log(Boolean(a));

console.log(Boolean(sum(3, 4) > 10))
```
<li>Truthy value là những giá trị mà khi ép kiểu về Boolean thì sẽ cho ra giá trị là true. 

<li>Ngược lại, Falsy value là những giá trị mà khi ép kiểu về Boolean thì cho ra giá trị là false.

> Có 6 giá trị sau được coi là falsy : false, 0, NaN, ‘’, null, undefined. <br>
Ngoài những kết quả trên, cho dữ liệu true

### Câu lệnh điều kiện if/else
#### Câu lệnh if
Thực hiện câu lệnh trong if nếu điều kiện cho trước là đúng.<br>
Cú pháp:

```javascript
if (điều kiện) {
    //Câu lệnh thực thi khi "điều kiện" đúng
}
```

VD:
```javascript
let hour = 6;
if (hour < 10) {
    console.log(`Good morning`)
}
```

#### Câu lệnh if/else
Nếu điều kiện đúng thực hiện câu lệnh trong if, ngược lại nếu điều kiện sai thì hiện câu lệnh trong else.<br>

Cú pháp:
```javascript
if (điều kiện) {
    //Câu lệnh thực thi khi "điều kiện" đúng
} else {
    //Câu lệnh thực thi khi "điều kiện" sai
}
```

VD:

```javascript
let ages = 15;
if (ages < 18) {
    console.log(`Tuổi teen`);
} else {
    console.log(`Tuổi trưởng thành`)
}
```
#### Câu lệnh if/else if/else
Chỉ định một điều kiện mới nếu điều kiện đầu tiên là sai.

Cú pháp:

```javascript
    if (điều kiện 1) {
        //Câu lệnh thực thi khi "điều kiện 1" đúng
    } else if (điều kiện 2)) {
        //Câu lệnh thực thi khi "điều kiện 1" sai và "điều kiện 2" đúng
    } else {
        //Câu lệnh thực thi khi "điều kiện 1" và "điều kiện 2" s
    }
}

```

VD:
```javascript
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

gomark(100)

```





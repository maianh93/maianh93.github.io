# NỘI DUNG BÀI HỌC 14
## Khái niệm về first-class function
<li> Ta có thể gán 1 function cho 1 biến:<br>
Ví dụ:

```javascript
let sum1 = function(a,b) {
    return a + b
}
console.log(sum1(3,4))
```

Higher order function (HOC):
<li> Có thể truyền 1 function vào 1 function khác để làm tham số
<li> Function có thể trả về 1 function.<br>

## Arrow Function 
<li>function expression <br>

```javascript
const sum = function (a,b) {
    return a + b;
};
```
> Anonymous function là những function không có tên

<li> Khi chuyển đổi sang arrow function, ta viết như sau:<br>
Arrow function đầy đủ:

```javascript
const sum1 = (a,b) => {
   return a + b
}
```
> Ta có thể lược bớt đối với những trường hợp đơn giản, chỉ có 1 câu lệnh return<br>

```javascript
const sum2 = (a,b) => a + b;
```
Ví dụ:

```java
const arrayMax = (arr) => {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }  
    return max;
}
console.log(arrayMax([40, 100, 1, 5, 25, 10]))
```
## Các biến thể của for
<li> Sử dụng for

```java
for (let i = 0; i < number.length; i++) {
    total += number[i];
}
console.log (total)
```

<li> Sử dụng forEach

```java
let total1 = 0;
number.forEach(function(value) {
    total1 += value
})
console.log (total1)
```

<li> Tính tổng sử dụng array function + forEach

```java
let total2 = 0;
number.forEach((value) => total2 += value)
console.log (total2)
```

<li> Sử dụng for ... of

```java
let total3 = 0;
for (const value of number) {
    //console.log(value)
    total3 += value
}
console.log(total3)
```
## Các cú pháp của ES6
<li> let/const <br>
- Để khai báo biến sử dụng từ khóa : let / const. <br>
- Khi khai báo biến bằng const, ta không thể gán giá trị mới cho biến sau khi đã khai báo. <br>
Ví dụ: <br>

```java
let fullName = "Phùng Mai Anh";
const number = 10;
```

<li>template string <br>
- Khai báo chuỗi sử dụng ký tự back-tick `` thay cho ký tự ngoặc đơn hoặc ngoặc kép.
- Khi khai báo chuỗi kiểu này có thể viết chuỗi trong nhiều dòng và có thể dùng dấu ngoặc đơn hoặc ngoặc kép thoải mái mà không cần dùng escape character.
- Có thể dùng các biến, biểu thức ngay trong chuỗi với cú pháp như sau: 

```java
`string text ${expression} string text`
```
Ví dụ:

```java
const randomRgbCode = () => {
    let rValue = Math.floor(Math.random() * 256);
    let gValue = Math.floor(Math.random() * 256);
    let bValue = Math.floor(Math.random() * 256);
    return `rgb (${rValue}, ${gValue}, ${bValue})`
}
console.log (randomRgbCode())
```
<li>default parameter <br>
- Cho phép khởi tạo function với những default value nếu như chúng được định nghĩa sai. <br>
- Khi sử dụng chức năng này sẽ giúp function dễ kiểm soát và ít lỗi hơn. <br>
Ví dụ:

```java
    function sayHello(name=“Mai Anh”) {
        console.log(`Xin chào ${name}`);
}
```
Kết quả trả về là "Xin chào Mai Anh".

<li> spread operator <br>
- Dùng để duỗi một mảng thành 1 chuỗi (dùng "...") <br>
- Ví dụ:

```java
console.log(...[1,2,3,4])
console.log(..."Hello")
console.log([..."Hello"])//=
console.log("Hello".split(""))
```
<li>rest parameter <br>
- Dùng để gom những tham số truyền vào<br>
- Không giới hạn tham số truyền vào <br>
- Ví dụ: <br>

```java
function sum(...number) {
    console.log(number)
}
```
<li> arrow function <br>
- Đã trình bày ở trên.

# TÌM HIỂU KIẾN THỨC BÀI HỌC 15
## Biến thể của for: map, filter
### map ()

<li>Nên sử dụng trong trường hợp cần xử lý từng biến trong mảng theo cùng 1 cách, trả về các giá trị sau xử lý, có số lượng đúng bằng số lượng phần tử ban đầu của mảng.<br>

<li>Hàm map() nhận vào 3 tham số (theo thứ tự):
<br>
- Phần tử hiện tại của mảng.<br>
- Chỉ số của phần tử hiện tại trong mảng.<br>
- Mảng ban đầu.<br>

> Phải sử dụng return để trả về từng giá trị sau chỉnh sửa, nếu không mảng trả về cuối cùng sẽ chỉ chứa các giá trị undefined.
<li> Ví dụ: <br>

Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2<br>

Vd : [4,2,5,6,2,7] => [0,0,1,0,0,1]<br>

```java
const remainderResult = (arr) => {
    let result = arr.map(arr => arr % 2);
    return result;
}
console.log(remainderResult([4,2,5,6,2,7]))
```
Kết quả trả về [0, 0, 1, 0, 0, 1].

### filter()
<li>Tương tự như map, tuy nhiên, với filter(), ta cần đảm bảo câu lệnh return trả về true hoặc false vì nó là điều kiện để "lọc" ra các giá trị phù hợp trong mảng.
<li> Ví dụ:<br>
Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số chia hết cho 2

```java
const evenNumber = (arr) => {
    let result = arr.filter(arr => arr % 2 ==0);
    return result;
}
console.log(evenNumber([4,2,5,6,2,7]))
```
Kết quả trả về [4, 2, 6, 2].
## Object
<li> Object là gì? <br>
Cùng với number, string, boolean, undefined và null, object cũng là một kiểu dữ liệu trong javascript.

<li> Cách khai báo object <br>
<li>Làm sao để lấy giá trị trong object
<li>Các phương thức liên quan : Object.keys, Object.value, hasOwnProperty

> Mấy cái này chị đọc trừu tượng khó hiểu quá, buổi học thầy giảng sau vậy :((



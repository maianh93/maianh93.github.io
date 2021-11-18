# Tổng quan về Javascript

Javascript (JS) là một ngôn ngữ kịch bản phía client, là một ngôn ngữ thông dịch. <br  >

JS được sử dụng trong việc kết hợp với HTML/CSS để thiết kế web động

## Ứng dụng của Javascript

<li>Sửa đổi nội dung trang web <br>
> Ta chỉ dùng S0 để thay đổi khi thao tác trên trình duyệt <br>

<li>Thay đổi style và vị trí các thành phần trên trang web <br>
<li>Phản hồi với các sự kiện từ người dùng: CLick chuột, nhập thông tin vào các biểu mẫu... <br>
<li>Thực hiện và kiểm soát việc chuyển tiếp các hình ảnh động. <br>
<li>Thông báo cho người dùng: Việc nhập vào biểu mẫu có sai hay thiếu không... <br>
<li>Thao tác với dữ liệu đầu vào của người dùng trước khi gửi đến máy chủ...


## Biến trong Javascript

### Biến là gì?
<li>Biến là một định danh dùng để lưu trữ dữ liệu, thông qua biến ta thực hiện các thao táo với dữ liệu. <br>
<li>Mỗi biến có một kiểu dữ liệu riêng, dựa vào kiểu dữ liệu của biến, ta có các thao tác khác nhau với biến. <br>
VD: <br>
<li>Biến kiểu số (số nguyên, số thực): cộng, trừ, nhân, chia; <br>
<li>Biến kiểu chuỗi ("" hoặc '') - string: ghép nối chuỗi, độ dài chuỗi...<br>
<li>Biến kiểu dữ liệu boolean: chỉ có 2 giá trị là true (nhận giá trị 1), và false (nhận giá trị 0) <br>
<li>Kiểu dữ liệu null: đại diện cho những giá trị rỗng.
<li>...

### Khai báo biến

Sử dụng từ khóa `let`, `const` để khai báo biến

#### Sử dụng let

Khai báo biến bình thường

```javascript
// Khai báo biến
let number;

// Khai báo biến và khởi tạo giá trị
let age = 20;
```

#### Sử dụng const

Được sử dụng để khai báo hằng số

```javascript
const number = 10
```

> Không thể gán lại giá trị cho 1 biến const <br>
> Nếu khai báo biến mà không gán giá trị thì sẽ hiển thị kiểu dữ liệu undefined

### Quy tắc đặt tên biến
<ul>
<li> Ký tự đầu tiên không được là số, nên bắt đầu từ chữ (tốt nhất là chữ thường, không nên dùng chữ viết hoa);
<li> Tên biến có thể có _ hoặc $;
<li> Tên biến có phân biệt chữ hoa, chữ thường: number # Number # numBer;
<li> Tên biến không được trùng với từ khóa của Javascript (tra cứu trên trang w3school);
<li> Nên đặt tên kiểu camelCase hoặc snake_case;
<li> Đặt tên biến có ý nghĩa: hạn chế đặt là a, b, c;
<li> Tên biến nên là tiếng Anh.

## Kiểu dữ liệu phổ biến
### Kiểu dữ liệu chuỗi (string)
<li>Là một đoạn text có thể có một hoặc nhiều ký tự, phải được bao quanh bằng cặp nháy đơn ' hoặc nháy kép ".
VD:
```javascript
let fullName = "Phùng Mai Anh";
```
> Nếu trong chuỗi có dấu nháy đơn hoặc nháy kép thì phải thêm ký từ \ trước dấu nháy đó <br>
VD:<br>

```javascript
let fullName = "\"Phùng Mai Anh\"";
```
> Nếu muốn Enter xuống hàng một chuỗi thì phải sử dụng dấu + để nối chuỗi.

```javascript
let firstName = "Phùng";
let lastName = "Mai Anh";
let fullName = firstName + "" + lastName;
```
<li> Templates strings: Quan trọng: <br>
- Khai báo chuỗi ký tự back-tick `` thay cho ký tự ngoặc đơn hoặc ngoặc kép.<br>
- Khi khai báo chuỗi kiểu này có thể viết chuỗi trong nhiều dòng và có thể dùng dấu ngoặc đơn, ngoặc kép thoải mái mà không cần dùng escape character.
- Có thể dùng các biến, biểu thức ngay trong chuỗi theo cú pháp: <strong>`string text ${expression} string text` </strong>.<br>
VD: 

```javascript
let numberA = 1;
let numberB = 2;
console.log (`numberA + numberB = ${numberA + numberB}`);
```
Kết quả của biểu thức trên sẽ là: numberA + numberB = 3

### Kiểu dữ liệu Number
<li>Là một tập hợp của các con số (0-9) không chữa dấu khoảng trắng và có thể chứa dấu trừ (-) nằm ở đầu để đại diện cho số âm.
<li> Kiểu dữ liệu số có thể là số nguyên hoặc số thực.

## Kết luận:

<li> Đối với biểu thức cộng 2 dữ liệu chuỗi: kết quả là "một chuỗi".
<li> Đối với biểu thức giữa 2 dữ liệu số: kết quả là kết quả toán học giữa 2 số đó (là một số) <br>

> Nếu biểu thức sai về nguyên tắc toán học (VD: 7/0), kết quả hiển thị <strong>Infinity</strong>.
<li> Đối với biểu thức giữa chuỗi và số: <br>
- Phép tính cộng: kết quả là "một chuỗi"<br>
- Phép tính trừ, chia, nhân: kết quả là một số (trong trường hợp trong dữ liệu string không phải số, kết quả là NaN - Not a Number).  <br>






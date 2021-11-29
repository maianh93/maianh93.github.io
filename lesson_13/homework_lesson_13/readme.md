# Trình bày về các phương thức array (array methods)
## Tác dụng của string methods
Dùng để thao tác và giải quyết các vấn đề khi làm việc với array.
## Một số phương thức hay sử dụng:
### toString
Tác dụng: toString dùng để chuyển đổi mảng thành chuỗi. <br>
Cú pháp: 

```javascript
arr.toString ()
```
Ví dụ:

```javascript
let arr = [1,2,3,4,5];
let newStr = arr.toString ();
console.log(newStr);
```
Kết quả là "1,2,3,4,5" <br>

> Ta có thể dùng join () để chuyển đổi, đồng thời thay thế dấu ngăn cách giữa các phần tử <br>

Ví dụ:

```javascript
let arr = [1,2,3,4,5];
let newStr = arr.join ("_");
console.log(newStr);
```
Kết quả là "1_2_3_4_5" <br>

### Popping and Pushing
<li> pop () <br>
Tác dụng: Hàm pop() có chức năng xóa bỏ phần tử cuối cùng của mảng, hàm sẽ trả về phần tử bị xóa <br>
Cú pháp: 

```javascript
arr.pop ()
```
> Để xóa phần tử đầu tiên của mảng, ta dùng hàm shift ()

Ví dụ pop():
```javascript
let arr = [1,2,3,4,5];
let newStr = arr.pop ();
console.log(newStr);
console.log(arr)
```
Kết quả trả về của hàm là 5, mảng còn lại là [1,2,3,4]

Ví dụ shift():
```javascript
let arr = [1,2,3,4,5];
let newStr = arr.shift ();
console.log(newStr);
console.log(arr)
```
Kết quả trả về của hàm là 1, mảng còn lại là [2,3,4,5]
<li> push() <br>
Tác dụng: Hàm push() sẽ thêm mới một hoặc nhiều phần tử vào cuối mảng, hàm trả về chiều dài của mảng mới.

> Để thêm mới phần tử vào đầu mảng, ta dùng hàm unshift ()

Cú pháp:
```javascript
arr.push (item1, item2,..., itemN)
```
Ví dụ push():
```javascript
let arr = [1,2,3,4,5];
let newStr = arr.push(6,7,10);
console.log(newStr);
console.log(arr)
```
Kết quả trả về của hàm là độ dài của mảng mới = 8; mảng mới là [1, 2, 3, 4, 5, 6, 7, 10]

Ví dụ push():
```javascript
let arr = [1,2,3,4,5];
let newStr = arr.unshift(-2,-1,0);
console.log(newStr);
console.log(arr)
```

Kết quả trả về của hàm là độ dài của mảng mới = 8; mảng mới là [-2, -1, 0, 1, 2, 3, 4, 5]

### Changing Elements
<li>Vị trí của các phần tử được quy ước bắt đầu từ [0]

Ví dụ:
```javascript
let arr = [1,2,3,4,5];
console.log(arr [0]);
```
Kết quả là 1.

> Khi truy cập vào những chỉ số không hợp lệ (vượt quá phạm vi của mảng), kết quả trả về là undefined.

<li> Thuộc tính length: thể hiện số phần tử của mảng
Khi sử dụng thuộc tính length, ta có thể truy cập vào phần tử cuối của mảng bằng cách sau:

```javascript
(arr[arr.length - 1]);
```

### Deleting Elements
> Không nên sử dụng

Tác dụng: Dùng để xóa phần tử trong mảng <br>

Cú pháp: 
```javascript
delete(arr [ ]);
```

Ví dụ:
```javascript
let arr = [1,2,3,4,5];
delete arr[0];
console.log (arr)
```

Kết quả trả về [empty, 2, 3, 4, 5].

### Splicing an Array
Tác dụng: Dùng để thêm một hoặc nhiều phần tử vào mảng <br>
Cú pháp:
```javascript
splice(start, deleteCount, item1, item2,..., itemN)
```
start: vị trí của phần tử bắt đầu được thay thế <br>
deleteCount: số phần tử bị loại bỏ, bao gồm cả vị trí start<br>
item1, item2,..., itemN: phần tử được thêm vào<br>

Ví dụ:
```javascript
let arr = [1,2,4,5];
arr.splice(2,0,3);
console.log (arr)
```

Kết quả trả về [1, 2, 3, 4, 5].

Ví dụ 2:
```javascript
let arr = [1,2,3,4,5];
arr.splice(4,1,5,6);
console.log (arr)
```
Kết quả trả về [1, 2, 3, 4, 5, 6].

> Có thể dùng splice () để loại bỏ phần tử.

Ví dụ:
```javascript
let arr = [1,2,3,4,5];
arr.splice(4,1);
console.log (arr)
```
Kết quả trả về [1, 2, 3, 4].

### Merging (Concatenating) Arrays
Tác dụng: Dùng để nối (gộp) các mảng với nhau<br>
Cú pháp:

```javascript
arr.concat(arr1, arr2,..., arrN)
```

Ví dụ:
```javascript
let arr = [1,2,3];
let arr2 = [4,5]
let newArr = arr.concat(arr2);
console.log(newArr)
```
Kết quả trả về [1, 2, 3, 4, 5].

> arr.concat () có thể dùng để gộp chuỗi vào mảng

### Slicing an Array
Tác dụng: Hàm slice có chức năng trích xuất một số phần tử của mảng. <br>

Cú pháp:
```javascript
arr.slice(start, end)
```
> Hàm sẽ trích xuất từ vị trí start (bao gồm cả start), đến vị trí end (không bao gồm end). <br>

Ví dụ:
```javascript
let arr = [0,1,2,3,4,5];
let newArr = arr.slice(1,5);
console.log(newArr)
```

Kết quả trả về [1, 2, 3, 4]

> Nếu không nhập tham số end, mặc định trích xuất tới cuối mảng.

# BTVN

Tìm hiểu value type (so sánh về mặt giá trị); reference type (so sánh tham chiếu)

Ví dụ:
```javascript
let number = [1,2,3,4,5];
let number1 = [1,2,3,4,5];
console.log(number == number1); //false -> So sánh về mặt tham chiếu
console.log(number == "1,2,3,4,5"); // true -> So sánh về mặt giá trị
```
Ví dụ 2:
```javascript
let number1 = 8;
let number2 = number1;
number1++
console.log (number1) //9
console.log (number2) //8
```
Ở ví dụ 2, number2 vẫn ra kết quả 8 mặc dù number 1 được tăng thêm 1 đơn vị, là do number 2 được gán với number 1 về mặt tham chiếu chứ không phải về mặt giá trị.











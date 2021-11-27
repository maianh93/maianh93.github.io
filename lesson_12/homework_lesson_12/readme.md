# Trình bày về các phương thức string (string methods)
## Tác dụng của string methods
Dùng để thao tác và giải quyết các vấn đề khi làm việc với string.
## Một số phương thức hay sử dụng:
### indexOf, lastIndexOf, includes
<li> indexOf: <br>
Tác dụng: indexOf method sẽ trả về vị trí index đầu tiên của một chuỗi ký tự trong string ban đầu, nếu không tìm thấy thì trả về -1. <br>
Cú pháp: 

```javascript
str.indexOf(searchvalue)
```
Kết quả là -1.<br>
Ví dụ:

```javascript
let strnumber = "12345";
let strshortenNumber= "125";
console.log(strnumber.indexOf(strshortenNumber));
```
Kết quả là -1 <br>

<li> lastIndexOf: <br>
Tác dụng: Trả về vị trí xuất hiện lần cuối cùng của một giá trị được tìm thấy trong chuỗi <br>
Cú pháp:

```javascript
string.lastIndexOf(searchvalue, start)
```
Trong đó, start là tham số không bắt buộc, nếu có, sẽ tính từ đầu tới vị trí đó để tìm vị trí xuất hiện của searchvalue, nếu không, mặc định là độ dài của chuỗi <br>
Nếu không tìm thấy giá trị, kết quả trả về là -1 <br>
Ví dụ:

```javascript
let str = "Xin chào, mình là Mai Anh";
let searchstr = "Mai Anh";
console.log(str.lastIndexOf(searchstr))
```
Kết quả là 28
<li> includes: <br>
Tác dụng: includes method dùng để kiểm tra một string có chứa một string khác hay không. <br>
Cú pháp:

```javascript
string.includes(searchvalue, start)
```
Trong đó, start là tham số không bắt buộc, nếu có, sẽ tính từ đầu tới vị trí đó để tìm vị trí xuất hiện của searchvalue, nếu không, mặc định là độ dài của chuỗi <br>
Giá trị trả về là kiểu dữ liệu Boolean.<br>
Ví dụ:
```javascript
let text = "Hello world, welcome to the universe.";
let result = text.includes("world", 12);
console.log(result)
```
Kết quả trả về là false
```javascript
let text = "Hello world, welcome to the universe.";
let result = text.includes("world");
console.log(result)
```
Kết quả trả về là true

### slice, substring, substr, concat
<li> slice <br>
Tác dụng: Phương thức này sẽ trích xuất nội dung của một chuỗi, nội dung trích xuất sẽ được xác định bằng hai tham số start và end. Phương thức sẽ trả về nội dung được trích xuất từ chuỗi gốc ban đầu.<br>
Cú pháp:

```javascript
slice(start, end)
```
> Phần được copy không bao gồm vị trí start và end.

Ví dụ:
```javascript
let str = "Apple, Banana, Kiwi";
let part = str.slice(7, 13);
console.log(part)
```
Kết quả trả về là Banana

<li> substring <br>
Tác dụng: Phương thức string.substring() sẽ trích xuất nội dung của một chuỗi, nội dung trích xuất sẽ được xác định bằng hai tham số start và end. Phương thức sẽ trả về nội dung được trích xuất từ chuỗi gốc ban đầu. Phần được copy không bao gồm vị trí end.<br>
Cú pháp:

```javascript
substring(start, end)
```
Ví dụ:
```javascript
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 12);
console.log(part)
```
Kết quả trả về là Banan
<li> substr <br>
Tác dụng: Trích xuất một chuỗi ký tự con bên trong chuỗi cha, bắt đầu được trích xuất tại một vị trí xác định với số lượng ký tự được chỉ định <br>
Cú pháp <br>

```javascript
string.substr(start, length)
```
Ví dụ:
```javascript
let str = "Apple, Banana, Kiwi";
let part = str.slice(-12, -6);
console.log(part)
```
Kết quả trả về là Banana

<li> concat <br>
Tác dụng: Dùng để nối 2 hay nhiều string lại với nhau<br>
Cú pháp:

```javascript
str1.concat(str2)
```

Ví dụ:

```javascript
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text)
```
Kết quả trả về là "Hello World"

### startsWith, endsWith, toLowerCase, toUpperCase
<li> startsWith<br>
Tác dụng: Kiểm tra xem một chuỗi có phải được bắt đầu bởi ký tự (hoặc chuỗi ký tự) do mình chỉ định hay không. <br>
Dữ liệu trả về kiểu Boolean

Cú pháp:

```javascript
string.startsWith(search, start)
```

Ví dụ:

```javascript
let str = "Mai Anh"
console.log(str.startsWith("M", 0))

```
Kết quả trả về là true
<li> endsWith<br>
Tác dụng: Kiểm tra xem một chuỗi có phải được kết thúc bởi ký tự (hoặc chuỗi ký tự) do mình chỉ định hay không. <br>
Dữ liệu trả về kiểu Boolean <br>
Cú pháp:

```javascript
string.endsWith(search, length)
```

Trong đó giá trị length có thể có hoặc không, nếu có, sẽ dùng để tính độ dài đoạn chuỗi, nếu không sẽ mặc định là toàn bộ chuỗi

Ví dụ:

```javascript
let str = "Mai Anh"
console.log(str.endsWith("nh"))
```
Kết quả trả về là true

<li> toLowerCase <br>
Tác dụng: Dùng để chuyển đổi chuỗi về kiểu viết thường <br>
Cú pháp:

```javascript
str.toLowerCase()
```

Ví dụ:

```javascript
let str = "Mai Anh"
console.log(str.toLowerCase())
```
Kết quả trả về là "mai anh"

<li> toUpperCase

Tác dụng: Dùng để chuyển đổi chuỗi về kiểu viết hoa <br>
Cú pháp:

```javascript
str.toUpperCase()
```

Ví dụ:

```javascript
let str = "Mai Anh"
console.log(str.toUpperCase())
```
Kết quả trả về là "MAI ANH"

### replace, trim, charAt, split
<li> replace <br>
Tác dụng: Dùng để thay thế 1 đoạn được chỉ định thành một giá trị khác. <br>
Cú pháp:

```javascript
str.replace("specified value", "another value")
```

Ví dụ:

```javascript
let str = "Mai Anh"
console.log(str.replace("Mai", "Phùng Mai"))
```
Kết quả trả về là "Phùng Mai Anh"

<li> Ngoài ra còn có replaceAll <br>
Tác dụng: Dùng để thay thế tất cả nhứng đoạn được chỉ định thành những giá trị khác. <br>
Cú pháp:

```javascript
str.replace("specified values", "another values")
```

Ví dụ:

```javascript
let str1= "Phùng Mai Anh"
console.log(str.replaceAll(" ", "_"))
```
Kết quả trả về là "Phùng_Mai_Anh"

<li>trim <br>
Tác dụng: Dùng để loại bỏ khoảng trống (nếu có) ở 2 phía của chuỗi <br>
Cú pháp:

```javascript
str.trim()
```

Ví dụ:
```javascript
let str = "      Mai Anh      ";
console.log(str.trim())
```
Kết quả trả về là "Mai Anh"

<li> charAt <br>
Tác dụng: Dùng để trả về giá trị được chỉ định trong chuỗi <br>
Cú pháp:

```javascript
str.charAt()
```
Ví dụ:
```javascript
let str = "Mai Anh";
console.log(str.charAt(0))
```

Kết quả trả về là "M"

<li> split <br>
Tác dụng: Dùng để chia một chuỗi thành một mảng các chuỗi con<br>
Cú pháp:

```javascript
split([separator], [limit]);
```
Trong đó tham số separator là dấu phân cách, limit dùng để xác định số chuỗi con được phân tách.

```javascript
let str = "Mai Anh";
let substrings = str.split(" ", 1);

console.log(substrings);
```
Kết quả trả về là "Mai"

```javascript
let str = "Mai Anh";
console.log(str.split(""))
```
Kết quả trả về là  ['M', 'a', 'i', ' ', 'A', 'n', 'h']




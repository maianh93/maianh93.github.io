- ReactJS là gì?
- Công dụng?
- MVC -> view (react)
- Khác nhau: 
html css => tăng số lượng file (theo chiều ngang) do là những trang độc lập
react => coi các trang như 1 ứng dụng (những module riêng biệt), xây dựng nên trang web từ những module đó
- Thư viện: Declaretive (hook, lifecycle) => khai báo các đoạn mã, không cần gọi(react tự động làm)
- Tốc độ nhanh, hiệu năng cao
- Virtual DOM (bộ nhớ)

- JSX
attributes
{}: giá trị số, object, array, function
1 parent node

-Component
Class component: dài hơn, nhiều tính năng hơn

Function component

- typescript
- flow

-PureFunction: chỉ sử dụng và tác động đoạn mã bên trong function, không được thay đổi trực tiếp

- one way: chạy từ trên xuống dưới
- state: thông tin mô tả => phản ảnh giao diện (mô tả dữ liệu hiện tại)

- two way: cập nhật lại

- map: phải lưu ý key (thường là id của dữ liệu) vì React sẽ nhận biết qua key
- props
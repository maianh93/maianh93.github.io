- Hook: phải gọi ở cấp cao nhất của hàm
- custom hook
- thư viện hook

- useContext (!): truyền các giá trị xuống các cấp khác nhau, không phải truyền thông qua props, state dùng chung
- useCallback: tối ưu quá trình render: ngăn sự render không cần thiết: call back truyền xuống children, không phải render nhiều (!)
- useMemo: ghi nhớ giá trị, thực hiện việc tính toán, có giá trị trước khi render (!)
- useReducer: giúp tách phần logic (phần debug)
- useRef: tạo tham chiếu, thao tác trực tiếp với node DOM, tùy chỉnh hoặc truyền cho các thư viện khác thông qua tham chiếu

- Redux
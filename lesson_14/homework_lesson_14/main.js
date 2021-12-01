//Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.
// sortStudents(['Nam', 'Hoa', 'Tuấn']) => ['Tuấn', 'Nam', 'Hoa']

const sortStudents = (arr) => {
    let arr1 = arr.sort ();
    return arr1.reverse ();
}
console.log (sortStudents(['Nam', 'Hoa', 'Tuấn']))

//Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]
const shuffle = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
  return arr;
}
console.log (shuffle([1,2,3,4,5]))


// Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
const symmetricDifference = (arr1, arr2) => {
    let result = [];
    for (let i = 0; i <= arr1.length - 1; i++) {
        if (arr2.indexOf(arr1[i]) == -1) {
          result.push(arr1[i]);
        }
      }
    for (i = 0; i <= arr2.length - 1; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
          result.push(arr2[i]);
        }
      }
      return result;
}
console.log(symmetricDifference([1, 2, 3], [1, 2, 4]))

// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]
const union = (arr1, arr2) => {
    let result = [];
    let set = new Set();
    result = arr1.concat(arr2);
    result.forEach((value) => {
      set.add(value);
    });
    result = [...set];
    return result;
}
console.log(union([1, 2, 3, 1], [4, 3, 2, 4]))
console.log(union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]))
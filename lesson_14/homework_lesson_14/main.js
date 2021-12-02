//Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.
// sortStudents(['Nam', 'Hoa', 'Tuấn']) => ['Tuấn', 'Nam', 'Hoa']
const sortStudents1 = (arr) => {
  let arr1 = arr.sort((a, b) => a.localeCompare(b));
  return arr1.reverse()
}

console.log(sortStudents1(['Nam', 'Hoa', 'Tuấn', 'Đức']))

//Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]
//Cách 1
function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    //Lấy ngẫu nhiên 1 chỉ số
    var j = Math.floor(Math.random() * (i + 1));

    // Đổi vị trí
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
console.log(shuffle([1, 2, 3, 4, 5]))

//Cách 2
function shuffle1(arr) {
  return arr.sort(() => Math.random() - 0.5)
}
console.log(shuffle1([1, 2, 3, 4, 5]))


// Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
const symmetricDifference = (arr1, arr2) => {
  let result = [];
  for (let i = 0; i <= arr1.length - 1; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      result.push(arr1[i]);
    }
  }
  for (i = 0; i <= arr2.length - 1; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      result.push(arr2[i]);
    }
  }
  return result;
}
console.log(symmetricDifference([1, 2, 3], [1, 2, 4]))

//Cách 2
const symmetricDifference1 = (arr1, arr2) => {
  const sumArr = [...arr1, ...arr2];
  let newArr = [];
  for (const element of sumArr) {
    if (!arr1.includes(element) || !arr2.includes(element)) {
      newArr.push(element)
    }
  }
  return newArr;
}

console.log(symmetricDifference1([1, 2, 3], [1, 2, 4]))

// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]
//Cách 1
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

//Cách 2
function union1(arr1, arr2) {
  let result = [];
  const sumArr = [...arr1, ...arr2]; //gộp 2 mảng
  for (let i = 0; i < sumArr.length; i++) { //tìm phần tử nào chưa có trong result
    if (result.indexOf(sumArr[i]) === -1) {
      result.push(sumArr[i]);
    }
  }
  return result;
}
console.log(union1([1, 2, 3, 1], [4, 3, 2, 4]))
console.log(union1([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]))
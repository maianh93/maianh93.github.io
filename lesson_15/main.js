// Ví dụ map: !
// Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2<br>
// Vd : [4,2,5,6,2,7] => [0,0,1,0,0,1]<br>
const remainderResult = (arr) => {
    let result = arr.map(e => e % 2);
    return result;
}
console.log(remainderResult([4,2,5,6,2,7]))

// Ví dụ filter: Lấy các phần tử là số lẻ: !
const oddNumber = (arr) => {
    let result = arr.filter(e => e % 2 == 1);
    return result;
}
console.log(oddNumber([4,2,5,6,2,7]))

// Ví dụ find: Trả về 1 kết quả là giá trị đầu tiên tìm thấy
const getNumberGreater5 = (arr) => {
    return arr.find(e => e > 5);
}
console.log(getNumberGreater5([4,2,5,6,2,7]))

//Ví dụ findIndex(): Kết quả trả về là vị trí của giá trị đầu tiên tìm thấy
const getIndexOfNumberGreater5 = (arr) => {
    return arr.findIndex(e => e > 5);
}
console.log(getIndexOfNumberGreater5([4,2,5,6,2,7]))

//Ví dụ some: Kết quả trả về kiểu boolean: có 1 hoặc 1 vài phần tử thỏa mãn điều kiện
const getNumberGreater1 = (arr) => {
    return arr.some(e => e > 1);
}
console.log(getNumberGreater1([4,2,5,6,2,7]))

//Ví dụ every: Kết quả trả về kiểu boolean: tất cả các phần tử phải thỏa mãn điều kiện
const getNumberGreater10 = (arr) => {
    return arr.every(e => e > 10);
}
console.log(getNumberGreater10([4,2,5,6,2,7]))

//Ví dụ reduce: Gom tất cả các phần tử của mảng về 1 mảng duy nhất
const getTotalNumber = (arr) => {
    let sum = arr.reduce(function (total, elem) {
        return total + elem;
    }, 10 );
    return sum
}

console.log(getTotalNumber([1,2,3,4]))

// Object trong javascript
// Bao gồm 2 thành phần: thuộc tính (property): dùng để miêu tả đặc điểm, tính chất; phương thức (method): miêu tả hành động của 1 đối tượng {key : value , }: Phương thức và thuộc tính phải gắn liền với đối tượng, khác với function
let emptyObject = {}

let student = {
    name: "Mai Anh",
    age: 28,
    year: 1993,
    address: "Hà Nội",
    sex : "female",
    "first name" : "Phùng",

    study() {
        console.log("Học bài");
    },

    eat(nameFood) {
        console.log(`Đang ăn ${nameFood}`);
    },

    talk(name) {
        console.log(`Nói chuyện với ${name}`);
    },
    getInfo() {
        console.log(`${this.name} quê ở ${this.address}`)
    }
}

// Lấy ra 1 thuộc tính
console.log (student.name);
console.log (student.age);
console.log(student["address"]);
console.log(student["first name"])

//Lấy ra 1 phương thức
student.study();
student.eat("Phở");
student.talk("Đức")

student.getInfo()

console.log (student.name);

student.name = "ABC";
console.log (student.name);

delete student.year;
console.log(student.year)
// this: trỏ đến đối tượng đang thực hiện ngữ cảnh hiệN tại

//Duyệt object
for (const key in student) {
    console.log(key, student[key]);
}

//Phương thức:
// Object.key()
console.log(Object.keys(student));

//Object.value()
console.log(Object.values(student));

// hasOwnProperty: Kiểm tra 1 key có tồn tại trong Object không
console.log(student.hasOwnProperty("name"));
console.log(student.hasOwnProperty("phone"));

//Bài tập
const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
]

// 1. Viết function tính thứ hạng trung bình của cả lớp
const calculateAvgClass = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i].grade;
    }
    return total/arr.length;
}

console.log(calculateAvgClass(grades));

// 2. Viết function tính thứ hạng trung bình của nam trong lớp
const calculateAvgMale = (arr) => {
    let totalMale = 0;
    let checkSex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].sex == "M") {
            totalMale += arr[i].grade;
            checkSex += 1;
        }
    }
    return totalMale/checkSex;
}

console.log(calculateAvgMale(grades));

// 3. Viết function tính thứ hạng trung bình của Nữ trong lớp
const calculateAvgFemale = (arr) => {
    let totalFemale = 0;
    let checkSex1 = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].sex == "F") {
            totalFemale += arr[i].grade;
            checkSex1 += 1;
        }
    }
    return totalFemale/checkSex1;
}

console.log(calculateAvgFemale(grades));

// 4. Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp
const checkHighestGradeMale = (arr) => {
    let maxMale = arr[0].grade;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].grade > maxMale && arr[i].sex == "M") {
            maxMale = arr[i].grade;
        }
    }
    return arr.filter(e => (e.sex == "M") && (e.grade == maxMale));
}
console.log(checkHighestGradeMale(grades));

// 5. Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
const checkHighestGradeFemale = (arr) => {
    let maxFemale = arr[0].grade;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].grade > maxFemale && arr[i].sex == "F") {
            maxFemale = arr[i].grade;
        }
    }
    return arr.filter(e => (e.sex == "F") && (e.grade == maxFemale));
}
console.log(checkHighestGradeFemale(grades));

// 8. Viết function thứ hạng cao nhất của cả lớp
const checkHighestGrades = (arr) => {
    let maxOfGrade = arr[0].grade;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].grade > maxOfGrade) {
            maxOfGrade = arr[i].grade;
        }
    }
    return arr.filter(e => e.grade == maxOfGrade);
}
console.log(checkHighestGrades(grades));

// 9. Viết function thứ hạng thấp nhất của cả lớp
const checkLowestGrades = (arr) => {
    let minOfGrade = arr[0].grade;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i].grade < minOfGrade) {
            minOfGrade = arr[i].grade;
        }
    }
    return arr.filter(e => e.grade == minOfGrade);
}
console.log(checkLowestGrades(grades));

//10. Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
//Cách 1
const listOfFemale1 = (arr) => {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].sex == "F") {
            result.push(arr[i]);
        }
    }
    return result
}
console.log(listOfFemale1(grades))

//Cách 2
const listOfFemale2 = (arr) => {
    return arr.filter(e => e.sex == "F")
}
console.log(listOfFemale2(grades))

//11. Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
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

console.log(`Thứ hạng trung bình của cả lớp là ${calculateAvgClass(grades)}`);

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

console.log(`Thứ hạng trung bình của nam trong lớp là ${calculateAvgMale(grades)}`);

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

console.log(`Thứ hạng trung bình của Nữ trong lớp là ${calculateAvgFemale(grades)}`);

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
console.log(`Học viên Nam có thứ hạng cao nhất trong lớp là:`)
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
console.log(`Học viên Nữ có thứ hạng cao nhất trong lớp là:`)
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
console.log(`Học viên có thứ hạng cao nhất trong lớp là:`)
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
console.log(`Học viên có thứ hạng thấp nhất trong lớp là:`)
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
console.log(`Danh sách tất cả học viên Nữ trong lớp cách 1 là:`)
console.log(listOfFemale1(grades))

//Cách 2
const listOfFemale2 = (arr) => {
    return arr.filter(e => e.sex == "F")
}
console.log(`Danh sách tất cả học viên Nữ trong lớp cách 2 là:`)
console.log(listOfFemale2(grades))

//11. Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
const sortByABCName = (arr) => {
    return arr.sort((a, b) => a.name.localeCompare(b.name))
}
console.log(`Danh sách tất cả học viên theo chiều tăng dần của bảng chữ cái là:`)
console.log(sortByABCName(grades))

//12. Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
const sortByGrade = (arr) => {
    let result = [...arr];
    return result.sort((e1, e2) => {
        return -(e1.grade - e2.grade);
    });
}
console.log(`Danh sách thứ hạng học viên theo chiều giảm dần là:`)
console.log(sortByGrade(grades))

//13. Viết function lấy ra học viên Nữ có tên bắt đầu bằng "J"
const sortByJName = (arr) => {
    return arr.filter(e => e.name[0] == "J" && e.sex == "F")
}
console.log(`Danh sách học viên Nữ có tên bắt đầu bằng "J" là:`)
console.log(sortByJName(grades))

//14. Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
const sortBy5thHighestGrade = (arr) => {
    let result = sortByGrade(arr);
    result = result.filter((value, index) => index < 5);
    return result;
}
console.log(`Danh sách top 5 người có thứ hạng cao nhất trong lớp là:`)
console.log (sortBy5thHighestGrade(grades))

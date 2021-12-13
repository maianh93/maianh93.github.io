let student_warning = {
    students: [
        {
            name: "Lê Hoài Nam",
            email: "namlehoai@gmail.com",
            phone: "123456789",
            total_off: 2,
            sessions: 14,
            detail_info: [
                {
                    date: "01-09-2020",
                    note: "Xin nghỉ ốm",
                    teacher: "Bùi Hiên",
                },
                {
                    date: "05-09-2020",
                    note: "Buồn vì thất tình",
                    teacher: "Nguyễn Hàn Duy",
                },
            ],
        },
        {
            name: "Đỗ Đăng Nguyên",
            email: "nguyen@gmail.com",
            phone: "0123987654",
            total_off: 2,
            sessions: 14,
            detail_info: [
                {
                    date: "01-09-2020",
                    note: "Mưa to nên ngại đi học",
                    teacher: "Bùi Hiên",
                },
                {
                    date: "05-09-2020",
                    note: "Trượt lô, nên rút học phí để đánh",
                    teacher: "Nguyễn Hàn Duy",
                },
            ],
        },
        {
            name: "Nguyễn Xuân Ba",
            email: "3nx92nd@gmail.com",
            phone: "0344005987",
            total_off: 3,
            sessions: 14,
            detail_info: [
                {
                    date: "01-09-2020",
                    note: "Đang training không đi học được",
                    teacher: "Bùi Hiên",
                },
                {
                    date: "07-09-2020",
                    note: "Soạn giáo án đặc vụ 0175",
                    teacher: "Nguyễn Hàn Duy",
                },
                {
                    date: "10-09-2020",
                    note: "Ganks team còng lưng nên chưa đi học được",
                    teacher: "Nguyễn Hàn Duy",
                },
            ],
        },
    ],
    class: "Lập trình Game 2D Canvas",
    course: "Lập trình Game",
    sessions: 14,
    teachers: [
        {
            name: "Bùi Hiên",
            email: "hien@techmaster.vn",
            phone: "0123456789",
        },
        {
            name: "Nguyễn Hàn Duy",
            email: "duy@techmaster.vn",
            phone: "0987654321",
        },
    ],
};

// Dựa vào thông tin của object student_warning. Hãy hiển thị dự liệu tương tự như demo trong mã HTML
const classNameElement = document.querySelector("#className");
const courseNameElement = document.querySelector("#courseName");
const teacherElement = document.querySelector("#teachers");
const sessionsElement = document.querySelector("#sessions");
const teacherDetailsElement = document.querySelector("#teacher-details");
const studentTableElement = document.querySelector("table tbody");


const fillClassName = () => {
    let newClassNameHtml = classNameElement.innerHTML.replace("replace_me", student_warning.class);
    classNameElement.innerHTML = newClassNameHtml;
}

const fillCourseName = () => {
    let newCourseNameHtml = courseNameElement.innerHTML.replace("replace_me", student_warning.course);
    courseNameElement.innerHTML = newCourseNameHtml;
}

const fillSessionsName = () => {
    let newSessionsNameHtml = sessionsElement.innerHTML.replace("replace_me", student_warning.sessions);
    sessionsElement.innerHTML = newSessionsNameHtml;
}

const singleTeacherDetailsElement = () => {
    let singleTeacher = document.createElement("li");
    return singleTeacher;
}

const fillTeachersInfo = () => {
    for (let i = 0; i < student_warning.teachers.length; i++) {
        let newLi = singleTeacherDetailsElement();
        teacherDetailsElement.appendChild(newLi);
        newLi.innerText = `${student_warning.teachers[i].name}  ( ${student_warning.teachers[i].email} - ${student_warning.teachers[i].phone} ) `
    }
}

const renderClassInfo = (obj) => {
    fillClassName();
    fillCourseName();
    fillSessionsName();
    fillTeachersInfo();
}

const renderStudentInfo = (arr) => {
    studentTableElement.innerHTML = '';

    for (let i = 0; i < arr.length; i++) {
        const s = arr[i]; // object student
        for (let j = 0; j < s.detail_info.length; j++) {
            const d = s.detail_info[j];
            if (j == 0) {
                studentTableElement.innerHTML += `
            <tr>
                <td rowspan="${s.total_off}">${i + 1}</td>
                <td rowspan="${s.total_off}">${s.name}</td>
                <td rowspan="${s.total_off}">${s.email}</td>
                <td rowspan="${s.total_off}">${s.phone}</td>
                <td class="text-center" rowspan="${s.total_off}">${s.total_off}/${s.sessions}</td>
                <td class="text-center">${d.date}</td>
                <td>${d.note}</td>
                <td>${d.teacher}</td>
            </tr>
        `} else {
                studentTableElement.innerHTML += `
            <tr>
                <td class="text-center">${d.date}</td>
                <td>${d.note}</td>
                <td>${d.teacher}</td>
            </tr>
        `
            }
        }
    }
}

// -----------------

const main = () => {
    renderClassInfo(student_warning);
    renderStudentInfo(student_warning.students);
}

main();


// Yêu cầu: Sử dụng Javascript để thực hiện các công việc sau
// 1. Thêm 3 job bổ sung vào phần 'job' của trang bằng cách sao chép 'job-card' ban đầu.
const jobCard = document.querySelector(".col-md-3.job-card");
console.log(jobCard);
const parentJobCard = document.querySelector(".row.jobs");
console.log(parentJobCard)
//Sao chép
const secondJobCard = jobCard.cloneNode(true);
const thirdJobCard = jobCard.cloneNode(true);
const fourthJobCard = jobCard.cloneNode(true);
console.log(secondJobCard)

// Đặt vào vị trí
parentJobCard.appendChild(secondJobCard);
parentJobCard.appendChild(thirdJobCard);
parentJobCard.appendChild(fourthJobCard);

// 2. Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Java Developer, Python Developer
secondJobCard.querySelector(".job-card-inner h3").innerHTML = "JavaScript Developer";
thirdJobCard.querySelector(".job-card-inner h3").innerHTML = "Java Developer";
fourthJobCard.querySelector(".job-card-inner h3").innerHTML = "Python Developer";


// 3. Cập nhật Jobs listed thành tổng số công việc hiện có trong trang
const jobList = document.querySelector(".hero #jobs-listed span");
console.log(jobList);

const countJobList = document.querySelectorAll(".col-md-3.job-card")
console.log()

jobList.innerText = `${countJobList.length}`;

// 4. Nhập tên công việc vào ô tìm kiếm để lọc các công việc (lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi
const content = document.querySelector("#search");
console.log(content);

content.addEventListener("input", () => {
    // Lấy nội dung trong input
    let contentText = content.value;
    console.log(contentText)
    // Truy cập vào tất cả các job-card

    // Duyệt qua job-card, tìm kiếm các job-card có title h3 chứa nội dung trong ô input => hiển thị lên, ngược lại thì ẩn đi
    Array.from(countJobList).map(e => {
        // Convert sang chữ thường
        if (e.querySelector(".job-card-inner h3").innerText.toLowerCase().indexOf(contentText.toLowerCase()) == -1) {
            e.style.display = "none";
        } else {
            e.style.display = "block";
        }
    })
})

// 5. Bấm vào Nút "All jobs" để reset ô tìm kiếm và hiển thị ra tất cả các công việc
const allJobsBtn = document.querySelector("#show-all");
console.log(allJobsBtn);

// Sự kiện: click vào
allJobsBtn.addEventListener("click", () => {
    // Xóa ô input
    content.value = "";
    // Hiển thị tất cả
    Array.from(countJobList).map(e => {
        e.style.display = "block";
    })
});
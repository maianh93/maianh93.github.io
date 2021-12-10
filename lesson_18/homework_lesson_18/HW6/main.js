// Bài 1: Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = "yellow")
const highLight = document.createElement("span");
highLight.classList.add("bold-word")
const para = document.querySelector('p');


// bài 2: Thêm link hiển thị text "facebook" link đến trang facebook.com ở sau thẻ p
const linkFacebook = document.createElement('a');
console.log(linkFacebook);

linkFacebook.innerText = "Facebook";
linkFacebook.href = "https://www.facebook.com";
linkFacebook.target = "blank";

document.body.appendChild(linkFacebook);

// bài 3. Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const countTextDiv = document.createElement('div');
document.body.appendChild(linkFacebook);
console.log(countTextDiv);

const countText = (paragraph) => {
    let words = paragraph.split(" ");
    let count = words.filter (e => !isEmpty(e)).length;
    return count;
}

function isEmpty(str) {
    return (!str || str.length === 0 );
}

countTextDiv.innerText = countText(para.innerText);

// Bài 4: thay thế các ký hiệu ? => 🤔, ! => 😲
para.innerHTML = para.innerHTML.replaceAll("?", "🤔");
para.innerHTML = para.innerHTML.replaceAll("!", "😲");

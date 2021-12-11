// Bài 1: Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = "yellow")
// Lấy nội dung
const pElement = document.querySelector("p");
console.log(pElement)
console.log(pElement.innerText)

let arrInnerText = pElement.innerText.split(" ");
console.log(arrInnerText);

// Lấy ra những từ có độ dài lớn hơn hoặc bằng 8 và set class back-ground vào thẻ span
for (let i = 0; i < arrInnerText.length; i++) {
    if (arrInnerText[i].length >= 8) {
        arrInnerText[i] = `<span class = "bold-word">${arrInnerText[i]}</span>`
    }
}

// Thay thế vào đoạn văn
pElement.innerHTML = arrInnerText.join(" ");


// bài 2: Thêm link hiển thị text "facebook" link đến trang facebook.com ở sau thẻ p
const linkFacebook = document.createElement('a');
console.log(linkFacebook);

linkFacebook.innerText = "Facebook";
linkFacebook.href = "https://www.facebook.com";
linkFacebook.target = "blank";

document.body.appendChild(linkFacebook);

// bài 3. Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
const countTextDiv = document.createElement('div');
document.body.appendChild(countTextDiv);
console.log(countTextDiv);
function isEmpty(str) {
    return (!str || str.length === 0 );
}
const countText = (paragraph) => {
    let result = 0;
    let words = paragraph.split(" ");
    console.log(words)
    let wordFilter = words.filter(e => !isEmpty(e));
    return result = wordFilter.length;
}

countTextDiv.innerText = countText(pElement.innerText);

// Bài 4: thay thế các ký hiệu ? => 🤔, ! => 😲
pElement.innerHTML = pElement.innerHTML.replaceAll("?", "🤔");
pElement.innerHTML = pElement.innerHTML.replaceAll("!", "😲");


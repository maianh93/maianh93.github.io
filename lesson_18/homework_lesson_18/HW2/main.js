// Yêu cầu:
// - Mỗi lần ấn vào nút button, random ra một màu HEX
// - Hiển thị màu HEX đó ra màn hình (trong thẻ span có id="hex-value")
// - Đổi màu background của trang web thành mã màu HEX đó
const button = document.querySelector('button');

button.addEventListener('click', function () {
    // console.log('click');
    const hexCode = randomHexCode();
    //Khi click chuột sẽ đổi background color thành màu ngẫu nhiên
    document.body.style.backgroundColor = hexCode;
    //Cập nhật vào span
    document.getElementById('hex-value').innerText = hexCode;
})
// random màu
const randomHexCode = () => {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i=0; i<6; i++) {
      color = color + letters[Math.floor(Math.random() * 16)]; //tìm số ngẫu nhiên trong 1 khoảng cố định, giá trị trả về là từ 0-15
    }
    return color;
}
console.log(randomHexCode())

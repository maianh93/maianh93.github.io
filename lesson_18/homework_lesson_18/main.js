// - Khi bấm vào nút sẽ đổi màu background (màu bất kỳ) của trang web

const button = document.querySelector('button');

button.addEventListener('click', function () {
    console.log('click');
    //Khi click chuột sẽ đổi background color thành màu ngẫu nhiên
    document.body.style.backgroundColor = randomRgbCode();
})
// random màu
const randomRgbCode = () => {
    let rValue = Math.floor(Math.random() * 256);
    let gValue = Math.floor(Math.random() * 256);
    let bValue = Math.floor(Math.random() * 256);
    return `rgb(${rValue}, ${gValue}, ${bValue})`
}




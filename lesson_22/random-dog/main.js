const btnElement = document.getElementById("btn");
const imgElemeent = document.getElementById("image");

btnElement.addEventListener("click", () => {
    getRandomImage()
})

async function getRandomImage() {
    // Gọi API lấy ảnh random: cần có công cụ để gọi: axios(nên dùng) ->  dùng link CDN; fetchAPI(sẵn có)
    try {
    let res = await axios.get("https://dog.ceo/api/breeds/image/random");
    // Gán ảnh vào thẻ image
    image.src = res.data.message
    } catch (error) {
        console.log(error);
    }
} 
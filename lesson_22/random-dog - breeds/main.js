const btnElement = document.getElementById("btn");
const imgElemeent = document.getElementById("image");
const selectElement = document.getElementById("breed-list")
const formElement = document.getElementsByClassName("form");
const imageRandomElement = document.getElementById("imagerandom")

// Vừa load trang phải gọi API đêr render danh sách
// API: https://dog.ceo/api/breeds/list/all

async function getBreedList() {
    // Gọi API để hiển thị danh sách giống loài
    try {
        let res = await axios.get("https://dog.ceo/api/breeds/list/all");
        console.log(res);
    
        //Sau khi có data thì hiển thị kết quả lên trên giao diện
        renderBreed(res.data.message)
    } catch (error) {
        console.log(error);
    }

}

function renderBreed(breeds) {
    // Duyệt qua breeds -> tạo thẻ option -> gắn vào DOM
    for (const key in breeds) {
            const optionSelection = document.createElement("option");
            optionSelection.innerText = key;
            optionSelection.value = key;
            // console.log(optionSelection)
            selectElement.appendChild(optionSelection);
    }
}

btnElement.addEventListener("click", () => {
    let a = selectElement.value;
    getRandomImage(a);
})

async function getRandomImage(a) {
    // Gọi API lấy ảnh random: cần có công cụ để gọi: axios(nên dùng) ->  dùng link CDN; fetchAPI(sẵn có)
    try {
    let res = await axios.get(`https://dog.ceo/api/breed/${a}/images/random`);
    // Gán ảnh vào thẻ image
    imgElemeent.src = res.data.message;
    } catch (error) {
        console.log(error);
    }
} 

getBreedList()
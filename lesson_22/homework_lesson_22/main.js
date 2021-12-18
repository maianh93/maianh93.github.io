const btnElement = document.getElementById("btn");
const imgElemeent = document.getElementById("image");
const subBreedElement = document.getElementById("sub-breeds-list");
const selectElement = document.getElementById("breed-list")
const formElement = document.getElementsByClassName("form");
const imageRandomElement = document.getElementById("imagerandom")

// Vừa load trang phải gọi API đêr render danh sách
// API: https://dog.ceo/api/breeds/list/all

async function getBreedList() {
    // Gọi API để hiển thị danh sách giống loài
    try {
        let res = await axios.get("https://dog.ceo/api/breeds/list/all");
        // console.log(res);
    
        //Sau khi có data thì hiển thị kết quả lên trên giao diện
        renderBreed(res.data.message)
    } catch (error) {
        console.log(error);
    }

}

async function getSubBreedList() {
    try {
        let a = selectElement.value;
        let res = await axios.get(`https://dog.ceo/api/breed/${a}/list`);
        console.log(res);
    
        //Sau khi có data thì hiển thị kết quả lên trên giao diện
        renderSubBreeds(res.data.message, a)
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
            selectElement.appendChild(optionSelection);
    }
}

function renderSubBreeds(arr, parent) {
    subBreedElement.innerHTML = "";
    if (arr.length == 0) {
        const subBreedList = document.createElement("li");
        subBreedList.innerText = "Không có sub breed";
        subBreedElement.appendChild(subBreedList);
    } else {
        for (const value of arr) {
            const subBreedList = document.createElement("li");
            subBreedList.innerHTML = `<a href="#" onclick="getRandomImage('${parent}/${value}')">${value}</a>`;
            console.log(subBreedList)
            subBreedElement.appendChild(subBreedList);
        }
    }
}


btnElement.addEventListener("click", () => {
    getSubBreedList();
})
// btnElement.addEventListener("click", () => {
//     let a = selectElement.value;
//     getRandomImage(a);
// })

async function getRandomImage(a) {
    // Gọi API lấy ảnh random: cần có công cụ để gọi: axios(nên dùng) ->  dùng link CDN; fetchAPI(sẵn có)
    try {
    let url = `https://dog.ceo/api/breed/${a}/images/random`;
    let res = await axios.get(url);
    console.log(url)
    // Gán ảnh vào thẻ image
    imgElemeent.src = res.data.message;
    } catch (error) {
        console.log(error);
    }
} 


getBreedList()

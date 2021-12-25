const data = [
    {
        title: "Chỉ số BMI dưới 18,5 là thiếu cân",
        content: "Bạn cần áp dụng chế độ ăn và thể thao để tăng cân.",
        image: "https://images.unsplash.com/photo-1541306912932-f6bed7f462eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
        title: "Chỉ số BMI từ 18,5 đến 24,9 là bình thường",
        content: "Bạn có một cơ thể tốt.",
        image: "https://images.unsplash.com/photo-1579047440583-43a690fe2243?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
        title: "Chỉ số BMI ở giữa 25,0 và 29,9 được coi là thừa cân",
        content: "Tuy nhiên, tình trạng chưa quá trầm trọng nên bạn có thể tìm ngay các phương pháp giảm cân hiệu quả tự nhiên và kết hợp luyện tập. Nếu áp dụng điều độ và kiên trì, chỉ cần tốn khoảng vài tháng là bạn có ngay vóc dáng rất ưng ý rồi đó.",
        image: "https://images.unsplash.com/photo-1573879541250-58ae8b322b40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    },
    {
        title: "Chỉ số BMI bằng hoặc trên 30 được xem là béo phì",
        content: "Với mức cân nặng này, cơ thể của bạn phải gặp rất nhiều áp lực hàng ngày, đặc biệt trọng lượng mỡ tạo áp lực lên cơ xương và các cơ quan làm ảnh hưởng đến sinh hoạt và sức khỏe của bạn.",
        image: "https://images.unsplash.com/photo-1573879026263-0ae3b9599d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=620&q=80",
    }
];

const buttonSubmitElement = document.querySelector("#btn-submit");
const heightDivElement = document.querySelector("#height-input");
const weightDivElement = document.querySelector("#weight-input");
const heightInputElement = document.querySelector("#height");
const weightInputElement = document.querySelector("#weight");
const titleElement = document.querySelector(".say-hello.text-center");
const resultTitleElement = document.querySelector(".result-container.hide");
const imageElement = document.querySelector(".image-box");


// console.log(document.querySelector("#height-input small").innerText="OK")
// weightInputElement.classList.add("error")
buttonSubmitElement.addEventListener("click", () => {
    var isNeedCalculateBMI = true;
    if (!heightInputElement.value || heightInputElement.value.trim() === "") {
        document.querySelector("#height-input small").innerText="Chiều cao không được để trống";
        heightDivElement.classList.add("error");
        isNeedCalculateBMI = false;
    } else if (isNaN(Number((heightInputElement.value))) == true || heightInputElement.value < 0) {
        document.querySelector("#height-input small").innerText="Không đúng định dạng.";
        heightDivElement.classList.add("error");
        isNeedCalculateBMI = false;
    }

    if (!weightInputElement.value || weightInputElement.value.trim() === "") {
        document.querySelector("#weight-input small").innerText="Cân nặng không được để trống";
        weightDivElement.classList.add("error");
        isNeedCalculateBMI = false;
    } else if (isNaN(Number((weightInputElement.value))) == true || weightInputElement.value < 0) {
        document.querySelector("#weight-input small").innerText="Không đúng định dạng.";
        weightDivElement.classList.add("error");
        isNeedCalculateBMI = false;
    }

    if (isNeedCalculateBMI) {
        heightDivElement.classList.remove("error");
        weightDivElement.classList.remove("error");
        // BMI = weight / (height * height)
        let bmi = (Number(weightInputElement.value))/((Number(heightInputElement.value)/100)*(Number(heightInputElement.value)/100))
        let roundBMI = (Math.round(bmi * 100) / 100);
        console.log((Math.round(bmi * 100) / 100))
        titleElement.classList.add("hide");
        resultTitleElement.classList.remove("hide");
        if(roundBMI < 18.5) {
            resultTitleElement.innerHTML = `<span class="result-num">Chỉ số BMI của bạn là ${roundBMI}</span>
            <!-- Hiển thị giới hạn về BMI -->
            <span class="result-title">${data[0].title}</span>

            <!-- Hiển thị thông tin BMI -->
            <span class="result-content">${data[0].content}</span>`
            imageElement.style.backgroundImage = `url(${data[0].image})`;
        } else if(roundBMI > 18.5 && roundBMI < 24.9) {
            resultTitleElement.innerHTML = `<span class="result-num">Chỉ số BMI của bạn là ${roundBMI}</span>
            <!-- Hiển thị giới hạn về BMI -->
            <span class="result-title">${data[1].title}</span>

            <!-- Hiển thị thông tin BMI -->
            <span class="result-content">${data[1].content}</span>`
            imageElement.style.backgroundImage = `url(${data[1].image})`;
        } else if(roundBMI > 25.00 && roundBMI < 29.9) {
            resultTitleElement.innerHTML = `<span class="result-num">Chỉ số BMI của bạn là ${roundBMI}</span>
            <!-- Hiển thị giới hạn về BMI -->
            <span class="result-title">${data[2].title}</span>

            <!-- Hiển thị thông tin BMI -->
            <span class="result-content">${data[2].content}</span>`
            imageElement.style.backgroundImage = `url(${data[2].image})`;
        } else {
            resultTitleElement.innerHTML = `<span class="result-num">Chỉ số BMI của bạn là ${roundBMI}</span>
            <!-- Hiển thị giới hạn về BMI -->
            <span class="result-title">${data[3].title}</span>

            <!-- Hiển thị thông tin BMI -->
            <span class="result-content">${data[3].content}</span>`
            imageElement.style.backgroundImage = `url(${data[3].image})`;
        }
    }
})






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


$("#btn-submit").click(() => {
    var isNeedCalculateBMI = true;
    if(!$("#height").val() || !$("#height").val().trim() === "") {
        $("#height-input small").text("Chiều cao không được để trống");
        $("#height-input").addClass("error");
        isNeedCalculateBMI = false;
    } else if(isNaN(Number($("#height").val())) == true || $("#height").val() < 0) {
        $("#height-input small").text("Không đúng định dạng");
        $("#height-input").addClass("error");
        isNeedCalculateBMI = false
    }

    if(!$("#weight").val() || !$("#weight").val().trim() === "") {
        $("#weight-input small").text("Cân nặng không được để trống");
        $("#weight-input").addClass("error");
        isNeedCalculateBMI = false;
    } else if(isNaN(Number($("#weight").val())) == true || $("#weight").val() < 0) {
        $("#weight-input small").text("Không đúng định dạng");
        $("#weight-input").addClass("error");
        isNeedCalculateBMI = false
    }    

    if (isNeedCalculateBMI) {
        $("#height-input").removeClass("error");
        $("#weight-input").removeClass("error");
        // BMI = weight / (height * height)
        let bmi = (Number($("#weight").val()))/((Number($("#height").val())/100)*(Number($("#height").val())/100));
        console.log(bmi)
        let roundBMI = (Math.round(bmi * 100) / 100);
        $(".say-hello.text-center").addClass("hide");
        $(".result-container.hide").removeClass("hide");
        if (roundBMI < 18.5) {
            $(".result-container").html(`<span class="result-num">Chỉ số BMI của bạn là ${roundBMI}</span>
            <!-- Hiển thị giới hạn về BMI -->
            <span class="result-title">${data[0].title}</span>

            <!-- Hiển thị thông tin BMI -->
            <span class="result-content">${data[0].content}</span>`)
            $(".image-box").css({
                "background-image": `url(${data[0].image})`
            })
        } else if (roundBMI > 18.5 && roundBMI < 24.9) {
            $(".result-container").html(`<span class="result-num">Chỉ số BMI của bạn là ${roundBMI}</span>
                <!-- Hiển thị giới hạn về BMI -->
                <span class="result-title">${data[1].title}</span>
    
                <!-- Hiển thị thông tin BMI -->
                <span class="result-content">${data[1].content}</span>`)
            $(".image-box").css({
                "background-image": `url(${data[1].image})`
            })
        } else if (roundBMI > 25.00 && roundBMI < 29.9) {
            $(".result-container").html(`<span class="result-num">Chỉ số BMI của bạn là ${roundBMI}</span>
                <!-- Hiển thị giới hạn về BMI -->
                <span class="result-title">${data[2].title}</span>
    
                <!-- Hiển thị thông tin BMI -->
                <span class="result-content">${data[2].content}</span>`)
            $(".image-box").css({
                "background-image": `url(${data[2].image})`
            })
        } else {
            $(".result-container").html(`<span class="result-num">Chỉ số BMI của bạn là ${roundBMI}</span>
                <!-- Hiển thị giới hạn về BMI -->
                <span class="result-title">${data[3].title}</span>
    
                <!-- Hiển thị thông tin BMI -->
                <span class="result-content">${data[3].content}</span>`)
            $(".image-box").css({
                "background-image": `url(${data[3].image})`
            })
        }
    }
})




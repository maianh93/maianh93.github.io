//jquery
// $(document).ready(function () {
//     $("#btn").click(function () {
//         $(".para").fadeOut(1000);
//     });
// });

$(document).ready(function () {
    console.log($("#heading").text())
    $("#heading").text("Hôm nay thế nào")
    $("#heading").html("<span>Đây là thẻ heading</span>")

    // $("#heading").css("background-color", "red");
    // $("#heading").css("color", "white");

    $("#heading").css({
        "background-color" : "red",
        "color" : "black",
        "font-size" : "100px"
    })

    $("p").each(function(index, ele) {
        console.log(ele);
        $(ele).css("color", "blue")
    })
});

// //javascript
// window.onload = function() {
//     const btn = document.querySelector("#btn");
//     const para = document.querySelector(".para");
//     btn.addEventListener("click", function() {
//         para.style.display = "none";
//     })
// }
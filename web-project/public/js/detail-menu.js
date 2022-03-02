async function loadPage() {
    try {
        const res = await callGetProductsAPI()
        // renderProduct(res.data)
        console.log(res)
    } catch (error) {
        console.log(error);
    }
}

const renderProduct = (arr) => {
    //Trường hợp mảng rỗng
    if (arr.length == 0) {
        mainMenuElement.innerHTML = "<li>Không có sản phẩm nào trong thực đơn</li>";
        return
    }

    let numberOfCategory = arr.length;
    let numberOfRow = Math.floor(numberOfCategory / 3 + 1);

    let innerHtmlMainMenuElement = "";
    let j = 0;
    for (let i = 0; i < numberOfRow; i++) {
        let innerHtmlRowTextCenterElement = "";

        for (; j < arr.length; j++) {
            const t = arr[j];
            // Clear nội dung
            innerHtmlRowTextCenterElement += `
            <div class="col-lg-4 col-md-4 col-sm-12">
            <div class="detail-menu__card mx-auto">
                <div class="detail-menu__card-image">
                    <img src="../public/image/detail-menu/mon-le/1mieng-cay.png" alt="1mieng-gagionkhongcay">
                </div>
                <div class="detail-menu__info">
                    <h3 class="regular-text uppercase-text orange-text extra-bold-text mt-3">1 miếng gà giòn
                        không cay</h3>
                    <p class="detail-menu__info-content small-text regular-bold-text grey-text pe-3 ps-3">Gà
                        giòn Cajun tươi mới được ướp với công thức gia vị Louisiana cay tẩm bột thủ công và rán
                        chín cùng lớp phủ giòn tan</p>
                    <p class="extra-bold-text green-text pt-3">36.000đ</p>
                </div>
                <div class="btn btn--red btn--order uppercase-text small-text bold-text mb-4">Đặt mua</div>
            </div>
        </div>
            `
        }
        
        innerHtmlMainMenuElement += `
        <div class="container mt-5">
            <div class="row text-center">
                ${innerHtmlRowTextCenterElement}
            </div>
        </div>
        `;
    }

    document.querySelector(".main-menu").innerHTML = `
    <h2 class="extra-large-text red-text extra-bold-text uppercase-text text-center">Món lẻ</h2>
    ` + innerHtmlMainMenuElement;
}

loadPage()
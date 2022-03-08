const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get('id');
const categoryName = urlParams.get('name');

const numberFormater = new Intl.NumberFormat('de-DE');

async function loadPage() {
    try {
        const res = await callGetProductsAPI(categoryId)
        renderProduct(res.data)
        console.log(res.data)
    } catch (error) {
        console.log(error);
    }
}

//render product
const renderProduct = (arr) => {
    //Trường hợp mảng rỗng
    if (arr.length == 0) {

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
            <div class="detail-menu__card mx-auto mt-5">
                <div class="detail-menu__card-image">
                    <img src="${t.imageUrl}" alt="1mieng-gagionkhongcay">
                </div>
                <div class="detail-menu__info">
                    <h3 class="regular-text uppercase-text orange-text extra-bold-text mt-3">${t.descriptions.VN.text}</h3>
                    ${buildDescription(t.units.VN)}
                    <p class="extra-bold-text green-text pt-3">${numberFormater.format(t.prices.VND.price)}đ</p>
                </div>
                <div onclick="orderSingleProduct()" class="btn btn--red btn--order uppercase-text small-text bold-text mb-4">Đặt mua</div>
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

    document.querySelector(".detail-menu").innerHTML = `
    <h2 class="extra-large-text red-text extra-bold-text uppercase-text text-center mt-5">${categoryName}</h2>
    ` + innerHtmlMainMenuElement;
}

const buildDescription = (obj) => {
    let a = "";
    a = obj.map(e => e.text).join(" + ");
        
    return `<p class="detail-menu__info-content small-text regular-bold-text grey-text pe-3 ps-3">${a}</p>`;
}

//render product
const renderDialog = (arr) => {
    //Trường hợp mảng rỗng
    if (arr.length == 0) {

        return
    }


    let innerHtmlDialogElement = "";

    for (let i = 0; i < arr.length; i++) {
            const t = arr[i];
            // Clear nội dung
            innerHtmlDialogElement += `
            <div class="dialog-body__input-volumn">
            <div class="dialog-body__input-volumn-item">
                <p class="white-text text-center semi-large-text bold-text pt-2">Khoai tây chiên</p>
            </div>
            <div class="container beige-background">
                <div class="row mt-2 p-3">
                    <p class="col-lg-6 col-md-6 col-sm-12 orange-red-text bold-text semi-large-text pt-2">Số lượng
                    </p>
                    <div class="col-lg-6 col-md-6 col-sm-12 dialog-body__input-volumn-quantity d-flex">
                        <div class="quantity">
                            <div class="d-flex">
                                <div class="quantity-icon">
                                    <i class="far fa-minus-square extra-bold-text orange-text fa-2x"></i>
                                </div>
                                <div class="quantity-value">
                                    <input class="orange-text extra-bold-text" type="text" value="1">
                                </div>
                                <div class="quantity-icon">
                                    <i class="far fa-plus-square extra-bold-text orange-text fa-2x"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row pt-3">
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="uppercase-text semi-large-text bold-text text-center">Tổng thanh toán:</div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="pop-up-price semi-large-text bold-text green-text">29.000đ</div>
                </div>
            </div>
        </div>
        <div class="dialog-body__deal-confirm-btn">
            <div class="container pt-3">
                <div class="row">
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="btn btn--white black-text uppercase-text btn--bigger btn--confirm">Thêm vào giỏ
                            hàng</div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="btn btn--orange-red uppercase-text btn--bigger btn--confirm">Thanh toán</div>
                    </div>
                </div>
            </div>
        </div>
          `
    }

    document.querySelector(".dialog-body").innerHTML = innerHtmlDialogElement;
    document.querySelector(".detail-menu").classList.add("opacity-4")
}


//Đặt mua
const orderSingleProduct = () => {
    document.querySelector(".dialog-body").classList.remove("disable");
    document.querySelector(".detail-menu").classList.add("opacity-4")
}


loadPage()
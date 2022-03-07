const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get('id');

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
            <div class="detail-menu__card mx-auto">
                <div class="detail-menu__card-image">
                    <img src="../public/image/detail-menu/mon-le/1mieng-cay.png" alt="1mieng-gagionkhongcay">
                </div>
                <div class="detail-menu__info">
                    <h3 class="regular-text uppercase-text orange-text extra-bold-text mt-3">${t.descriptions.VN.text}</h3>
                    ${buildDescription(t.units.VN)}
                    <p class="extra-bold-text green-text pt-3">${numberFormater.format(t.prices.VND.price)}đ</p>
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

    document.querySelector(".detail-menu").innerHTML = `
    <h2 class="extra-large-text red-text extra-bold-text uppercase-text text-center">Món lẻ</h2>
    ` + innerHtmlMainMenuElement;
}

const buildDescription = (obj) => {
    let a = "";
    for (const i in obj){
        a += `<p class="detail-menu__info-content small-text regular-bold-text grey-text pe-3 ps-3">${obj[i].text}</p>`
    }           
    return a;
}


loadPage()
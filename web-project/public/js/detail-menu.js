const urlParams = new URLSearchParams(window.location.search);
const categoryId = urlParams.get('id');
const categoryName = urlParams.get('name');
const userId = localStorage.getItem("userId");

const numberFormater = new Intl.NumberFormat('de-DE');

async function loadPage() {
    try {
        const resProduct = await callGetProductsAPI(categoryId);
        const resPromotionId = await callGetPromotionProductsAPI();
        const resPromotion = await callGetProductsAPI(resPromotionId.data[0].id);
        document.getElementById("title").innerText=`Pluto | ${categoryName}`

        console.log(resProduct.data)
        console.log(resPromotionId.data[0].id)
        console.log(resPromotion.data)

        renderProduct(resProduct.data, resPromotion.data)
    } catch (error) {
        console.log(error);
    }

    // Promise.all([
    //     callGetProductsAPI(categoryId),
    //     callGetPromotionProductsAPI()
    // ])
    // .then(arr => {
    //     let resProduct = arr[0], resPromotionId = arr[1];
    //     document.getElementById("title").innerText=`Pluto | ${categoryName}`;
    //     console.log(resProduct.data);
    //     console.log(resPromotionId.data[0].id);
    //     return Promise.all([resProduct.data, callGetProductsAPI(resPromotionId.data[0].id)]);
    // })
    // .then(arr => renderProduct(arr[0], arr[1].data))
    // .catch(err => console.log(err))
    
}

//render product
const renderProduct = (products, promotions) => {
    //Trường hợp mảng rỗng
    if (products.length == 0) {

        return
    }

    let numberOfCategory = products.length;
    let numberOfRow = Math.floor(numberOfCategory / 3 + 1);

    let innerHtmlMainMenuElement = "";
    let j = 0;
    for (let i = 0; i < numberOfRow; i++) {
        let innerHtmlRowTextCenterElement = "";

        for (; j < products.length; j++) {
            const t = products[j];
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
                <div onclick="orderSingleProduct(${t.id}, '${t.descriptions.VN.text}', ${t.prices.VND.price} )" class="btn btn--red btn--order uppercase-text small-text bold-text mb-4">Đặt mua</div>
            </div>
        </div>
            `
        }
        
        innerHtmlMainMenuElement += `
        <div class="container">
            <div class="row text-center">
                ${innerHtmlRowTextCenterElement}
            </div>
        </div>
        `;
    }

    document.querySelector(".detail-menu").innerHTML = `
    <h2 class="extra-large-text red-text extra-bold-text uppercase-text text-center mt-5">${categoryName}</h2>
    ` + innerHtmlMainMenuElement;

    let numberOfCategoryPromotion = promotions.length;
    let numberOfRowPromotion = Math.floor(numberOfCategoryPromotion / 3 + 1);

    let innerHtmlPromotionElements = "";
    let k = 0;
    for (let i = 0; i < numberOfRowPromotion; i++) {
        let innerHtmlRowTextCenterElement = "";

        for (; k < promotions.length; k++) {
            const t = promotions[k];
            // Clear nội dung
            innerHtmlRowTextCenterElement += `
            <div class="col-lg-4 col-md-4 col-sm-12">
                <div class="detail-menu__card mx-auto">
                    <div class="detail-menu__card-image">
                        <img src="${t.imageUrl}" alt="mua-2-tang-2">
                    </div>
                    <div class="detail-menu__info">
                        <h3 class="regular-text uppercase-text orange-text extra-bold-text mt-3">${t.descriptions.VN.text}</h3>
                        ${buildDescription(t.units.VN)}
                        <p class="extra-bold-text green-text pt-3">${numberFormater.format(t.prices.VND.price)}đ</p>
                    </div>
                    <div onclick="orderSingleProduct(${t.id}, '${t.descriptions.VN.text}', ${t.prices.VND.price} )" class="btn btn--red btn--order uppercase-text small-text bold-text mb-4">Đặt mua</div>
                </div>
            </div>
            `
        }
        
        innerHtmlPromotionElements += `
        <div class="container mt-5 pb-3">
            <div class="row text-center">
                ${innerHtmlRowTextCenterElement}
            </div>
        </div>
        `;
    }
    document.querySelector(".detail-menu").innerHTML += `<h2 class="container extra-large-text black-text extra-bold-text uppercase-text mt-5">Sản phẩm đang khuyến mãi</h2>` + innerHtmlPromotionElements;

}

const buildDescription = (obj) => {
    let a = "";
    a = obj.map(e => e.text).join(" + ");
    return a=  `<p class="detail-menu__info-content small-text regular-bold-text grey-text pe-3 ps-3">${a}</p>`;
}


//Đặt mua


const orderSingleProduct = (id, productName, productPrice) => {
    isLogin()
        .then(result => {
            if (result) {
                let quantity = document.querySelector(".quantity-value>input");
                callGetOrderByUserIdAndStaTusAPI(localStorage.getItem("userId"))
                    .then(res => {
                        if (res.data && res.data.length > 0) {
                            let items = [...res.data[0].items];
                            let filteredItems = items.filter(item => item.productId == id);
                            return filteredItems && filteredItems.length > 0 && filteredItems[0].quantity > 0 ? filteredItems[0].quantity : 1; 
                        } else {
                            return 1;
                        }
                        
                    })
                    .then(qtty => {
                        quantity.value = qtty;
                        document.getElementById("pop-up-price").innerHTML = `<div class="pop-up-price semi-large-text bold-text green-text">${numberFormater.format(productPrice*quantity.value)}đ</div>`
                    })
                    .catch(err => console.log(err));

                quantity.onchange = function(){
                    document.getElementById("pop-up-price").innerHTML = `<div class="pop-up-price semi-large-text bold-text green-text">${numberFormater.format(productPrice*quantity.value)}đ</div>`
                }
                document.getElementById("add-to-cart").onclick = function() {
                    let userId = localStorage.getItem("userId");
                    let productId = id;
                    let _quantity = quantity.value;
                    callPostUpdateItemOrderAPI({
                        userId,
                        productId,
                        quantity: _quantity
                    })
                    .then(res => {
                        console.log(res.data)
                        return res.data;
                    })
                    .then(data => {
                        let items = data.items;
                        let cartNumber = items
                            .filter(i => i.quantity > 0)
                            .length;
                        localStorage.setItem("cartItemCount", cartNumber);
                        updateCartItemCount();
                    });
                    document.querySelector(".dialog-body").classList.add("disable");
                    document.querySelector(".dialog").classList.add("disable");
                }

                let name = document.querySelector(".dialog-body__input-volumn-item");
                name.innerHTML = `<p class="white-text text-center semi-large-text bold-text pt-2">${productName}</p>`
                document.querySelector(".dialog-body").classList.remove("disable");
                document.querySelector(".dialog").classList.remove("disable");
            } else {
                toastr.error('Đăng nhập trước khi đặt hàng!')
            }
        })
        .catch (error => {
            console.log(error)
        })
}

document.querySelector(".dialog").addEventListener("click", () => {
    document.querySelector(".dialog-body").classList.add("disable");
    document.querySelector(".dialog").classList.add("disable");
}) 



const updateTotalProduct = (inc) => {
    let ele = document.querySelector(".quantity-value>input");
    let currentQtty = parseInt(ele.value);
    ele.value = Math.max(0, currentQtty + inc);
    ele.onchange();

}

loadPage()
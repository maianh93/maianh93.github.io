let products = [

]

async function buildShopingCart (userId) {
    console.log("Build shopping cart!")
    isLogin()
        .then(result => {
            if (result) {
                products.length = 0;
                callGetOrderByUserIdAndStaTusAPI(userId)
                    .then(res => {
                        let data = res.data;
                        console.log("callGetOrderByUserIdAndStaTusAPI: " + JSON.stringify(data));
                        let items = data[0].items;
                        let promiseProducts = [];
                        for (let i = 0; i < items.length; i++) {
                            let item = items[i];
                            let total = item.quantity;
                            if (!total || total <= 0)
                                continue;
                            let id = item.id;
                            let promiseProduct = callGetProductByIdAPI(item.productId)
                                .then(res => {
                                    let product = res.data;
                                    let name = product.descriptions.VN.text;
                                    let description = product.units.VN.map(e => e.text);
                                    let image = product.imageUrl;
                                    let price = product.prices.VND.price;
                                    let productId = item.productId;

                                    let p = {
                                        id,
                                        name,
                                        description,
                                        image,
                                        price,
                                        total,
                                        productId
                                    };
                                    return p;
                                })
                                .catch(error => {
                                    console.log(error);
                                    return {};
                                });
                            promiseProducts.push(promiseProduct);
                        }
                        return Promise.all(promiseProducts);        
                    })
                    .then(ps => {
                        ps.forEach(p => {
                            products.push(p);
                        });
                    })
                    .then(e => {
                        // console.log(products);
                        renderProduct(products);
                    })
                    .catch(error => {
                        console.log(error);
        });   
            } else {
                products.length = 0;
            }
        })
        .catch (error => {
            console.log(error)
        })
         
}

const numberFormater = new Intl.NumberFormat('de-DE');
const checkoutTablement = document.querySelector("#checkout-table");
const summaryTablement = document.querySelector("#summaryTable");

// Render danh s??ch s???n ph???m ra ngo??i giao di???n
const renderProduct = (arr) => {
    //B1: X??a h???t n???i dung tr?????c khi render
    checkoutTablement.innerHTML = `
        <tr>
            <th
                class="col-lg-3 col-md-3 col-sm-12 bold-text black-text small-text uppercase-text">
                t??n s???n ph???m</th>
            <th
                class="col-lg-3 col-md-3 col-sm-12 bold-text black-text small-text uppercase-text">
                s??? l?????ng</th>
            <th
                class="col-lg-3 col-md-3 col-sm-12 bold-text black-text small-text uppercase-text">
                ????n gi??</th>
            <th
                class="col-lg-3 col-md-3 col-sm-12 bold-text black-text small-text uppercase-text">
                th??nh ti???n</th>
        </tr>
    `;

    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        console.log("each", t)
        // Clear n???i dung
        checkoutTablement.innerHTML += `
            <tr>
                <td class="col-lg-3 col-md-3 col-sm-12">${t.name}
                </td>
                <td class="col-lg-3 col-md-3 col-sm-12">${t.total}</td>
                <td class="col-lg-3 col-md-3 col-sm-12">${numberFormater.format(t.price)} ??</td>
                <td class="col-lg-3 col-md-3 col-sm-12 price-right">${numberFormater.format(t.price * t.total)} ??</td>
            </tr>
        `
    }
    const totalBill = arr.map(e => e.total * e.price).reduce((p, c) => p + c);
    const discount = -1 * totalBill * 0.2;
    const vat = (totalBill + discount) * 0.1;
    const shipFee = 49000;
    summaryTablement.innerHTML = `
    <tr>
        <th
            class="col-lg-4 col-md-3 col-sm-12 bold-text black-text small-text uppercase-text">
            <span>T???ng c???ng</span></th>

        <td
            class="col-lg-3 col-md-3 col-sm-12 bold-text black-text small-text price-right">
            ${numberFormater.format(totalBill)} ??</td>
    </tr>
    <tr>
        <th class="col-lg-4 col-md-3 col-sm-12 black-text small-text uppercase-text">
            gi???m gi??</th>
        <td class="col-lg-3 col-md-3 col-sm-12 price-right">${numberFormater.format(discount)} ??</td>
    </tr>
    <tr>
        <th class="col-lg-4 col-md-3 col-sm-12 black-text small-text uppercase-text">ph??
            ship</th>
        <td class="col-lg-3 col-md-3 col-sm-12 price-right">${numberFormater.format(shipFee)} ??</td>
    </tr>
    <tr>
        <th class="col-lg-4 col-md-3 col-sm-12 black-text small-text uppercase-text">
            VAT</th>
        <td class="col-lg-3 col-md-3 col-sm-12 price-right">${numberFormater.format(vat)} ??</td>
    </tr>
    <tr>
        <th
            class="col-lg-4 col-md-3 col-sm-12 black-text small-text uppercase-text bold-text">
            t???ng thanh to??n</th>
        <td class="col-lg-3 col-md-3 col-sm-12 bold-text price-right">${numberFormater.format(totalBill + discount + vat + shipFee)} ??</td>
    </tr>
    `;

}

// In ra m??n h??nh description

const buildDescription = (arr) => {
    let a = "";
    for (let i = 0; i < arr.length; i++) {
            a += `<p class="black-text bold-text small-text">${arr[i]}</p>`
    }
    return a;
}

// Thay ?????i s??? l?????ng c???a item
// C??ch 1
// const updateTotalProduct = (inputQttyId, inc) => {
//     console.log("hi")
//     let ele = document.getElementById(inputQttyId);
//     let currentQtty = parseInt(ele.value);
//     ele.value = Math.max(0, currentQtty + inc);
    
//     console.log("inputQttyId: " + inputQttyId);
//     console.log("ele: " + ele.value);

// }

// C??ch 2: Thay ?????i s??? l?????ng c???a item v?? Thay ?????i t???ng ti???n 1 s???n ph???m
const updateTotalProduct = (id, inc) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) { 
            let currentQtty = products[i].total;
            products[i].total = Math.max(1, currentQtty+= inc);
            let itemInfo = {
                userId: localStorage.getItem("userId"),
                productId: products[i].productId,
                quantity: products[i].total
            };
            callPostUpdateItemOrderAPI(itemInfo);
            return;
        }
    }    
}


// Thay ?????i s??? l?????ng c???a item khi nh???p s???
const changeTotalProduct = (id, event) => {
    // L???y gi?? tr??? trong ?? input d???a v??o bi???n event trong h??m x??? l?? s??? ki???n
    let inputQuantityValue = parseInt(event.target.value);
    // Duy???t m???ng products ????? t??m s???n ph???m thay ?????i
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i].total = inputQuantityValue;
            let itemInfo = {
                userId: localStorage.getItem("userId"),
                productId: products[i].productId,
                quantity: products[i].total
            };
            callPostUpdateItemOrderAPI(itemInfo);
        }
    }
    // Render l???i giao di???n sau khi x??a
    renderProduct(products)
}

// Thay ?????i t???ng ti???n 1 s???n ph???m
// const updateSingleMoney = (id) => {
//     let singleTotal = 0;
//     let currentQtty = parseInt(ele.value);
    
//     return singleTotal = currentQtty * price;
// }

// X??a s???n ph???m
const deleteProduct = (id) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            let itemInfo = {
                userId: localStorage.getItem("userId"),
                productId: products[i].productId,
                quantity: 0
            };
            products.splice(i, 1);
            callPostUpdateItemOrderAPI(itemInfo);
        }
    }
    renderProduct(products)
}

// T??nh t???ng ti???n
const updateTotalMoney = (arr) => {
    // T??nh t???ng ti???n subtotal
    // subtotal = S??? l?????ng * ????n gi??
    let subTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        subTotal += products[i].total * products[i].price;
    }

    // T??nh thu??? gi?? tr??? gia t??ng
    // VAT = 10% c???a subtotal
    let vatTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        vatTotal = 0.1 * subTotal;
    }

    // Ki???m tra xem m?? gi???m gi?? c?? ch??nh x??c hay kh??ng
    // N???u c?? => discount = subtotal * (% m?? gi???m gi??)
    // N???u kh??ng => discount = 0
    // ???n hi???n class "hide" n???u discount ch??nh x??c ho???c kh??ng
    let discountRate = getDiscountRate();
    let discountTotal = discountRate * subTotal;
    let hideClass = discountRate == 0 ? " disable" : "";
    // T??nh t???ng ti???n ph???i tr???
    // total = subtotal + VAT - discount
    let totalMoney = subTotal + vatTotal - discountTotal;

    // let hideClass = discountRate == 0 ? " hide" : "";

    // // C???p nh???t l??n tr??n giao di???n
    summaryUlElement.innerHTML = "";

    summaryUlElement.innerHTML += `
    <li class="subtotal extra-bold-text">T???NG C???NG <span class="extra-bold-text red-text amount-of-money">${numberFormater.format(subTotal)} VND</span>
    </li>
    <li class="vat">VAT<span class="red-text amount-of-money">${numberFormater.format(vatTotal)} VND</span></li>
    <li class="discount ${hideClass}">
            GI???M GI?? (- ${discountRate * 100}%)<span class="red-text amount-of-money">- ${numberFormater.format(discountTotal)} VND</span>
    </li>
    <li class="total">T???NG THANH TO??N <span class="red-text amount-of-money">${numberFormater.format(totalMoney)} VND</span></li>
    ` 
    document.getElementById("confirm-container").innerHTML =`
    <div class="row pt-5 pb-5">
                <div class="continue-order col-lg-6 col-md-6 col-sm-12">
                    <a href="../page/main-menu.html"><div class="btn btn--white uppercase-text">Ti???p t???c ?????t h??ng</div></a>
                </div>
                <div class="confirm-btn col-lg-6 col-md-6 col-sm-12">
                    <a href="../page/checkout.html"><div id="confirm-btn" class="btn btn--orange uppercase-text">Ti???n h??nh thanh to??n</div></a>
                </div>
            </div>`
}

const checkPromoCodeValue = () => {
    let inputPromodCode = inputCodeElement.value;
    let rate = promotionCode[inputPromodCode];
    if (!rate) {
        toastr.error("M?? gi???m gi?? kh??ng ph?? h???p!");
        discountRate = 0;
    } else {
        discountRate = rate;
    }
    updateTotalMoney(products);
}

const getDiscountRate = () => {
    return discountRate;
}


buildShopingCart(localStorage.getItem("userId"))

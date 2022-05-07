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

// Render danh sách sản phẩm ra ngoài giao diện
const renderProduct = (arr) => {
    //B1: Xóa hết nội dung trước khi render
    checkoutTablement.innerHTML = `
        <tr>
            <th
                class="col-lg-3 col-md-3 col-sm-12 bold-text black-text small-text uppercase-text">
                tên sản phẩm</th>
            <th
                class="col-lg-3 col-md-3 col-sm-12 bold-text black-text small-text uppercase-text">
                số lượng</th>
            <th
                class="col-lg-3 col-md-3 col-sm-12 bold-text black-text small-text uppercase-text">
                đơn giá</th>
            <th
                class="col-lg-3 col-md-3 col-sm-12 bold-text black-text small-text uppercase-text">
                thành tiền</th>
        </tr>
    `;

    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        console.log("each", t)
        // Clear nội dung
        checkoutTablement.innerHTML += `
            <tr>
                <td class="col-lg-3 col-md-3 col-sm-12">${t.name}
                </td>
                <td class="col-lg-3 col-md-3 col-sm-12">${t.total}</td>
                <td class="col-lg-3 col-md-3 col-sm-12">${numberFormater.format(t.price)} đ</td>
                <td class="col-lg-3 col-md-3 col-sm-12 price-right">${numberFormater.format(t.price * t.total)} đ</td>
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
            <span>Tổng cộng</span></th>

        <td
            class="col-lg-3 col-md-3 col-sm-12 bold-text black-text small-text price-right">
            ${numberFormater.format(totalBill)} đ</td>
    </tr>
    <tr>
        <th class="col-lg-4 col-md-3 col-sm-12 black-text small-text uppercase-text">
            giảm giá</th>
        <td class="col-lg-3 col-md-3 col-sm-12 price-right">${numberFormater.format(discount)} đ</td>
    </tr>
    <tr>
        <th class="col-lg-4 col-md-3 col-sm-12 black-text small-text uppercase-text">phí
            ship</th>
        <td class="col-lg-3 col-md-3 col-sm-12 price-right">${numberFormater.format(shipFee)} đ</td>
    </tr>
    <tr>
        <th class="col-lg-4 col-md-3 col-sm-12 black-text small-text uppercase-text">
            VAT</th>
        <td class="col-lg-3 col-md-3 col-sm-12 price-right">${numberFormater.format(vat)} đ</td>
    </tr>
    <tr>
        <th
            class="col-lg-4 col-md-3 col-sm-12 black-text small-text uppercase-text bold-text">
            tổng thanh toán</th>
        <td class="col-lg-3 col-md-3 col-sm-12 bold-text price-right">${numberFormater.format(totalBill + discount + vat + shipFee)} đ</td>
    </tr>
    `;

}

// In ra màn hình description

const buildDescription = (arr) => {
    let a = "";
    for (let i = 0; i < arr.length; i++) {
            a += `<p class="black-text bold-text small-text">${arr[i]}</p>`
    }
    return a;
}

// Thay đổi số lượng của item
// Cách 1
// const updateTotalProduct = (inputQttyId, inc) => {
//     console.log("hi")
//     let ele = document.getElementById(inputQttyId);
//     let currentQtty = parseInt(ele.value);
//     ele.value = Math.max(0, currentQtty + inc);
    
//     console.log("inputQttyId: " + inputQttyId);
//     console.log("ele: " + ele.value);

// }

// Cách 2: Thay đổi số lượng của item và Thay đổi tổng tiền 1 sản phẩm
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


// Thay đổi số lượng của item khi nhập số
const changeTotalProduct = (id, event) => {
    // Lấy giá trị trong ô input dựa vào biến event trong hàm xử lý sự kiện
    let inputQuantityValue = parseInt(event.target.value);
    // Duyệt mảng products để tìm sản phẩm thay đổi
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
    // Render lại giao diện sau khi xóa
    renderProduct(products)
}

// Thay đổi tổng tiền 1 sản phẩm
// const updateSingleMoney = (id) => {
//     let singleTotal = 0;
//     let currentQtty = parseInt(ele.value);
    
//     return singleTotal = currentQtty * price;
// }

// Xóa sản phẩm
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

// Tính tổng tiền
const updateTotalMoney = (arr) => {
    // Tính tổng tiền subtotal
    // subtotal = Số lượng * đơn giá
    let subTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        subTotal += products[i].total * products[i].price;
    }

    // Tính thuế giá trị gia tăng
    // VAT = 10% của subtotal
    let vatTotal = 0;
    for (let i = 0; i < arr.length; i++) {
        vatTotal = 0.1 * subTotal;
    }

    // Kiểm tra xem mã giảm giá có chính xác hay không
    // Nếu có => discount = subtotal * (% mã giảm giá)
    // Nếu không => discount = 0
    // Ẩn hiện class "hide" nếu discount chính xác hoặc không
    let discountRate = getDiscountRate();
    let discountTotal = discountRate * subTotal;
    let hideClass = discountRate == 0 ? " disable" : "";
    // Tính tổng tiền phải trả
    // total = subtotal + VAT - discount
    let totalMoney = subTotal + vatTotal - discountTotal;

    // let hideClass = discountRate == 0 ? " hide" : "";

    // // Cập nhật lên trên giao diện
    summaryUlElement.innerHTML = "";

    summaryUlElement.innerHTML += `
    <li class="subtotal extra-bold-text">TỔNG CỘNG <span class="extra-bold-text red-text amount-of-money">${numberFormater.format(subTotal)} VND</span>
    </li>
    <li class="vat">VAT<span class="red-text amount-of-money">${numberFormater.format(vatTotal)} VND</span></li>
    <li class="discount ${hideClass}">
            GIẢM GIÁ (- ${discountRate * 100}%)<span class="red-text amount-of-money">- ${numberFormater.format(discountTotal)} VND</span>
    </li>
    <li class="total">TỔNG THANH TOÁN <span class="red-text amount-of-money">${numberFormater.format(totalMoney)} VND</span></li>
    ` 
    document.getElementById("confirm-container").innerHTML =`
    <div class="row pt-5 pb-5">
                <div class="continue-order col-lg-6 col-md-6 col-sm-12">
                    <a href="../page/main-menu.html"><div class="btn btn--white uppercase-text">Tiếp tục đặt hàng</div></a>
                </div>
                <div class="confirm-btn col-lg-6 col-md-6 col-sm-12">
                    <a href="../page/checkout.html"><div id="confirm-btn" class="btn btn--orange uppercase-text">Tiến hành thanh toán</div></a>
                </div>
            </div>`
}

const checkPromoCodeValue = () => {
    let inputPromodCode = inputCodeElement.value;
    let rate = promotionCode[inputPromodCode];
    if (!rate) {
        toastr.error("Mã giảm giá không phù hợp!");
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

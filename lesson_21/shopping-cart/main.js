//*
// Các chức năng:
// 1. Thay đổi số lượng sản phẩm
// 2. Xóa sản phẩm
// 3. Add mã giảm giá
// 4. Tự động tính tiền
// 5. Cập nhật số lượng sản phẩm
// 6. Render danh sách sản phẩm


// Đối tượng công việc bao gồm:
// - id 
// - name (tên sản phẩm)
// - description (mô tả sản phẩm): any
// - price (giá sản phẩm)
// - total số lượng sản phẫm
// - image


// Mockup danh sách sản phẩm
let products = [
    {
        id: 1,
        name: "Áo kiểu nữ cam đất phối cổ trắng dập ly",
        description: "Sản phẩm dễ dàng phối hợp cùng nhiều trang phục và phụ kiện khác mang đến phong cách thời trang riêng cho bạn nữ.",
        image: "https://image.yes24.vn/Upload/ProductImage/anhduong201605/1947415_L.jpg?width=550&height=550",
        price: 250,
        total: 1
    },
    {
        id: 2,
        name: "Áo trắng bèo lé đen tay loe dễ thương",
        description: "Một chút khéo léo trong khâu mix & match hẳn sẽ giúp bạn trở nên duyên dáng hơn, xinh đẹp hơn trong mắt tất cả mọi người xung quanh.",
        image: "https://image.yes24.vn/Upload/ProductImage/anhduong201605/1914666_L.jpg?width=550&height=550",
        price: 350,
        total: 1
    },
    {
        id: 3,
        name: "Váy nữ xanh phối cổ trắng dập ly",
        description: "Sản phẩm dễ dàng phối hợp cùng nhiều trang phục và phụ kiện khác mang đến phong cách thời trang riêng cho bạn nữ.",
        image: "https://image.yes24.vn/Upload/ProductImage/anhduong201605/1914666_L.jpg?width=550&height=550",
        price: 300,
        total: 1
    }
]

let promotionCode = {
    A: 0.4,
    B: 0.3,
    C: 0.2,
    D: 0.1,
}


const productsElement = document.querySelector(".products");
const promotionElement = document.querySelector(".promotion");
const summaryElement = document.querySelector(".summary");
const totalProductsElement = document.querySelector(".count");
const subTotalElement = document.querySelector(".subtotal");
const btnElement = document.querySelector(".promotion button");
const promoCodeElement = document.querySelector("#promo-code");


// Render danh sách sản phẩm ra ngoài giao diện
const renderProduct = (arr) => {

    //B1: Xóa hết nội dung trước khi render
    productsElement.innerHTML = "";

    // Update tong so luong khi thay doi giao dien
    updateTotalProduct(products)
    //Trường hợp mảng rỗng
    if (arr.length == 0) {
        productsElement.innerHTML = "<li>Không có sản phẩm nào trong danh mục</li>";
        promotionElement.style.display = "none";
        summaryElement.style.display = "none";
        totalProductsElement.style.display = "none";
        return
    }

    for (let i = 0; i < arr.length; i++) {
        const t = arr[i];
        // Clear nội dung
        productsElement.innerHTML += `
        <li class="row">
                    <div class="col left">
                        <div class="thumbnail">
                            <a href="#">
                                <img src= ${t.image} alt="Áo kiểu nữ cam đất phối cổ trắng dập ly">
                            </a>
                        </div>
                        <div class="detail">
                            <div class="name"><a href="#">${t.name}</a></div>
                            <div class="description">
                                ${t.description}
                            </div>
                            <div class="price">${t.price}.000 VND</div>
                        </div>
                    </div>
                    <div class="col right">
                        <div class="quantity" onchange="changeTotalProduct(${t.id}, event)">
                            <input type="number" class="quantity" value="${t.total}">
                        </div>
    
                        <div class="remove">
                            <span class="close" onclick="deleteProduct(${t.id})">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </span>
                        </div>
                    </div>
        </li>   
        `
    }
    updateTotalMoney(products)

}

// Xóa sản phẩm
const deleteProduct = (id) => {
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products.splice(i, 1);
        }
    }
    renderProduct(products)
}

// Cập nhật số lượng sản phẩm

const updateTotalProduct = (arr) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += products[i].total;
    }
    totalProductsElement.innerHTML = `<span class="count">${count} items in the bag</span>`
}

// Thay đổi số lượng của item
const changeTotalProduct = (id, event) => {
    // Lấy giá trị trong ô input dựa vào biến event trong hàm xử lý sự kiện
    let inputQuantityValue = parseInt(event.target.value);
    // Duyệt mảng products để tìm sản phẩm thay đổi
    for (let i = 0; i < products.length; i++) {
        if (products[i].id == id) {
            products[i].total = inputQuantityValue;
        }
    }
    // Render lại giao diện sau khi xóa
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

    // Tính tổng tiền phải trả
    // total = subtotal + VAT - discount

    // Cập nhật lên trên giao diện
    console.log(vatTotal)
}


const checkPromoCodeValue = () => {

}
checkPromoCodeValue(promotionCode)

btnElement.addEventListener("click", updateTotalMoney(products));


//-------------------------
const main = () => {
    renderProduct(products)

}

main()


// console.log(btn)
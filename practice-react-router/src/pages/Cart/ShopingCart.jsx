import { useState } from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "../../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import './ShopingCart.css'
import Cart from './Cart.jsx';
import Header from '../../components/Header';

const CartFooter = (props) => {
    // props.data

    let totalPrice = 0;
    props.data.map((item) => {
        totalPrice += item.product.price * item.quantity;
    });
    return (
        <div className="width">
            <div className="cart-footer">
                <div className="cart-footer-total">
                    <h4>Total</h4>
                    <h4 className="total-price">${totalPrice.toFixed(2)}</h4>
                </div>
                <button onClick={props.clearList}>CLEAR CART</button>
            </div>
        </div>
    );
};

const CartHeader = (props) => {
    let totalQuantity = 0;
    props.carts.forEach((item) => {
        return (totalQuantity += item.quantity);
    });
    return (
        <div className="cart-header-icon">
            <i className="bi bi-bag-check"></i>
            <div className="cart-header-quantity">
                <b>{totalQuantity}</b>
            </div>
        </div>

    );
};

const carts = [
    {
        product: {
            id: 1,
            name: "Samsung Galaxy S8",
            price: 399.99,
            image:
                "https://dl.airtable.com/.attachments/64b266ad865098befbda3c3577a773c9/24497852/yedjpkwxljtb75t3tezl.png",
        },
        quantity: 1,
    },
    {
        product: {
            id: 2,
            name: "Google Pixel",
            price: 499.99,
            image:
                "https://dl.airtable.com/.attachments/91c88ae8c1580e2b762ecb3f73ed1eed/a633139a/phone-1_gvesln.png",
        },
        quantity: 1,
    },
    {
        product: {
            id: 3,
            name: "Xiaomi Redmi Note 2",
            price: 699.99,
            image:
                "https://dl.airtable.com/.attachments/bae9208dc34f35128749ecda5b999e84/337c285d/phone-3_h2s6fo.png",
        },
        quantity: 1,
    },
    {
        product: {
            id: 4,
            name: "Samsung Galaxy S7",
            price: 599.99,
            image:
                "https://dl.airtable.com/.attachments/91ee456448cef47deec553a2ea3fa8ad/b08bec68/phone-2_ohtt5s.png",
        },
        quantity: 1,
    },
];


const ShoppingCart = () => {

    const [state, setState] = useState(carts);
    console.log(state);

    const handleChangeQuantity = (id, type) => {
        let newList = [...state];
        const index = state.findIndex((item) => item.product.id == id);
        if (type == "increase") {
            let newItem = {
                ...newList[index],
                quantity: newList[index].quantity + 1,
            };
            newList.splice(index, 1, newItem);
            setState(newList);
        } else {
            if (newList[index].quantity == 1) return;
            let newItem = {
                ...newList[index],
                quantity: newList[index].quantity - 1,
            };
            newList.splice(index, 1, newItem);
            setState(newList);
        }
    };

    const deleteItem = (id) => {
        const index = state.findIndex((item) => item.product.id == id);
        let newList = [...state];
        newList.splice(index, 1);
        setState(newList);
    };

    const clearList = () => {
        if (confirm("Bạn có muốn xóa tất cả sản phẩm không ?")) {
            setState([]);
        }
    };

    return (
        <div className="container">
            <CartHeader carts={state} />
            <h1>YOUR BAG</h1>

            <Cart
                carts={state}
                handleChangeQuantity={handleChangeQuantity}
                deleteItem={deleteItem}
            />
            <CartFooter data={state} clearList={clearList} />
        </div>
    );
};


export default ShoppingCart

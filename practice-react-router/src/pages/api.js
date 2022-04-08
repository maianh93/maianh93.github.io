import axios from "axios";


function callGetProductsAPI() {
    return axios({
        url: "https://fakestoreapi.com/products",
        method: "GET",
    })
}

export function callGetProductByIdAPI(id) {
    return axios({
        url: `https://fakestoreapi.com/products/${id}`,
        method: "GET",
    })
}

export default callGetProductsAPI

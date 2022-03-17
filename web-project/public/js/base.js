const updateCartItemCount = () => {
    let number = localStorage.getItem("cartItemCount");
    let element = document.querySelector(".count-cart-item");
    element.innerHTML = number;
};

function verifyId(token) {
    return callPostVerifyAPI({token})
        .then(res => {
            return res.data.verified;
        })
        .catch(error => {
            console.log(error);
        });
}

const isLogin = () => {
    let result;
    if (!localStorage.getItem("token")) {
        result = new Promise((resolve) => {
              resolve(false);
          });
    } else {
        result = verifyId(localStorage.getItem("token"));
    } 
    console.log(result);
    return result;
}

const setUndefinedToken = () => {
    localStorage.setItem("token", undefined)
}

var myVar;

function loadingFunction() {
  myVar = setTimeout(showPage, 333);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("allDiv").style.display = "block";
}
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../components/Layout.jsx";
import { callGetProductByIdAPI } from "../api.js"
import "./ProductDetail.css"
import LoaderInverted from "../Loader/Loader.jsx"


const ProductsDetail = () => {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(AppContext);
  console.log(params);
  useEffect(() => {

    callGetProductByIdAPI(params.productId)
      .then(res => {
        console.log(res.data)
        setProducts([res.data]);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false)
      });
  }, [params.productId])

  if (loading) {
    return LoaderInverted()
  }

  if (error) {
    return <p>Failed loading</p>
  }

  return (
    <div>
      <h2>Product detail</h2>
      {products.map((product) =>
        <div key={product.id} className="row">
          <div className="row products" >
            <img className="col-lg-6 col-md-6 col-sm-12 mb-5" src={product.image} alt={product.title} />
            <div className="col-lg-6 col-md-6 col-sm-12 product-detail">
              <h3 className="product-name">{product.title}</h3>
              <p className="product-detail">{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Rating: {product.rating.rate} <span className="star">&#9733;</span></p>
              <button className="add-to-cart" onClick={() => addToCart({ id: product.id, quantity: 1 })}>Add to cart</button>
            </div>

          </div>

        </div>
      )}

    </div>

  );
};

export default ProductsDetail;
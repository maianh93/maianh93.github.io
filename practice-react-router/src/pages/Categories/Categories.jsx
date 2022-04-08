import { useEffect, useState } from "react";
import callGetProductsAPI from "../api.js"
import { Grid } from 'semantic-ui-react'
import "./Categories.css"
import StarRating from "./StarRating.jsx";
import LoaderInverted from "../Loader/Loader.jsx"
import { Link } from "react-router-dom";

const Categories = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callGetProductsAPI()
      .then(res => {
        console.log(res.data)
        setProducts(res.data); // chi truy res.data thay vi [res.data]
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false)
      });
  }, [])

  if (loading) {
    return LoaderInverted()
  }

  if (error) {
    return <p>Failed loading</p>
  }

  return (
    <div>
      <h2>Categories</h2>
      <Grid columns={4}>
        <Grid.Row>
          {products.map((product) => // da 'mo ngoac nhon dong ngoac nhon {}' thi phai return (...), con khong thi ko can 'mo ngoac nhon dong ngoac nhon {}' ma viet luon html
            <Grid.Column key={product.id}>
              {/* <p className="pt-5">{product.category}</p> */}
              <div key={product.id} className="products mt-5 ps-3 pe-3" >
                <Link to={{ pathname: `/product-detail/${product.id}` }} style={{ textDecoration: 'none', color: 'black'}}>
                  <img src={product.image} alt={product.title} />
                  <h3 className="product-name pt-3">{product.title}</h3>
                </Link>
                <StarRating />
                <p>Rating: {product.rating.rate} <span className="star">&#9733;</span></p>
                <p className="price pb-4">$ {product.price}</p>
              </div>
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>
    </div>
  );
};

export default Categories;
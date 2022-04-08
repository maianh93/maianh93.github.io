import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css'
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import Layout from './components/Layout';
import Categories from './pages/Categories/Categories';
import ShoppingCart from './pages/Cart/ShopingCart';



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/product-detail/:productId" element={<ProductDetail />} />
          <Route path="/product-detail" element={<Navigate to="/product-detail/1" replace />}/>
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

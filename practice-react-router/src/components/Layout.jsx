import { useCallback, useEffect, useState, createContext } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export const AppContext = createContext({});

const Layout = () => {
  const [cart, setCart] = useState([]);

  const addToCart = useCallback(({id, quantity}) => {
    setCart([...cart, {id, quantity}]);
  }, []);

  return (
    <div className="container">
      <Header />

      <AppContext.Provider
        value={{
          cart,
          addToCart
        }}    
      >
        <Outlet />
      </AppContext.Provider>

      <Footer />
    </div>
  );
};

export default Layout;
import React from "react";
import "./index.css";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Shop  from "./pages/shop/Shop.jsx"
import Cart from "./pages/cart/Cart.jsx"
import ShopContextProvider from "./context/ShopContextProvider";






const App = () => {
  return (
    <div className="App">
     <ShopContextProvider>
     <Router>
        <Navbar/>
        <Routes>
          <Route path="/"  element={<Shop/>}/>
          <Route path="/cart"  element= {<Cart/>} />
        </Routes>
      </Router>
     </ShopContextProvider>
    </div>
  );
};

export default App;

import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import { Shop } from "./pages/shop/Shop.jsx"
import {Cart} from "./pages/cart/Cart.jsx"





const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path=" /"  element={<Shop/>}/>
          <Route path=" /cart"  element= {<Cart/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

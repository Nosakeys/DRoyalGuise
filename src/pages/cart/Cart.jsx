import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <h1 className="text-lg font-medium">Your Cart Items</h1>
      </div>
      <div className="">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div>
          <p className="font-semibold text-center"> Subtotal: N{totalAmount} </p>
          <button className="w-[150px] h-[50px] bg-black text-white rounded-md m-[10px] cursor-pointer" onClick={() => navigate("/")}> Continue Shopping </button>
          <button
          className="w-[150px] h-[50px] bg-black text-white rounded-md m-[10px] cursor-pointer"
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};

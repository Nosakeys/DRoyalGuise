import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="sm:w-[700px] sm:h-[200px] flex items-center m-[30px] rounded-[25px] shadow-xl w-screen">
      <img className="w-[200px]" src={productImage} alt="product pik" />
      <div className="w-full sm:text-[25px] text-[20px]">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: N{price}</p>
        <div className=" mt-10 font-medium">
          <button className="mr-3" onClick={() => removeFromCart(id)}> - </button>
          <input className="w-5"
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button className="mr-3" onClick={() => addToCart(id)}> +</button>
        </div>
      </div>
    </div>
  );
};

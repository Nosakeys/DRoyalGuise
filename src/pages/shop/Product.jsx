import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="rounded-[15px] w-[full] h-[250px] m-24 flex sm:flex-col sm:justify-center sm:items-center hover:cursor-pointer flex-row">
      <img className="w-32 h-32 sm:w-full sm:h-auto" src={productImage}  alt="product pic"/>
      <div className="text-center">
        <p>
          <b className="font-medium">{productName}</b>
        </p>
        <p className="font-bold"> N{price}</p>
      </div>
      <button  className="bg-transparent border-2 border-black min-w-[100px] rounded-[15px] px-[10px] py-[5px] hover:bg-black hover:text-white cursor-pointer mt-3" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};

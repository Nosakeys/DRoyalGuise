import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="rounded-[15px] w-[full] h-[250px] sm:m-24 flex sm:flex-col sm:justify-center sm:items-center hover:cursor-pointer flex-row gap-2">
      <img className="w-[118px]  h-[118px] sm:w-full sm:h-auto " src={productImage}  alt="product pic"/>
      <div className="text-center">
        <p>
          <b className="font-medium">{productName}</b>
        </p>
        <p className="font-bold mt-1"> N{price}</p>
      <button  className="bg-transparent border-2 border-black sm:min-w-[100px] rounded-[15px] sm:px-[10px] px-3 sm:py-[5px] py-[5px] hover:bg-black hover:text-white cursor-pointer mt-3" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
      </div>
     
     
    </div>
  );
};



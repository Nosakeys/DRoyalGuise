import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContextProvider";

const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemAmount = cartItems[id]
  return (
    <div className="w-[300px] h-[350px] m-[100px] flex flex-col justify-center items-center hover:cursor-pointer">
      <img
        className="w-[400px] rounded-[15px]  hover:ease-in hover:transition hover:duration-[0.3s]"
        src={productImage}
        alt="img"
      />
      <div className="text-center">
        <p className="mt-4">
          <b>{productName}</b>
        </p>
        <p>N{price}</p>
      </div>
      <button className="bg-transparent min-w-[100px] border-solid border-2 border-black mt-2 rounded-lg px-3 py-1 hover:bg-black hover:text-white cursor-pointer hover:font-bold" onClick={() => addToCart(id)}>
        Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  );
};

export default Product;

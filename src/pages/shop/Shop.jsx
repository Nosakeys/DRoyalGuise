import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="mt-10 sm:mt-[100px] text-center text-3xl sm:text-[40px] font-semibold ">
        <h1>D'Royal Guise Store</h1>
      </div>

      <div className="w-full h-auto grid sm:grid-cols-3 place-items-center">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};

import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart,Chats } from "phosphor-react";
import logo from "../assets/products/ASQF6161.JPG"

export const Navbar = () => {
  return (
    <div className="w-screen h-[80px] bg-black flex justify-between items-center">
      <div className="ml-[15px]"> 
      <Link to="/"><img size={32} src={logo} alt="Temslogo" className="h-[33px] w-[33px] sm:h-[40px] sm:w-[40px] "/> </Link>
      </div>
      <div className="flex items-center mr-3 sm:mr-[50px] text-white sm:ml-[20px] font-[25px] gap-4">
        <Link to="/" className=" hidden sm:block"> Shop </Link>
        <Link className="hidden sm:block" to="/contact"> Contact </Link>
        <Link className="block sm:hidden" to="/contact"> <Chats size={30}/> </Link>
        <Link to="/cart">
          <ShoppingCart size={30} />
        </Link>
      </div>
    </div>
  );
};

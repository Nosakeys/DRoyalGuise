import React from 'react'
import { Link } from 'react-router-dom/dist'
import { ShoppingCart } from 'phosphor-react'

const Navbar = () => {
  return (
    <div className='w-screen h-[70px] bg-lime-950 flex items-center justify-between text-white'>
       <p className='text-lg font-semibold ml-11'>D'Royal Guise Store</p>
        <div className='mr-[50px] flex items-center '>
            <Link  className='ml-[20px] text-[25px]' to='/'> Shop</Link>
            <Link className='ml-[20px] text-[25px]' to="/cart"> <ShoppingCart size={30}/> </Link>
        </div>
    </div>
  )
}

export default Navbar
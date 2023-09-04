import React from 'react'
import { PRODUCTS } from '../../products'
import Product from './Product'

const Shop = () => {
  return (
    <div className='w-screen'>
      <div>
        <h1 className='mt-[60px] text-center text-[45px] font-extrabold'>
          D'Royal Guise Store
        </h1>
      </div>
      <div className='w-full h-auto grid grid-cols-3 place-items-center  mt-87y'>
        {PRODUCTS.map((product) => {
          return (
            <Product data={product}/>
          )
        })}
      </div>
    </div>
  )
}

export default Shop 
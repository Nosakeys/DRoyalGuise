import React from "react";

export const Contact = () => {
  return  <div name= 'contact' className='w-full h-[93svh] sm:h-screen bg-[white] flex justify-center items-center px-4 pt-20 text-black'>
  <form method='POST' action="https://getform.io/f/c365842e-0096-46b1-ada5-13c006a1d129" className='flex flex-col max-w-[600px] w-full h-full'>
      <div className='pb-5'>
          <p className='text-4xl font-bold inline border-b-4 border-black'>Contact</p>
      </div>
      <p className="font-medium mb-3">Email Address</p>
      <input className='bg-[#ccd66f6] p-2 rounded-[4px] border-2 border-black mb-2' type="email"   name = 'name' />
      <p className="font-medium mb-2 ">How can we help you?</p>
      <input className='my-2 p-2 bg-[#ccd66f6] rounded-[4px] border-2 border-black mt-1' type="text"   name = 'email' />
      <p className="font-medium mb-3">Message</p>
      <textarea className='bg-[#ccd66f6] p-2 rounded-[4px] border-2 border-black'  name="message"  rows="10"></textarea>
      <button className=' text-white  sm:border-[1px]  px-4 py-4 my-8 mx-auto  sm:rounded-[4px] hover:rounded bg-black rounded-lg hover:font-bold text-center w-full'>Submit</button>
  </form>

</div>
};




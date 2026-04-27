import React from 'react'


const Navber = ({cartCount}) => {
  return (
    <div className='bg-gray-800 text-white flex  items-center h-17 p-3 text-2xl font-bold'>
      <div className='w-16 h-16 '>
        <img
             src='https://i.pinimg.com/736x/e1/49/ae/e149aec64d4f7e125d86ad9b473b6e9b.jpg'
             className='w-full h-full object-cover rounded-full'>

        </img>
      </div>
      <div className='ml-auto flex gap-8 items-center text-lg'>
        <a href='#home' className='hover:text-orange-400 transition'>Home</a>
        <a href='#menu' className='hover:text-orange-400 transition'>Menu</a>
        <a href='#about' className='hover:text-orange-400 transition'>About us</a>
        <a href='#contact' className='hover:text-orange-400 transition'>contact us</a>
        <a href='#' className=' ml-6 bg-orange-500 text-white px-4 py-1 rounded-full shadow text-lg'>🛒 {cartCount}</a>
      </div>
    </div>
  );
};

export default Navber

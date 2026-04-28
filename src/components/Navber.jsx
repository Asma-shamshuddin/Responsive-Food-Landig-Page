

import React from 'react';

const Navber = ({ cartCount }) => {
  return (
    <div className="bg-gray-800 text-white flex items-center justify-between px-4 py-3 flex-wrap">

      {/* Logo */}
      <div className="w-14 h-14">
        <img
          src="https://i.pinimg.com/736x/e1/49/ae/e149aec64d4f7e125d86ad9b473b6e9b.jpg"
          alt="logo"
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center text-sm sm:text-base mt-3 sm:mt-0">

        <a href="#home" className="hover:text-orange-400 transition">
          Home
        </a>

        <a href="#menu" className="hover:text-orange-400 transition">
          Menu
        </a>

        <a href="#about" className="hover:text-orange-400 transition">
          About Us
        </a>

        <a href="#contact" className="hover:text-orange-400 transition">
          Contact Us
        </a>

        <a
          href="#"
          className="bg-orange-500 text-white px-4 py-1 rounded-full shadow text-base"
        >
          🛒 {cartCount}
        </a>

      </div>
    </div>
  );
};

export default Navber;

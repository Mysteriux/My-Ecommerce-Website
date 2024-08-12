import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Company' },
    { id: 3, text: 'Resources' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className='bg-[#87cee5] flex justify-between items-center h-24 max-w-[1340px] px-4 text-white'>
      {/* Logo */}
      <div className='flex justify-center items-center mx-[5px]'>
        <img className='rounded-lg' src="logo.png" alt="logo" />
      </div>
      <h1 className='w-full text-3xl font-bold text-[#05140f]'>Shopify</h1>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 text-[18px] hover:bg-[#1a3d8a] rounded-xl m-2 cursor-pointer duration-300'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Search Bar */}
      <div className='hidden md:flex items-center bg-white text-black rounded-lg p-2'>
        <input
          type='text'
          placeholder='Search...'
          className='bg-transparent outline-none px-2'
        />
        <FiSearch size={20} />
      </div>

      {/* Icons */}
      <div className='hidden md:flex items-center space-x-4'>
        <AiOutlineShoppingCart size={25} className='cursor-pointer' />
        <AiOutlineUser size={25} className='cursor-pointer' />
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      {nav && (
        <ul className='fixed left-0 top-0 w-[60%] h-full bg-[#72cbe8] flex flex-col items-start p-4'>
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-4 hover:bg-[#1a3d8a] rounded-xl m-2 cursor-pointer duration-300 w-full'
            >
              {item.text}
            </li>
          ))}
          <li className='p-4 w-full'>
            <div className='flex items-center bg-white text-black rounded-lg p-2 w-full'>
              <input
                type='text'
                placeholder='Search...'
                className='bg-transparent outline-none px-2 w-full'
              />
              <FiSearch size={20} />
            </div>
          </li>
          <li className='p-4 w-full flex space-x-4'>
            <AiOutlineShoppingCart size={25} className='cursor-pointer' />
            <AiOutlineUser size={25} className='cursor-pointer' />
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;

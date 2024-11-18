import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className=' z-20 w-full h-16 flex justify-between items-center fixed top-0 right-0 left-0 bg-slate-700 text-white py-10 px-4 md:px-32 lg:px-40'>
      <div className='flex items-center'>
        <span className='text-3xl font-bold'>START FRAMEWORK</span>
      </div>

      <button
        onClick={toggleMenu}
        className='text-xl bg-transparent border border-black border-3 text-black md:hidden' 
      >
        ☰
      </button>

      <div
        className={`${
          isMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-slate-700 md:bg-transparent p-4 md:p-0`}
      >
        <ul className='flex flex-col md:flex-row items-center md:space-x-8 w-full md:w-auto'>
          <li className='md:mx-5 my-2 mx-3'>
            <NavLink className='text-white font-bold text-lg' to='About'>
              About
            </NavLink>
          </li>
          <li className='md:mx-5 my-2 mx-3'>
            <NavLink className='text-white font-bold text-lg' to='Portfolio'>
              Portfolio
            </NavLink>
          </li>
          <li className='md:mx-5 my-2 mx-3'>
            <NavLink className='text-white font-bold text-lg' to='Contact'>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
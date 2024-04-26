// HamburgerNavbar.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { webifyLogo } from '../assets';

function HamburgerNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-transparent p-6 z-10">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
      <Link className="block w-[12rem] xl:mr-8" to="/">
          <img src={webifyLogo} width={150} height={10} alt="Logo" />
          {/* <h4 className="h4">WebifyLogo</h4> */}
        </Link>
      </div>
      <div className="block lg:hidden">
        <button onClick={toggleNavbar} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
          </svg>
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} w-full block lg:flex lg:items-center lg:w-auto lg:justify-between`}>
        <div className="text-sm lg:flex lg:justify-between mr-8 gap-4">
          <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-purple-300 mr-4">
            Contact
          </Link>
          <Link to="/sign-in" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-purple-300">
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default HamburgerNavbar;

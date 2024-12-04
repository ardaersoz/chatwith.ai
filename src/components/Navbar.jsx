import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <div className="font-noto text-3xl font-bold text-gray-100">ChatWith.ai</div>
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-gray-100 hover:text-gray-700">Home</a>
          <a href="#about" className="text-gray-100 hover:text-gray-700">About</a>
          <a href="#services" className="text-gray-100 hover:text-gray-700">Services</a>
          <a href="#contact" className="text-gray-100 hover:text-gray-700">Contact</a>
        </div>
        <button
          className="md:hidden text-gray-100 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white">
          <a href="#home" className="block py-2 px-4 text-gray-100 hover:text-gray-700">Home</a>
          <a href="#about" className="block py-2 px-4 text-gray-700 hover:text-gray-700">About</a>
          <a href="#services" className="block py-2 px-4 text-gray-700 hover:text-gray-700">Services</a>
          <a href="#contact" className="block py-2 px-4 text-gray-700 hover:text-gray-700">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

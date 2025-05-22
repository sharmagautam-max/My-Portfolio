import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex items-center space-x-3">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSf1rdqsvlzRFJeC2za4FDinmq0n4Cfxq5JA&s" alt='logo' className='h-10 w-10 mt-3'/>
            <span className="text-2xl font-bold text-gray-800">My Portfolio</span>
          </div>

          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-600 hover:text-blue-500">Home</a>
            <a href="#about" className="text-gray-600 hover:text-blue-500">About Me</a>
            <a href="#skills" className="text-gray-600 hover:text-blue-500">Skills</a>
            <a href="#projects" className="text-gray-600 hover:text-blue-500">Projects</a>
            <a href="#resume" className="text-gray-600 hover:text-blue-500">Resume</a>
            <a href="#contact" className="text-gray-600 hover:text-blue-500">Contact</a>
          </div>

          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white shadow-md">
          <a href="#home" className="block text-gray-700 hover:text-blue-500">Home</a>
          <a href="#about" className="block text-gray-700 hover:text-blue-500">About Me</a>
          <a href="#skills" className="block text-gray-700 hover:text-blue-500">Skills</a>
          <a href="#projects" className="block text-gray-700 hover:text-blue-500">Projects</a>
          <a href="#resume" className="block text-gray-700 hover:text-blue-500">Resume</a>
          <a href="#contact" className="block text-gray-700 hover:text-blue-500">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { FaAngleDown, FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    'Schools/Institutes',
    'Teachers',
    'Parents',
    'Students',
    'More',
  ];

  return (
    <nav className="bg-blue-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="logo">
            <a href="#" className="text-black text-md font-bold">Logo</a>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden  md:flex md:items-center gap-x-4 text-base font-bold">
            {menuItems.map((item) => (
              <li key={item}>
                <a href="#" className="text-black flex items-center hover:text-orange-500 transition-colors">
                  {item} <FaAngleDown className="text-orange-500 ml-1" />
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-black focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-4 pb-2`}>
          <ul className="flex flex-col gap-y-3">
            {menuItems.map((item) => (
              <li key={item}>
                <a 
                  href="#" 
                  className="text-black flex items-center px-4 py-2 hover:bg-blue-200 rounded-lg transition-colors"
                >
                  {item} <FaAngleDown className="text-orange-500 ml-1" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
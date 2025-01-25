import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle navigation link click
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsOpen(false); // Close the sidebar on small screens
    }
  };

  return (
    <div className="flex">
      <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform ${ isOpen ? 'translate-x-0' : '-translate-x-full' } transition-transform duration-300 z-50 md:translate-x-0`}>
        <div className="p-4 text-lg font-bold border-b border-gray-700">
          Admin Dashboard
        </div>
        <nav className="mt-4">
          <ul>
            <li className="px-4 py-2">
              <NavLink to="/contact" className={({ isActive }) =>`block px-4 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`}onClick={handleLinkClick} >
                Contact
              </NavLink>
            </li>
            <li className="px-4 py-2">
              <NavLink to="/video-url" className={({ isActive }) =>`block px-4 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`}onClick={handleLinkClick} >
                Video URL
              </NavLink>
            </li>
            <li className="px-4 py-2">
              <NavLink to="/pdf" className={({ isActive }) =>`block px-4 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`}onClick={handleLinkClick} >
                PDF
              </NavLink>
            </li>
            <li className="px-4 py-2">
              <NavLink to="/excel" className={({ isActive }) =>`block px-4 py-2 rounded ${isActive ? 'bg-gray-700' : 'hover:bg-gray-700'}`}onClick={handleLinkClick} >
                Excel
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      {/* Hamburger Menu */}
      <div className="fixed top-4 left-4 md:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white bg-gray-800 p-2 rounded">
          <Menu size={24} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

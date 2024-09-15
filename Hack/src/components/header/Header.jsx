import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-800 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-yellow-300">FinTechApp</Link>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li><Link to="" className="hover:text-yellow-300">Home</Link></li>
            <li><Link to="/features" className="hover:text-yellow-300">Features</Link></li>
            <li><Link to="/About" className="hover:text-yellow-300">About</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button className="text-2xl focus:outline-none">
            <span className="material-icons">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

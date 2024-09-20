import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-purple-400 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-3xl font-bold">
          <Link to="/" className="hover:text-black">BudgetFlow</Link>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex space-x-6">
            <li><Link to="" className="text-xl hover:text-black ">Home</Link></li>
            <li><Link to="/features" className="text-xl hover:text-black">Features</Link></li>
            <li><Link to="/About" className="text-xl hover:text-black">About</Link></li>
            <li><Link to="/contact" className="text-xl hover:text-black">Contact</Link></li>
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

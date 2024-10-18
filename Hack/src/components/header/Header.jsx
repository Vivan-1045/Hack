import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsopen] = useState(false);

  const toggleNavbar = () => {
    setIsopen(!isOpen);
  };
  return (
    <header className="bg-purple-400 text-white fixed top-0 left-0 w-full z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-3xl font-bold">
          <Link to="/" className="hover:text-black">
            BudgetFlow
          </Link>
        </div>
        <nav className={`md:flex ${isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <Link to="" className="text-xl hover:text-black ">
                Home
              </Link>
            </li>
            <li>
              <Link to="/features" className="text-xl hover:text-black">
                Features
              </Link>
            </li>
            <li>
              <Link to="/About" className="text-xl hover:text-black">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-xl hover:text-black">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button
            className="text-2xl focus:outline-none"
            onClick={toggleNavbar}
          >
            <span className="material-icons text-3xl font-extrabold">=</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

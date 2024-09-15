import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 rounded-lg">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-400 mb-4">
              BudgetFlow is dedicated to providing innovative financial
              solutions to track your daily expenses.
            </p>
            <Link to="/contact" className="text-blue-400 hover:text-blue-600">
              Contact Us
            </Link>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-blue-400">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/features"
                  className="text-gray-400 hover:text-blue-400"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-blue-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <div className="flex-row">
            <ul className=" flex-colmn space-x-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600"
              >
                <i className="fab fa-facebook-f"></i>
                <span className="">Facebook</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600"
              >
                <i className="fab fa-twitter"></i>
                <span>twitter</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600"
              >
                <i className="fab fa-linkedin-in"></i>
                <span>LinkedIn</span>
              </a>
            </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4">
          <div className="text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} BudgetFlow. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

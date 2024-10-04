import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-30 backdrop-blur-sm py-4 z-10">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold text-white">My Blog</h1>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="/"
              className="text-white font-semibold hover:text-sky-500 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-white font-semibold hover:text-sky-500 transition"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              className="text-white font-semibold hover:text-sky-500 transition"
            >
              Blog
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

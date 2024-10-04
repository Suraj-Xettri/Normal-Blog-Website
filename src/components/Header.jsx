import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-sky-700 shadow-md py-4">
      <nav className="container mx-auto flex justify-between items-center px-6 text-white">
        <div className="text-2xl font-bold">
          <Link to="/">My Modern Blog</Link>
        </div>
        <ul className="flex space-x-8">
          <li><Link to="/" className="hover:text-gray-300 px-3 py-2">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300 px-3 py-2">About</Link></li>
          <li><Link to="/blog" className="hover:text-gray-300 px-3 py-2">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

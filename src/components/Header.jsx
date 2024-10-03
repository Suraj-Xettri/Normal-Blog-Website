import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">My Blog</div>
        <ul className="flex space-x-6">
          <li><a href="/" className="text-gray-700 hover:text-blue-600">Home</a></li>
          <li><a href="/about" className="text-gray-700 hover:text-blue-600">About</a></li>
          <li><a href="/blog" className="text-gray-700 hover:text-blue-600">Blog</a></li>
          <li><a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

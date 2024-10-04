import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl">
      <img className="w-full h-48 object-cover" src={post.image} alt={post.title} />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-sky-700">{post.title}</h3>
        <p className="text-gray-600 mb-4">{post.description.substring(0, 100)}...</p>
        <Link to={`/blog/${post.id}`} className="text-blue-500 hover:text-blue-700 font-semibold">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

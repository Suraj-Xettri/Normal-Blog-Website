import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition">
      <img
        className="w-full h-48 object-cover"
        src={post.image}
        alt={post.title}
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-sky-700 mb-2">{post.title}</h2>
        <p className="text-gray-600 mb-4">
          {post.description.length > 100
            ? `${post.description.substring(0, 100)}...`
            : post.description}
        </p>
        <Link
          to={`/blog/${post.id}`}
          className="text-blue-500 hover:text-blue-700 font-semibold"
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

import React from 'react';

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img className="w-full h-48 object-cover" src={post.image} alt={post.title} />
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-700 mb-4">{post.description.substring(0, 100)}...</p>
        <a href={`/blog/${post.id}`} className="text-blue-600 hover:text-blue-800">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;

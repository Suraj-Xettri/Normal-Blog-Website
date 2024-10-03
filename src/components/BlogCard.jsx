import React from 'react';

const BlogCard = ({ post }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
      <img className="w-full h-48 object-cover" src={post.image} alt={post.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{post.title}</div>
        <p className="text-gray-700 text-base">
          {post.description.substring(0, 100)}...
        </p>
        <a href={`/post/${post.id}`} className="text-blue-500 hover:text-blue-800">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;

import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-10">
      <h1 className="text-4xl font-bold text-sky-700 mb-6">Blog Post {id}</h1>
      <p className="text-gray-700">This is a detailed view of the blog post with id: {id}. Here, you can render actual blog post content.</p>
    </div>
  );
};

export default BlogDetails;

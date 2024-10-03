import React from 'react';
import BlogCard from './BlogCard';

const BlogList = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Start with React',
      description: 'A beginner’s guide to getting started with React, the most popular frontend library...',
      image: 'https://source.unsplash.com/random/400x200/?react',
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS',
      description: 'Tailwind CSS is a utility-first CSS framework that can make styling easier...',
      image: 'https://source.unsplash.com/random/400x200/?tailwind',
    },
    {
      id: 3,
      title: 'JavaScript ES6 Features',
      description: 'Learn the most important features of ES6 that have transformed JavaScript development...',
      image: 'https://source.unsplash.com/random/400x200/?javascript',
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Latest Blogs</h1>
      <div className="flex flex-wrap justify-center">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;

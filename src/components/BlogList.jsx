import React from 'react';
import BlogCard from './BlogCard';

const BlogList = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Start with React',
      description: 'A complete guide to learning React...',
      image: 'https://source.unsplash.com/random/400x200/?react',
    },
    {
      id: 2,
      title: 'Mastering Tailwind CSS',
      description: 'The ultimate utility-first CSS framework...',
      image: 'https://source.unsplash.com/random/400x200/?tailwind',
    },
    // More posts here
  ];

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-bold text-center mb-8">Recent Blogs</h2>
      <div className="grid px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;

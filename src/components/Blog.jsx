import React from 'react';
import BlogCard from './BlogCard';

const blogPosts = [
  {
    id: 1,
    title: "How to Stay Productive",
    description: "Productivity is key to achieving your goals. In this blog, we explore tips and tricks to help you stay focused and productive throughout your day.",
    image: "https://source.unsplash.com/600x400/?productivity",
  },
  {
    id: 2,
    title: "The Future of Technology",
    description: "Technology is evolving faster than ever before. Here's a look at where we're headed and what to expect in the coming years.",
    image: "https://source.unsplash.com/600x400/?technology",
  },
  {
    id: 3,
    title: "A Guide to Remote Work",
    description: "Remote work has become the new norm. This guide will walk you through best practices for staying productive while working from home.",
    image: "https://source.unsplash.com/600x400/?remote,work",
  },
];

const Blog = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="bg-sky-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl mb-8">
            Stay updated with the latest tips, trends, and stories in the world of technology, productivity, and remote work.
          </p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-sky-700 mb-12 text-center">Latest Blog Posts</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

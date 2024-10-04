import React from 'react';
import BlogCard from './BlogCard';

// Sample blog data (Replace with real data or fetch from an API)
const blogPosts = [
  {
    id: 1,
    title: "How to Stay Productive",
    description: "Productivity is key to achieving your goals. In this blog, we explore tips and tricks to help you stay focused and productive throughout your day.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzdvzzLU9G-fZmG_UoAPqLtMrTcvoIXmgDRA&s",
  },
  {
    id: 2,
    title: "The Future of Technology",
    description: "Technology is evolving faster than ever before. Here's a look at where we're headed and what to expect in the coming years.",
    image: "https://i.ytimg.com/vi/t46W-vnWJYA/sddefault.jpg",
  },
  {
    id: 3,
    title: "A Guide to Remote Work",
    description: "Remote work has become the new norm. This guide will walk you through best practices for staying productive while working from home.",
    image: "https://manilarecruitment.com/wp-content/uploads/2021/11/Manila-Recruitment-Info34Banner-800x400-1.png",
  },
];

const BlogList = () => {
  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-sky-700 mb-8 text-center">Latest Blogs</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogList;

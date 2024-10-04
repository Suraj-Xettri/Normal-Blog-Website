import React from "react";
import BlogCard from "./BlogCard";

const blogPosts = [
  {
    id: 1,
    title: "How to Stay Productive",
    description:
      "Productivity is key to achieving your goals. In this blog, we explore tips and tricks to help you stay focused and productive throughout your day.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzdvzzLU9G-fZmG_UoAPqLtMrTcvoIXmgDRA&s",
  },
  {
    id: 2,
    title: "The Future of Technology",
    description:
      "Technology is evolving faster than ever before. Here's a look at where we're headed and what to expect in the coming years.",
    image: "https://i.ytimg.com/vi/t46W-vnWJYA/sddefault.jpg",
  },
  {
    id: 3,
    title: "A Guide to Remote Work",
    description:
      "Remote work has become the new norm. This guide will walk you through best practices for staying productive while working from home.",
    image:
      "https://manilarecruitment.com/wp-content/uploads/2021/11/Manila-Recruitment-Info34Banner-800x400-1.png",
  },
];

const Blog = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-sky-700 text-white py-28">
        {/* Background image */}
        <div className="absolute inset-0 bg-[url(https://media.licdn.com/dms/image/C4E12AQEsJdfbQw7lZw/article-cover_image-shrink_720_1280/0/1631459266346?e=2147483647&v=beta&t=hkK76J0cF1_fuAlQWNI4j0gzk8CuftO5UQpDCmyW7Po)] bg-cover bg-center opacity-60"></div>

        {/* Dark overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Text Content */}
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Our Blog</h1>
          <p className="text-xl mb-8 drop-shadow-lg">
            Stay updated with the latest tips, trends, and stories in the world
            of technology, productivity, and remote work.
          </p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-sky-700 mb-12 text-center">
          Latest Blog Posts
        </h2>

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

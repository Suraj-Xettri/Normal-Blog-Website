import React from 'react';
import { useParams } from 'react-router-dom';

// Example blog data (replace with real data or fetch from an API)
const blogPosts = [
  {
    id: 1,
    title: "How to Stay Productive",
    content: "Here is the full content of the blog post about productivity. You can replace this with your own content.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzdvzzLU9G-fZmG_UoAPqLtMrTcvoIXmgDRA&s",
  },
  {
    id: 2,
    title: "The Future of Technology",
    content: "Here is the full content of the blog post about technology's future.",
    image: "https://i.ytimg.com/vi/t46W-vnWJYA/sddefault.jpg",
  },
  {
    id: 3,
    title: "A Guide to Remote Work",
    content: "Here is the full content of the blog post about remote work.",
    image: "https://manilarecruitment.com/wp-content/uploads/2021/11/Manila-Recruitment-Info34Banner-800x400-1.png",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div className="container flex flex-col justify-center items-center mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-sky-700 mb-8">{post.title}</h1>
      <img
        className="h-96 object-cover mb-8 rounded-lg"
        src={post.image}
        alt={post.title}
      />
      <p className="text-lg text-gray-700 leading-relaxed">{post.content}</p>
    </div>
  );
};

export default BlogDetails;

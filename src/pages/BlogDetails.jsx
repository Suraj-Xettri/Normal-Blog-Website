import React from 'react';
import { useParams } from 'react-router-dom';

// Example blog data (replace with real data or fetch from an API)
const blogPosts = [
  {
    id: 1,
    title: "How to Stay Productive",
    content: "Here is the full content of the blog post about productivity. You can replace this with your own content.",
    image: "https://source.unsplash.com/1600x900/?productivity",
  },
  {
    id: 2,
    title: "The Future of Technology",
    content: "Here is the full content of the blog post about technology's future.",
    image: "https://source.unsplash.com/1600x900/?technology",
  },
  {
    id: 3,
    title: "A Guide to Remote Work",
    content: "Here is the full content of the blog post about remote work.",
    image: "https://source.unsplash.com/1600x900/?remote,work",
  },
];

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <p>Blog post not found.</p>;
  }

  return (
    <div className="container mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold text-sky-700 mb-8">{post.title}</h1>
      <img
        className="w-full h-96 object-cover mb-8 rounded-lg"
        src={post.image}
        alt={post.title}
      />
      <p className="text-lg text-gray-700 leading-relaxed">{post.content}</p>
    </div>
  );
};

export default BlogDetails;

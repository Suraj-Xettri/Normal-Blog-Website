import React from 'react';
import { Link, useParams } from 'react-router-dom';

// Example blog data (this would typically come from an API or state)
const blogPosts = [
  {
    id: '1',
    title: 'The Future of Technology: What\'s Next?',
    author: 'John Doe',
    date: 'September 29, 2024',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    content: `
      As technology continues to evolve, the future holds many exciting possibilities.
      From AI advancements to breakthroughs in healthcare, the next decade promises
      to be transformative in ways we can hardly imagine. One of the most anticipated
      developments is the rise of quantum computing...
    `
  },
  {
    id: '2',
    title: 'Sustainable Living: How Tech is Changing the Game',
    author: 'Jane Smith',
    date: 'October 1, 2024',
    image: 'https://images.unsplash.com/photo-1551446591-142875a901a1',
    content: `
      As the world faces environmental challenges, technology is playing a crucial role
      in creating sustainable solutions. From renewable energy sources to smart cities,
      the integration of tech in sustainability is reshaping how we live...
    `
  },
];

const BlogDetails = () => {
  // Get the blog ID from the URL using react-router's useParams
  const { id } = useParams();

  // Find the blog post that matches the ID
  const blog = blogPosts.find(post => post.id === id);

  // If blog not found (handle case where URL might be invalid)
  if (!blog) {
    return (
      <section className="h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold text-red-500">Blog not found</h1>
      </section>
    );
  }

  return (
    <section className="bg-gray-100 py-16">
      {/* Blog Feature Image */}
      <div className="w-full h-96 bg-cover bg-center" style={{ backgroundImage: `url(${blog.image})` }}></div>
      
      <div className="max-w-5xl mx-auto p-10 bg-white shadow-lg -mt-20 relative z-10 rounded-lg">
        {/* Blog Title */}
        <h1 className="text-5xl font-bold mb-4">{blog.title}</h1>
        
        {/* Author and Date */}
        <p className="text-gray-500 text-sm mb-6">Published on {blog.date} by {blog.author}</p>
        
        {/* Blog Content */}
        <div className="prose prose-lg">
          <p>{blog.content}</p>
        </div>
        
        {/* Back to Blogs button */}
        <Link to="/blog" className="mt-8 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Back to Blogs
        </Link>
      </div>
    </section>
  );
};

export default BlogDetails;

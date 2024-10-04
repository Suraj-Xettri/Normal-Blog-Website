import React from 'react';

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-96 flex items-center justify-center"
      style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?technology,writing)' }}
    >
      <div className="bg-sky-700 bg-opacity-70 text-white p-10 rounded-lg">
        <h1 className="text-5xl font-bold mb-4">Explore the Latest Trends in Tech and Lifestyle</h1>
        <p className="text-lg mb-6">Stay ahead with our top stories, handpicked just for you.</p>
        <a href="/featured" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Discover Now
        </a>
      </div>
    </section>
  );
};

export default Hero;

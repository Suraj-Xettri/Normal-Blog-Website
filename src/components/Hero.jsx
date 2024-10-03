import React from 'react';

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center h-96 flex items-center justify-center"
      style={{ backgroundImage: 'url(https://source.unsplash.com/1600x900/?nature,writing)' }}
    >
      <div className="bg-black bg-opacity-50 text-white p-10 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Discover the Latest in Tech and Lifestyle</h1>
        <p className="text-lg mb-6">Stay updated with the newest trends and articles.</p>
        <a href="/featured" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Read More
        </a>
      </div>
    </section>
  );
};

export default Hero;

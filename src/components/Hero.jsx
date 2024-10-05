import React from 'react';

const Hero = () => {
  return (
    <section
  className="bg-[url(https://media.licdn.com/dms/image/C4E12AQEsJdfbQw7lZw/article-cover_image-shrink_720_1280/0/1631459266346?e=2147483647&v=beta&t=hkK76J0cF1_fuAlQWNI4j0gzk8CuftO5UQpDCmyW7Po)] bg-cover bg-center h-96 flex items-center justify-center"
>
  <div className="bg-black bg-opacity-50 backdrop-blur-md text-white p-10 rounded-lg">
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

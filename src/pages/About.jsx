import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-sky-700 mb-8 text-center">About Us</h1>

        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://source.unsplash.com/600x400/?team,work"
              alt="Team"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Who We Are</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
              Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our team is dedicated to providing the best experience possible. With a passion for innovation and a
              commitment to excellence, we strive to push the boundaries of what's possible.
            </p>
            <a
              href="/contact"
              className="bg-sky-700 text-white py-2 px-4 rounded hover:bg-sky-600 transition"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from 'react';

const About = () => {
  return (
    <section className="bg-[url('https://images.unsplash.com/photo-1517520287167-4bbf64a00d66')] bg-cover bg-center h-screen flex items-center justify-center">
      <div className="bg-black bg-opacity-60 backdrop-blur-md text-white p-10 rounded-lg max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 text-center">About Us</h1>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to our blog! We are passionate about bringing you the latest insights on tech, lifestyle, and trends. Our mission is to create a space where you can stay informed and inspired.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          From the latest innovations in technology to tips on improving your daily life, our blog covers a variety of topics to keep you updated with the world. Our team of writers works tirelessly to bring you well-researched and engaging content.
        </p>
        <p className="text-lg leading-relaxed">
          Stay connected with us and be a part of this journey as we explore the endless possibilities of knowledge and growth. Whether you're a tech enthusiast or just looking for inspiration, we have something for you.
        </p>
      </div>
    </section>
  );
};

export default About;

// src/pages/About.jsx
import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div className="min-h-screen pt-16 px-4 md:px-10 lg:px-20 bg-gray-50 text-gray-800">
      <Helmet>
        <title>About Us - Pankh Nave</title>
        <meta
          name="description"
          content="Pankh Nave is a Marathi blog platform sharing news, poems, stories, and cultural content to keep Marathi literature and heritage alive."
        />
      </Helmet>

      <div className="max-w-4xl mx-auto py-12">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          About Pankh Nave
        </h1>

        <p className="mb-4">
          Pankh Nave is a Marathi blog dedicated to bringing you the latest news, inspiring stories, and beautiful poems in Marathi. Our goal is to celebrate and preserve the richness of Marathi literature and culture while providing content that informs, entertains, and inspires.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Our Mission</h2>
        <p className="mb-4">
          Our mission is to provide a platform for Marathi readers and writers to connect with meaningful content. We strive to bring daily updates, literary works, and cultural stories that reflect the spirit of Maharashtra.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-2">What You Will Find Here</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Latest Marathi news and current affairs</li>
          <li>Marathi poems, short stories, and inspirational writings</li>
          <li>Articles on culture, history, and heritage</li>
          <li>Community contributions from Marathi writers and enthusiasts</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Contact Us</h2>
        <p className="mb-4">
          We love hearing from our readers! Share your feedback or content suggestions at: <a href="mailto:rahulip33@gmail.com" className="text-blue-600 underline">rahulip33@gmail.com</a>
        </p>
      </div>
    </div>
  );
};

export default About;

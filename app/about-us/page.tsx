import React from 'react';
import OurTeam from '@/components/OurTeam';

const AboutUs = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          Our mission is to provide exceptional dental care in a comfortable and
          caring environment. We are committed to helping our patients achieve
          and maintain optimal oral health.
        </p>
      </div>
      <OurTeam />
    </div>
  );
};

export default AboutUs;

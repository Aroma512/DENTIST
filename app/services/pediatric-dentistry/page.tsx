import Image from 'next/image';
import React from 'react';

const PediatricDentistry = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Pediatric Dentistry</h1>
      <Image
        src="https://source.unsplash.com/random/800x400/?pediatric,dentistry,kids"
        alt="Pediatric Dentistry"
        width={800}
        height={400}
        className="mx-auto rounded-lg mb-8"
      />
      <p className="text-gray-700">
        We provide gentle and comprehensive dental care for children of all ages,
        focusing on prevention and early detection of dental problems.
      </p>
    </div>
  );
};

export default PediatricDentistry;

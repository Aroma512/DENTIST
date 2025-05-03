import Image from 'next/image';
import React from 'react';

const Orthodontics = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Orthodontics</h1>
      <Image
        src="https://source.unsplash.com/random/800x400/?orthodontics,braces"
        alt="Orthodontics"
        width={800}
        height={400}
        className="mx-auto rounded-lg mb-8"
      />
      <p className="text-gray-700">
        Our orthodontic treatments include traditional braces, clear aligners,
        and other advanced techniques to straighten your teeth and improve your
        bite.
      </p>
    </div>
  );
};

export default Orthodontics;

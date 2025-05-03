import Image from 'next/image';
import React from 'react';

const CosmeticDentistry = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Cosmetic Dentistry</h1>
      <Image
        src="https://source.unsplash.com/random/800x400/?cosmetic,dentistry"
        alt="Cosmetic Dentistry"
        width={800}
        height={400}
        className="mx-auto rounded-lg mb-8"
      />
      <p className="text-gray-700">
        We offer a range of cosmetic dentistry services to enhance your smile,
        including teeth whitening, veneers, and smile makeovers.
      </p>
    </div>
  );
};

export default CosmeticDentistry;

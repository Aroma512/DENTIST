'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const beforeAfterData = [
  {
    treatment: 'Teeth Whitening',
    beforeImage: 'https://images.unsplash.com/photo-1617173945354-672441aa40c7?auto=format&fit=crop&w=600&h=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1581585375290-75fde6ef7089?auto=format&fit=crop&w=600&h=400&q=80',
    description: 'See the amazing results of our teeth whitening treatment.',
  },
  {
    treatment: 'Orthodontics',
    beforeImage: 'https://images.unsplash.com/photo-1543255034-85a59d1293f4?auto=format&fit=crop&w=600&h=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1588781570126-a908dbd988ac?auto=format&fit=crop&w=600&h=400&q=80',
    description: 'Transform your smile with our orthodontic treatments.',
  },
  {
    treatment: 'Dental Implants',
    beforeImage: 'https://images.unsplash.com/photo-1625938394944-59aa429c4d54?auto=format&fit=crop&w=600&h=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=600&h=400&q=80',
    description: 'Restore your smile with our high-quality dental implants.',
  },
  {
    treatment: 'Veneers',
    beforeImage: 'https://images.unsplash.com/photo-1632479212404-5ca458865174?auto=format&fit=crop&w=600&h=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1581585375290-75fde6ef7089?auto=format&fit=crop&w=600&h=400&q=80',
    description: 'Get the perfect smile with our cosmetic veneers.',
  },
  {
    treatment: 'Gum Contouring',
    beforeImage: 'https://images.unsplash.com/photo-1581585375290-75fde6ef7089?auto=format&fit=crop&w=600&h=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1617173945354-672441aa40c7?auto=format&fit=crop&w=600&h=400&q=80',
    description: 'Enhance your smile with our gum contouring treatment.',
  },
  {
    treatment: 'Root Canal Treatment',
    beforeImage: 'https://images.unsplash.com/photo-1543255034-85a59d1293f4?auto=format&fit=crop&w=600&h=400&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=600&h=400&q=80',
    description: 'Save your tooth with our effective root canal treatment.',
  }
];

const BeforeAfterPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-900 mb-8"
        >
          Before & After Gallery
        </motion.h1>

        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          See the incredible transformations we've achieved for our patients. 
          These before and after photos showcase the quality of our dental work.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {beforeAfterData.map((item, index) => (
            <motion.div
              key={item.treatment}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.treatment}</h3>
                <p className="text-gray-700 mb-4">{item.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Before</h4>
                    <div className="relative h-48 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        src={item.beforeImage}
                        alt={`Before ${item.treatment}`}
                        fill
                        className="object-cover transition-transform hover:scale-105 duration-300"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">After</h4>
                    <div className="relative h-48 overflow-hidden rounded-md border border-gray-200">
                      <Image
                        src={item.afterImage}
                        alt={`After ${item.treatment}`}
                        fill
                        className="object-cover transition-transform hover:scale-105 duration-300"
                        sizes="(max-width: 768px) 100vw, 300px"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <motion.a
            href="/book-consultation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-teal-600 text-white font-bold py-3 px-8 rounded-full hover:bg-teal-700 transition-colors duration-300"
          >
            Book Your Transformation
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterPage;

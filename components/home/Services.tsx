import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaTooth, FaSmile, FaTeethOpen, FaChild } from 'react-icons/fa';
import { images } from '@/constants/images';

const services = [
  {
    id: 'general',
    title: 'General Dentistry',
    description: 'Comprehensive oral care including cleanings, fillings, and preventative treatments.',
    image: images.services.general,
    icon: FaTooth,
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with whitening, veneers, and other aesthetic procedures.',
    image: images.services.cosmetic,
    icon: FaSmile,
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    description: 'Straighten your teeth with advanced braces and clear aligner treatments.',
    image: images.services.orthodontics,
    icon: FaTeethOpen,
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    description: 'Gentle dental care for children in a comfortable, friendly environment.',
    image: images.services.pediatric,
    icon: FaChild,
  },
];

const IconComponent: React.FC<{ icon: React.ComponentType<React.ComponentProps<'svg'>> }> = ({ icon: Icon }) => {
  try {
    return <Icon className="h-6 w-6 text-white" />;
  } catch (error) {
    console.warn('Failed to load icon:', error);
    return <div className="h-6 w-6 bg-white/30 rounded" />;
  }
}

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600 mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of dental services to meet all your oral health needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center justify-center p-2 bg-teal-500 rounded-full">
                    <IconComponent icon={service.icon} />
                  </div>
                </div>
              </div>
              <div className="p-7">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-5 leading-relaxed">{service.description}</p>
                <Link 
                  href={`/services#${service.id}`}
                  className="text-teal-600 hover:text-teal-800 font-semibold inline-flex items-center group-hover:translate-x-1 transition-transform"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Link 
            href="/services" 
            className="inline-block bg-gradient-to-r from-teal-500 to-blue-600 text-white font-bold py-4 px-8 rounded-full transition-all hover:shadow-lg hover:shadow-teal-200 hover:scale-105 transform"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}

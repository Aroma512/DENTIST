'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React from 'react';

const doctors = [
  {
    name: 'Dr. Ali Farooq',
    role: 'Consultant Maxillofacial Surgeon & Implantologist',
    experience: '17 years',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=500',
    specialization: 'Maxillofacial Surgery & Implantology'
  },
  {
    name: 'Dr. Farhan Zaib',
    role: 'Consultant Orthodontist',
    experience: '17 years',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=500',
    specialization: 'Orthodontics'
  },
  {
    name: 'Dr. Muhammad Moazzam',
    role: 'Consultant Endodontist',
    experience: '16 years',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500',
    specialization: 'Endodontics'
  },
  {
    name: 'Dr. Sarooj Hannan',
    role: 'Consultant Dental Surgeon',
    experience: '12 years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500',
    specialization: 'Dental Surgery'
  },
  {
    name: 'Dr. Shahab Rafiq',
    role: 'Consultant Dental Surgeon',
    experience: '10 years',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=500',
    specialization: 'Dental Surgery'
  }
];

const generalDentists = [
  'Dr. Summaya Ibrahim',
  'Dr. Hania Khan',
  'Dr. Rida Naqoosh',
  'Dr. Abdul Rehman',
  'Dr. Gull Fizza Shahzaib',
  'Dr. Maheen Elahi'
];

const AboutPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About DentCare</h1>
      <p className="text-gray-700">
        DentCare is committed to providing exceptional dental care in a comfortable and caring environment.
      </p>
    </div>
  );
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Story Section */}
      <section className="relative h-[60vh] flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?w=2000"
          alt="Modern dental clinic"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl leading-relaxed">
              Since our establishment, we've been dedicated to providing exceptional dental care
              with a focus on patient comfort and cutting-edge technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-xl text-gray-600">
              Meet our experienced team of dental professionals
            </p>
          </motion.div>

          {/* Senior Doctors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
                  <p className="text-teal-600 font-medium mt-1">{doctor.role}</p>
                  <p className="text-gray-600 mt-2">Experience: {doctor.experience}</p>
                  <p className="text-gray-600">Specialization: {doctor.specialization}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* General Dentists Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">General Dentists</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {generalDentists.map((name) => (
                <div key={name} className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-medium text-gray-900">{name}</p>
                  <p className="text-sm text-gray-600">General Dentistry</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const doctors = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'Lead Dentist',
    specialization: 'Cosmetic Dentistry',
    experience: '15+ years',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=500',
    qualifications: 'DDS, FICOI',
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Orthodontist',
    specialization: 'Orthodontics',
    experience: '12+ years',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500',
    qualifications: 'DMD, MS',
  },
  {
    name: 'Dr. Emily Rodriguez',
    role: 'Pediatric Dentist',
    specialization: 'Pediatric Dentistry',
    experience: '10+ years',
    image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?w=500',
    qualifications: 'DDS, MPH',
  },
];

export default function MeetOurDoctors() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Doctors</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of experienced dental professionals is committed to providing you with the highest quality care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-80">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{doctor.name}</h2>
                <p className="text-teal-600 font-semibold mb-2">{doctor.role}</p>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Specialization:</strong> {doctor.specialization}</p>
                  <p><strong>Experience:</strong> {doctor.experience}</p>
                  <p><strong>Qualifications:</strong> {doctor.qualifications}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

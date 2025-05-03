'use client';
import { motion } from 'framer-motion';
import { FaTooth, FaClock, FaHospital, FaAward } from 'react-icons/fa';

const features = [
  {
    icon: FaTooth,
    title: 'Expert Dentists',
    description: 'Our highly qualified team ensures top-quality dental care.'
  },
  {
    icon: FaClock,
    title: '24/7 Support',
    description: 'Emergency dental care available around the clock.'
  },
  {
    icon: FaHospital,
    title: 'Modern Facility',
    description: 'State-of-the-art equipment and comfortable environment.'
  },
  {
    icon: FaAward,
    title: 'Certified Services',
    description: 'Internationally recognized dental care standards.'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience world-class dental care with our comprehensive approach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="h-12 w-12 text-teal-600 mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

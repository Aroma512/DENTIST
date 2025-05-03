'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Patient',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    quote: 'Best dental experience ever! The staff is incredibly professional and caring.'
  },
  {
    name: 'Michael Chen',
    role: 'Patient',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    quote: 'State-of-the-art facility with a team that really knows their stuff.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Patient',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    quote: 'Finally found a dental clinic that makes me feel comfortable and relaxed.'
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Patient Stories</h2>
          <p className="text-xl text-gray-600">Real experiences from our valued patients</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <div className="flex items-center mb-6">
                <div className="relative h-12 w-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

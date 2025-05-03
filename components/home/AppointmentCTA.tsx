'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function AppointmentCTA() {
  return (
    <section className="relative py-20 bg-teal-600 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="pattern-circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="3" fill="white" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#pattern-circles)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Book your appointment today and take the first step towards a healthier, more confident smile.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/appointment"
              className="inline-block bg-white text-teal-600 px-8 py-3 rounded-full font-semibold hover:bg-teal-50 transition-colors"
            >
              Schedule Appointment
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

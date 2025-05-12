import React from 'react';
import AppointmentForm from '@/components/AppointmentForm';
import { Metadata } from 'next';
import type { DentalService } from '@/types/services'; // Import DentalService type

export const metadata: Metadata = {
  title: 'Book a Consultation | DentCare',
  description: 'Schedule your dental consultation with our experienced team.',
};

// Define some services for the consultation page
const consultationServices: DentalService[] = [
  {
    id: 'initial-consult',
    name: 'Initial Consultation',
    duration: '30 min',
    description: 'Discuss your dental concerns and treatment options.',
    fee: 50,
  },
  {
    id: 'treatment-planning',
    name: 'Treatment Planning Session',
    duration: '45 min',
    description: 'Detailed planning for your dental procedures.',
    fee: 75,
  },
  // Add more services relevant to consultation if needed
];

export default function BookConsultationPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book a Consultation</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our team is ready to help you with your dental needs. Schedule a consultation today.
          </p>
        </div>
        
        {/* Pass the required props to AppointmentForm */}
        <AppointmentForm 
          category="consultation" 
          services={consultationServices} 
        />
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Why Choose a Consultation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-teal-600 mb-4 flex justify-center">
                {/* Replace with an appropriate icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Expert Advice</h3>
              <p className="text-gray-600 text-center">
                Get professional opinions and answers to all your dental questions.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-teal-600 mb-4 flex justify-center">
                {/* Replace with an appropriate icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Personalized Plan</h3>
              <p className="text-gray-600 text-center">
                Receive a treatment plan tailored specifically to your needs and goals.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-teal-600 mb-4 flex justify-center">
                 {/* Replace with an appropriate icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Understand Costs</h3>
              <p className="text-gray-600 text-center">
                Get a clear understanding of the costs involved before starting treatment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

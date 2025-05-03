import React from 'react';
import AppointmentForm from '@/components/AppointmentForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a Consultation | DentCare',
  description: 'Schedule your dental consultation with our experienced team of professionals.',
};

export default function BookConsultation() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book a Consultation</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about your dental health? Schedule a consultation with our expert dental team to discuss your needs and concerns.
          </p>
        </div>
        
        <AppointmentForm />
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Why Choose a Consultation?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-teal-600 mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Personalized Attention</h3>
              <p className="text-gray-600 text-center">
                Get dedicated time with our dentists to discuss your specific dental concerns.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-teal-600 mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Treatment Options</h3>
              <p className="text-gray-600 text-center">
                Learn about all available treatment options and make informed decisions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-teal-600 mb-4 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">Cost Estimates</h3>
              <p className="text-gray-600 text-center">
                Receive transparent information about the costs and duration of potential treatments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

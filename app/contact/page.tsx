import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contact Us - DentCare',
  description: 'Get in touch with our dental clinic for appointments or inquiries',
};

const ContactPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
          <p className="text-gray-700">123 Dental Street, Lahore, Pakistan</p>
          <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Details</h2>
          <p className="text-gray-700">Phone: +92-123-456-7890</p>
          <p className="text-gray-700">Email: info@dentcare.com</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Book an Appointment</h2>
          <p className="text-gray-700">
            Contact us to schedule an appointment or consultation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

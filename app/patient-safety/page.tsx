import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Patient Safety - DentCare',
  description: 'Learn about our commitment to patient safety and infection control protocols.',
};

const PatientSafetyPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-8">Patient Safety</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Commitment to Safety</h2>
        <p className="text-gray-700 mb-4">
          At DentCare, your safety is our top priority. We adhere to strict protocols and guidelines
          to ensure a safe and comfortable environment for every patient.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Infection Control</h2>
        <p className="text-gray-700 mb-4">
          We follow rigorous infection control procedures to prevent the spread of disease. Our protocols
          include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Sterilization of all dental instruments</li>
          <li>Use of disposable materials whenever possible</li>
          <li>Surface disinfection between patients</li>
          <li>Regular hand hygiene practices</li>
        </ul>
        <p className="text-gray-700">
          Our sterilization equipment is regularly tested to ensure it meets the highest standards.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Radiation Safety</h2>
        <p className="text-gray-700 mb-4">
          We use digital X-rays, which emit significantly less radiation than traditional X-rays.
          We also use lead aprons and thyroid collars to minimize radiation exposure.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Emergency Preparedness</h2>
        <p className="text-gray-700 mb-4">
          Our staff is trained to handle medical emergencies. We have emergency medications and equipment
          readily available, and we conduct regular drills to ensure preparedness.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Training and Education</h2>
        <p className="text-gray-700 mb-4">
          Our team participates in ongoing training and education to stay up-to-date with the latest
          advances in dental care and safety protocols.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Your Role in Safety</h2>
        <p className="text-gray-700 mb-4">
          We encourage you to ask questions and share any concerns you may have about your dental care.
          Your input is valuable in helping us maintain a safe and comfortable environment.
        </p>
      </section>
    </div>
  );
};

export default PatientSafetyPage;

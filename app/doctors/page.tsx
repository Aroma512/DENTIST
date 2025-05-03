'use client';
import { useState } from 'react';
import { doctors } from '@/data/doctors';
import DoctorSearch from '@/components/DoctorSearch';
import Image from 'next/image';
import React from 'react';


export default function DoctorsPage() {
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Find a Doctor</h1>
        
        <DoctorSearch doctors={doctors} onSearch={setFilteredDoctors} />
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDoctors.map(doctor => (
            <div key={doctor.id} className="bg-white rounded-lg shadow-md overflow-hidden">
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
                <p className="text-teal-600 mt-1">
                  {doctor.specialization.charAt(0).toUpperCase() + doctor.specialization.slice(1)} Specialist
                </p>
                <div className="mt-4">
                  <p className="text-gray-600"><strong>Experience:</strong> {doctor.experience} years</p>
                  <p className="text-gray-600"><strong>Languages:</strong> {doctor.languages.join(', ')}</p>
                  <p className="text-gray-600 mt-2"><strong>Clinic:</strong> {doctor.clinic.name}</p>
                  <p className="text-gray-600">{doctor.clinic.location}</p>
                  <p className="text-gray-600">{doctor.clinic.timing}</p>
                </div>
                <div className="mt-6">
                  <button className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition-colors">
                    Book Appointment
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

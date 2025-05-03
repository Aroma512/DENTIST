'use client';
import React from 'react';
import { doctors } from '@/data/doctors';

const OurTeam = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-center">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="text-center">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="rounded-full w-32 h-32 mx-auto mb-2"
            />
            <h3 className="text-lg font-semibold">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialization}</p>
            <p className="text-gray-700">Experience: {doctor.experience} years</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;

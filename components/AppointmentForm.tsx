'use client';

import React, { useState } from 'react';
import type { DentalService } from '@/types/services';
import { images } from '@/constants/images';
import { FaTooth, FaSmile, FaTeethOpen, FaChild } from 'react-icons/fa';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType;
}

const services: ServiceItem[] = [
  {
    id: 'general',
    title: 'General Dentistry',
    description: 'Comprehensive oral care including cleanings, fillings, and preventative treatments.',
    image: images.services.general,
    icon: FaTooth,
  },
  {
    id: 'cavities',
    title: 'Cavity Treatment',
    description: 'Treatment for tooth decay and cavities with modern filling solutions.',
    image: images.services.general,
    icon: FaTooth,
  },
  {
    id: 'gum-disease',
    title: 'Gum Disease Treatment',
    description: 'Specialized care for gingivitis and periodontal disease.',
    image: images.services.general,
    icon: FaTeethOpen,
  },
  {
    id: 'tooth-pain',
    title: 'Emergency Dental Care',
    description: 'Immediate care for severe tooth pain and dental emergencies.',
    image: images.services.general,
    icon: FaSmile,
  }
];

interface AppointmentFormProps {
  category: string;
  services: DentalService[];
}

export default function AppointmentForm({ category, services }: AppointmentFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    time: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 border rounded"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
          <input
            type="tel"
            placeholder="Phone"
            className="p-2 border rounded"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
          <select
            className="p-2 border rounded"
            value={formData.service}
            onChange={(e) => setFormData({...formData, service: e.target.value})}
          >
            <option value="">Select Service</option>
            {services.map(service => (
              <option key={service.id} value={service.id}>{service.name}</option>
            ))}
          </select>
        </div>
        <button 
          type="submit"
          className="w-full bg-teal-600 text-white py-2 rounded hover:bg-teal-700"
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}
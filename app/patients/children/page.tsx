import { Metadata } from 'next';
import AppointmentForm from '@/components/AppointmentForm';
import type { DentalService } from '@/types/services';
import { FaChild, FaTooth, FaCheckCircle } from 'react-icons/fa';

const childServices: DentalService[] = [
  {
    id: 'pediatric-checkup',
    name: 'Pediatric Dental Checkup',
    duration: '30 min',
    description: 'Regular dental examination for children',
    fee: 75,
  },
  // ...existing code...
];

const benefits = [
  { icon: FaChild, text: 'Child-friendly environment' },
  { icon: FaTooth, text: 'Gentle dental care' },
  { icon: FaCheckCircle, text: 'Preventive focus' },
];

export const metadata: Metadata = {
  title: 'Children\'s Dental Services - DentCare',
  description: 'Specialized dental care for children',
};

export default function ChildrenDental() {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Children's Dental Care</h1>
        
        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm">
              <Icon className="h-8 w-8 text-teal-500" />
              <span className="text-gray-700">{text}</span>
            </div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {childServices.map((service) => (
            <div 
              key={service.id} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-gray-600 mb-4">
                Duration: <span className="font-medium">{service.duration}</span>
              </p>
              <p className="text-teal-600 font-semibold">
                Fee: <span className="text-lg">${service.fee}</span>
              </p>
            </div>
          ))}
        </div>

        <AppointmentForm category="children" services={childServices} />
      </div>
    </div>
  );
}
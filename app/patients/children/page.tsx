import { Metadata } from 'next';
import AppointmentForm from '@/components/AppointmentForm';

const childServices = [
  {
    id: 'pediatric-checkup',
    title: 'Pediatric Dental Checkup',
    description: 'Regular dental examination for children',
    fee: 75,
  },
  {
    id: 'fluoride',
    title: 'Fluoride Treatment',
    description: 'Protective treatment for children\'s teeth',
    fee: 50,
  },
  {
    id: 'sealants',
    title: 'Dental Sealants',
    description: 'Preventive treatment for cavities',
    fee: 60,
  },
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {childServices.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="text-teal-600 font-semibold">Fee: ${service.fee}</p>
            </div>
          ))}
        </div>

        <AppointmentForm category="children" services={childServices} />
      </div>
    </div>
  );
}

'use client';
import { useState } from 'react';
import Link from 'next/link';

const patientCategories = {
  children: {
    title: 'Children Patients',
    items: [
      { name: 'Pediatric Dental Care', href: '/patients/children/dental-care' },
      { name: 'First Visit Guide', href: '/patients/children/first-visit' },
      { name: 'Child-Friendly Services', href: '/patients/children/services' },
    ]
  },
  women: {
    title: 'Women Patients',
    items: [
      { name: 'Women\'s Dental Health', href: '/patients/women/dental-health' },
      { name: 'Pregnancy Dental Care', href: '/patients/women/pregnancy-care' },
      { name: 'Cosmetic Services', href: '/patients/women/cosmetic' },
    ]
  },
  men: {
    title: 'Men Patients',
    items: [
      { name: 'Men\'s Dental Health', href: '/patients/men/dental-health' },
      { name: 'Sports Dentistry', href: '/patients/men/sports' },
      { name: 'Restorative Services', href: '/patients/men/restorative' },
    ]
  }
};

export default function PatientsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 text-gray-700 hover:text-teal-600"
      >
        Patients
        <svg 
          className={`ml-2 h-5 w-5 transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 left-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-100">
          <div className="p-4 grid gap-4">
            {Object.entries(patientCategories).map(([key, category]) => (
              <div key={key} className="space-y-2">
                <h3 className="font-semibold text-gray-800">{category.title}</h3>
                <ul className="space-y-1">
                  {category.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

'use client';
import React, { useState } from 'react';
import { Doctor } from '@/data/doctors';

interface DoctorSearchProps {
  doctors: Doctor[];
  onSearch: (results: Doctor[]) => void;
}

export default function DoctorSearch({ doctors, onSearch }: DoctorSearchProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState<string>('all');

  const handleSearch = () => {
    const filtered = doctors.filter(doctor => {
      const matchesSearch = doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.clinic.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === 'all' || doctor.specialization === category;
      return matchesSearch && matchesCategory;
    });
    onSearch(filtered);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row gap-4">
        <select
          className="p-2 border rounded-md flex-1"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="general">General</option>
          <option value="pediatric">Pediatric</option>
          <option value="womens">Women's Specialist</option>
          <option value="cosmetic">Cosmetic</option>
        </select>
        
        <input
          type="text"
          placeholder="Search by name or location..."
          className="p-2 border rounded-md flex-1"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <button
          onClick={handleSearch}
          className="bg-teal-600 text-white px-6 py-2 rounded-md hover:bg-teal-700"
        >
          Search
        </button>
      </div>
    </div>
  );
}

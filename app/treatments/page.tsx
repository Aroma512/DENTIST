'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { images } from '@/constants/images';

const treatmentsData = [
  {
    category: 'General Dentistry',
    treatments: [
      { name: 'Emergency Dental Care', description: 'Immediate care for dental emergencies.', image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=600&q=80' },
      { name: 'Comprehensive Exams & X-Rays', description: 'Detailed check-ups and diagnostic imaging.', image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80' },
      { name: 'Scaling & Polishing', description: 'Professional teeth cleaning to remove plaque and tartar.', image: 'https://images.unsplash.com/photo-1621989359434-c1395a2c1344?auto=format&fit=crop&w=600&q=80' },
      { name: 'Fillings', description: 'Restoring teeth affected by decay.', image: 'https://images.unsplash.com/photo-1579083578893-1fe5d8b22f8d?auto=format&fit=crop&w=600&q=80' },
      { name: 'Dentures', description: 'Removable replacements for missing teeth.', image: 'https://images.unsplash.com/photo-1593022356769-11f762e25ed9?auto=format&fit=crop&w=600&q=80' },
      { name: 'Root Canal Therapy', description: 'Treatment to repair and save a severely damaged or infected tooth.', image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80' },
      { name: 'Tooth Extractions', description: 'Removing teeth that are damaged or impacted.', image: 'https://images.unsplash.com/photo-1594495894542-a46cc73e081a?auto=format&fit=crop&w=600&q=80' },
      { name: 'Wisdom Teeth Removal', description: 'Extraction of impacted or problematic wisdom teeth.', image: 'https://images.unsplash.com/photo-1619451640913-760b3ac1b557?auto=format&fit=crop&w=600&q=80' },
      { name: 'Custom-Made Mouthguards', description: 'Protection for teeth during sports or to prevent teeth grinding.', image: 'https://images.unsplash.com/photo-1604184957009-3807adcd1f61?auto=format&fit=crop&w=600&q=80' },
      { name: 'Sedation Options', description: 'Options for reducing anxiety during dental procedures.', image: 'https://images.unsplash.com/photo-1580281657527-47f249e8f4df?auto=format&fit=crop&w=600&q=80' },
      { name: 'Sleep Apnea Appliances', description: 'Devices to help with sleep apnea.', image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&q=80' },
      { name: 'TMJ (Temporomandibular Joint) Treatments', description: 'Treatments for TMJ disorders.', image: 'https://images.unsplash.com/photo-1550831107-89c28501703b?auto=format&fit=crop&w=600&q=80' },
    ],
  },
  {
    category: 'Cosmetic Dentistry',
    treatments: [
      { name: 'Teeth Whitening', description: 'Brightening discolored or stained teeth.', image: 'https://images.unsplash.com/photo-1581585375290-75fde6ef7089?auto=format&fit=crop&w=600&q=80' },
      { name: 'Dental Implants', description: 'Permanent replacements for missing teeth.', image: 'https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&w=600&q=80' },
      { name: 'Invisalign Clear Aligners', description: 'Discreet teeth straightening with clear aligners.', image: 'https://images.unsplash.com/photo-1588781570126-a908dbd988ac?auto=format&fit=crop&w=600&q=80' },
      { name: 'Orthodontic Braces', description: 'Traditional braces for teeth straightening.', image: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80' },
    ],
  },
  {
    category: 'Specialist Services',
    treatments: [
      { name: 'Endodontic Care', description: 'Specialized care for the dental pulp and root canals.', image: 'https://images.unsplash.com/photo-1609840112990-4265448268d1?auto=format&fit=crop&w=600&q=80' },
      { name: 'Oral & Maxillofacial Surgery', description: 'Surgical treatments for diseases, injuries, and defects of the mouth and face.', image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b0e?auto=format&fit=crop&w=600&q=80' },
      { name: 'Orthodontic Specializations', description: 'Advanced orthodontic treatments.', image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80' },
      { name: 'Pediatric Dentistry', description: 'Dental care for children.', image: 'https://images.unsplash.com/photo-1519494026892-2eef75c578e2?auto=format&fit=crop&w=600&q=80' },
      { name: 'Periodontal Treatments', description: 'Treatments for gum disease.', image: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?auto=format&fit=crop&w=600&q=80' },
      { name: 'Prosthodontic Services', description: 'Restoration and replacement of teeth.', image: 'https://images.unsplash.com/photo-1571736773437-af1e8b657714?auto=format&fit=crop&w=600&q=80' },
    ],
  },
];

const TreatmentsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-gray-900 mb-8"
        >
          Our Treatments
        </motion.h1>
        
        {treatmentsData.map((categoryData, index) => (
          <div key={categoryData.category} className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{categoryData.category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categoryData.treatments.map((treatment, treatmentIndex) => (
                <motion.div
                  key={treatment.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (index + treatmentIndex) * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                  <div className="relative h-64 bg-gray-200"> {/* Added background placeholder */}
                    <Image
                      src={treatment.image}
                      alt={treatment.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        // Type assertion needed because TS might not know target is an HTMLImageElement
                        const target = e.target as HTMLImageElement;
                        target.src = '/fallback-image.jpg'; // Ensure this image exists in public/
                        target.srcset = ''; // Clear srcset to prevent interference
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{treatment.name}</h3>
                    <p className="text-gray-700">{treatment.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
        
        <div className="text-center mt-8">
          <a href="/common-dental-problems" className="text-teal-600 hover:text-teal-800">
            Learn about common dental problems and their solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default TreatmentsPage;

import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - DentCare',
  description: 'Comprehensive dental services for all your oral health needs',
};

const services = [
  {
    id: 'general',
    title: 'General Dentistry',
    description: 'Our general dentistry services focus on the prevention, diagnosis, and treatment of a wide variety of dental conditions to ensure your teeth stay healthy for life.',
    procedures: [
      'Comprehensive Dental Exams',
      'Professional Teeth Cleaning',
      'Dental Fillings',
      'Root Canal Therapy',
      'Tooth Extractions',
      'Periodontal (Gum) Disease Treatment',
    ],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'cosmetic',
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with our range of cosmetic dental procedures designed to improve the appearance of your teeth and give you the confidence to smile brightly.',
    procedures: [
      'Teeth Whitening',
      'Dental Veneers',
      'Dental Bonding',
      'Smile Makeovers',
      'Tooth-Colored Fillings',
      'Gum Contouring',
    ],
    image: 'https://images.unsplash.com/photo-1581585375290-75fde6ef7089?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'orthodontics',
    title: 'Orthodontics',
    description: 'Our orthodontic treatments are designed to straighten teeth, close gaps, and correct bite issues for improved oral function and a beautiful smile.',
    procedures: [
      'Traditional Metal Braces',
      'Ceramic Braces',
      'Clear Aligners (Invisalign)',
      'Retainers',
      'Early Orthodontic Treatment',
      'Surgical Orthodontics',
    ],
    image: 'https://images.unsplash.com/photo-1588781570126-a908dbd988ac?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'pediatric',
    title: 'Pediatric Dentistry',
    description: 'Our child-friendly approach to dental care ensures that your little ones develop positive associations with dental visits and maintain good oral health habits.',
    procedures: [
      'Child Dental Exams and Cleanings',
      'Dental Sealants',
      'Fluoride Treatments',
      'Space Maintainers',
      'Tooth-Colored Fillings for Children',
      'Early Orthodontic Assessment',
    ],
    image: 'https://images.unsplash.com/photo-1519494026892-2eef75c578e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80',
  },
];

export default function Services() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <section className="bg-teal-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Our Dental Services</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            We offer comprehensive dental care for patients of all ages, using the latest
            techniques and equipment for optimal results.
          </p>
        </div>
      </section>
      
      {/* Services section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 scroll-mt-20`}
              >
                <div className="w-full md:w-1/2">
                  <div className="relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h2 className="text-3xl font-bold text-gray-800 mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Our {service.title} Services Include:</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.procedures.map((procedure, i) => (
                      <li key={i} className="flex items-start text-gray-600">
                        <svg className="h-5 w-5 text-teal-500 mt-1 mr-2 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>{procedure}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Schedule an Appointment?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            Contact us today to book your visit with one of our experienced dental professionals.
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-full transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}

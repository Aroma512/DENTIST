import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-teal-400 mb-4">DentCare</h3>
            <p className="text-gray-300">
              Providing quality dental care and creating beautiful smiles since 2010.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/dental-problems" className="text-gray-300 hover:text-teal-400 transition-colors">Dental Problems</Link></li>
              <li><Link href="/treatments" className="text-gray-300 hover:text-teal-400 transition-colors">Treatments</Link></li>
              <li><Link href="/gallery" className="text-gray-300 hover:text-teal-400 transition-colors">Before & After</Link></li>
              <li><Link href="/safety" className="text-gray-300 hover:text-teal-400 transition-colors">Patient Safety</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-teal-400 transition-colors">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services#general" className="text-gray-300 hover:text-teal-400 transition-colors">General Dentistry</Link></li>
              <li><Link href="/services#cosmetic" className="text-gray-300 hover:text-teal-400 transition-colors">Cosmetic Dentistry</Link></li>
              <li><Link href="/services#orthodontics" className="text-gray-300 hover:text-teal-400 transition-colors">Orthodontics</Link></li>
              <li><Link href="/services#pediatric" className="text-gray-300 hover:text-teal-400 transition-colors">Pediatric Dentistry</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p>123 Dental Street</p>
              <p>City, State 12345</p>
              <p>Phone: (123) 456-7890</p>
              <p>Email: info@dentcare.com</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} DentCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

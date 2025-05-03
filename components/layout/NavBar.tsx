import { useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaTimes } from 'react-icons/fa';

export default function NavBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-teal-600">
              DentCare
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-teal-600">Home</Link>
            <Link href="/services" className="text-gray-700 hover:text-teal-600">Services</Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-600">About</Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-600">Contact</Link>
            
            {/* Search Button and Input */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-64 px-4 py-1 rounded-full border focus:outline-none focus:border-teal-600"
                  />
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="ml-2 text-gray-600 hover:text-teal-600"
                  >
                    <FaTimes className="h-5 w-5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="text-gray-600 hover:text-teal-600"
                >
                  <FaSearch className="h-5 w-5" />
                </button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-teal-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Home</Link>
            <Link href="/services" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Services</Link>
            <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-teal-600">About</Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-teal-600">Contact</Link>
            <div className="px-3 py-2">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-1 rounded-full border focus:outline-none focus:border-teal-600"
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

'use client';
import Link from 'next/link';
import { useState } from 'react';

const navigation = [
  {
    name: 'About',
    href: '/about',
    submenu: [
      { name: 'Our Story', href: '/about/story' },
      { name: 'Meet Our Doctors', href: '/about/doctors' },
      { name: 'Our Mission', href: '/about/mission' },
      { name: 'Facilities', href: '/about/facilities' },
    ],
  },
  {
    name: 'Dental Problems',
    href: '/dental-problems',
    submenu: [
      {
        name: 'Common Issues',
        href: '/dental-problems/common',
        subItems: [
          { name: 'Bad Breath', href: '/dental-problems/common/bad-breath' },
          { name: 'Root Canal', href: '/dental-problems/common/root-canal' },
        ],
      },
      {
        name: 'Teeth & Gums',
        href: '/dental-problems/teeth-gums',
        subItems: [
          { name: 'Gum Disease', href: '/dental-problems/teeth-gums/gum-disease' },
          { name: 'Tooth Decay', href: '/dental-problems/teeth-gums/tooth-decay' },
          { name: 'Sensitive Teeth', href: '/dental-problems/teeth-gums/sensitive-teeth' },
        ],
      },
      {
        name: 'Cosmetic',
        href: '/dental-problems/cosmetic',
        subItems: [
          { name: 'Discoloration', href: '/dental-problems/cosmetic/discoloration' },
          { name: 'Misaligned Teeth', href: '/dental-problems/cosmetic/misalignment' },
          { name: 'Gaps & Spaces', href: '/dental-problems/cosmetic/gaps' },
        ],
      },
      { name: 'Cavities', href: '/dental-problems/cavities' },
      { name: 'Wisdom Teeth', href: '/dental-problems/wisdom-teeth' },
    ],
  },
  {
    name: 'Treatments',
    href: '/treatments',
    submenu: [
      { name: 'General Dentistry', href: '/treatments/general' },
      { name: 'Cosmetic Dentistry', href: '/treatments/cosmetic' },
      { name: 'Orthodontics', href: '/treatments/orthodontics' },
      { name: 'Implants', href: '/treatments/implants' },
    ],
  },
  { name: 'Before & After', href: '/gallery' },
  { name: 'Patient Safety', href: '/safety' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-teal-600">
              DentCare
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="px-3 py-2 text-gray-700 hover:text-teal-600 transition-colors"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subItem) => (
                      <div key={subItem.name} className="relative group/sub">
                        <Link
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 flex justify-between items-center"
                        >
                          {subItem.name}
                          {subItem.subItems && (
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          )}
                        </Link>
                        {subItem.subItems && (
                          <div className="absolute left-full top-0 w-64 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                            {subItem.subItems.map((nestedItem) => (
                              <Link
                                key={nestedItem.name}
                                href={nestedItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600"
                              >
                                {nestedItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-teal-600 hover:bg-teal-50 rounded-md"
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subItem) => (
                      <div key={subItem.name}>
                        <Link
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-md"
                        >
                          {subItem.name}
                        </Link>
                        {subItem.subItems && (
                          <div className="pl-4 space-y-1">
                            {subItem.subItems.map((nestedItem) => (
                              <Link
                                key={nestedItem.name}
                                href={nestedItem.href}
                                className="block px-3 py-2 text-sm text-gray-600 hover:text-teal-600 hover:bg-teal-50 rounded-md"
                              >
                                {nestedItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
import Link from 'next/link';
import Image from 'next/image';

export default function CTA() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=600&q=80"
          alt="Dental tools"
          fill
          className="object-cover brightness-[0.35]"
          sizes="100vw"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Schedule Your Visit?</h2>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          We're currently accepting new patients and would love to help you achieve your perfect smile.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact" className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-full transition-colors">
            Book Appointment
          </Link>
          <Link href="/contact#location" className="inline-block bg-white hover:bg-gray-100 text-teal-600 font-medium py-3 px-8 rounded-full transition-colors">
            Find Our Location
          </Link>
        </div>
      </div>
    </section>
  );
}

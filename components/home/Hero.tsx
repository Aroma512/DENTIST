'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface HeroProps {}

const Hero: React.FC<HeroProps> = () => {
  const [text, setText] = useState('');
  const fullText = "Expert Dentist Dental Care for Your Perfect Smile";
  const index = useRef(0);
  
  useEffect(() => {
    if (index.current < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText.charAt(index.current));
        index.current += 1;
      }, 50);
      
      return () => clearTimeout(timeout);
    }
  }, [text]);

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-5 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1920&h=1080&q=80"
          alt="Modern dental clinic interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-sky-800/60" />
      </div>
      
      {/* Neural Network Pattern Overlay */}
      <div className="absolute inset-0 z-[1] opacity-10 pattern-overlay"></div>
      
      {/* Content Container */}
      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row justify-between items-center">
        {/* Hero Text */}
        <motion.div 
          className="max-w-full md:max-w-[50%] text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight uppercase">
            {text}
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="text-lg md:text-xl text-gray-100 mb-8 uppercase"
          >
            Experience personalized dental solutions with cutting-edge AI technology.
          </motion.p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-5">
            <Link
              href="/book-consultation"
              className="flex items-center bg-white text-sky-800 font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 uppercase hover:scale-105 hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] animate-pulse"
            >
              Book Consultant →
            </Link>
            <Link
              href="/services"
              className="border-2 border-white text-white py-3 px-6 rounded-full font-bold uppercase transition-all duration-300 hover:bg-white/20"
            >
              Services
            </Link>
          </div>
        </motion.div>
        
        {/* Hero Stats - Circular Arrangement */}
        <div className="relative w-[350px] h-[350px] md:max-w-[45%] mt-12 md:mt-0">
          <motion.div 
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[120px] bg-white/20 backdrop-blur-md rounded-full flex flex-col items-center justify-center text-center border border-white/40"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              y: [0, -15, 0],
              transition: { 
                opacity: { duration: 0.5, delay: 0.5 },
                y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
              }
            }}
          >
            <span className="text-2xl">📅</span>
            <h3 className="text-2xl font-bold text-white">45+</h3>
            <p className="text-sm uppercase text-gray-100">Years Experience</p>
          </motion.div>
          
          <motion.div 
            className="absolute top-1/2 right-0 -translate-y-1/2 w-[120px] h-[120px] bg-white/20 backdrop-blur-md rounded-full flex flex-col items-center justify-center text-center border border-white/40"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              x: [0, 15, 0],
              transition: { 
                opacity: { duration: 0.5, delay: 0.7 },
                x: { repeat: Infinity, duration: 1.3, ease: "easeInOut" }
              }
            }}
          >
            <span className="text-2xl">😊</span>
            <h3 className="text-2xl font-bold text-white">99%</h3>
            <p className="text-sm uppercase text-gray-100">Patient Satisfaction</p>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[120px] bg-white/20 backdrop-blur-md rounded-full flex flex-col items-center justify-center text-center border border-white/40"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              y: [0, 15, 0],
              transition: { 
                opacity: { duration: 0.5, delay: 0.9 },
                y: { repeat: Infinity, duration: 1.7, ease: "easeInOut" }
              }
            }}
          >
            <span className="text-2xl">🦷</span>
            <h3 className="text-2xl font-bold text-white">500+</h3>
            <p className="text-sm uppercase text-gray-100">Expert Dentists</p>
          </motion.div>
          
          <motion.div 
            className="absolute top-1/2 left-0 -translate-y-1/2 w-[120px] h-[120px] bg-white/20 backdrop-blur-md rounded-full flex flex-col items-center justify-center text-center border border-white/40"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              x: [0, -15, 0],
              transition: { 
                opacity: { duration: 0.5, delay: 1.1 },
                x: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
              }
            }}
          >
            <span className="text-2xl">🏆</span>
            <h3 className="text-2xl font-bold text-white">10+</h3>
            <p className="text-sm uppercase text-gray-100">Years of Excellence</p>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob"></div>
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gray-100 rounded-full mix-blend-overlay filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
    </section>
  );
}

export default Hero;

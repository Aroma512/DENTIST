'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const blogPosts = [
  {
    title: 'The Importance of Regular Dental Checkups',
    date: 'March 15, 2024',
    author: 'Dr. Sarah Smith',
    content: 'Regular dental checkups are crucial for maintaining optimal oral health. Learn why...',
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Teeth Whitening: What You Need to Know',
    date: 'March 10, 2024',
    author: 'Dr. John Doe',
    content: 'Discover the facts about teeth whitening and how it can enhance your smile...',
    image: 'https://images.unsplash.com/photo-1581585375290-75fde6ef7089?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'The Benefits of Orthodontic Treatment',
    date: 'March 5, 2024',
    author: 'Dr. Emily Johnson',
    content: 'Orthodontic treatment can improve your oral health and boost your confidence...',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Modern Dental Technology',
    date: 'March 1, 2024',
    author: 'Dr. Michael Chen',
    content: 'Explore how advanced technology is revolutionizing dental care...',
    image: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Pediatric Dental Care Tips',
    date: 'February 28, 2024',
    author: 'Dr. Lisa Anderson',
    content: 'Essential tips for maintaining your child\'s dental health...',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Understanding Dental Implants',
    date: 'February 25, 2024',
    author: 'Dr. James Wilson',
    content: 'Everything you need to know about dental implants and tooth replacement...',
    image: 'https://images.unsplash.com/photo-1571736773437-af1e8b657714?auto=format&fit=crop&w=800&q=80'
  }
];

const BlogPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-12 tracking-tight"
        >
          Our Blog
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-opacity duration-300 hover:opacity-90"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm mb-3">
                  {post.date} | {post.author}
                </p>
                <p className="text-gray-600 line-clamp-3">{post.content}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-600 font-semibold hover:underline"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
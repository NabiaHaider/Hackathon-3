'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
import { FaClock } from 'react-icons/fa';
import Image from 'next/image';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      {/* Header Section */}
      <section
        className="relative h-[60vh] w-full bg-cover bg-center"
        style={{ backgroundImage: `url('/bgpic.jpg')` }}
      >
        <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-center">
          <Image src="/bg.png" alt="Logo" width={100} height={100} className="object-contain mx-auto" />
          <h1 className="text-7xl mb-7 font-medium">Contact</h1>
          <p className="text-2xl mt-1 font-medium">
            <Link href="/">Home</Link> &gt; <span className="text-gray-600">Contact</span>
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Details */}
          <div className="p-8 space-y-6">
            <div className="flex items-start space-x-4">
              <FaLocationDot size={24} color="black" />
              <div>
                <h2 className="text-xl font-semibold text-black">Address</h2>
                <p className="text-gray-600">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaPhone size={24} color="black" />
              <div>
                <h2 className="text-xl font-semibold text-black">Phone</h2>
                <p className="text-gray-600">Mobile: +(84) 546-6789<br />Hotline: +(84) 456-6789</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaClock size={24} color="black" />
              <div>
                <h2 className="text-xl font-semibold text-black">Working Time</h2>
                <p className="text-gray-600">Monday-Friday: 9:00 - 22:00<br />Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Abc@def.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is optional"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  placeholder="I'd like to ask about..."
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-48 py-3 border border-black rounded-xl text-black text-lg hover:bg-black hover:text-white transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;

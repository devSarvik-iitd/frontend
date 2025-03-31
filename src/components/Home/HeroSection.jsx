import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-20">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Crack Competitive Exams with 1-on-1 Mentorship from Experts!</h1>
          <p className="text-xl mb-8">Get personalized guidance from IITians & top mentors to improve your strategy, clear doubts, and boost your scores.</p>
          <Link to="contact" smooth duration={500} className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition duration-300">
            Get Free Mentorship
          </Link>
        </div>
        <div className="md:w-1/2">
          <img src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" 
               alt="Student learning with mentor" 
               className="rounded-lg shadow-2xl" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

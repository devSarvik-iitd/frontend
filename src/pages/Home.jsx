import React from 'react'
import { useAuth } from '../context/AuthContext';
import PricingSection from '../components/Home/PricingSection';
import Testimonials from '../components/Home/Testimonials';
import HowItWorks from '../components/Home/HowItWorks';
import About from '../components/Home/About';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import HeroSection from '../components/Home/HeroSection';
import Contact from '../components/Home/Contact';
import Footer from '../components/Footer';
export default function Home() {
  const { user } = useAuth();
  
  
  return (
    <>
      <h1 className="text-4xl">
        {user ? <span>Welcome, {user.firstName}!</span> : ""}
      </h1>
    <HeroSection/>
    <WhyChooseUs/>
    <About/>
    <HowItWorks/>
    <Testimonials/>
    <PricingSection/>
    <Contact/>
    <Footer/>
    </>
  )
}

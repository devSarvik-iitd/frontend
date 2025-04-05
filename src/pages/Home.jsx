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
import WhyMentorship from '../components/Home/WhyMentorship';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const redirectToDashboard = () =>{
    navigate("/dashboard");
  }

  return (
    <>
      <div className="w-full flex justify-end px-4 py-2 sm:px-6 lg:px-8">
        <h1 className="text-xl text-left m-0 p-0">
          {user ? <span onClick={redirectToDashboard} className='hover:cursor-pointer'>Welcome, {user.displayName}!</span> : ""}
        </h1>
      </div>

      <HeroSection />
      <WhyMentorship />
      <About />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <PricingSection />
      <Contact />
      <Footer />
    </>
  )
}

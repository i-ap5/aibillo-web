
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import MobileFirst from './components/MobileFirst';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="features">
          <Features />
        </section>
        
        <section id="how-it-works">
          <HowItWorks />
        </section>
        
        <section id="dashboard">
          <MobileFirst />
        </section>
        
        <section id="testimonials">
          <Testimonials />
        </section>
        
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;

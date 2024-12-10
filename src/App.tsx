import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TrackingSystem from './components/TrackingSystem';
import CostCalculator from './components/CostCalculator';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Herramientas Útiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TrackingSystem />
            <CostCalculator />
          </div>
        </div>
      </section>
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </div>
  );
}

export default App;
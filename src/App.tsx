import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import EventsShowcase from './components/EventsShowcase';
import VIPServices from './components/VIPServices';
import LuxuryExperiences from './components/LuxuryExperiences';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className={`min-h-screen bg-luxury-black transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <main>
        <Hero />
        <EventsShowcase />
        <VIPServices />
        <LuxuryExperiences />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

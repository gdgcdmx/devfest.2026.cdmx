import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Tracks } from './components/Tracks';
import { VenueSection } from './components/VenueSection';
import { RegistrationSection } from './components/RegistrationSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0e1015] text-slate-100 flex flex-col font-sans selection:bg-[#4285F4]/30 selection:text-white">
      <Navbar />
      <main id="inicio" className="flex-1">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default App;

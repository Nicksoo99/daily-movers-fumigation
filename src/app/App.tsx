import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white font-sans text-slate-900">
        <Helmet>
          <title>Daily Movers Fumigation - Moving & Pest Control in Kilimani, Nairobi</title>
          <meta name="description" content="Daily Movers Fumigation provides reliable residential & commercial moving and effective pest control services in Kilimani, Nairobi. Call 0717629399 for a quote." />
          <meta name="keywords" content="movers, fumigation, moving company, pest control, Kilimani, Nairobi, residential moving, office relocation" />
          <link rel="canonical" href="https://dailymoversfumigation.com/" />
          <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚚</text></svg>" />
        </Helmet>
        <Header />
        <main>
          <Hero />
          <Services />
          <About />
          <Testimonials />
          <Contact />
        </main>
        <FloatingWhatsApp />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

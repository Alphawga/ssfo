import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

// Components
import { Navbar, Footer } from './components';

// Pages
import { HomePage, PortfolioPage, ServicesPage, ThesisPage, ContactPage, AboutPage } from './pages';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (['portfolio', 'services', 'thesis', 'contact', 'about'].includes(hash)) {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navbar currentPage={currentPage} />

      <AnimatePresence mode="wait">
        {currentPage === 'home' && <HomePage key="home" />}
        {currentPage === 'portfolio' && <PortfolioPage key="portfolio" />}
        {currentPage === 'services' && <ServicesPage key="services" />}
        {currentPage === 'thesis' && <ThesisPage key="thesis" />}
        {currentPage === 'contact' && <ContactPage key="contact" />}
        {currentPage === 'about' && <AboutPage key="about" />}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

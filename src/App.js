import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './contexts/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import Contact from './pages/Contact';
import Prices from './pages/Prices';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <LanguageProvider>
        <div className="App">
          <BrowserRouter>
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/:serviceId" element={<ServiceDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/prices" element={<Prices />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
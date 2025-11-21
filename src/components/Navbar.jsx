import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { salonData } from '../mock';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { path: '/services/haircuts', label: t.nav.haircuts },
    { path: '/services/coloring', label: t.nav.coloring },
    { path: '/services/treatments', label: t.nav.treatments },
    { path: '/prices', label: t.nav.prices },
    { path: '/about', label: t.nav.about },
    { path: '/contact', label: t.nav.contact }
  ];

  return (
    <nav className="bg-white border-b border-[#5f9dff]/20 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/logo.svg" 
              alt="Madame Cristina Logo" 
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <span className="text-2xl font-medium text-[#1e1919] transition-colors duration-300 group-hover:text-[#61525a]">
              {salonData.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-base font-medium transition-colors duration-300 relative group ${
                  isActive(link.path)
                    ? 'text-[#61525a]'
                    : 'text-[#736c64] hover:text-[#61525a]'
                }`}
              >
                {link.label}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#5f9dff] transform origin-left transition-transform duration-300 ${
                  isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>
            ))}
            <Button
              className="bg-[#61525a] hover:bg-[#4a3e44] text-white px-6 py-2.5 text-base font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => window.open(salonData.bookingUrl, '_blank')}
            >
              {t.nav.bookNow}
            </Button>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#61525a] hover:text-[#5f9dff] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-[#5f9dff]/20">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block text-base font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-[#61525a]'
                    : 'text-[#736c64] hover:text-[#61525a]'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
            <Button
              size="sm"
              className="w-full bg-[#61525a] hover:bg-[#4a3e44] text-white transition-colors"
              onClick={() => {
                window.open(salonData.bookingUrl, '_blank');
                setIsOpen(false);
              }}
            >
              {t.nav.bookNow}
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
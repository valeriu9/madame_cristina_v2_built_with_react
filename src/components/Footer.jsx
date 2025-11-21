import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { salonData } from '../mock';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-[#1e1919] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/logo.svg" 
                alt="Madame Cristina Logo" 
                className="h-10 w-auto"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
              <span className="text-2xl font-bold">{salonData.name}</span>
            </div>
            <p className="text-[#bbb5ae] leading-relaxed mb-6">
              {t.hero.description.substring(0, 150)}...
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center text-[#bbb5ae]">
                <MapPin className="w-5 h-5 mr-3 text-[#5f9dff]" strokeWidth={2} />
                <span>{salonData.contact.address}</span>
              </div>
              <div className="flex items-center text-[#bbb5ae]">
                <Phone className="w-5 h-5 mr-3 text-[#5f9dff]" strokeWidth={2} />
                <span>{salonData.contact.phone}</span>
              </div>
              <div className="flex items-center text-[#bbb5ae]">
                <Mail className="w-5 h-5 mr-3 text-[#5f9dff]" strokeWidth={2} />
                <span>{salonData.contact.email}</span>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/madamecristinahair"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#5f9dff]/20 hover:bg-[#5f9dff] rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-[#5f9dff] group-hover:text-white transition-colors" strokeWidth={2} />
              </a>
              <a
                href="https://www.facebook.com/madamecristina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#5f9dff]/20 hover:bg-[#5f9dff] rounded-full flex items-center justify-center transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-[#5f9dff] group-hover:text-white transition-colors" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t.footer.myServices}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/services/haircuts"
                  className="text-[#bbb5ae] hover:text-[#5f9dff] transition-colors duration-300"
                >
                  {t.services.haircuts.title}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/coloring"
                  className="text-[#bbb5ae] hover:text-[#5f9dff] transition-colors duration-300"
                >
                  {t.services.coloring.title}
                </Link>
              </li>
              <li>
                <Link
                  to="/services/treatments"
                  className="text-[#bbb5ae] hover:text-[#5f9dff] transition-colors duration-300"
                >
                  {t.services.treatments.title}
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">{t.footer.quickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-[#bbb5ae] hover:text-[#5f9dff] transition-colors duration-300"
                >
                  {t.footer.home}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-[#bbb5ae] hover:text-[#5f9dff] transition-colors duration-300"
                >
                  {t.footer.about}
                </Link>
              </li>
              <li>
                <Link
                  to="/prices"
                  className="text-[#bbb5ae] hover:text-[#5f9dff] transition-colors duration-300"
                >
                  {t.footer.prices}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[#bbb5ae] hover:text-[#5f9dff] transition-colors duration-300"
                >
                  {t.footer.contact}
                </Link>
              </li>
              <li>
                <a
                  href={salonData.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#bbb5ae] hover:text-[#5f9dff] transition-colors duration-300"
                >
                  {t.footer.bookAppointment}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#736c64]/30 text-center">
          <p className="text-[#bbb5ae]">
            © {currentYear} {salonData.name}. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
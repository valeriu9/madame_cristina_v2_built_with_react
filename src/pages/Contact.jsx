import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { salonData } from '../mock';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#f7f5f2]">
      <SEO page="contact" />
      {/* Header */}
      <div className="bg-white border-b border-[#5f9dff]/20">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1e1919] mb-4">
            {t.contact.title}
          </h1>
          <p className="text-xl text-[#736c64] max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(salonData.contact.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
                <Card className="border-[#5f9dff]/20 hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-[#61525a] rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                      <MapPin className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1e1919] mb-2">{t.contact.address}</h3>
                      <p className="text-lg text-[#736c64]">{salonData.contact.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>

            {typeof window !== 'undefined' && window.innerWidth <= 768 ? (
              <a
                href={`tel:${salonData.contact.phone.replace(/\s+/g, '')}`}
                style={{ textDecoration: 'none' }}
              >
                  <Card className="border-[#5f9dff]/20 hover:shadow-lg transition-shadow duration-300 cursor-pointer mt-6">
                  <CardContent className="p-8">
                    <div className="flex items-start">
                      <div className="w-14 h-14 bg-[#5f9dff] rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                        <Phone className="w-7 h-7 text-white" strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#1e1919] mb-2">{t.contact.phone}</h3>
                        <p className="text-lg text-[#736c64]">{salonData.contact.phone}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ) : (
                <Card className="border-[#5f9dff]/20 hover:shadow-lg transition-shadow duration-300 mt-6">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-[#5f9dff] rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                      <Phone className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1e1919] mb-2">{t.contact.phone}</h3>
                      <p className="text-lg text-[#736c64]">{salonData.contact.phone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            <a
              href={`mailto:${salonData.contact.email}`}
              style={{ textDecoration: 'none' }}
            >
                <Card className="border-[#5f9dff]/20 hover:shadow-lg transition-shadow duration-300 cursor-pointer mt-6">
                <CardContent className="p-8">
                  <div className="flex items-start">
                    <div className="w-14 h-14 bg-[#61525a] rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                      <Mail className="w-7 h-7 text-white" strokeWidth={2} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1e1919] mb-2">{t.contact.email}</h3>
                      <p className="text-lg text-[#736c64]">{salonData.contact.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>

            <Card className="border-[#5f9dff]/20 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-[#1e1919] mb-4">{t.contact.socialHeader}</h3>
                <p className="text-[#736c64] mb-6">{t.contact.socialDescription}</p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/madamecristinahair"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Instagram className="w-5 h-5" strokeWidth={2} />
                    <span className="font-semibold">Instagram</span>
                  </a>
                  <a
                    href="https://www.facebook.com/madamecristina"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-3 bg-[#1877f2] hover:bg-[#0c5dcd] text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Facebook className="w-5 h-5" strokeWidth={2} />
                    <span className="font-semibold">Facebook</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Hours */}
          <div>
            <Card className="border-[#5f9dff]/20 h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-8">
                  <div className="w-14 h-14 bg-[#5f9dff] rounded-full flex items-center justify-center mr-6">
                    <Clock className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1e1919]">{t.contact.openingHours}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-4 border-b border-[#5f9dff]/20">
                    <span className="text-lg font-semibold text-[#1e1919]">
                      {t.days.monday}
                    </span>
                    <span className="text-lg text-[#736c64]">
                      14:00 - 20:00
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-[#5f9dff]/20">
                    <span className="text-lg font-semibold text-[#1e1919]">
                      {t.days.tuesday} - {t.days.friday}
                    </span>
                    <span className="text-lg text-[#736c64]">
                      09:00 - 20:00
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-4 border-b border-[#5f9dff]/20">
                    <span className="text-lg font-semibold text-[#1e1919]">
                      {t.days.saturday}
                    </span>
                    <span className="text-lg text-[#736c64]">
                      09:00 - 15:00
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-4">
                    <span className="text-lg font-semibold text-[#1e1919]">
                      {t.days.sunday}
                    </span>
                    <span className="text-lg text-[#736c64]">
                      {t.days.closed}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Map */}
       <div style={{width: 100 + '% !important', marginTop: '4rem'}}>
      <iframe
        width="100%"
        height="600"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Kattesund%2019+(Madame%20Cristina)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      ></iframe>
    </div>
      </div>
    </div>
  );
};

export default Contact;
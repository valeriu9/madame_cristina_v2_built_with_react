import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Sparkles, Heart } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { salonData } from '../mock';
import Lightbox from '../components/Lightbox';
import SEO from '../components/SEO';

const Home = () => {
  const { t } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(null);
  const [currentGallery, setCurrentGallery] = useState([]);
  
  return (
    <div className="min-h-screen">
      <SEO page="home" />
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0">
          <video 
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
            <img 
              src={salonData.heroImage}
              alt="Madame Cristina Salon"
              className="w-full h-full object-cover"
            />
          </video>
          {/* Subtle dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <div className="mb-10">
            <img 
              src="/logo.svg" 
              alt="Madame Cristina Logo" 
              className="w-80 md:w-[32rem] h-auto mx-auto drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.3))' }}
            />
          </div>
          
          <p className="text-xl md:text-2xl text-white mb-4 font-light drop-shadow-lg">
            {t.hero.tagline}
          </p>
          
          <p className="max-w-2xl mx-auto text-lg text-white mb-12 leading-relaxed drop-shadow-md">
            {t.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-[#61525a] hover:bg-[#4a3e44] text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => window.open(salonData.bookingUrl, '_blank')}
            >
              {t.hero.bookNow}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#61525a] px-8 py-6 text-lg transition-all duration-300 backdrop-blur-sm"
              asChild
            >
              <Link to="/contact">{t.hero.contactUs}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e1919] mb-4">
              {t.services.title}
            </h2>
            <p className="text-lg text-[#736c64] max-w-2xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(t.services).filter(([key]) => ['haircuts', 'coloring', 'treatments'].includes(key)).map(([key, service]) => (
              <Card 
                key={key}
                className="group hover:shadow-xl transition-all duration-300 border-[#5f9dff]/20 hover:border-[#61525a]/40 cursor-pointer overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={salonData.serviceImages[key]}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ 
                      objectPosition: key === 'haircuts' ? 'center 30%' : 
                                    key === 'coloring' ? 'center 40%' : 
                                    'center 35%'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                <CardContent className="p-8">
                  <div className="mb-6">
                    {key === 'haircuts' && <Scissors className="w-12 h-12 text-[#61525a] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />}
                    {key === 'coloring' && <Sparkles className="w-12 h-12 text-[#61525a] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />}
                    {key === 'treatments' && <Heart className="w-12 h-12 text-[#61525a] transition-transform duration-300 group-hover:scale-110" strokeWidth={1.5} />}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#1e1919] mb-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-[#5f9dff] mb-4 font-medium">
                    {service.subtitle}
                  </p>
                  
                  <p className="text-[#736c64] mb-6 leading-relaxed">
                    {service.description.substring(0, 120)}...
                  </p>
                  
                  <Link 
                    to={`/services/${key}`}
                    className="text-[#61525a] font-semibold hover:text-[#5f9dff] transition-colors duration-300 inline-flex items-center"
                  >
                    {t.services.learnMore}
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e1919] mb-4">
              {t.gallery.title}
            </h2>
            <p className="text-lg text-[#736c64] max-w-2xl mx-auto">
              {t.gallery.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {(() => {
              const galleryImages = [
                // Mix of haircuts and coloring
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/w4u6q9b3_IMG_8757.JPEG",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/bqojo0l7_IMG_1291.JPEG",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/76wxdqhp_IMG_5496.JPEG",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/obt6jxm3_IMG_1598.JPEG",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/93lwfaas_IMG_6190.JPEG",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/4wxbjwck_IMG_1858.JPEG",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/ivutyz8u_IMG_5788.JPEG",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/97imgsic_IMG_1124.JPEG",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/tf3iwxe3_IMG_0340.JPEG",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/itoqnnv7_E86283FA-CD9B-49F5-8FC0-6A91DEC3BE7B.JPEG",
                // Before/After transformation images
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/9krywewm_Copy%20of%20Beige%20Minimalist%20Skincare%20Before%20and%20After%20Instagram%20Post%20-%201%281%29.png",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/i93juzng_Copy%20of%20Beige%20Minimalist%20Skincare%20Before%20and%20After%20Instagram%20Post%20-%202.png",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/e2q71c0j_Copy%20of%20Beige%20Minimalist%20Skincare%20Before%20and%20After%20Instagram%20Post%20-%203.png",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/zgbf2rkw_Copy%20of%20Beige%20Minimalist%20Skincare%20Before%20and%20After%20Instagram%20Post%20-%204.png",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/7pgtlugs_Copy%20of%20Beige%20Minimalist%20Skincare%20Before%20and%20After%20Instagram%20Post%20-%205.png"
              ];
              
              return galleryImages.map((image, index) => (
                <div 
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer"
                  onClick={() => {
                    setCurrentGallery(galleryImages);
                    setCurrentImageIndex(index);
                    setLightboxOpen(true);
                  }}
                >
                  <img 
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#61525a]/0 group-hover:bg-[#61525a]/20 transition-colors duration-300" />
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#f7f5f2]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1e1919] mb-4">
              {t.whyChoose.title}
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#61525a] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-white">7+</span>
              </div>
              <h3 className="text-xl font-bold text-[#1e1919] mb-2">{t.whyChoose.experience.title}</h3>
              <p className="text-[#736c64]">{t.whyChoose.experience.description}</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#5f9dff] rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#1e1919] mb-2">{t.whyChoose.trends.title}</h3>
              <p className="text-[#736c64]">{t.whyChoose.trends.description}</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-[#61525a] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#1e1919] mb-2">{t.whyChoose.care.title}</h3>
              <p className="text-[#736c64]">{t.whyChoose.care.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1e1919]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.cta.ready}
          </h2>
          <p className="text-xl text-[#bbb5ae] mb-10">
            {t.cta.book}
          </p>
          <Button 
            size="lg" 
            className="bg-[#5f9dff] hover:bg-[#4d8ce8] text-white px-10 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() => window.open(salonData.bookingUrl, '_blank')}
          >
            {t.cta.bookAppointment}
          </Button>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          images={currentGallery}
          currentIndex={currentImageIndex}
          onClose={() => {
            setLightboxOpen(false);
            setCurrentImageIndex(null);
          }}
          onNavigate={(direction) => {
            if (direction === 'prev') {
              setCurrentImageIndex((prev) => 
                prev === 0 ? currentGallery.length - 1 : prev - 1
              );
            } else {
              setCurrentImageIndex((prev) => 
                prev === currentGallery.length - 1 ? 0 : prev + 1
              );
            }
          }}
        />
      )}
    </div>
  );
};

export default Home;
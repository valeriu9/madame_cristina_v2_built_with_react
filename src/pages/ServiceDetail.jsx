import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { salonData } from '../mock';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = salonData.services.find(s => s.id === serviceId);
  const { t } = useLanguage();

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1e1919] mb-4">Service not found</h2>
          <Link to="/" className="text-[#61525a] hover:text-[#5f9dff] transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  // Get translated service content
  const serviceContent = t.services[serviceId] || t.services.haircuts;

  return (
    <div className="min-h-screen bg-[#f7f5f2]">
      <SEO page="services" />
      {/* Header with Image */}
      <div className="relative bg-white border-b border-[#5f9dff]/20">
        {/* Background Image */}
        <div className="absolute inset-0 h-80">
          <img 
            src={salonData.serviceImages[serviceId]}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1e1919]/50" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-8">
          <Link 
            to="/"
            className="inline-flex items-center text-white hover:text-[#5f9dff] transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t.nav.home}
          </Link>
          
          <div className="py-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              {serviceContent.title}
            </h1>
            <p className="text-xl text-[#5f9dff] font-medium">
              {serviceContent.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Description */}
          <div>
            <Card className="border-[#5f9dff]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#1e1919] mb-6">
                  {t.services.aboutService}
                </h2>
                <p className="text-lg text-[#736c64] leading-relaxed">
                  {serviceContent.description}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div>
            <Card className="border-[#5f9dff]/20">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-[#1e1919] mb-6">
                  {service.id === 'coloring' ? t.services.coloring.servicesOffered : 
                   service.id === 'treatments' ? t.services.treatments.treatmentsOffered : 
                   t.services.whatsIncluded}
                </h2>
                <ul className="space-y-4">
                  {serviceContent.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-[#5f9dff] mr-3 flex-shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="text-lg text-[#736c64]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Gallery for Coloring Service */}
        {service.id === 'coloring' && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#1e1919] mb-8 text-center">
              {t.gallery.colorTransformations}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/76wxdqhp_IMG_5496.JPEG",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/w4u6q9b3_IMG_8757.JPEG",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/rq9by27y_IMG_6623.JPEG",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/si85ggq1_IMG_5954.JPEG",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/ivutyz8u_IMG_5788.JPEG"
              ].map((image, index) => (
                <div 
                  key={index}
                  className="relative aspect-square overflow-hidden w-full h-auto object-cover rounded-md group cursor-pointer"
                >
                  <img 
                    src={image}
                    alt={`Coloring work ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#61525a]/0 group-hover:bg-[#61525a]/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery for Haircuts Service */}
        {service.id === 'haircuts' && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#1e1919] mb-8 text-center">
              {t.gallery.haircutExamples}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/bqojo0l7_IMG_1291.JPEG",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/obt6jxm3_IMG_1598.JPEG",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/4wxbjwck_IMG_1858.JPEG",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/97imgsic_IMG_1124.JPEG",
                "https://customer-assets.emergentagent.com/job_modern-stylist/artifacts/itoqnnv7_E86283FA-CD9B-49F5-8FC0-6A91DEC3BE7B.JPEG"
              ].map((image, index) => (
                <div 
                  key={index}
                  className="relative aspect-square overflow-hidden w-full h-auto object-cover rounded-md group cursor-pointer"
                >
                  <img 
                    src={image}
                    alt={`Haircut example ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#61525a]/0 group-hover:bg-[#61525a]/20 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-16 text-center">
          <Card className="border-[#61525a]/20 bg-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-[#1e1919] mb-4">
                {t.cta.readyForService} {serviceContent.title}?
              </h3>
              <p className="text-lg text-[#736c64] mb-8 max-w-2xl mx-auto">
                {t.cta.question}
              </p>
              <Button 
                size="lg" 
                className="bg-[#61525a] hover:bg-[#4a3e44] text-white px-10 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                onClick={() => window.open(salonData.bookingUrl, '_blank')}
              >
                {t.nav.bookNow}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { useLanguage } from '../contexts/LanguageContext';
import { salonData } from '../mock';
import { Sparkles, Heart, Award } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#f7f5f2]">
      <SEO page="about" />
      {/* Header */}
      <div className="bg-white border-b border-[#5f9dff]/20">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1e1919] mb-4">
            {t.about.title}
          </h1>
          <p className="text-xl text-[#736c64] max-w-2xl mx-auto">
            {t.about.subtitle}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://customer-assets.emergentagent.com/job_madame-hair/artifacts/hp5m0kbc_IMG_3495.JPG"
                alt="Cristina Ungureanu"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e1919]/20 to-transparent" />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <Card className="border-[#5f9dff]/20">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-[#1e1919] mb-6">
                  Cristina Ungureanu
                </h2>
                <p className="text-lg text-[#736c64] leading-relaxed mb-8">
                  {t.about.content}
                </p>
                
                <Button 
                  size="lg"
                  className="bg-[#61525a] hover:bg-[#4a3e44] text-white px-8 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
                  onClick={() => window.open(salonData.bookingUrl, '_blank')}
                >
                  {t.nav.bookNow}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Experience Highlights */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="border-[#5f9dff]/20 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#5f9dff]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#5f9dff]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#1e1919] mb-2">
                {t.whyChoose.experience.title}
              </h3>
              <p className="text-[#736c64]">
                {t.whyChoose.experience.description}
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#5f9dff]/20 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#61525a]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-[#61525a]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#1e1919] mb-2">
                {t.whyChoose.trends.title}
              </h3>
              <p className="text-[#736c64]">
                {t.whyChoose.trends.description}
              </p>
            </CardContent>
          </Card>

          <Card className="border-[#5f9dff]/20 hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-[#5f9dff]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-[#5f9dff]" strokeWidth={2} />
              </div>
              <h3 className="text-xl font-bold text-[#1e1919] mb-2">
                {t.whyChoose.care.title}
              </h3>
              <p className="text-[#736c64]">
                {t.whyChoose.care.description}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;

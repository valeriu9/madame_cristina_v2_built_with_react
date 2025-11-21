import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Sparkles, Star, Heart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { salonData } from '../mock';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';

const Prices = () => {
  const { t } = useLanguage();

  const priceCategories = [
    {
      id: 'haircut',
      title: t.prices.haircut,
      note: t.prices.haircutNote,
      icon: Scissors,
      color: '#61525a',
      items: [
        { service: t.prices.items.haircut.short, price: '400–500' },
        { service: t.prices.items.haircut.long, price: '500–650' },
        { service: t.prices.items.haircut.curlCut, price: '450–550' },
        { service: t.prices.items.haircut.bangs, price: '175' }
      ]
    },
    {
      id: 'blonde',
      title: t.prices.blonde,
      note: t.prices.blondeNote,
      icon: Sparkles,
      color: '#5f9dff',
      featured: true,
      items: [
        { service: t.prices.items.blonde.airtouch, price: 'from 2000' },
        { service: t.prices.items.blonde.babylights, price: 'from 2000' },
        { service: t.prices.items.blonde.totalBlonde, price: 'from 2000' },
        { service: t.prices.items.blonde.totalBlondeRoots, price: '900–1500' },
        { service: t.prices.items.blonde.balayage, price: 'from 1500' },
        { service: t.prices.items.blonde.contouring, price: '1800' }
      ]
    },
    {
      id: 'color',
      title: t.prices.color,
      note: t.prices.colorNote,
      icon: Sparkles,
      color: '#5f9dff',
      items: [
        { service: t.prices.items.color.roots, price: '500' },
        { service: t.prices.items.color.toner, price: '400–600' },
        { service: t.prices.items.color.allOverColor, price: '900–1500' },
        { service: t.prices.items.color.colorCorrection, price: 'from 2000' }
      ]
    },
    {
      id: 'treatments',
      title: t.prices.treatments,
      note: t.prices.treatmentsNote,
      icon: Heart,
      color: '#61525a',
      items: [
        { service: t.prices.items.treatments.wella, price: '500' },
        { service: t.prices.items.treatments.davines, price: '500' },
        { service: t.prices.items.treatments.nashi, price: '550' },
        { service: t.prices.items.treatments.scalpDetox, price: '400' }
      ]
    },
    {
      id: 'styling',
      title: t.prices.styling,
      note: t.prices.stylingNote,
      icon: Star,
      color: '#61525a',
      items: [
        { service: t.prices.items.styling.eventHairstyle, price: '700' },
        { service: t.prices.items.styling.washMyHair, price: '250' },
        { service: t.prices.items.styling.blowOut, price: '300' }
      ]
    }
  ];

  const combinedOffers = [
    { service: t.prices.combined.haircutTonerShort, price: '800' },
    { service: t.prices.combined.haircutTonerLong, price: '1000' },
    { service: t.prices.combined.haircutColorShort, price: '1000' },
    { service: t.prices.combined.haircutColorLong, price: '1500' },
    { service: t.prices.combined.haircutTreatment, price: '750' },
    { service: t.prices.combined.haircutTreatmentToner, price: '1300' }
  ];

  return (
    <div className="min-h-screen bg-[#f7f5f2]">
      <SEO page="prices" />
      {/* Header */}
      <div className="bg-white border-b border-[#5f9dff]/20">
        <div className="max-w-7xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-[#1e1919] mb-4">
            {t.prices.title}
          </h1>
          <p className="text-xl text-[#736c64] max-w-2xl mx-auto">
            {t.prices.subtitle}
          </p>
        </div>
      </div>

      {/* Price Categories */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {priceCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.id}
                className={`border-[#5f9dff]/20 hover:shadow-xl transition-all duration-300 ${
                  category.featured ? 'ring-2 ring-[#5f9dff] relative overflow-hidden' : ''
                }`}
              >
                {category.featured && (
                  <div className="absolute top-0 right-0 bg-[#5f9dff] text-white px-4 py-1 text-sm font-semibold">
                    {t.prices.popular}
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${category.color}20` }}
                    >
                      <Icon 
                        className="w-6 h-6" 
                        style={{ color: category.color }}
                        strokeWidth={2} 
                      />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-[#1e1919]">
                        {category.title}
                      </CardTitle>
                      {category.note && (
                        <p className="text-sm text-[#736c64] mt-1">
                          {category.note}
                        </p>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.items.map((item, index) => (
                      <div 
                        key={index}
                        className="flex justify-between items-center py-3 border-b border-[#5f9dff]/10 last:border-0"
                      >
                        <span className="text-[#736c64] font-medium">
                          {item.service}
                        </span>
                        <span className="text-[#1e1919] font-bold">
                          {item.price} kr
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Combined Offers Section */}
        <Card className="border-2 border-[#5f9dff] bg-white">
          <CardHeader className="bg-gradient-to-r from-[#61525a]/5 to-[#5f9dff]/5">
            <div className="flex items-center space-x-3">
              <div className="w-14 h-14 bg-[#5f9dff] rounded-full flex items-center justify-center">
                <Star className="w-7 h-7 text-white" strokeWidth={2} />
              </div>
              <div>
                <CardTitle className="text-3xl font-bold text-[#1e1919]">
                  {t.prices.specialOffers}
                </CardTitle>
                <p className="text-[#736c64] mt-1">
                  {t.prices.saveWith}
                </p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-8">
            <div className="grid md:grid-cols-2 gap-4">
              {combinedOffers.map((offer, index) => (
                <div 
                  key={index}
                  className="flex justify-between items-center p-4 bg-[#f7f5f2] rounded-lg hover:bg-[#5f9dff]/10 transition-colors duration-300"
                >
                  <span className="text-[#1e1919] font-medium">
                    {offer.service}
                  </span>
                  <span className="text-[#5f9dff] font-bold text-lg">
                    {offer.price} kr
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="border-[#61525a]/20 bg-white">
            <CardContent className="p-12">
              <h3 className="text-3xl font-bold text-[#1e1919] mb-4">
                {t.prices.bookingCta}
              </h3>
              <p className="text-lg text-[#736c64] mb-8 max-w-2xl mx-auto">
                {t.cta.question}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#61525a] hover:bg-[#4a3e44] text-white px-10 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  onClick={() => window.open(salonData.bookingUrl, '_blank')}
                >
                  {t.nav.bookNow}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-[#61525a] text-[#61525a] hover:bg-[#61525a] hover:text-white px-10 py-6 text-lg transition-all duration-300"
                  asChild
                >
                  <Link to="/contact">{t.prices.contactUs}</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Note */}
        <div className="mt-8 text-center">
          <p className="text-sm text-[#736c64]">
            {t.prices.note}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Prices;
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../contexts/LanguageContext';

const SEO = ({ page = 'home' }) => {
  const { language } = useLanguage();

  const seoData = {
    da: {
      home: {
        title: 'Madame Cristina - Frisør i Horsens | Klipning, Farvning & Behandlinger',
        description: 'Professionel frisør i Horsens med +7 års erfaring. Specialist i skræddersyede klipninger, avancerede farveteknikker (Airtouch, Balayage, Babylights) og eksklusive behandlinger. Book tid online.',
        keywords: 'frisør horsens, hårklipning horsens, hårfarvning horsens, balayage horsens, airtouch horsens, babylights horsens, hårbehandling horsens, madame cristina, dame klip horsens, total blonde horsens'
      },
      about: {
        title: 'Om Madame Cristina - Erfaren Frisør i Horsens',
        description: 'Lær Cristina Ungureanu at kende - professionel frisør med over 7 års erfaring. Specialist i moderne farveteknikker og skræddersyede klipninger i Horsens.',
        keywords: 'cristina ungureanu, frisør horsens, om madame cristina, erfaring frisør'
      },
      services: {
        title: 'Services - Klipning, Farvning & Behandlinger | Madame Cristina',
        description: 'Udforsk mit udvalg af specialiserede hårbehandlinger: dame klip, avancerede farveteknikker, blonde services og premium behandlinger i Horsens.',
        keywords: 'hårklipning, hårfarvning, balayage, airtouch, hårbehandling, babylights, total blonde'
      },
      prices: {
        title: 'Priser - Frisør Horsens | Madame Cristina',
        description: 'Gennemsigtige priser for alle services. Dame klip fra 400 kr, blonde behandlinger fra 2000 kr, farve fra 500 kr. Book tid online.',
        keywords: 'frisør priser horsens, klipning pris, balayage pris, hårfarvning pris horsens'
      },
      contact: {
        title: 'Kontakt & Åbningstider - Madame Cristina Horsens',
        description: 'Besøg Madame Cristina på Kattesund 19, 8700 Horsens. Åben man-fre. Book tid online eller ring på +45 91 99 72 52.',
        keywords: 'frisør horsens adresse, frisør horsens åbningstider, book tid frisør horsens'
      }
    },
    en: {
      home: {
        title: 'Madame Cristina - Hair Salon in Horsens | Haircuts, Coloring & Treatments',
        description: 'Professional hair salon in Horsens with +7 years experience. Specialist in tailored haircuts, advanced coloring techniques (Airtouch, Balayage, Babylights) and exclusive treatments. Book online.',
        keywords: 'hair salon horsens, hairdresser horsens, haircut horsens, hair coloring horsens, balayage horsens, airtouch horsens, babylights horsens, madame cristina'
      },
      about: {
        title: 'About Madame Cristina - Experienced Hairdresser in Horsens',
        description: 'Meet Cristina Ungureanu - professional hairdresser with over 7 years of experience. Specialist in modern coloring techniques and tailored haircuts in Horsens.',
        keywords: 'cristina ungureanu, hairdresser horsens, about madame cristina'
      },
      services: {
        title: 'Services - Haircuts, Coloring & Treatments | Madame Cristina',
        description: 'Explore my range of specialized hair services: women\'s haircuts, advanced coloring techniques, blonde services and premium treatments in Horsens.',
        keywords: 'haircut, hair coloring, balayage, airtouch, hair treatment, babylights, total blonde'
      },
      prices: {
        title: 'Prices - Hair Salon Horsens | Madame Cristina',
        description: 'Transparent pricing for all services. Women\'s haircuts from 400 DKK, blonde treatments from 2000 DKK, color from 500 DKK. Book online.',
        keywords: 'hair salon prices horsens, haircut price, balayage price, hair coloring price horsens'
      },
      contact: {
        title: 'Contact & Opening Hours - Madame Cristina Horsens',
        description: 'Visit Madame Cristina at Kattesund 19, 8700 Horsens, Denmark. Open Mon-Fri. Book online or call +45 91 99 72 52.',
        keywords: 'hair salon horsens address, hair salon horsens opening hours, book hairdresser horsens'
      }
    }
  };

  const currentSeo = seoData[language][page];
  const currentUrl = window.location.href;
  const baseUrl = 'https://www.madamecristina.dk';

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <html lang={language} />
      <title>{currentSeo.title}</title>
      <meta name="title" content={currentSeo.title} />
      <meta name="description" content={currentSeo.description} />
      <meta name="keywords" content={currentSeo.keywords} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={currentUrl} />
      
      {/* Alternate Language Links */}
      <link rel="alternate" hrefLang="da" href={baseUrl + window.location.pathname} />
      <link rel="alternate" hrefLang="en" href={baseUrl + window.location.pathname} />
      <link rel="alternate" hrefLang="x-default" href={baseUrl + window.location.pathname} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={currentSeo.title} />
      <meta property="og:description" content={currentSeo.description} />
      <meta property="og:locale" content={language === 'da' ? 'da_DK' : 'en_US'} />
      <meta property="og:locale:alternate" content={language === 'da' ? 'en_US' : 'da_DK'} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentSeo.title} />
      <meta name="twitter:description" content={currentSeo.description} />
    </Helmet>
  );
};

export default SEO;

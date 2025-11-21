import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-2 py-1.5 rounded-lg border-2 border-[#5f9dff]/30 bg-white hover:bg-[#5f9dff]/5 hover:border-[#5f9dff] transition-all duration-300 group"
      aria-label="Switch language"
    >
      <Globe className="w-4 h-4 text-[#5f9dff] group-hover:rotate-12 transition-transform duration-300" strokeWidth={2} />
      <span className="text-sm font-semibold text-[#61525a] uppercase">
        {language === 'da' ? 'EN' : 'DA'}
      </span>
    </button>
  );
};

export default LanguageSwitcher;

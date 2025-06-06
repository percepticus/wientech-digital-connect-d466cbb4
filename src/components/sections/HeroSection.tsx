import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { HeroAnimation } from '@/components/ui/hero-animation';

interface HeroSectionProps {
  translations: any;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection = ({ translations, onNavigate }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-[#464646] via-gray-800 to-black text-white py-10 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FF0000%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-2 md:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight mb-6">
              {translations.hero.title}
              <br />
              <span className="text-red-500">{translations.hero.subtitle}</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
              {translations.hero.description}
            </p>
            <Button
              onClick={() => onNavigate('contact')}
              className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg w-full sm:w-auto"
            >
              {translations.hero.cta}
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
          
          <HeroAnimation />
        </div>
      </div>
    </section>
  );
};

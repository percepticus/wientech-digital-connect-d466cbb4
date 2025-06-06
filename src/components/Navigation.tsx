
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

interface NavigationProps {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
  translations: any;
  onNavigate: (sectionId: string) => void;
}

export const Navigation = ({ 
  currentLanguage, 
  onLanguageChange, 
  translations, 
  onNavigate 
}: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'home', label: translations.nav.home },
    { key: 'services', label: translations.nav.services },
    { key: 'about', label: translations.nav.about },
    { key: 'contact', label: translations.nav.contact },
    { key: 'impressum', label: translations.nav.impressum },
  ];

  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/0bbb7f0c-e875-4bd3-a8cb-231b769fe0ad.png" 
              alt="WIENTech Logo" 
              className="h-8 sm:h-12 w-auto cursor-pointer"
              width={150}
              height={48}
              onClick={() => handleNavigation('home')}
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => handleNavigation(item.key)}
                className={`text-sm font-medium transition-colors hover:text-red-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
              isScrolled={isScrolled}
            />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSwitcher
              currentLanguage={currentLanguage}
              onLanguageChange={onLanguageChange}
              isScrolled={isScrolled}
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:bg-transparent`}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item.key)}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-red-500 hover:bg-gray-50 w-full text-left"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

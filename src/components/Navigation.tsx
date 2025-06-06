import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';

interface NavigationProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
  translations: any;
  onNavigate: (sectionId: string) => void;
}

export const Navigation = ({ 
  currentLanguage, 
  onLanguageChange, 
  translations, 
  onNavigate 
}: NavigationProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'services', label: translations.nav.services },
    { key: 'selected-projects', label: translations.nav.projects },
    { key: 'about', label: translations.nav.about },
    { key: 'contact', label: translations.nav.contact },
  ];

  const handleNavigation = (sectionId: string) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="bg-[#464646] shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center space-x-3 hover:opacity-80 transition-opacity py-2"
              >
                <img 
                  src="/lovable-uploads/0bbb7f0c-e875-4bd3-a8cb-231b769fe0ad.png" 
                  alt="WIENTech Logo" 
                  className="h-12 w-auto"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(1) hue-rotate(0deg) brightness(1) contrast(1)',
                    mixBlendMode: 'screen'
                  }}
                />
              </button>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => onNavigate(item.key)}
                  className="text-white hover:text-red-500 transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
              <LanguageSwitcher 
                currentLanguage={currentLanguage} 
                onLanguageChange={onLanguageChange} 
              />
            </div>

            <div className="md:hidden flex items-center space-x-4">
              <LanguageSwitcher 
                currentLanguage={currentLanguage} 
                onLanguageChange={onLanguageChange} 
              />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-gray-700"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modern Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop with blur */}
          <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel - Full Screen with matching grey background and 30% transparency */}
          <div className="fixed inset-0 bg-[#464646]/70 backdrop-blur-sm transform transition-transform duration-300 ease-out">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-600">
              <img 
                src="/lovable-uploads/0bbb7f0c-e875-4bd3-a8cb-231b769fe0ad.png" 
                alt="WIENTech Logo" 
                className="h-8 w-auto"
                style={{
                  filter: 'brightness(0) saturate(100%) invert(1) hue-rotate(0deg) brightness(1) contrast(1)',
                  mixBlendMode: 'screen'
                }}
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-red-500 transition-colors p-2 rounded-lg hover:bg-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="py-8 px-6">
              <nav className="space-y-2">
                {navItems.map((item, index) => (
                  <button
                    key={item.key}
                    onClick={() => handleNavigation(item.key)}
                    className="w-full text-left px-4 py-4 text-white hover:text-red-500 hover:bg-gray-700/50 rounded-xl transition-all duration-200 font-medium text-lg border border-transparent hover:border-red-500/20 group"
                    style={{
                      animationDelay: `${index * 100}ms`,
                      animation: 'fade-in 0.3s ease-out forwards'
                    }}
                  >
                    <span className="block transform group-hover:translate-x-2 transition-transform duration-200">
                      {item.label}
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-600">
              <div className="text-center">
                <div className="text-white font-semibold text-lg mb-1">
                  WIENTech
                </div>
                <div className="text-gray-400 text-sm">
                  In jedem Teilchen
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

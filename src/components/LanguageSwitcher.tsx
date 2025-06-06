
import { useState } from 'react';
import { Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'de', name: 'Deutsch', flag: '' },
  { code: 'en', name: 'English', flag: '' },
];

interface LanguageSwitcherProps {
  currentLanguage: string;
  onLanguageChange: (lang: string) => void;
}

export const LanguageSwitcher = ({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="text-white hover:text-red-500 transition-colors"
      >
        <Globe className="w-4 h-4 mr-2" />
        {languages.find(lang => lang.code === currentLanguage)?.name}
      </Button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white shadow-lg rounded-lg border overflow-hidden z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                onLanguageChange(lang.code);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors ${
                currentLanguage === lang.code ? 'bg-red-50 text-red-600' : 'text-gray-700'
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

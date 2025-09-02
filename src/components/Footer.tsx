
import { Mail, Phone, MessageCircle } from 'lucide-react';

interface FooterProps {
  translations: any;
}

export const Footer = ({ translations }: FooterProps) => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { key: 'services', label: translations.nav.services },
    { key: 'digitalEurope', label: translations.nav.digitalEurope },
    { key: 'about', label: translations.nav.about },
    { key: 'contact', label: translations.nav.contact },
    { key: 'impressum', label: translations.nav.impressum },
  ];

  return (
    <footer className="bg-[#464646] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img 
              src="/lovable-uploads/0bbb7f0c-e875-4bd3-a8cb-231b769fe0ad.png" 
              alt="WIENTech Logo" 
              className="h-10 w-auto mb-4 cursor-pointer"
              width={120}
              height={32}
              loading="lazy"
              style={{
                filter: 'brightness(0) saturate(100%) invert(1) hue-rotate(0deg) brightness(1) contrast(1)',
                mixBlendMode: 'screen'
              }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
            <p className="text-gray-300 text-sm">
              {translations.footer.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-400 uppercase tracking-wider">Navigation</h3>
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.key)}
                  className="block text-left text-sm text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-400 uppercase tracking-wider">{translations.footer.contact}</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300 text-sm">
                <Mail className="w-4 h-4 mr-2 text-red-500" />
                velko.spasov@wientech.at
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <Phone className="w-4 h-4 mr-2 text-red-500" />
                +43 664 5162910
              </div>
              <div className="flex items-center text-gray-300 text-sm">
                <MessageCircle className="w-4 h-4 mr-2 text-red-500" />
                WhatsApp: +43 664 5162910
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4 text-gray-400 uppercase tracking-wider">{translations.footer.address}</h3>
            <div className="text-gray-300 text-sm">
              <p>Wien, 1040 Bezirk</p>
              <p>Theresianumgasse 7/2/7</p>
              <p>Mobil</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-8 text-center">
          <img 
            src="/lovable-uploads/0bbb7f0c-e875-4bd3-a8cb-231b769fe0ad.png" 
            alt="WIENTech Logo" 
            className="h-6 w-auto mx-auto mb-4 opacity-50 cursor-pointer"
            width={72}
            height={19}
            loading="lazy"
            style={{
              filter: 'brightness(0) saturate(100%) invert(1) hue-rotate(0deg) brightness(1) contrast(1)',
              mixBlendMode: 'screen'
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} WIENTech. {translations.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

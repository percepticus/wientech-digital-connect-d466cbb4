import { ArrowRight, Cpu, Network, Zap, Users, Award, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface HomePageProps {
  translations: any;
  onNavigate: (sectionId: string) => void;
}

export const HomePage = ({ translations, onNavigate }: HomePageProps) => {
  const services = [
    {
      icon: <Cpu className="w-8 h-8 text-red-500" />,
      title: translations.services.industry40.title,
      description: translations.services.industry40.description
    },
    {
      icon: <Network className="w-8 h-8 text-red-500" />,
      title: translations.services.iot.title,
      description: translations.services.iot.description
    },
    {
      icon: <Zap className="w-8 h-8 text-red-500" />,
      title: translations.services.fintech.title,
      description: translations.services.fintech.description
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#464646] via-gray-800 to-black text-white py-10 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23FF0000%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            
            <div className="relative flex justify-center items-center">
              <div className="flex flex-col items-center gap-4 animate-fade-in">
                {/* Top row - 4 dots */}
                <div className="flex gap-4">
                  {[0, 1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full animate-pulse mx-auto"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '2s'
                      }}
                    ></div>
                  ))}
                </div>
                
                {/* Middle row - 3 dots */}
                <div className="flex gap-4">
                  {[4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full animate-pulse mx-auto"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '2s'
                      }}
                    ></div>
                  ))}
                </div>
                
                {/* Bottom row - 2 dots */}
                <div className="flex gap-4">
                  {[7, 8].map((i) => (
                    <div
                      key={i}
                      className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full animate-pulse mx-auto"
                      style={{
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '2s'
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {translations.services.title}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translations.services.subtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button
              onClick={() => onNavigate('services')}
              variant="outline"
              className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3"
            >
              {translations.services.viewAll}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-[#464646] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{translations.about.experience}</h3>
              <p className="text-gray-300">{translations.about.experienceDesc}</p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{translations.about.expertise}</h3>
              <p className="text-gray-300">{translations.about.expertiseDesc}</p>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Globe className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">{translations.about.innovation}</h3>
              <p className="text-gray-300">{translations.about.innovationDesc}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

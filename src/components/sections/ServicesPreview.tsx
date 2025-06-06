
import React from 'react';
import { ArrowRight, Cpu, Network, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ServicesPreviewProps {
  translations: any;
  onNavigate: (sectionId: string) => void;
}

export const ServicesPreview = ({ translations, onNavigate }: ServicesPreviewProps) => {
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
  );
};

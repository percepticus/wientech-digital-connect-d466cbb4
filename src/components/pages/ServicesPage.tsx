
import React from 'react';
import { Cpu, Network, Zap, Link, Globe, Settings } from 'lucide-react';
import { ServiceCard } from '@/components/ui/service-card';

interface ServicesPageProps {
  translations: any;
}

export const ServicesPage = ({ translations }: ServicesPageProps) => {
  const services = [
    {
      icon: <Settings className="w-12 h-12 text-red-500" />,
      title: translations.services.consulting.title,
      description: translations.services.consulting.description,
      features: ['Solution Design', 'Technical Strategy', 'Architecture Review', 'Performance Optimization']
    },
    {
      icon: <Globe className="w-12 h-12 text-red-500" />,
      title: translations.services.webdev.title,
      description: translations.services.webdev.description,
      features: ['Business Applications', 'Process Automation', 'User Interfaces', 'Database Design']
    },
    {
      icon: <Link className="w-12 h-12 text-red-500" />,
      title: translations.services.integration.title,
      description: translations.services.integration.description,
      features: ['API Integration', 'Data Migration', 'System Architecture', 'Legacy Modernization']
    },
    {
      icon: <Zap className="w-12 h-12 text-red-500" />,
      title: translations.services.fintech.title,
      description: translations.services.fintech.description,
      features: ['Payment Systems', 'Security Solutions', 'API Development', 'Compliance']
    },
    {
      icon: <Cpu className="w-12 h-12 text-red-500" />,
      title: translations.services.industry40.title,
      description: translations.services.industry40.description,
      features: ['Smart Manufacturing', 'Automation Systems', 'Predictive Maintenance', 'Real-time Monitoring']
    },
    {
      icon: <Network className="w-12 h-12 text-red-500" />,
      title: translations.services.iot.title,
      description: translations.services.iot.description,
      features: ['Sensor Integration', 'Data Analytics', 'Cloud Connectivity', 'Device Management']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 break-words">
            {translations.services.title}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {translations.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

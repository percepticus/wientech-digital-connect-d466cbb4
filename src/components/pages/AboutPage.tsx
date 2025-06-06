
import React from 'react';
import { Users, Award, Globe, Target, CheckCircle, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { StatsGrid } from '@/components/ui/stats-grid';
import { ValueCard } from '@/components/ui/value-card';
import { ProjectCard } from '@/components/ui/project-card';
import { ClientLogos } from '@/components/ui/client-logos';

interface AboutPageProps {
  translations: any;
}

export const AboutPage = ({ translations }: AboutPageProps) => {
  const stats = [
    { number: '10+', label: translations.about.stats.years },
    { number: '30+', label: translations.about.stats.projects },
    { number: '30+', label: translations.about.stats.clients },
    { number: '5★', label: translations.about.stats.rating }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8 text-red-500" />,
      title: translations.about.values.precision,
      description: translations.about.values.precisionDesc
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-red-500" />,
      title: translations.about.values.quality,
      description: translations.about.values.qualityDesc
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-red-500" />,
      title: translations.about.values.innovation,
      description: translations.about.values.innovationDesc
    }
  ];

  const notableProjects = [
    {
      client: 'Deutsche Bahn AG',
      logo: '/lovable-uploads/8f0052da-fcdb-44c5-9608-6f2984a9848a.png',
      description: translations.about.projects.deutscheBahn
    },
    {
      client: 'Alois Müller GmbH & Co. KG',
      logo: '/lovable-uploads/c821dbc3-9578-467c-9594-5261454904c5.png',
      description: translations.about.projects.mueller
    },
    {
      client: '',
      logo: '/lovable-uploads/de3fdcc1-b4e2-4b58-89c3-0e5ca61a5fc7.png',
      description: translations.about.projects.commnex
    },
    {
      client: 'Ideal Alpha GmbH',
      logo: '/lovable-uploads/12a1c2dc-fde7-4e81-a849-37d532060d4d.png',
      description: translations.about.projects.idealAlpha
    }
  ];

  const additionalProjects = [
    {
      client: ' - Österreichische Bank',
      logo: '/lovable-uploads/c6b14747-14d7-4686-a316-ef8d511ec23e.png',
      description: translations.about.projects.austrianBank
    },
    {
      client: 'Roxpay AG',
      logo: '/lovable-uploads/39135c34-ba64-4f3c-a1e7-5f5cab6745d9.png',
      description: translations.about.projects.roxpay
    }
  ];

  const clientLogos = [
    { src: '/lovable-uploads/2ac080b2-e1d0-4543-854d-d16da034bddf.png', className: 'max-h-8' },
    { src: '/lovable-uploads/b10bbf74-8a9a-4a09-a0e5-320afb2a279a.png', className: 'max-h-12' },
    { src: '/lovable-uploads/a5a17c44-d84b-46df-93ac-efe81b033ab1.png', className: 'max-h-10' },
    { src: '/lovable-uploads/c821dbc3-9578-467c-9594-5261454904c5.png', className: 'max-h-10' }
  ];

  const keyFeatures = [
    {
      icon: <Users className="w-16 h-16 text-red-500 mx-auto mb-6" />,
      title: translations.about.experience,
      description: translations.about.experienceDesc
    },
    {
      icon: <Award className="w-16 h-16 text-red-500 mx-auto mb-6" />,
      title: translations.about.expertise,
      description: translations.about.expertiseDesc
    },
    {
      icon: <Globe className="w-16 h-16 text-red-500 mx-auto mb-6" />,
      title: translations.about.innovation,
      description: translations.about.innovationDesc
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#464646] to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">{translations.about.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              {translations.about.subtitle}
            </p>
            <StatsGrid stats={stats} />
          </div>
        </div>
      </section>

      {/* Notable Projects Section */}
      <section id="selected-projects" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {translations.projects.selectedTitle}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {translations.projects.selectedSubtitle}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {notableProjects.map((project, index) => (
              <ProjectCard
                key={index}
                client={project.client}
                logo={project.logo}
                description={project.description}
                logoHeight={project.client === '' ? 'small' : 'large'}
              />
            ))}
          </div>

          {/* Additional Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {additionalProjects.map((project, index) => (
              <ProjectCard
                key={index}
                client={project.client}
                logo={project.logo}
                description={project.description}
                logoHeight={index === 0 ? 'small' : 'large'}
              />
            ))}
          </div>
        </div>
      </section>

      <ClientLogos logos={clientLogos} title={translations.projects.clients} />

      {/* Experience Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                {translations.about.expertiseTitle}
              </h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-lg">{translations.about.description1}</p>
                <p className="text-lg">{translations.about.description2}</p>
                <p className="text-lg">{translations.about.description3}</p>
              </div>
            </div>
            
            <div className="space-y-6">
              {values.map((value, index) => (
                <ValueCard
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyFeatures.map((feature, index) => (
              <div key={index} className="text-center">
                {feature.icon}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

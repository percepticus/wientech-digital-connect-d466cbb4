
import React from 'react';
import { Users, Award, Globe } from 'lucide-react';

interface ExperienceSectionProps {
  translations: any;
}

export const ExperienceSection = ({ translations }: ExperienceSectionProps) => {
  const features = [
    {
      icon: <Users className="w-12 h-12 text-red-500 mx-auto mb-4" />,
      title: translations.about.experience,
      description: translations.about.experienceDesc
    },
    {
      icon: <Award className="w-12 h-12 text-red-500 mx-auto mb-4" />,
      title: translations.about.expertise,
      description: translations.about.expertiseDesc
    },
    {
      icon: <Globe className="w-12 h-12 text-red-500 mx-auto mb-4" />,
      title: translations.about.innovation,
      description: translations.about.innovationDesc
    }
  ];

  return (
    <section className="py-20 bg-[#464646] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              {feature.icon}
              <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesPreview } from '@/components/sections/ServicesPreview';
import { FundingSection } from '@/components/sections/FundingSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';

interface HomePageProps {
  translations: any;
  onNavigate: (sectionId: string) => void;
}

export const HomePage = ({ translations, onNavigate }: HomePageProps) => {
  return (
    <div className="min-h-screen">
      <HeroSection translations={translations} onNavigate={onNavigate} />
      <ServicesPreview translations={translations} onNavigate={onNavigate} />
      <FundingSection translations={translations} />
      <ExperienceSection translations={translations} />
    </div>
  );
};

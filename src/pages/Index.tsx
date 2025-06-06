
import { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/components/pages/HomePage';
import { ServicesPage } from '@/components/pages/ServicesPage';
import { AboutPage } from '@/components/pages/AboutPage';
import { ContactPage } from '@/components/pages/ContactPage';
import { ImpressumPage } from '@/components/pages/ImpressumPage';
import { translations } from '@/data/translations';

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState('de');

  const t = translations[currentLanguage as keyof typeof translations];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        currentLanguage={currentLanguage}
        onLanguageChange={setCurrentLanguage}
        translations={t}
        onNavigate={scrollToSection}
      />
      
      <main>
        <section id="home">
          <HomePage translations={t} onNavigate={scrollToSection} />
        </section>
        
        <section id="services">
          <ServicesPage translations={t} />
        </section>
        
        <section id="about">
          <AboutPage translations={t} />
        </section>
        
        <section id="contact">
          <ContactPage translations={t} />
        </section>
        
        <section id="impressum">
          <ImpressumPage translations={t} />
        </section>
      </main>
      
      <Footer translations={t} />
    </div>
  );
};

export default Index;

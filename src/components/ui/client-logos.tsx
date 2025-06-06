
import React from 'react';

interface ClientLogo {
  src: string;
  className: string;
}

interface ClientLogosProps {
  logos: ClientLogo[];
  title: string;
}

export const ClientLogos = ({ logos, title }: ClientLogosProps) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center items-center">
              <img 
                src={logo.src} 
                alt={`Client ${index + 1}`}
                className={`${logo.className} w-auto opacity-70 hover:opacity-100 transition-opacity duration-300`}
                width={120}
                height={48}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

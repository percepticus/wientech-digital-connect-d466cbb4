import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface FundingSectionProps {
  translations: any;
}

export const FundingSection = ({ translations }: FundingSectionProps) => {
  const programs = [
    translations.funding.programs.digitalJetzt,
    translations.funding.programs.awsDigitization,
    translations.funding.programs.kmuDigital,
    translations.funding.programs.efre
  ];

  return (
    <section id="digitalEurope" className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8 md:mb-12 pt-20 md:pt-0">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
              {translations.funding.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-medium px-4">
              {translations.funding.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-red-600 mb-4">
                  {translations.funding.intro}
                </h3>
                
                <div className="space-y-4 text-gray-700">
                  <p>{translations.funding.description1}</p>
                  <p>{translations.funding.description2}</p>
                  <p>{translations.funding.description3}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Unsere Expertise
                </h3>
                
                <div className="space-y-4 text-gray-700">
                  <p>{translations.funding.services}</p>
                  <p>{translations.funding.benefits}</p>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Förderprogramme:</h4>
                  <div className="flex flex-wrap gap-2">
                    {programs.map((program, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="px-3 py-1 text-sm"
                      >
                        {program}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="border-0 shadow-lg bg-gradient-to-r from-red-600 to-red-700">
            <CardContent className="p-6 md:p-8 text-center">
              <p className="text-xl font-bold text-white">
                {translations.funding.result}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
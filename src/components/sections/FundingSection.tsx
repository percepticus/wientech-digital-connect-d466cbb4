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
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            {translations.funding.title}
          </h2>
          
          <Card className="mb-8 border-0 shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                {translations.funding.description1}
              </p>
              
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                {translations.funding.description2}
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                {programs.map((program, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="px-4 py-2 text-sm font-medium"
                  >
                    {program}
                  </Badge>
                ))}
              </div>
              
              <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg">
                <p className="text-lg font-semibold text-white text-center">
                  {translations.funding.result}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
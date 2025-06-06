
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-lg">
      <CardHeader className="text-center pb-4">
        <div className="mb-4 flex justify-center">{icon}</div>
        <CardTitle className="text-xl font-bold text-gray-900">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-6">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center text-sm text-gray-700">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

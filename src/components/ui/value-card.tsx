
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <Card className="border-0 shadow-md">
      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          {icon}
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

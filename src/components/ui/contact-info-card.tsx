
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  content: string | React.ReactNode;
}

export const ContactInfoCard = ({ icon, title, content }: ContactInfoCardProps) => {
  return (
    <Card className="shadow-lg border-0 hover:shadow-xl transition-shadow duration-300">
      <CardContent className="p-6 sm:p-8">
        <div className="flex items-start space-x-4 sm:space-x-6">
          <div className="bg-red-100 p-3 sm:p-4 rounded-full flex-shrink-0">
            {icon}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 break-words">
              {title}
            </h3>
            <div className="text-gray-600 text-base sm:text-lg break-all">
              {content}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

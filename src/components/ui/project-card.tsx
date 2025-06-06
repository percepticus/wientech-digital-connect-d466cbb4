
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectCardProps {
  client: string;
  logo: string;
  description: string;
  logoHeight?: 'small' | 'medium' | 'large';
}

export const ProjectCard = ({ client, logo, description, logoHeight = 'large' }: ProjectCardProps) => {
  const getLogoClass = () => {
    switch (logoHeight) {
      case 'small':
        return 'h-8 w-auto mr-4';
      case 'medium':
        return 'h-10 w-auto mr-4';
      case 'large':
      default:
        return 'h-12 w-auto mr-4';
    }
  };

  const getDimensions = () => {
    switch (logoHeight) {
      case 'small':
        return { width: 120, height: 32 };
      case 'medium':
        return { width: 150, height: 40 };
      case 'large':
      default:
        return { width: 180, height: 48 };
    }
  };

  const dimensions = getDimensions();

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
      <CardContent className="p-8">
        <div className="flex items-center mb-4">
          <img 
            src={logo} 
            alt={`${client} Logo`}
            className={getLogoClass()}
            width={dimensions.width}
            height={dimensions.height}
            loading="lazy"
          />
          <h3 className="text-xl font-semibold text-gray-900">{client}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

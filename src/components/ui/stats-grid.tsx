
import React from 'react';

interface Stat {
  number: string;
  label: string;
}

interface StatsGridProps {
  stats: Stat[];
}

export const StatsGrid = ({ stats }: StatsGridProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-4xl font-bold text-red-500 mb-2">{stat.number}</div>
          <div className="text-gray-300">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

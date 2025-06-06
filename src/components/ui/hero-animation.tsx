
import React from 'react';

export const HeroAnimation = () => {
  return (
    <div className="relative flex justify-center items-center">
      <div className="flex flex-col items-center gap-4 animate-fade-in">
        {/* Top row - 4 dots */}
        <div className="flex gap-4">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full animate-pulse mx-auto"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s'
              }}
            ></div>
          ))}
        </div>
        
        {/* Middle row - 3 dots */}
        <div className="flex gap-4">
          {[4, 5, 6].map((i) => (
            <div
              key={i}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full animate-pulse mx-auto"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s'
              }}
            ></div>
          ))}
        </div>
        
        {/* Bottom row - 2 dots */}
        <div className="flex gap-4">
          {[7, 8].map((i) => (
            <div
              key={i}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-red-500 to-red-600 rounded-full animate-pulse mx-auto"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: '2s'
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

'use client';
import React from 'react';
import { useBreakpoints } from '../hooks/use-mobile';

const WebcamGroup: React.FC = () => {
  const { isMobile, isTablet } = useBreakpoints();

  // Set grid columns based on screen size
  let gridCols = 'grid-cols-3';
  let webcamCount = 9;
  if (isTablet) {
    gridCols = 'grid-cols-2';
    webcamCount = 6;
  }
  if (isMobile) {
    gridCols = 'grid-cols-2';
    webcamCount = 4;
  }

  const renderWebcam = (index: number) => {
    const letter = String.fromCharCode(65 + index);
    return (
      <div
        key={index}
        className="aspect-video bg-card flex items-center justify-center text-5xl md:text-6xl font-bold text-card-foreground shadow-lg rounded-lg"
      >
        {letter}
      </div>
    );
  };

  return (
    <div className="w-full h-full p-4 flex flex-col">
        <div className="w-full h-full p-4 bg-background shadow-xl flex flex-col">
            <div className={`grid ${gridCols} gap-6 flex-1`}>
                {Array.from({ length: webcamCount }).map((_, i) => renderWebcam(i))}
            </div>
        </div>
    </div>
    
  );
};

export default WebcamGroup; 
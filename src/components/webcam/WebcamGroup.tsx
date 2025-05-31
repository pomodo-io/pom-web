'use client';
import React from 'react';
import Image from 'next/image';
import { AspectRatio } from '~/components/ui/aspect-ratio';

const WebcamGroup: React.FC<{ isChatOpen?: boolean }> = ({ isChatOpen = false }) => {
  // Minimum dimensions for a webcam to be usable
  const MIN_WEBCAM_WIDTH = 240;  // Minimum width in pixels
  const MIN_WEBCAM_HEIGHT = 135; // Minimum height in pixels (16:9 aspect ratio)

  // Calculate available space and determine webcam count
  const getWebcamCount = () => {
    if (typeof window === 'undefined') return 9; // Default for SSR
    
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    // Account for dock height (3.5rem) and padding
    const availableHeight = height - 56 - 32; // 56px (3.5rem) for dock + 32px padding
    const availableWidth = width - 32; // Account for padding
    
    // Calculate maximum possible webcams based on minimum size requirements
    const maxCols = Math.floor(availableWidth / MIN_WEBCAM_WIDTH);
    const maxRows = Math.floor(availableHeight / MIN_WEBCAM_HEIGHT);
    const maxPossibleWebcams = maxCols * maxRows;

    // Determine grid layout based on available space
    if (availableHeight >= 800) {
      if (width >= 1024) return Math.min(9, maxPossibleWebcams); // Desktop: 3x3
      if (width >= 768) return Math.min(4, maxPossibleWebcams);  // Tablet: 2x2
      return Math.min(2, maxPossibleWebcams); // Mobile: 2x1
    }
    
    if (availableHeight >= 500) {
      if (width >= 1024) return Math.min(6, maxPossibleWebcams); // Desktop: 3x2
      if (width >= 768) return Math.min(4, maxPossibleWebcams);  // Tablet: 2x2
      return Math.min(2, maxPossibleWebcams); // Mobile: 2x1
    }
    
    // Minimum height (1 row)
    if (width >= 1024) return Math.min(3, maxPossibleWebcams); // Desktop: 3x1
    if (width >= 768) return Math.min(2, maxPossibleWebcams);  // Tablet: 2x1
    return Math.min(1, maxPossibleWebcams); // Mobile: 1x1
  };

  const [webcamCount, setWebcamCount] = React.useState(getWebcamCount());

  React.useEffect(() => {
    const handleResize = () => {
      setWebcamCount(getWebcamCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate grid columns based on width and webcam count
  const getGridCols = () => {
    if (typeof window === 'undefined') return 'grid-cols-3';
    const width = window.innerWidth;
    const webcamCount = getWebcamCount();
    const height = window.innerHeight;
    
    // If height is restricted (less than 500px), allow 1x2 grid
    if (height < 500) {
      return webcamCount >= 2 ? 'grid-cols-2' : 'grid-cols-1';
    }
    
    // Adjust columns based on available width and webcam count
    if (width >= 1024) {
      return webcamCount >= 9 ? 'grid-cols-3' : 
             webcamCount >= 6 ? 'grid-cols-3' :
             webcamCount >= 3 ? 'grid-cols-3' : 
             'grid-cols-1';
    }
    if (width >= 768) {
      return webcamCount >= 4 ? 'grid-cols-2' : 'grid-cols-1';
    }
    return 'grid-cols-1';
  };

  return (
    <div className={`grid ${getGridCols()} gap-4 h-[calc(100%-3.5rem)] w-full`}>
      {Array.from({ length: webcamCount }).map((_, index) => (
        <AspectRatio key={index} ratio={16 / 9} className="w-full h-full">
          <div className="w-full h-full bg-card flex items-center justify-center rounded-lg shadow-lg relative">
            <Image
              src={`https://picsum.photos/seed/${index}/800/600`}
              alt={`Webcam ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              priority={index < 4}
            />
          </div>
        </AspectRatio>
      ))}
    </div>
  );
};

export default WebcamGroup; 
'use client';
import React from 'react';
import Image from 'next/image';
import { AspectRatio } from '~/components/ui/aspect-ratio';

const WebcamGroup: React.FC = () => {
  // Determine number of webcams based on screen size
  const getWebcamCount = () => {
    if (typeof window === 'undefined') return 9; // Default for SSR
    if (window.innerWidth >= 1024) return 9; // Desktop: 3x3
    if (window.innerWidth >= 768) return 4;  // Tablet: 2x2
    return 2; // Mobile: 2x1
  };

  const [webcamCount, setWebcamCount] = React.useState(getWebcamCount());

  React.useEffect(() => {
    const handleResize = () => {
      setWebcamCount(getWebcamCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[calc(100%-3.5rem)] w-full">
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
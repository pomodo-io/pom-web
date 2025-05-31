'use client';
import WebcamGroup from '~/components/webcam/WebcamGroup';
import React from 'react';

export default function Dashboard({ isChatOpen = false }: { isChatOpen?: boolean }) {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1">
        <div className="h-full flex pt-4 px-4">
          <WebcamGroup isChatOpen={isChatOpen} />
        </div>
      </div>
    </div>
  );
} 
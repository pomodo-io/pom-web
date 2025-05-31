'use client';
import WebcamGroup from '~/components/webcam/WebcamGroup';
import React from 'react';
import Dock from '~/components/webcam/Dock';

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen p-4">
      <div className="flex-1 min-h-0">
        <div className="h-full pb-4 flex items-center">
          <WebcamGroup />
        </div>
      </div>
      <div className="h-10 mb-4">
        <Dock/>
      </div>
    </div>
  );
} 
'use client';
import Sidebar from '~/components/dashboard/Sidebar';
import React from 'react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="flex bg-component">
      <Sidebar />
      <main className="h-full w-[calc(100vw-4rem)] ml-16">
        {children}
      </main>
    </div>
  );
} 
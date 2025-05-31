'use client';
import Sidebar from '~/components/dashboard/Sidebar';
import Dock from '~/components/webcam/Dock';
import Chat from '~/components/webcam/Chat';
import React from 'react';

interface ChildProps {
  isChatOpen?: boolean;
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isChatOpen, setIsChatOpen] = React.useState(false);

  // Clone children and pass isChatOpen prop
  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement<ChildProps>(child)) {
      return React.cloneElement(child, { isChatOpen });
    }
    return child;
  });

  return (
    <div className="flex bg-component">
      <Sidebar />
      <main className="h-full w-full md:w-[calc(100vw-4rem)] md:ml-16">
        <div className="flex h-full">
          <div className="flex-1">
            {childrenWithProps}
          </div>
          {isChatOpen && (
            <div className="hidden md:block">
              <Chat isOpen={true} onClose={() => setIsChatOpen(false)} />
            </div>
          )}
        </div>
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2">
          <Dock onChatToggle={() => setIsChatOpen(!isChatOpen)} isChatOpen={isChatOpen} />
        </div>
      </main>
    </div>
  );
} 
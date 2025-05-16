'use client';
import Sidebar from '../components/Sidebar';
import WebcamGroup from '../components/WebcamGroup';
import Dock from '../components/Dock';
import React from 'react';

function ChatWindow({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed right-0 top-0 h-full w-[18rem] md:w-[22rem] lg:w-[24rem] bg-card border-l border-border shadow-lg flex flex-col z-50 transition-transform">
      <div className="flex items-center justify-between p-3 md:p-4 border-b border-border">
        <span className="font-semibold">Chat</span>
        <button onClick={onClose} className="text-sm px-2 py-1 rounded hover:bg-muted">Close</button>
      </div>
      <div className="flex-1 p-3 md:p-4 overflow-y-auto text-muted-foreground">Chat messages go here...</div>
      <div className="p-3 md:p-4 border-t border-border">
        <input className="w-full rounded border border-border px-2 md:px-3 py-1.5 md:py-2 bg-background text-foreground" placeholder="Type a message..." />
      </div>
    </div>
  );
}

export default function Home() {
  const [chatOpen, setChatOpen] = React.useState(false);
  return (
    <div className="flex h-screen overflow-hidden bg-component">
      <Sidebar />
      <main
        className={`flex-1 p-4 md:p-6 lg:p-8 bg-component text-component-foreground flex flex-col items-center justify-center relative transition-all duration-300 ${
          chatOpen ? 'mr-[18rem] md:mr-[22rem] lg:mr-[26rem]' : ''
        } ml-[4rem] md:ml-[5rem] lg:ml-[6rem]`}
      >
        <div className="flex flex-col items-center justify-center gap-3 md:gap-4 lg:gap-5 w-full h-full">
          <div className="flex-1 flex items-center justify-center w-full">
            <WebcamGroup />
          </div>
          <div className="relative w-full flex justify-center">
            <Dock onChatToggle={() => setChatOpen((v) => !v)} />
          </div>
        </div>
        {chatOpen && <ChatWindow onClose={() => setChatOpen(false)} />}
      </main>
    </div>
  );
}

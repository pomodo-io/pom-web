'use client';
import React from 'react';
import { Button } from '~/components/ui/button';
import { Mic, MicOff, Video, VideoOff, MessageCircle, Smile } from 'lucide-react';
import ThemeToggle from '~/components/dashboard/ThemeToggle';

interface DockProps {
  onChatToggle?: () => void;
}

const Dock: React.FC<DockProps> = ({ onChatToggle }) => {
  const [micOn, setMicOn] = React.useState(true);
  const [videoOn, setVideoOn] = React.useState(true);

  return (
    <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-lg border border-border w-fit mx-auto">
      <Button variant="ghost" size="icon" onClick={() => setMicOn((v) => !v)} title="Toggle Mic">
        {micOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
      </Button>
      <Button variant="ghost" size="icon" onClick={() => setVideoOn((v) => !v)} title="Toggle Video">
        {videoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
      </Button>
      <Button variant="ghost" size="icon" title="Open Chat" onClick={onChatToggle}>
        <MessageCircle className="h-5 w-5" />
      </Button>
      <Button variant="ghost" size="icon" title="Reactions">
        <Smile className="h-5 w-5" />
      </Button>
      <ThemeToggle />
    </div>
  );
};

export default Dock; 
'use client';
import React from 'react';
import { Button } from '~/components/ui/button';
import { Mic, MicOff, Video, VideoOff, MessageCircle, Smile, Menu } from 'lucide-react';
import ThemeToggle from '~/components/dashboard/ThemeToggle';
import { Sheet, SheetContent, SheetTrigger, SheetDescription } from "~/components/ui/sheet";
import { Home, ListTodo, Settings, User, HelpCircle, LogOut } from "lucide-react";
import { Separator } from "~/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import Link from 'next/link';
import Chat from './Chat';

interface DockProps {
  onChatToggle: () => void;
  isChatOpen: boolean;
}

const MobileSidebar = () => {
  return (
    <SheetContent side="left" className="w-16 p-0 [&>button]:hidden">
      <SheetDescription className="sr-only">Mobile navigation menu</SheetDescription>
      <div className="flex flex-col h-full py-4 items-center">
        {/* Logo Section */}
        <div className="w-10 h-10 mb-4">
          <Link href="/" className="block w-full h-full">
            {/* Replace with your logo */}
            <div className="w-full h-full rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-lg font-bold">P</span>
            </div>
          </Link>
        </div>

        {/* Navigation Section */}
        <div className="flex flex-col items-center space-y-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/" title="Home">
              <Home className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/tasks" title="Tasks">
              <ListTodo className="h-5 w-5" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/settings" title="Settings">
              <Settings className="h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center space-y-4 mt-auto">
          <ThemeToggle />
          <Separator className="w-8 my-2" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" title="User Menu">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem asChild>
                <Link href="/help" className="flex items-center">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  Help
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings" className="flex items-center">
                  <Settings className="mr-2 h-4 w-4" />
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-950">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </SheetContent>
  );
};

const Dock: React.FC<DockProps> = ({ onChatToggle, isChatOpen }) => {
  const [micOn, setMicOn] = React.useState(true);
  const [videoOn, setVideoOn] = React.useState(true);
  const [isMobileChatOpen, setIsMobileChatOpen] = React.useState(false);

  const handleMobileChatClose = () => {
    setIsMobileChatOpen(false);
  };

  return (
    <>
      <div className="flex items-center gap-2 bg-card rounded-full px-4 py-2 shadow-lg border border-border w-fit mx-auto">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" title="Menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <MobileSidebar />
        </Sheet>
        <Button variant="ghost" size="icon" onClick={() => setMicOn((v) => !v)} title="Toggle Mic">
          {micOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
        </Button>
        <Button variant="ghost" size="icon" onClick={() => setVideoOn((v) => !v)} title="Toggle Video">
          {videoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
        </Button>
        
        {/* Mobile Chat */}
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant={isMobileChatOpen ? "secondary" : "ghost"} 
              size="icon" 
              title="Open Chat" 
              className="md:hidden"
            >
              <MessageCircle className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 p-0">
            <Chat isOpen={true} onClose={handleMobileChatClose} />
          </SheetContent>
        </Sheet>

        {/* Desktop Chat Toggle Button */}
        <div className="hidden md:block">
          <Button 
            variant={isChatOpen ? "secondary" : "ghost"} 
            size="icon" 
            title="Open Chat" 
            onClick={onChatToggle}
          >
            <MessageCircle className="h-5 w-5" />
          </Button>
        </div>

        <Button variant="ghost" size="icon" title="Reactions">
          <Smile className="h-5 w-5" />
        </Button>
        <ThemeToggle />
      </div>
    </>
  );
};

export default Dock; 
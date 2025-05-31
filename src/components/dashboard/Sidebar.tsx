'use client';

import Link from 'next/link';
import { Button } from "~/components/ui/button";
import { Home, ListTodo, Settings, User, HelpCircle, LogOut } from "lucide-react";
import ThemeToggle from '~/components/dashboard/ThemeToggle';
import { Separator } from "~/components/ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export default function Sidebar() {
  return (
    <aside className="hidden md:flex fixed h-screen w-16 border-r bg-background flex-col py-4 items-center">
      <div className="flex flex-col h-full items-center">
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
    </aside>
  );
} 
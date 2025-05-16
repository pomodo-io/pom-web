'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

type ThemeState = 'dark' | 'light';

const ThemeToggle: React.FC = () => {
  const theme = useTheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeState>('dark');
  const [displayedBgColor, setDisplayedBgColor] = useState<string | null>(null);
  const [displayedTextColor, setDisplayedTextColor] = useState<string | null>(null);

  useEffect(() => {
    setDisplayedBgColor(theme.getCssVar('--background'));
    setDisplayedTextColor(theme.getCssVar('--foreground'));
  }, []);

  const handleToggleTheme = () => {
    if (currentTheme === 'dark') {
      theme.setCssVar('--background', '#f0f0f0');
      theme.setCssVar('--foreground', '#333');
      setCurrentTheme('light');
      setDisplayedBgColor('#f0f0f0');
      setDisplayedTextColor('#333');
    } else {
      theme.setCssVar('--background', '#000');
      theme.setCssVar('--foreground', '#fff');
      setCurrentTheme('dark');
      setDisplayedBgColor('#000');
      setDisplayedTextColor('#fff');
    }
  };

  const bgColorToDisplay = displayedBgColor ?? 'Not set (Loading...)';
  const textColorToDisplay = displayedTextColor ?? 'Not set (Loading...)';

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">
        Welcome to your T3 Stack Homepage!
      </h1>
      <p className="mb-4">
        This page demonstrates theme switching using CSS variables and React Context.
      </p>

      <div className="mb-4 p-2 border border-gray-600 rounded">
          <p>CSS Variable --background: <span className="font-mono">{bgColorToDisplay}</span></p>
          <p>CSS Variable --foreground: <span className="font-mono">{textColorToDisplay}</span></p>
          <p>Current Theme State: <span className="font-semibold capitalize">{currentTheme}</span></p>
      </div>

      <button
        onClick={handleToggleTheme}
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition-colors"
      >
        Toggle Theme ({currentTheme === 'dark' ? 'Switch to Light' : 'Switch to Dark'})
      </button>
    </div>
  );
};

export default ThemeToggle;

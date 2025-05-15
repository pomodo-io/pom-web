"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

// Client-only theme button component
const ThemeButton = () => {
  // Initialize with default light theme
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (storedTheme) return storedTheme;
    
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
      return "dark";
    }
    return "light";
  });

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <button 
      onClick={toggleTheme}
      className="absolute top-4 right-4 p-2 rounded-full bg-secondary text-secondary-foreground"
      aria-label="Toggle theme"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
};

// Import theme button dynamically with no SSR
const ThemeToggle = dynamic(() => Promise.resolve(ThemeButton), { ssr: false });

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
      <ThemeToggle />
      
      <h1 className="text-4xl font-bold mb-8">
        Welcome to <span className="text-primary">Pomodo.io</span>
      </h1>
      
      <p className="text-center max-w-md mb-8">
        A simple, focused productivity app to help you stay on track with your tasks.
      </p>
      
      <button className="px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90">
        Get Started
      </button>
    </main>
  );
}

'use client';

import React, { createContext, useContext, type ReactNode } from 'react';

// Define the shape of the context value that our hook will return
interface ThemeContextType {
  getCssVar: (name: string) => string | null;
  setCssVar: (name: string, value: string) => void;
  // Add getters for your specific CSS variables for easier access
  readonly background: string | null;
  readonly foreground: string | null;
  readonly fontSans: string | null; // Example for your font variable
  // Add other theme variables from your CSS here if needed
}

// Create the context with an initial undefined value
// We use `ThemeContextType | undefined` because the context value is undefined
// before the provider is rendered.
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Custom hook to consume the context with type safety
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  // Throw an error if the hook is not used within the provider
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Props type for the ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

// Theme provider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

  // Function to get a CSS variable value (client-side only)
  const getCssVar = (name: string): string | null => {
    if (typeof window === 'undefined') return null; // Ensure this runs only in the browser
    // Get the computed style of the root element (html) or body
    const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    // Return the value or null if it's empty
    return value === '' ? null : value;
  };

  // Function to set a CSS variable value (client-side only)
  const setCssVar = (name: string, value: string): void => {
    if (typeof window === 'undefined') return; // Ensure this runs only in the browser
    // Set the property on the root element (html)
    document.documentElement.style.setProperty(name, value);
  };

  // You can expose specific theme variables using getters
  // Getters ensure you always read the *current* value from the DOM
  const themeVariables = {
    get background() { return getCssVar('--background'); },
    get foreground() { return getCssVar('--foreground'); },
    get fontSans() { return getCssVar('--font-sans'); }
    // Add other theme variables here following the same pattern
  };


  // The context value provided to consumers
  const contextValue: ThemeContextType = {
    getCssVar,
    setCssVar,
    ...themeVariables, // Spread the getter properties
    // You could add theme state here if implementing light/dark mode toggling
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

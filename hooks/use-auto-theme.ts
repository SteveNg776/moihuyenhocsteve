"use client";

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export function useAutoTheme() {
  const { setTheme, theme } = useTheme();
  const [isAuto, setIsAuto] = useState(true); // Default to true during SSR

  useEffect(() => {
    // Only access localStorage in the browser
    if (typeof window !== 'undefined') {
      const userPreference = localStorage.getItem('theme-preference');
      setIsAuto(!userPreference || userPreference === 'auto');

      if (!userPreference || userPreference === 'auto') {
        const updateTheme = () => {
          const now = new Date();
          const hour = now.getHours();
          
          // Light mode: 6:00 - 18:00
          // Dark mode: 18:00 - 6:00
          if (hour >= 6 && hour < 18) {
            setTheme('light');
          } else {
            setTheme('dark');
          }
        };

        // Update theme immediately
        updateTheme();

        // Set up interval to check every minute
        const interval = setInterval(updateTheme, 60000);

        return () => clearInterval(interval);
      }
    }
  }, [setTheme]);

  const setManualTheme = (newTheme: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-preference', newTheme);
    }
    setTheme(newTheme);
    setIsAuto(false);
  };

  const setAutoTheme = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme-preference', 'auto');
    }
    setIsAuto(true);
    const now = new Date();
    const hour = now.getHours();
    
    if (hour >= 6 && hour < 18) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return {
    theme,
    setManualTheme,
    setAutoTheme,
    isAuto
  };
}
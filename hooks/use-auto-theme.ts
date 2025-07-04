"use client";

import { useEffect } from 'react';
import { useTheme } from 'next-themes';

export function useAutoTheme() {
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    // Only apply auto theme if user hasn't manually set a preference
    const userPreference = localStorage.getItem('theme-preference');
    
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
  }, [setTheme]);

  const setManualTheme = (newTheme: string) => {
    localStorage.setItem('theme-preference', newTheme);
    setTheme(newTheme);
  };

  const setAutoTheme = () => {
    localStorage.setItem('theme-preference', 'auto');
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
    isAuto: !localStorage.getItem('theme-preference') || localStorage.getItem('theme-preference') === 'auto'
  };
}
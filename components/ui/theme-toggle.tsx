"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sun, Moon, Monitor, Palette } from 'lucide-react';

interface ThemeToggleProps {
  variant?: 'button' | 'dropdown';
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export function ThemeToggle({ 
  variant = 'dropdown', 
  size = 'md', 
  showLabel = false 
}: ThemeToggleProps) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'icon'}
        className="focus-ring"
        disabled
      >
        <div className="w-4 h-4 animate-pulse bg-gray-300 rounded" />
        <span className="sr-only">Đang tải chế độ giao diện</span>
      </Button>
    );
  }

  const getIcon = (currentTheme: string | undefined) => {
    switch (currentTheme) {
      case 'light':
        return <Sun className="w-4 h-4" />;
      case 'dark':
        return <Moon className="w-4 h-4" />;
      case 'system':
        return <Monitor className="w-4 h-4" />;
      default:
        return resolvedTheme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />;
    }
  };

  const getThemeLabel = (themeValue: string) => {
    switch (themeValue) {
      case 'light':
        return 'Sáng';
      case 'dark':
        return 'Tối';
      case 'system':
        return 'Hệ thống';
      default:
        return 'Không xác định';
    }
  };

  const toggleTheme = () => {
    if (resolvedTheme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  if (variant === 'button') {
    return (
      <Button
        variant="ghost"
        size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'icon'}
        onClick={toggleTheme}
        className="focus-ring transition-all duration-200 hover:scale-105"
        aria-label={`Chuyển sang chế độ ${resolvedTheme === 'dark' ? 'sáng' : 'tối'}`}
      >
        <div className="relative">
          {getIcon(resolvedTheme)}
          <span className="sr-only">
            Chế độ hiện tại: {getThemeLabel(resolvedTheme || 'system')}
          </span>
        </div>
        {showLabel && (
          <span className="ml-2 text-sm font-medium">
            {getThemeLabel(resolvedTheme || 'system')}
          </span>
        )}
      </Button>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size={size === 'sm' ? 'sm' : size === 'lg' ? 'lg' : 'icon'}
          className="focus-ring transition-all duration-200 hover:scale-105"
          aria-label="Chọn chế độ giao diện"
        >
          <div className="relative">
            {getIcon(theme)}
            <span className="sr-only">
              Chế độ hiện tại: {getThemeLabel(theme || 'system')}
            </span>
          </div>
          {showLabel && (
            <span className="ml-2 text-sm font-medium">
              {getThemeLabel(theme || 'system')}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="min-w-[160px] bg-card/95 backdrop-blur-sm border-border/50"
      >
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className="cursor-pointer focus:bg-accent focus:text-accent-foreground"
          aria-label="Chuyển sang chế độ sáng"
        >
          <Sun className="w-4 h-4 mr-2" />
          <span>Chế độ Sáng</span>
          {theme === 'light' && (
            <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className="cursor-pointer focus:bg-accent focus:text-accent-foreground"
          aria-label="Chuyển sang chế độ tối"
        >
          <Moon className="w-4 h-4 mr-2" />
          <span>Chế độ Tối</span>
          {theme === 'dark' && (
            <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className="cursor-pointer focus:bg-accent focus:text-accent-foreground"
          aria-label="Sử dụng cài đặt hệ thống"
        >
          <Monitor className="w-4 h-4 mr-2" />
          <span>Theo Hệ Thống</span>
          {theme === 'system' && (
            <div className="ml-auto w-2 h-2 bg-primary rounded-full" />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

// Hook for theme-aware styling
export function useThemeAwareStyles() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === 'dark' : false;

  return {
    isDark,
    mounted,
    themeClasses: {
      card: isDark 
        ? 'bg-slate-800/95 border-slate-700/50 text-slate-100' 
        : 'bg-white/95 border-white/30 text-gray-800',
      button: isDark
        ? 'bg-slate-700 hover:bg-slate-600 text-slate-100'
        : 'bg-white hover:bg-gray-50 text-gray-800',
      input: isDark
        ? 'bg-slate-800 border-slate-600 text-slate-100 placeholder:text-slate-400'
        : 'bg-white border-gray-300 text-gray-800 placeholder:text-gray-500',
      text: {
        primary: isDark ? 'text-slate-100' : 'text-gray-800',
        secondary: isDark ? 'text-slate-300' : 'text-gray-600',
        muted: isDark ? 'text-slate-400' : 'text-gray-500',
      }
    }
  };
}
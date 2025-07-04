"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuLabel
} from '@/components/ui/dropdown-menu';
import { Sun, Moon, Clock, Monitor } from 'lucide-react';
import { useAutoTheme } from '@/hooks/use-auto-theme';

export function ThemeToggle() {
  const { theme, setManualTheme, setAutoTheme, isAuto } = useAutoTheme();
  const [isOpen, setIsOpen] = useState(false);

  const getCurrentTime = () => {
    return new Date().toLocaleTimeString('vi-VN', { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const getThemeIcon = () => {
    if (isAuto) {
      return <Clock className="h-5 w-5" />;
    }
    return theme === 'dark' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />;
  };

  const getAutoModeStatus = () => {
    const hour = new Date().getHours();
    const isLightTime = hour >= 6 && hour < 18;
    return isLightTime ? 'Sáng (6:00-18:00)' : 'Tối (18:00-6:00)';
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
        >
          {getThemeIcon()}
          <span className="sr-only">Chuyển đổi chế độ hiển thị</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="text-sm font-medium">
          Chế độ hiển thị
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          onClick={() => {
            setAutoTheme();
            setIsOpen(false);
          }}
          className="cursor-pointer"
        >
          <Clock className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span>Tự động</span>
            <span className="text-xs text-muted-foreground">
              Hiện tại: {getAutoModeStatus()}
            </span>
          </div>
          {isAuto && <span className="ml-auto text-blue-600">✓</span>}
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <DropdownMenuItem 
          onClick={() => {
            setManualTheme('light');
            setIsOpen(false);
          }}
          className="cursor-pointer"
        >
          <Sun className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span>Sáng</span>
            <span className="text-xs text-muted-foreground">
              Luôn sử dụng giao diện sáng
            </span>
          </div>
          {!isAuto && theme === 'light' && <span className="ml-auto text-blue-600">✓</span>}
        </DropdownMenuItem>
        
        <DropdownMenuItem 
          onClick={() => {
            setManualTheme('dark');
            setIsOpen(false);
          }}
          className="cursor-pointer"
        >
          <Moon className="mr-2 h-4 w-4" />
          <div className="flex flex-col">
            <span>Tối</span>
            <span className="text-xs text-muted-foreground">
              Luôn sử dụng giao diện tối
            </span>
          </div>
          {!isAuto && theme === 'dark' && <span className="ml-auto text-blue-600">✓</span>}
        </DropdownMenuItem>
        
        <DropdownMenuSeparator />
        
        <div className="px-2 py-1.5 text-xs text-muted-foreground">
          Thời gian: {getCurrentTime()}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import Image from 'next/image';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    const navigationItems = [
    { name: 'Trang Chủ', href: '/' },
    {
      name: 'Kinh Dịch',
      href: '/i-ching',
      submenu: [
        { name: 'Dị Bốc Tiên Tri', href: '/i-ching/di-boc-tien-tri' },
        { name: 'Kinh Dịch Quẻ', href: '/i-ching/hexagram-oracle' }
      ]
    },
    {
      name: 'Tượng Số Học',
      href: '/date-calculator',
      submenu: [
        // THAY ĐỔI: Cập nhật các đường dẫn href
        { name: 'Sổ Tay Ngày', href: '/date-calculator/handbook' },
        { name: 'Tìm Ngày', href: '/date-calculator/number-input' },
        { name: 'Lịch Vạn Niên', href: '/date-calculator/calendar' }
      ]
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-card/80 backdrop-blur-md border-b border-border/20 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/zen-logo.png"
              alt="Huyền Học Logo"
              width={32}
              height={32}
            />
            <span className="font-bold text-xl text-foreground">
              Huyền Học
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-12">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <div
                      className="relative"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Link
                        href={item.href}
                        className="text-lg font-bold text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-lg relative group flex items-center space-x-1"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                      
                      {/* Dropdown Menu */}
                      <div className={`absolute top-full left-0 mt-2 w-56 bg-card/95 backdrop-blur-lg border border-border/30 rounded-lg shadow-lg transition-all duration-200 ${
                        openDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}>
                        <div className="py-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-3 text-foreground hover:text-primary hover:bg-accent/50 transition-all duration-200 font-medium"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-lg font-bold text-foreground hover:text-primary transition-all duration-300 hover:scale-110 hover:drop-shadow-lg relative group"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </nav>

          {/* Theme Toggle - Desktop */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle variant="dropdown" size="md" />
          </div>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Mở menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-card/95 backdrop-blur-lg">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu di động</SheetTitle>
                <SheetDescription className="sr-only">
                  Menu điều hướng cho thiết bị di động
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-6 mt-8">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xl font-bold text-foreground hover:text-primary transition-all duration-300 py-3 border-b border-border hover:border-primary block"
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg text-muted-foreground hover:text-primary transition-all duration-300 py-2 block"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              {/* Theme Toggle - Mobile */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Giao diện:</span>
                  <ThemeToggle variant="dropdown" size="sm" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Image from 'next/image'; // <-- Thêm dòng import này

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigationItems = [
    { name: 'Trang Chủ', href: '/' },
    { name: 'Kinh Dịch', href: '/i-ching' },
    { name: 'Bốc Quẻ', href: '/i-ching/hexagram-oracle' },
    { name: 'Thần Số Học', href: '/date-calculator' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            {/* THAY THẾ Ở ĐÂY */}
            <Image
              src="/zen-logo.png" // Đường dẫn tới tệp trong thư mục public
              alt="Huyền Học Logo"
              width={32}
              height={32}
            />
            <span className="font-bold text-xl text-gray-800">
              Huyền Học
            </span>
          </Link>

          {/* Desktop Navigation - Căn giữa và tạo hiệu ứng nổi bật */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-12">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Mở menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white/95 backdrop-blur-lg">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu di động</SheetTitle>
                <SheetDescription className="sr-only">
                  Menu điều hướng cho thiết bị di động
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-6 mt-8">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-all duration-300 py-3 border-b border-gray-200 hover:border-blue-300"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

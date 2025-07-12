"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
 // THAY ĐỔI: Sử dụng một state để lưu tên của menu đang mở
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navigationItems = [
    { name: 'Trang Chủ', href: '/' },
    { 
      name: 'Kinh Dịch', 
      href: '/i-ching',
      submenu: [
        { name: 'Dị Bốc Tiên Tri', href: '/i-ching' },
        { name: 'Bốc Quẻ Kinh Dịch', href: '/i-ching/hexagram-oracle' }
      ]
    },
    { 
      name: 'Thần Số Học', 
      href: '/date-calculator',
      submenu: [
        { name: 'Sổ Tay Ngày', href: '/date-calculator' },
        { name: 'Lịch Âm Dương', href: '/date-calculator?tab=calendar' },
        { name: 'Tìm Kiếm Số', href: '/date-calculator?tab=number-input' }
      ]
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-white/20">
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
            <span className="font-bold text-xl text-gray-800">
              Huyền Học
            </span>
          </Link>

          {/* Desktop Navigation - Căn giữa và tạo hiệu ứng nổi bật */}
          <nav className="hidden md:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-12">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <div
                      className="relative"
                      // THAY ĐỔI: Cập nhật onMouseEnter và onMouseLeave
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <Link
                        href={item.href}
                        className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg relative group flex items-center space-x-1"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                      </Link>
                      
              {/* Dropdown Menu */}
              {/* THAY ĐỔI: Điều kiện hiển thị dựa trên tên của menu */}
                      <div className={`absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg transition-all duration-200 ${
                        openDropdown === item.name ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}>
                        <div className="py-2">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-3 text-gray-800 hover:text-blue-600 hover:bg-blue-50/50 transition-all duration-200 font-medium"
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
                      className="text-lg font-bold text-gray-800 hover:text-blue-600 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg relative group"
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  )}
                </div>
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
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xl font-bold text-gray-800 hover:text-blue-600 transition-all duration-300 py-3 border-b border-gray-200 hover:border-blue-300 block"
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
                            className="text-lg text-gray-600 hover:text-blue-600 transition-all duration-300 py-2 block"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
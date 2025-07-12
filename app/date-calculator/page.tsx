"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Calendar, 
  Hash, 
  BookOpen
} from 'lucide-react';

export default function DateCalculatorLandingPage() {
  const tools = [
    {
      title: 'Sổ Tay Ngày',
      description: 'Phân tích chi tiết ngày được chọn với dữ liệu lịch âm, dương, can chi, và các thông tin liên quan.',
      href: '/date-calculator/handbook',
      icon: BookOpen,
      color: 'text-blue-500'
    },
    {
      title: 'Tìm Ngày',
      description: 'Tìm một ngày cụ thể trong năm bằng cách nhập số thứ tự hoặc số ngày còn lại của năm đó.',
      href: '/date-calculator/number-input',
      icon: Hash,
      color: 'text-purple-500'
    },
    {
      title: 'Lịch Vạn Niên',
      description: 'Duyệt lịch âm dương tương tác, xem thông tin chi tiết về ngày lễ, tiết khí và các sự kiện quan trọng.',
      href: '/date-calculator/calendar',
      icon: Calendar,
      color: 'text-amber-500'
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Công Cụ Thần Số Học
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Khám phá các khía cạnh khác nhau của lịch pháp và số học qua các công cụ chuyên biệt của chúng tôi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tools.map((tool) => (
            <Link key={tool.title} href={tool.href} passHref>
              <Card className="moonrise-card group hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col">
                <CardHeader>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-white/80 rounded-2xl">
                      <tool.icon className={`w-8 h-8 ${tool.color}`} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {tool.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-600 text-base leading-relaxed">
                    {tool.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

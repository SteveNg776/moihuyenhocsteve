"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BookOpen, 
  CalendarDays,
  ArrowRight
} from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: BookOpen,
      title: 'Kinh Dịch',
      description: 'Tham khảo Kinh Dịch cổ đại với trình tạo quẻ tương tác và giải thích toàn diện.',
      href: '/i-ching',
      color: 'text-blue-500'
    },
    {
      icon: CalendarDays,
      title: 'Thần Số Học',
      description: 'Công cụ lịch âm dương toàn diện để phân tích và chuyển đổi ngày tháng.',
      href: '/date-calculator',
      color: 'text-green-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Đã giảm khoảng đệm */}
      <section className="relative py-10 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 leading-tight">            Khám Phá Trí Tuệ Cổ Đại
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Khám Phá Kiến Thức "Out of the Box"
          </p>
        </div>
      </section>
      
      {/* Features Section - Đã giảm khoảng đệm */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((feature) => (
              <Card key={feature.title} className="moonrise-card group hover:scale-[1.02] transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="pb-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-white/80 rounded-2xl">
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                    <CardTitle className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {feature.description}
                  </p>
                  <Link href={feature.href}>
                    <Button variant="ghost" className="w-full justify-between text-lg py-6 hover:bg-blue-50 group">
                      Khám Phá
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
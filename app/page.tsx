"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  BookOpen, 
  CalendarDays,
  Eye,
  ChevronRight
} from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: BookOpen,
      title: 'Kinh Dịch Oracle',
      description: 'Tham khảo Kinh Dịch cổ đại của Trung Quốc với trình tạo quẻ tương tác và giải thích toàn diện.',
      href: '/i-ching',
      color: 'text-blue-500'
    },
    {
      icon: CalendarDays,
      title: 'Thần Số Học',
      description: 'Công cụ lịch âm dương toàn diện để phân tích và chuyển đổi ngày tháng với thông tin chi tiết.',
      href: '/date-calculator',
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - Simplified */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 mb-8 leading-tight">
            Khám Phá Trí Tuệ Cổ Đại
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Kết nối trí tuệ của Đông và Tây thông qua nghiên cứu toàn diện về các 
            truyền thống huyền bí đã định hình sự hiểu biết của con người trong hàng nghìn năm.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="moonrise-button text-lg px-8 py-4">
              <Eye className="w-5 h-5 mr-2" />
              Bắt Đầu Hành Trình
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-gray-300 hover:border-blue-500 hover:bg-blue-50">
              Khám Phá Truyền Thống
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section - Clean Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Truyền Thống Cổ Đại
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Khám phá Kinh Dịch, Phong Thủy và các truyền thống trí tuệ cổ đại của Trung Quốc
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card key={feature.title} className="moonrise-card group hover:scale-105 transition-all duration-300 border-0 shadow-lg">
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-white rounded-full shadow-md">
                      <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                  <Link href={feature.href}>
                    <Button variant="ghost" className="w-full justify-between hover:bg-blue-50 group">
                      Khám Phá Ngay
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Minimalist */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <Card className="moonrise-card text-center p-12 border-0 shadow-xl">
            <CardContent className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-800">
                Sẵn Sàng Bắt Đầu Hành Trình?
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Tham gia cùng hàng nghìn người tìm kiếm khám phá trí tuệ cổ đại thông qua các công cụ hiện đại.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="moonrise-button text-lg px-8 py-4">
                  <Eye className="w-5 h-5 mr-2" />
                  Bắt Đầu Miễn Phí
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-gray-300 hover:border-blue-500 hover:bg-blue-50">
                  Tìm Hiểu Thêm
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
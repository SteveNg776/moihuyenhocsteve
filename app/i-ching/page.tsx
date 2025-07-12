"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Sparkles
} from 'lucide-react';

export default function IChingPage() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Kinh Dịch
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Khám phá hai phương pháp luận giải Kinh Dịch: Dị Bốc Tiên Tri cho câu trả lời trực tiếp và 64 Quẻ Kinh Dịch để suy ngẫm sâu sắc.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dị Bốc Tiên Tri Card */}
          <Link href="/i-ching/di-boc-tien-tri" passHref>
            <Card className="mystical-card group hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Sparkles className="w-12 h-12 text-mystical-gold animate-float" />
                  <Badge variant="secondary" className="bg-mystical-gold/10 text-mystical-gold border-mystical-gold/30">
                    Trí Tuệ Đông Phương
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-800 group-hover:text-mystical-gold transition-colors text-center">
                  Dị Bốc Tiên Tri
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <CardDescription className="text-gray-600 mb-6 text-center">
                  Phương pháp bói toán cổ đại với 512 quẻ tiên tri. Sử dụng 8 cung Bát Quái để đưa ra lời tiên tri trực tiếp và chính xác.
                </CardDescription>
                <div className="mt-6 flex justify-center">
                  <ul className="space-y-2 text-left text-gray-700">
                    <li className="flex items-center">
                      <span className="h-2.5 w-2.5 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></span>
                      <span>512 quẻ tiên tri</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2.5 w-2.5 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></span>
                      <span>Trả lời trực tiếp vấn đề</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2.5 w-2.5 bg-yellow-400 rounded-full mr-3 flex-shrink-0"></span>
                      <span>64 lĩnh vực chuyên biệt</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Bốc Quẻ Kinh Dịch Card */}
          <Link href="/i-ching/hexagram-oracle" passHref>
            <Card className="moonrise-card group hover:scale-105 transition-all duration-300 cursor-pointer h-full flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <BookOpen className="w-12 h-12 text-blue-600 animate-float" />
                  <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-300">
                     Trí Tuệ Đông Phương
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors text-center">
                  64 Quẻ Kinh Dịch
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <CardDescription className="text-gray-600 mb-6 text-center">
                  Phương pháp bốc quẻ truyền thống với 64 quẻ Kinh Dịch. Khám phá trí tuệ cổ đại qua hệ thống quẻ hoàn chỉnh với giải thích chi tiết.
                </CardDescription>
                <div className="mt-6 flex justify-center">
                  <ul className="space-y-2 text-left text-gray-700">
                    <li className="flex items-center">
                      <span className="h-2.5 w-2.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                      <span>64 quẻ Kinh Dịch đầy đủ</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2.5 w-2.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                      <span>Giải thích 6 hào chi tiết</span>
                    </li>
                    <li className="flex items-center">
                      <span className="h-2.5 w-2.5 bg-blue-400 rounded-full mr-3 flex-shrink-0"></span>
                      <span>Cấu trúc Âm Dương trực quan</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}

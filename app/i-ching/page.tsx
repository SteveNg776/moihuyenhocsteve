"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen, 
  Sparkles
} from 'lucide-react';
import { Hexagram } from '@/lib/i-ching-data';
import { DiBocTienTri } from '@/components/i-ching/di-boc-tien-tri';

type ViewMode = 'intro' | 'di-boc';

export default function IChing() {
  const [viewMode, setViewMode] = useState<ViewMode>('intro');

  const resetReading = () => {
    setViewMode('intro');
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 border border-white/30 mb-6">
            <BookOpen className="w-4 h-4 text-blue-600 mr-2" />
            <span className="text-sm font-medium text-gray-700">Kinh Thay Đổi</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Kinh Dịch Oracle
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tham khảo Kinh Dịch cổ đại của Trung Quốc để được hướng dẫn và trí tuệ. 
            Sử dụng phương pháp Dị Bốc Tiên Tri để khám phá những hiểu biết sâu sắc.
          </p>
        </div>

        {/* Content */}
        {viewMode === 'intro' && (
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="moonrise-card">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600 font-semibold">
                  Về Kinh Dịch
                </CardTitle>
                <CardDescription className="text-lg">
                  Kinh Thay Đổi, một trong những kinh điển cổ nhất của Trung Quốc
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Kinh Dịch (易經) là một văn bản bói toán cổ đại của Trung Quốc có niên đại hơn 3.000 năm. 
                  Nó bao gồm 64 quẻ, mỗi quẻ được tạo thành từ sáu vạch có thể là đứt (âm) hoặc liền (dương). 
                  Những quẻ này đại diện cho các tình huống khác nhau trong cuộc sống và cung cấp hướng dẫn để hiểu về sự thay đổi và đưa ra quyết định.
                </p>
                <p className="text-gray-600">
                  Oracle hoạt động bằng cách tạo ra một quẻ thông qua các phương pháp bói toán cổ đại, 
                  sau đó được giải thích theo trí tuệ cổ đại có trong văn bản. 
                  Mỗi quẻ có nhiều lớp ý nghĩa, bao gồm giải thích chung, 
                  lời khuyên cụ thể cho các lĩnh vực khác nhau trong cuộc sống, và những hiểu biết bổ sung.
                </p>
              </CardContent>
            </Card>

            {/* Main Consultation Method */}
            <div className="flex justify-center">
              <Card className="mystical-card group hover:scale-105 transition-all duration-300 cursor-pointer max-w-md"
                    onClick={() => setViewMode('di-boc')}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Sparkles className="w-12 h-12 text-mystical-gold animate-float" />
                    <Badge variant="secondary" className="bg-mystical-gold/10 text-mystical-gold border-mystical-gold/30">
                      Cổ Đại
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-semibold text-gray-800 group-hover:text-mystical-gold transition-colors text-center">
                    Dị Bốc Tiên Tri
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 mb-6 text-center">
                    Phương pháp bói toán cổ đại với 512 quẻ tiên tri. 
                    Sử dụng 8 cung Bát Quái để đưa ra lời tiên tri trực tiếp và chính xác.
                  </CardDescription>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-mystical-gold rounded-full"></div>
                      <span>512 quẻ tiên tri cổ đại</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-mystical-gold rounded-full"></div>
                      <span>Kết quả trực tiếp, rõ ràng</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-mystical-gold rounded-full"></div>
                      <span>64 lĩnh vực chuyên biệt</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* About Dị Bốc Tiên Tri */}
            <Card className="mystical-card">
              <CardHeader>
                <CardTitle className="text-xl text-mystical-gold font-semibold">
                  Về Dị Bốc Tiên Tri
                </CardTitle>
                <CardDescription>
                  Phương pháp bói toán trực tiếp và chính xác từ tiên sinh Thiệu Khang Tiết
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  <strong>Dị Bốc Tiên Tri</strong> hay gọi đầy đủ là <strong>Tiên thiên Diệt số - Dị Bốc Tiên Tri</strong> 
                  là một cuốn sách cổ của tiên sinh Thiệu Khang Tiết ghi lại các chiêm nghiệm của quẻ Kinh Dịch 
                  đối với các sự việc cần hỏi.
                </p>
                <p className="text-gray-600">
                  Khác với việc luận giải quẻ dịch phức tạp và đòi hỏi nhiều thời gian nghiên cứu, 
                  Dị Bốc Tiên Tri đưa ra kết quả trực tiếp, ngắn gọn nhất cho các sự việc cần chiêm bốc. 
                  Phương pháp này "cầu ứng như thần, như hình với bóng", đáp ứng chính xác theo sự thắc mắc của người cầu bói.
                </p>
                <div className="bg-mystical-gold/5 p-4 rounded-lg border border-mystical-gold/20">
                  <h4 className="font-semibold text-mystical-gold mb-2">Đặc điểm nổi bật:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Trả lời trực tiếp, không úp mở hay mỉa mai</li>
                    <li>• 64 chủ đề được phân chia theo 8 cung Bát Quái</li>
                    <li>• Mỗi chủ đề có 8 quẻ tương ứng với 8 số từ 1-8</li>
                    <li>• Tổng cộng 512 quẻ tiên tri chi tiết</li>
                    <li>• Phù hợp cho mọi lĩnh vực trong cuộc sống</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {viewMode === 'di-boc' && (
          <div className="space-y-6">
            <Button
              onClick={resetReading}
              variant="ghost"
              className="hover:bg-blue-50"
            >
              ← Quay Lại Giới Thiệu
            </Button>
            <DiBocTienTri />
          </div>
        )}
      </div>
    </div>
  );
}
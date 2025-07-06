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
          
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Kinh Dịch
          </h1>
          
        </div>

        {/* Content */}
        {viewMode === 'intro' && (
          <div className="space-y-8">
            {/* Introduction */}
            <Card className="moonrise-card">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600 font-semibold">
                  Kinh Dịch: Công Cụ Minh Triết Của Người Việt
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Kinh Dịch, một hệ thống triết học và dự đoán cổ xưa, từ lâu đã không chỉ là một di sản văn hóa phương Đông mà còn là một công cụ quan trọng, gắn bó sâu sắc với đời sống và tư duy của người Việt. Vượt qua ý nghĩa của một văn bản bói toán, người Việt đã tiếp thu và vận dụng Kinh Dịch như một kim chỉ nam để hiểu quy luật vận động của vũ trụ, sự biến đổi của vạn vật và từ đó đưa ra những quyết định sáng suốt trong cuộc sống.
                </p>
                <p className="text-gray-600">
                 Cốt lõi của Kinh Dịch là 64 quẻ, được tạo thành từ sự kết hợp của các hào Âm (vạch đứt) và Dương (vạch liền). Mỗi quẻ tượng trưng cho một tình huống, một giai đoạn trong cuộc sống, bao hàm những lớp lang ý nghĩa sâu sắc về thời thế, sự vật và con người. Thông qua việc lập quẻ và diễn giải, người Việt tìm thấy trong Kinh Dịch những lời khuyên, những dự báo và sự chỉ dẫn để hài hòa với tự nhiên, cải thiện các mối quan hệ, và định hướng cho tương lai.
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
                <strong>Dị Bốc Tiên Tri</strong> hay gọi đầy đủ là <strong>Tiên thiên Diệt số - Dị Bốc Tiên Tri</strong> là một cuốn sách cổ của tiên sinh Thiệu Khang Tiết ghi lại các chiêm nghiệm của quẻ Kinh Dịch đối với các sự việc cần hỏi.
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
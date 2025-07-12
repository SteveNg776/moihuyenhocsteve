"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Sparkles, 
  Dices, 
  Search,
  BookOpen,
  Star,
  Lightbulb,
  Heart,
  Target,
  Zap,
  RefreshCw
} from 'lucide-react';
import { random_hexagram, getHexagramByNumber, searchHexagramByName, type HexagramData } from '@/lib/hexagram-data';

export function HexagramDivination() {
  const [currentHexagram, setCurrentHexagram] = useState<HexagramData | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<HexagramData[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [manualNumber, setManualNumber] = useState('');

  // Hàm bốc quẻ ngẫu nhiên
  const handleRandomDivination = async () => {
    setIsGenerating(true);
    
    // Simulate divination process with delay for better UX
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const hexagram = random_hexagram();
    setCurrentHexagram(hexagram);
    setIsGenerating(false);
  };

  // Hàm tìm kiếm quẻ
  const handleSearch = () => {
    if (searchQuery.trim()) {
      const results = searchHexagramByName(searchQuery);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  // Hàm chọn quẻ từ kết quả tìm kiếm
  const handleSelectHexagram = (hexagram: HexagramData) => {
    setCurrentHexagram(hexagram);
    setSearchResults([]);
    setSearchQuery('');
  };

  // Hàm nhập số quẻ trực tiếp
  const handleManualSelection = () => {
    const number = parseInt(manualNumber);
    if (number >= 1 && number <= 64) {
      const hexagram = getHexagramByNumber(number);
      if (hexagram) {
        setCurrentHexagram(hexagram);
        setManualNumber('');
      }
    }
  };

  // Hàm reset
  const handleReset = () => {
    setCurrentHexagram(null);
    setSearchQuery('');
    setSearchResults([]);
    setManualNumber('');
  };

  // Hàm render cấu trúc quẻ (6 hào)
  const renderHexagramStructure = (structure: string) => {
    return (
      <div className="flex flex-col items-center space-y-1 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        <div className="text-sm font-medium text-blue-700 mb-2">Cấu trúc 6 hào</div>
        {structure.split('').reverse().map((line, index) => (
          <div key={index} className="flex items-center space-x-2">
            <span className="text-xs text-gray-500 w-8">Hào {6-index}:</span>
            <div className="flex space-x-1">
              {line === '1' ? (
                // Yang line (solid)
                <div className="w-12 h-1 bg-blue-600 rounded"></div>
              ) : (
                // Yin line (broken)
                <>
                  <div className="w-5 h-1 bg-blue-600 rounded"></div>
                  <div className="w-1 h-1"></div>
                  <div className="w-5 h-1 bg-blue-600 rounded"></div>
                </>
              )}
            </div>
            <span className="text-xs text-gray-600">{line === '1' ? 'Dương' : 'Âm'}</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="mystical-card">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center space-x-2 text-mystical-gold">
            <Sparkles className="w-6 h-6" />
            <span className="text-2xl font-mystical">Bốc Quẻ Kinh Dịch</span>
          </CardTitle>
          <CardDescription className="text-lg">
            Khám phá trí tuệ cổ đại qua 64 quẻ Kinh Dịch
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-mystical-gold/5 p-4 rounded-lg border border-mystical-gold/20">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Kinh Dịch</strong> là một trong những kinh điển cổ xưa nhất của Trung Hoa, 
              chứa đựng 64 quẻ tượng trưng cho các tình huống và biến đổi trong cuộc sống. 
              Mỗi quẻ bao gồm 6 hào (Âm hoặc Dương) và mang một thông điệp sâu sắc về vũ trụ và nhân sinh.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Main Divination Tools */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Random Divination */}
        <Card className="mystical-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-mystical-gold">
              <Dices className="w-5 h-5" />
              <span>Bốc Quẻ Ngẫu Nhiên</span>
            </CardTitle>
            <CardDescription>
              Để vũ trụ chọn quẻ phù hợp cho bạn
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              onClick={handleRandomDivination}
              disabled={isGenerating}
              className="mystical-button w-full"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-mystical-dark-purple mr-2"></div>
                  Đang bốc quẻ...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Bốc Quẻ
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Search Hexagram */}
        <Card className="mystical-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-blue-600">
              <Search className="w-5 h-5" />
              <span>Tìm Kiếm Quẻ</span>
            </CardTitle>
            <CardDescription>
              Tìm quẻ theo tên hoặc từ khóa
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex space-x-2">
              <Input
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Nhập tên quẻ hoặc từ khóa..."
                className="bg-white/50 border-blue-300"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Button onClick={handleSearch} variant="outline" size="icon">
                <Search className="w-4 h-4" />
              </Button>
            </div>
            
            {searchResults.length > 0 && (
              <ScrollArea className="h-32 w-full border rounded-md p-2">
                {searchResults.map((hexagram) => (
                  <button
                    key={hexagram.number}
                    onClick={() => handleSelectHexagram(hexagram)}
                    className="w-full text-left p-2 hover:bg-blue-50 rounded text-sm"
                  >
                    <span className="font-medium">{hexagram.number}. {hexagram.name}</span>
                    <div className="text-xs text-gray-500 mt-1">
                      {hexagram.keywords.slice(0, 3).join(', ')}
                    </div>
                  </button>
                ))}
              </ScrollArea>
            )}
          </CardContent>
        </Card>

        {/* Manual Selection */}
        <Card className="mystical-card">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-green-600">
              <Target className="w-5 h-5" />
              <span>Chọn Quẻ Trực Tiếp</span>
            </CardTitle>
            <CardDescription>
              Nhập số quẻ từ 1 đến 64
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="space-y-2">
              <Label htmlFor="manual-number">Số quẻ (1-64)</Label>
              <Input
                id="manual-number"
                type="number"
                min="1"
                max="64"
                value={manualNumber}
                onChange={(e) => setManualNumber(e.target.value)}
                placeholder="Nhập số từ 1-64"
                className="bg-white/50 border-green-300"
              />
            </div>
            <Button
              onClick={handleManualSelection}
              disabled={!manualNumber || parseInt(manualNumber) < 1 || parseInt(manualNumber) > 64}
              variant="outline"
              className="w-full border-green-300 hover:bg-green-50"
            >
              <Target className="w-4 h-4 mr-2" />
              Chọn Quẻ
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Hexagram Display */}
      {currentHexagram && (
        <Card className="mystical-card border-mystical-gold/40">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2 text-mystical-gold">
                <Star className="w-6 h-6" />
                <span className="text-2xl">Quẻ {currentHexagram.name}</span>
              </CardTitle>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="bg-mystical-gold/10 text-mystical-gold text-lg px-3 py-1">
                  Số {currentHexagram.number}
                </Badge>
                <div className="text-3xl">{currentHexagram.symbol}</div>
                <Button onClick={handleReset} variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4 mr-1" />
                  Bốc Lại
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Main Information Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Hexagram Structure */}
              <div className="lg:col-span-1">
                {renderHexagramStructure(currentHexagram.structure)}
                
                {/* Additional Info */}
                <div className="mt-4 space-y-3">
                  <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                    <div className="text-sm font-medium text-purple-700 mb-1">Thông tin bổ sung</div>
                    <div className="space-y-1 text-sm">
                      <div><span className="font-medium">Ngoại quái:</span> {currentHexagram.upperTrigram}</div>
                      <div><span className="font-medium">Nội quái:</span> {currentHexagram.lowerTrigram}</div>
                      <div><span className="font-medium">Ngũ hành:</span> {currentHexagram.element}</div>
                      <div><span className="font-medium">Mùa:</span> {currentHexagram.season}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 space-y-4">
                {/* Keywords */}
                <div className="p-4 bg-gradient-to-br from-mystical-gold/5 to-yellow-50 rounded-lg border border-mystical-gold/20">
                  <h4 className="font-semibold text-mystical-gold mb-3 flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Từ khóa chính</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentHexagram.keywords.map((keyword, index) => (
                      <Badge key={index} variant="secondary" className="bg-mystical-gold/10 text-mystical-gold">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Meaning */}
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-700 mb-3 flex items-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Ý nghĩa tổng quát</span>
                  </h4>
                  <p className="text-blue-800 leading-relaxed">
                    {currentHexagram.meaning}
                  </p>
                </div>

                {/* Advice */}
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-3 flex items-center space-x-2">
                    <Lightbulb className="w-4 h-4" />
                    <span>Lời khuyên</span>
                  </h4>
                  <p className="text-green-800 leading-relaxed">
                    {currentHexagram.advice}
                  </p>
                </div>
              </div>
            </div>

            <Separator className="bg-mystical-gold/20" />

            {/* Six Lines Detailed Explanation */}
            <div className="space-y-4">
              <h4 className="font-semibold text-mystical-gold text-lg flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Giải thích 6 hào</span>
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentHexagram.lines.map((line, index) => (
                  <div key={index} className="p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg border border-orange-200">
                    <div className="font-medium text-orange-700 mb-2">
                      Hào {index + 1} ({currentHexagram.structure[index] === '1' ? 'Dương' : 'Âm'})
                    </div>
                    <p className="text-orange-800 text-sm leading-relaxed">
                      {line}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center text-sm text-muted-foreground bg-gray-50 p-4 rounded-lg">
              <p>
                Kết quả dựa trên hệ thống 64 quẻ Kinh Dịch cổ điển. 
                Hãy suy ngẫm và áp dụng một cách khôn ngoan vào cuộc sống.
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Instructions */}
      <Card className="mystical-card">
        <CardHeader>
          <CardTitle className="text-mystical-gold">Hướng Dẫn Sử Dụng</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-mystical-gold mb-2">Cách Bốc Quẻ</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <strong>Ngẫu nhiên:</strong> Để vũ trụ chọn quẻ phù hợp nhất</li>
                <li>• <strong>Tìm kiếm:</strong> Tìm quẻ theo tên hoặc từ khóa cụ thể</li>
                <li>• <strong>Chọn trực tiếp:</strong> Nhập số quẻ nếu bạn đã biết</li>
                <li>• Mỗi quẻ có 6 hào, mỗi hào mang một ý nghĩa riêng</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-mystical-gold mb-2">Cách Hiểu Quẻ</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <strong>Từ khóa:</strong> Nắm bắt tinh thần chính của quẻ</li>
                <li>• <strong>Ý nghĩa:</strong> Hiểu bối cảnh và tình huống</li>
                <li>• <strong>Lời khuyên:</strong> Hướng dẫn hành động cụ thể</li>
                <li>• <strong>6 hào:</strong> Phân tích chi tiết từng khía cạnh</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-mystical-gold mb-2">Cấu Trúc Quẻ</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• <strong>Hào Dương (—):</strong> Tích cực, mạnh mẽ, chủ động</li>
                <li>• <strong>Hào Âm (- -):</strong> Tiêu cực, mềm mại, thụ động</li>
                <li>• Đọc từ dưới lên trên (hào 1 đến hào 6)</li>
                <li>• Mỗi quẻ gồm 2 quái: nội quái (dưới) và ngoại quái (trên)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-mystical-gold mb-2">Lưu Ý Quan Trọng</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Kinh Dịch là công cụ hỗ trợ suy ngẫm, không phải định mệnh</li>
                <li>• Hãy kết hợp trí tuệ cổ đại với lý trí hiện đại</li>
                <li>• Mỗi quẻ có thể áp dụng cho nhiều tình huống khác nhau</li>
                <li>• Quan trọng nhất là sự hiểu biết và ứng dụng khôn ngoan</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
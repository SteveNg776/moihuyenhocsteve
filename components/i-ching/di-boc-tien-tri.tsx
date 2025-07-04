"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Separator } from '@/components/ui/separator';
import { 
  Sparkles, 
  Dices, 
  AlertCircle, 
  CheckCircle,
  BookOpen,
  Hash
} from 'lucide-react';

// Định nghĩa các chủ đề và bảng tra cứu 8 cung
const TOPICS = {
  'mangvan': { name: 'Mạng Vận', table: 'can', values: [116,267,374,445,553,638,782,821] },
  'khocu': { name: 'Khoa Cử', table: 'can', values: [118,262,371,446,557,634,785,823] },
  'cautai': { name: 'Cầu Tài', table: 'ly', values: [131,286,327,414,565,673,748,852] },
  'honnhan': { name: 'Hôn Nhân', table: 'kham', values: [165,273,348,452,531,686,727,814] },
  'congdanh': { name: 'Công Danh', table: 'can', values: [161,276,347,454,535,683,728,812] },
  'giadao': { name: 'Gia Đạo', table: 'khon', values: [182,221,316,467,574,645,753,838] }
};

// Bảng tra cứu Bát Quái
const BAGUA_NAMES = {
  1: 'Càn', 2: 'Đoài', 3: 'Ly', 4: 'Chấn',
  5: 'Tốn', 6: 'Khảm', 7: 'Cấn', 8: 'Khôn'
};

// Kết quả giải thích mẫu
const SAMPLE_INTERPRETATIONS = {
  'mangvan': 'cho thấy vận mệnh đang trong giai đoạn chuyển biến tích cực. Đây là thời điểm thuận lợi để phát triển bản thân và nắm bắt cơ hội.',
  'khocu': 'báo hiệu kết quả thi cử khả quan. Sự chăm chỉ và kiên trì sẽ được đền đáp xứng đáng.',
  'cautai': 'thể hiện tài lộc đang dần cải thiện. Cần kiên nhẫn và có kế hoạch tài chính hợp lý.',
  'honnhan': 'dự báo tình duyên thuận lợi. Đây là thời điểm tốt để củng cố mối quan hệ hoặc tìm kiếm tình yêu đích thực.',
  'congdanh': 'cho thấy sự nghiệp đang trên đà phát triển. Cần duy trì sự chuyên nghiệp và tích cực trong công việc.',
  'giadao': 'thể hiện gia đình hòa thuận, hạnh phúc. Các mối quan hệ trong gia đình sẽ ngày càng bền chặt.'
};

interface DiBocResult {
  topic: string;
  number: number;
  hexagramNumber: string;
  hexagramName: string;
  interpretation: string;
}

export function DiBocTienTri() {
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [numberMethod, setNumberMethod] = useState<'random' | 'manual'>('random');
  const [manualNumber, setManualNumber] = useState<string>('');
  const [result, setResult] = useState<DiBocResult | null>(null);
  const [error, setError] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  // Validate input số
  const validateNumber = (num: string): boolean => {
    const number = parseInt(num);
    return !isNaN(number) && number >= 1 && number <= 8;
  };

  // Tính toán số quẻ và tên quái
  const calculateHexagram = (topicKey: string, number: number): { hexagramNumber: string, hexagramName: string } => {
    const topic = TOPICS[topicKey as keyof typeof TOPICS];
    if (!topic) return { hexagramNumber: '', hexagramName: '' };

    // Lấy số quẻ từ bảng tra cứu (index = number - 1)
    const hexagramValue = topic.values[number - 1];
    const hexagramNumber = hexagramValue.toString();
    
    // Tách 2 số cuối để xác định nội quái và ngoại quái
    const lastTwoDigits = hexagramNumber.slice(-2);
    const innerTrigram = parseInt(lastTwoDigits.charAt(1)); // Nội quái
    const outerTrigram = parseInt(lastTwoDigits.charAt(0)); // Ngoại quái
    
    // Tạo tên quẻ từ ngoại quái và nội quái
    const outerName = BAGUA_NAMES[outerTrigram as keyof typeof BAGUA_NAMES] || '';
    const innerName = BAGUA_NAMES[innerTrigram as keyof typeof BAGUA_NAMES] || '';
    const hexagramName = `${outerName} ${innerName}`;

    return { hexagramNumber, hexagramName };
  };

  // Xử lý gieo quẻ
  const handleGenerateHexagram = async () => {
    try {
      setError('');
      setIsGenerating(true);

      // Validate chủ đề
      if (!selectedTopic) {
        setError('Vui lòng chọn chủ đề cần hỏi bói.');
        return;
      }

      let finalNumber: number;

      // Xác định số sử dụng
      if (numberMethod === 'random') {
        finalNumber = Math.floor(Math.random() * 8) + 1;
      } else {
        if (!manualNumber.trim()) {
          setError('Vui lòng nhập số từ 1 đến 8.');
          return;
        }
        
        if (!validateNumber(manualNumber)) {
          setError('Số phải từ 1 đến 8. Vui lòng nhập lại.');
          return;
        }
        
        finalNumber = parseInt(manualNumber);
      }

      // Simulate loading time for better UX
      await new Promise(resolve => setTimeout(resolve, 800));

      // Tính toán kết quả
      const { hexagramNumber, hexagramName } = calculateHexagram(selectedTopic, finalNumber);
      const topicName = TOPICS[selectedTopic as keyof typeof TOPICS].name;
      const interpretation = SAMPLE_INTERPRETATIONS[selectedTopic as keyof typeof SAMPLE_INTERPRETATIONS];

      const newResult: DiBocResult = {
        topic: topicName,
        number: finalNumber,
        hexagramNumber,
        hexagramName,
        interpretation: `Kết quả gieo quẻ ${hexagramNumber} trong lĩnh vực ${topicName}: Quẻ ${hexagramName} ${interpretation}`
      };

      setResult(newResult);
    } catch (err) {
      setError('Có lỗi xảy ra khi gieo quẻ. Vui lòng thử lại.');
      console.error('Error generating hexagram:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  // Reset form
  const handleReset = () => {
    setResult(null);
    setError('');
    setSelectedTopic('');
    setManualNumber('');
    setNumberMethod('random');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="mystical-card">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center space-x-2 text-mystical-gold">
            <Sparkles className="w-6 h-6" />
            <span className="text-2xl font-mystical">Dị Bốc Tiên Tri</span>
          </CardTitle>
          <CardDescription className="text-lg">
            Tiên Thiên Diệt Số - 512 Quẻ Tiên Tri Cổ Đại
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-mystical-gold/5 p-4 rounded-lg border border-mystical-gold/20">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong>Dị Bốc Tiên Tri</strong> là một cuốn sách cổ của tiên sinh Thiệu Khang Tiết, 
              ghi lại các chiêm nghiệm của quẻ Kinh Dịch đối với các sự việc cần hỏi. 
              Đây là phương pháp bói toán trực tiếp, cho kết quả rõ ràng và chính xác.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Main Form */}
      <Card className="mystical-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-mystical-gold">
            <Dices className="w-5 h-5" />
            <span>Gieo Quẻ Tiên Tri</span>
          </CardTitle>
          <CardDescription>
            Chọn chủ đề và phương pháp để nhận lời tiên tri từ 8 cung Bát Quái
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Error Alert */}
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          {/* Topic Selection */}
          <div className="space-y-2">
            <Label htmlFor="topic-select" className="text-mystical-gold font-medium">
              Chọn chủ đề cần hỏi bói
            </Label>
            <Select value={selectedTopic} onValueChange={setSelectedTopic}>
              <SelectTrigger className="bg-white/50 border-mystical-gold/30 focus:border-mystical-gold">
                <SelectValue placeholder="-- Chọn loại câu hỏi --" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(TOPICS).map(([key, topic]) => (
                  <SelectItem key={key} value={key}>
                    {topic.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Number Method Selection */}
          <div className="space-y-4">
            <Label className="text-mystical-gold font-medium">Chọn phương pháp lấy số</Label>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="random"
                  name="numberMethod"
                  value="random"
                  checked={numberMethod === 'random'}
                  onChange={(e) => setNumberMethod(e.target.value as 'random')}
                  className="text-mystical-gold focus:ring-mystical-gold"
                />
                <Label htmlFor="random" className="cursor-pointer">
                  Số ngẫu nhiên (hệ thống sinh quẻ)
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="manual"
                  name="numberMethod"
                  value="manual"
                  checked={numberMethod === 'manual'}
                  onChange={(e) => setNumberMethod(e.target.value as 'manual')}
                  className="text-mystical-gold focus:ring-mystical-gold"
                />
                <Label htmlFor="manual" className="cursor-pointer">
                  Nhập số (từ 1 đến 8)
                </Label>
              </div>
            </div>

            {/* Manual Number Input */}
            {numberMethod === 'manual' && (
              <div className="space-y-2">
                <Label htmlFor="manual-number" className="text-sm text-muted-foreground">
                  Nhập số từ 1 đến 8
                </Label>
                <Input
                  id="manual-number"
                  type="number"
                  min="1"
                  max="8"
                  value={manualNumber}
                  onChange={(e) => setManualNumber(e.target.value)}
                  placeholder="Nhập số từ 1-8"
                  className="bg-white/50 border-mystical-gold/30 focus:border-mystical-gold"
                />
              </div>
            )}
          </div>

          {/* Generate Button */}
          <div className="flex space-x-3">
            <Button
              onClick={handleGenerateHexagram}
              disabled={isGenerating || !selectedTopic}
              className="mystical-button flex-1"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-mystical-dark-purple mr-2"></div>
                  Đang gieo quẻ...
                </>
              ) : (
                <>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Gieo Quẻ
                </>
              )}
            </Button>
            
            {result && (
              <Button
                onClick={handleReset}
                variant="outline"
                size="lg"
                className="border-mystical-gold/30 hover:border-mystical-gold"
              >
                Gieo Lại
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Results Display */}
      {result && (
        <Card className="mystical-card border-mystical-gold/40">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center space-x-2 text-mystical-gold">
                <CheckCircle className="w-5 h-5" />
                <span>Kết Quả Tiên Tri</span>
              </CardTitle>
              <div className="flex space-x-2">
                <Badge variant="secondary" className="bg-mystical-gold/10 text-mystical-gold">
                  {result.topic}
                </Badge>
                <Badge variant="outline" className="border-mystical-gold/30">
                  Số {result.number}
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Hexagram Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-mystical-gold/5 rounded-lg border border-mystical-gold/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Hash className="w-4 h-4 text-mystical-gold" />
                  <span className="font-semibold text-mystical-gold">Số Quẻ</span>
                </div>
                <div className="text-2xl font-bold text-mystical-dark-purple">
                  {result.hexagramNumber}
                </div>
              </div>
              
              <div className="p-4 bg-mystical-gold/5 rounded-lg border border-mystical-gold/20">
                <div className="flex items-center space-x-2 mb-2">
                  <BookOpen className="w-4 h-4 text-mystical-gold" />
                  <span className="font-semibold text-mystical-gold">Tên Quái</span>
                </div>
                <div className="text-xl font-bold text-mystical-dark-purple">
                  {result.hexagramName}
                </div>
              </div>
            </div>

            <Separator className="bg-mystical-gold/20" />

            {/* Interpretation */}
            <div className="p-6 bg-gradient-to-br from-mystical-gold/5 to-yellow-50 rounded-lg border border-mystical-gold/20">
              <h4 className="font-semibold text-mystical-gold mb-3 flex items-center space-x-2">
                <Sparkles className="w-4 h-4" />
                <span>Lời Tiên Tri</span>
              </h4>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {result.interpretation}
              </p>
            </div>

            {/* Additional Info */}
            <div className="text-center text-sm text-muted-foreground">
              <p>
                Kết quả dựa trên phương pháp Dị Bốc Tiên Tri của tiên sinh Thiệu Khang Tiết
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
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-mystical-gold mb-2">Cách Thức Hoạt Động</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Chọn chủ đề cần hỏi bói từ 6 lĩnh vực chính</li>
                <li>• Lựa chọn số ngẫu nhiên hoặc tự nhập số từ 1-8</li>
                <li>• Hệ thống sẽ tra cứu trong 8 bảng cung Bát Quái</li>
                <li>• Nhận kết quả với số quẻ và lời giải thích</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-mystical-gold mb-2">8 Cung Bát Quái</h4>
              <div className="grid grid-cols-4 gap-2 text-xs">
                {Object.entries(BAGUA_NAMES).map(([num, name]) => (
                  <div key={num} className="text-center p-2 bg-mystical-gold/5 rounded border border-mystical-gold/20">
                    <div className="font-bold text-mystical-gold">{num}</div>
                    <div className="text-muted-foreground">{name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
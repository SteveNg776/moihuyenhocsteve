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
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Sparkles, 
  Dices, 
  AlertCircle, 
  CheckCircle,
  BookOpen,
  Hash,
  ChevronDown,
  ChevronUp,
  FileText,
  Lightbulb
} from 'lucide-react';
import { getPredictionById, hasPrediction, getPredictionStats, type DibocPrediction } from '@/lib/diboc-data';

// ... (phần còn lại của component không đổi)

            {/* Prediction Content */}
            {result.hasValidPrediction && result.prediction ? (
              <div className="space-y-4">
                {/* Tên quẻ từ JSON */}
                <div className="p-4 bg-gradient-to-br from-mystical-gold/5 to-yellow-50 rounded-lg border border-mystical-gold/20">
                  <h4 className="font-semibold text-mystical-gold mb-2 flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Tên Quẻ</span>
                  </h4>
                  <p className="text-mystical-dark-purple font-medium text-lg">
                    {result.prediction.title}
                  </p>
                </div>

                {/* Lời quẻ gốc */}
                <div className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-700 mb-3 flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>Lời Quẻ</span>
                  </h4>
                  <ScrollArea className="max-h-32">
                    <p className="text-blue-800 leading-relaxed whitespace-pre-wrap">
                      {result.prediction.original}
                    </p>
                  </ScrollArea>
                </div>

                {/* Dịch nghĩa */}
                <div className="p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-3 flex items-center space-x-2">
                    <Lightbulb className="w-4 h-4" />
                    <span>Dịch Nghĩa</span>
                  </h4>
                  <ScrollArea className="max-h-40">
                    <p className="text-green-800 leading-relaxed whitespace-pre-wrap">
                      {result.prediction.interpretation}
                    </p>
                  </ScrollArea>
                </div>
              </div>
            ) : (
              <div className="p-6 bg-gray-50 rounded-lg border border-gray-200 text-center">
                <AlertCircle className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                <h4 className="font-semibold text-gray-600 mb-2">Không có dữ liệu tiên tri</h4>
                <p className="text-gray-500 text-sm">
                  Số quẻ {result.hexagramNumber} chưa có dữ liệu tiên tri trong hệ thống. 
                  Vui lòng thử gieo quẻ khác hoặc liên hệ để cập nhật dữ liệu.
                </p>
              </div>
            )}

            {/* Additional Info */}
            <div className="text-center text-sm text-muted-foreground">
              <p>
                Kết quả dựa trên phương pháp Dị Bốc Tiên Tri của tiên sinh Thiệu Khang Tiết
                {result.hasValidPrediction && (
                  <span className="block mt-1 text-green-600">
                    ✓ Dữ liệu tiên tri được truy xuất từ kho dữ liệu cổ điển
                  </span>
                )}
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
                <li>• Chọn chủ đề cần hỏi bói từ 64 lĩnh vực được phân chia theo 8 cung</li>
                <li>• Lựa chọn số ngẫu nhiên hoặc tự nhập số từ 1-8</li>
                <li>• Hệ thống sẽ tra cứu trong bảng cung Bát Quái tương ứng</li>
                <li>• Nhận kết quả với số quẻ và lời tiên tri chi tiết từ dữ liệu cổ điển</li>
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

          {/* Topic Groups Summary with Detailed Information */}
          <div className="mt-6">
            <h4 className="font-semibold text-mystical-gold mb-3">64 Chủ Đề Theo 8 Cung Chi Tiết</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              {Object.entries(TOPIC_GROUPS).map(([groupName, groupData]) => (
                <div key={groupName} className={`p-3 rounded border ${groupData.color}`}>
                  <button
                    onClick={() => toggleGroup(groupName)}
                    className="w-full text-left"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold">{groupName}</div>
                      {expandedGroups.has(groupName) ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                    <div className="text-xs opacity-75 mb-2">
                      {groupData.description}
                    </div>
                    <div className="text-xs opacity-60">
                      {groupData.topics.length} chủ đề
                    </div>
                  </button>
                  
                  {expandedGroups.has(groupName) && (
                    <div className="mt-3 pt-3 border-t border-current/20">
                      <div className="space-y-1">
                        {groupData.topics.map((topicKey) => (
                          <div key={topicKey} className="text-xs opacity-75 leading-relaxed">
                            • {TOPICS[topicKey as keyof typeof TOPICS].name}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

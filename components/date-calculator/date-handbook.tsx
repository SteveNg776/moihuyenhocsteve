"use client";

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Calendar, CalendarDays, Clock, TrendingUp, Sparkles, Star, AlertCircle, CheckCircle, Sun, Moon, Leaf } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { getDateInfo, formatDate, validateSolarDate, type DateInfo } from '@/lib/lunar-calendar-utils';
import { getCurrentSolarTerm, formatSolarTermPeriod, SEASON_COLORS, SEASON_NAMES, type SolarTermPeriod } from '@/lib/solar-terms-data';

export function DateHandbook() {
  const { t } = useLanguage();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateError, setDateError] = useState<string | null>(null);
  const [conversionSuccess, setConversionSuccess] = useState<string | null>(null);

  const dateInfo: DateInfo = useMemo(() => {
    try {
      const info = getDateInfo(currentDate);
      setDateError(null);
      return info;
    } catch (error) {
      console.error('Error getting date info:', error);
      setDateError('Có lỗi xảy ra khi tính toán thông tin ngày. Vui lòng thử lại.');
      // Return fallback data
      return {
        solarDate: currentDate,
        lunarDate: 'Không xác định',
        lunarDateDetailed: {
          day: 0,
          month: 0,
          year: 0,
          monthName: 'Không xác định',
          isLeapMonth: false
        },
        canChi: {
          year: 'Không xác định',
          month: 'Không xác định',
          day: 'Không xác định'
        },
        dayOfYear: 0,
        daysRemaining: 0,
        weekNumber: 0,
        yearProgress: 0,
        lunarDayOfYear: 0,
        lunarDaysRemaining: 0,
        lunarWeekNumber: 0,
        lunarYearProgress: 0,
        festivals: [],
        solarTerms: [],
        zodiacAnimal: 'Không xác định',
        constellation: 'Không xác định'
      } as DateInfo;
    }
  }, [currentDate]);

  const currentSolarTerm: SolarTermPeriod | null = useMemo(() => {
    try {
      return getCurrentSolarTerm(currentDate);
    } catch (error) {
      console.error('Error getting current solar term:', error);
      return null;
    }
  }, [currentDate]);

  const handleTodayClick = () => {
    const today = new Date();
    setCurrentDate(today);
    setConversionSuccess('Đã chuyển về ngày hôm nay.');
    setTimeout(() => setConversionSuccess(null), 3000);
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const newDate = new Date(e.target.value);
      const validation = validateSolarDate(newDate);
      
      if (!validation.isValid) {
        setDateError(validation.error || 'Ngày không hợp lệ');
        return;
      }
      
      setCurrentDate(newDate);
      setDateError(null);
      setConversionSuccess('Đã cập nhật thông tin ngày thành công.');
      setTimeout(() => setConversionSuccess(null), 3000);
    } catch (error) {
      setDateError('Định dạng ngày không hợp lệ. Vui lòng chọn ngày từ lịch.');
    }
  };

  return (
    <div className="space-y-6">
      {/* Error and Success Alerts */}
      {dateError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{dateError}</AlertDescription>
        </Alert>
      )}
      
      {conversionSuccess && (
        <Alert className="border-green-200 bg-green-50">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800">{conversionSuccess}</AlertDescription>
        </Alert>
      )}

      {/* Enhanced Date Selection - Matching Reference Design */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <div className="relative">
          <input
            type="date"
            value={currentDate.toISOString().split('T')[0]}
            onChange={handleDateChange}
            className="w-full sm:w-auto px-4 py-3 text-lg font-medium bg-white border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
            style={{ minWidth: '200px' }}
          />
        </div>
        <Button
          onClick={handleTodayClick}
          className="px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
        >
          Hôm Nay
        </Button>
      </div>

      {/* Parallel Calendar Display - Solar and Lunar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Solar Calendar Card */}
        <Card className="moonrise-card border-l-4 border-l-orange-400">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-3 text-orange-600">
              <div className="p-2 bg-orange-100 rounded-full">
                <Sun className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">Dương Lịch</div>
                <div className="text-sm font-normal text-gray-600">Solar Calendar</div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Main Date Display */}
            <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl border border-orange-200">
              <div className="text-3xl font-bold text-orange-700 mb-2">
                {formatDate(currentDate, 'vi')}
              </div>
              <div className="text-lg text-orange-600">
                {currentDate.toLocaleDateString('vi-VN', { weekday: 'long' })}
              </div>
            </div>

            {/* Solar Calendar Statistics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-white/70 rounded-lg border border-orange-200">
                <div className="text-xs text-gray-600 mb-1">Ngày thứ</div>
                <div className="text-2xl font-bold text-orange-600">{dateInfo.dayOfYear}</div>
                <div className="text-xs text-gray-500">trong năm</div>
              </div>
              <div className="text-center p-3 bg-white/70 rounded-lg border border-orange-200">
                <div className="text-xs text-gray-600 mb-1">Còn lại</div>
                <div className="text-2xl font-bold text-orange-600">{dateInfo.daysRemaining}</div>
                <div className="text-xs text-gray-500">ngày</div>
              </div>
              <div className="text-center p-3 bg-white/70 rounded-lg border border-orange-200">
                <div className="text-xs text-gray-600 mb-1">Tuần thứ</div>
                <div className="text-2xl font-bold text-orange-600">{dateInfo.weekNumber}</div>
                <div className="text-xs text-gray-500">của năm</div>
              </div>
              <div className="text-center p-3 bg-white/70 rounded-lg border border-orange-200">
                <div className="text-xs text-gray-600 mb-1">Tiến độ</div>
                <div className="text-2xl font-bold text-orange-600">{dateInfo.yearProgress}%</div>
                <div className="text-xs text-gray-500">năm</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-600">
                <span>Tiến độ năm {currentDate.getFullYear()}</span>
                <span>{dateInfo.yearProgress}%</span>
              </div>
              <div className="w-full bg-orange-100 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-orange-400 to-yellow-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${dateInfo.yearProgress}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Lunar Calendar Card */}
        <Card className="moonrise-card border-l-4 border-l-blue-400">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center space-x-3 text-blue-600">
              <div className="p-2 bg-blue-100 rounded-full">
                <Moon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">Âm Lịch</div>
                <div className="text-sm font-normal text-gray-600">Lunar Calendar</div>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Main Lunar Date Display */}
            <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
              <div className="text-lg font-bold text-blue-700 mb-2">
                {dateInfo.lunarDate}
              </div>
              <div className="text-sm text-blue-600">
                Tháng {dateInfo.lunarDateDetailed.monthName}
              </div>
              {dateInfo.lunarDateDetailed.isLeapMonth && (
                <Badge variant="secondary" className="mt-2 bg-blue-100 text-blue-700">
                  Tháng nhuận
                </Badge>
              )}
            </div>

            {/* Lunar Calendar Statistics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="text-center p-3 bg-white/70 rounded-lg border border-blue-200">
                <div className="text-xs text-gray-600 mb-1">Ngày thứ</div>
                <div className="text-2xl font-bold text-blue-600">{dateInfo.lunarDayOfYear}</div>
                <div className="text-xs text-gray-500">âm lịch</div>
              </div>
              <div className="text-center p-3 bg-white/70 rounded-lg border border-blue-200">
                <div className="text-xs text-gray-600 mb-1">Còn lại</div>
                <div className="text-2xl font-bold text-blue-600">{dateInfo.lunarDaysRemaining}</div>
                <div className="text-xs text-gray-500">ngày</div>
              </div>
              <div className="text-center p-3 bg-white/70 rounded-lg border border-blue-200">
                <div className="text-xs text-gray-600 mb-1">Tuần thứ</div>
                <div className="text-2xl font-bold text-blue-600">{dateInfo.lunarWeekNumber}</div>
                <div className="text-xs text-gray-500">âm lịch</div>
              </div>
              <div className="text-center p-3 bg-white/70 rounded-lg border border-blue-200">
                <div className="text-xs text-gray-600 mb-1">Tiến độ</div>
                <div className="text-2xl font-bold text-blue-600">{dateInfo.lunarYearProgress}%</div>
                <div className="text-xs text-gray-500">năm</div>
              </div>
            </div>

            {/* Lunar Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs text-gray-600">
                <span>Tiến độ năm âm lịch {dateInfo.lunarDateDetailed.year}</span>
                <span>{dateInfo.lunarYearProgress}%</span>
              </div>
              <div className="w-full bg-blue-100 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-indigo-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${dateInfo.lunarYearProgress}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Can Chi and Additional Information */}
      <Card className="moonrise-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2 text-purple-600">
            <Star className="w-5 h-5" />
            <span>Thông Tin Bổ Sung</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Can Chi Information */}
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-purple-700 mb-3">Can Chi</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Năm:</span>
                  <span className="font-medium text-purple-600">{dateInfo.canChi.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tháng:</span>
                  <span className="font-medium text-purple-600">{dateInfo.canChi.month}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ngày:</span>
                  <span className="font-medium text-purple-600">{dateInfo.canChi.day}</span>
                </div>
              </div>
            </div>

            {/* Zodiac Information */}
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <h4 className="font-semibold text-green-700 mb-3">Cung Hoàng Đạo</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Con giáp:</span>
                  <span className="font-medium text-green-600">{dateInfo.zodiacAnimal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cung:</span>
                  <span className="font-medium text-green-600">{dateInfo.constellation}</span>
                </div>
              </div>
            </div>

            {/* Solar Terms Information */}
            <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
              <h4 className="font-semibold text-teal-700 mb-3 flex items-center space-x-2">
                <Leaf className="w-4 h-4" />
                <span>Tiết Khí</span>
              </h4>
              {currentSolarTerm ? (
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-teal-600">{currentSolarTerm.solarTerm.name}</span>
                    <Badge 
                      variant="secondary" 
                      className={`text-xs ${SEASON_COLORS[currentSolarTerm.solarTerm.season]}`}
                    >
                      {SEASON_NAMES[currentSolarTerm.solarTerm.season]}
                    </Badge>
                  </div>
                  <div className="text-xs text-gray-600 mb-1">
                    {currentSolarTerm.solarTerm.description}
                  </div>
                  <div className="text-xs text-gray-500">
                    <strong>Thời gian:</strong><br />
                    {formatSolarTermPeriod(currentSolarTerm)}
                  </div>
                </div>
              ) : (
                <div className="text-xs text-gray-500">Không xác định được tiết khí</div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
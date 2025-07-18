"use client";

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { ChevronLeft, ChevronRight, Calendar, AlertCircle, Info } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { getMonthCalendar, getLunarDateInfo, formatDate } from '@/lib/lunar-calendar-utils';
import { Holiday, HOLIDAY_TYPE_COLORS, HOLIDAY_TYPE_NAMES } from '@/lib/holidays-data';

export function CalendarView() {
  const { t } = useLanguage();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [calendarError, setCalendarError] = useState<string | null>(null);

  const monthNames = ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4', 'Tháng 5', 'Tháng 6',
                     'Tháng 7', 'Tháng 8', 'Tháng 9', 'Tháng 10', 'Tháng 11', 'Tháng 12'];

  const dayNames = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN'];

  const calendar = useMemo(() => {
    try {
      setCalendarError(null);
      return getMonthCalendar(currentYear, currentMonth);
    } catch (error) {
      console.error('Error generating calendar:', error);
      setCalendarError('Có lỗi xảy ra khi tạo lịch. Vui lòng thử lại.');
      return [];
    }
  }, [currentYear, currentMonth]);

  const handlePreviousMonth = () => {
    try {
      if (currentMonth === 0) {
        setCurrentMonth(11);
        setCurrentYear(currentYear - 1);
      } else {
        setCurrentMonth(currentMonth - 1);
      }
      setCalendarError(null);
    } catch (error) {
      setCalendarError('Không thể chuyển về tháng trước.');
    }
  };

  const handleNextMonth = () => {
    try {
      if (currentMonth === 11) {
        setCurrentMonth(0);
        setCurrentYear(currentYear + 1);
      } else {
        setCurrentMonth(currentMonth + 1);
      }
      setCalendarError(null);
    } catch (error) {
      setCalendarError('Không thể chuyển đến tháng sau.');
    }
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentMonth;
  };

  const isWeekend = (date: Date) => {
    const day = date.getDay();
    return day === 0 || day === 6; // Sunday or Saturday
  };

  const handleDateSelect = (date: Date) => {
    try {
      setSelectedDate(date);
      setCalendarError(null);
    } catch (error) {
      setCalendarError('Không thể chọn ngày này.');
    }
  };

  const getLunarDayDisplay = (date: Date) => {
    try {
      const lunarInfo = getLunarDateInfo(date);
      const lunarDay = lunarInfo.lunarDateDetailed.day;
      const lunarMonth = lunarInfo.lunarDateDetailed.month;
      
      // Show lunar day number for better readability
      if (lunarDay === 1) {
        return `${lunarDay}/${lunarMonth}`;
      }
      return lunarDay.toString();
    } catch (error) {
      return '';
    }
  };

  const getDateFestivals = (date: Date): Holiday[] => {
    try {
      const lunarInfo = getLunarDateInfo(date);
      return lunarInfo.festivals;
    } catch (error) {
      return [];
    }
  };

  const getHolidayDisplayText = (holidays: Holiday[]): string => {
    if (holidays.length === 0) return '';
    const firstHoliday = holidays[0];
    return firstHoliday.name.length > 10 ? firstHoliday.name.substring(0, 10) + '...' : firstHoliday.name;
  };

  const getHolidayTooltip = (holidays: Holiday[]): string => {
    if (holidays.length === 0) return '';
    return holidays.map(h => `${HOLIDAY_TYPE_NAMES[h.type]}: ${h.name}`).join('\n');
  };

  const getHolidayBorderColor = (holidays: Holiday[]): string => {
    if (holidays.length === 0) return '';
    
    // Priority: official > traditional > international > cultural
    const priorityOrder: Holiday['type'][] = ['official', 'traditional', 'international', 'cultural'];
    
    for (const type of priorityOrder) {
      if (holidays.some(h => h.type === type)) {
        switch (type) {
          case 'official': return 'ring-2 ring-red-500';
          case 'traditional': return 'ring-2 ring-green-500';
          case 'international': return 'ring-2 ring-blue-500';
          case 'cultural': return 'ring-2 ring-purple-500';
          default: return '';
        }
      }
    }
    return '';
  };

  return (
    <div className="space-y-4">
      {/* Error Alert */}
      {calendarError && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{calendarError}</AlertDescription>
        </Alert>
      )}

      {/* Calendar Card */}
      <Card className="moonrise-card">
        {/* THAY ĐỔI: Sử dụng flex-col cho mobile và flex-row cho desktop */}
        <CardHeader className="pb-3 flex flex-col md:flex-row md:items-center md:justify-between">
            <CardTitle className="flex items-center space-x-2 text-blue-600 mb-4 md:mb-0">
              <Calendar className="w-5 h-5" />
              <span className="text-xl font-bold">{monthNames[currentMonth]} - {currentYear}</span>
            </CardTitle>
            
            {/* THAY ĐỔI: Bọc các nút điều khiển trong div để dễ dàng sắp xếp */}
            <div className="flex items-center justify-between md:justify-end space-x-2">
              {/* THAY ĐỔI: Thêm flex-grow cho Select để chiếm không gian */}
              <div className="flex-grow md:flex-grow-0">
                <Select value={currentMonth.toString()} onValueChange={(value) => setCurrentMonth(parseInt(value))}>
                  <SelectTrigger className="w-full md:w-28 bg-white/50 border-white/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {monthNames.map((month, index) => (
                      <SelectItem key={index} value={index.toString()}>
                        {month}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex-grow md:flex-grow-0">
                <Select value={currentYear.toString()} onValueChange={(value) => setCurrentYear(parseInt(value))}>
                  <SelectTrigger className="w-full md:w-20 bg-white/50 border-white/20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 21 }, (_, i) => {
                      const year = new Date().getFullYear() - 10 + i;
                      return (
                        <SelectItem key={year} value={year.toString()}>
                          {year}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
              </div>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handlePreviousMonth}
                className="border-white/30 hover:border-blue-500"
                disabled={!!calendarError}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleNextMonth}
                className="border-white/30 hover:border-blue-500"
                disabled={!!calendarError}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
        </CardHeader>
        
        <CardContent className="pt-0">
          <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            {/* Day Headers */}
            {/* THAY ĐỔI: Giảm padding cho mobile */}
            <div className="grid grid-cols-7 bg-green-600">
              {dayNames.map((day, index) => (
                <div key={day} className={`text-center text-sm font-bold py-2 px-1 md:py-3 md:px-2 text-white border-r border-green-500 last:border-r-0 ${
                  index === 6 ? 'text-red-200' : '' // Highlight Sunday
                }`}>
                  {day}
                </div>
              ))}
            </div>
            
            {/* Calendar Grid */}
            {calendar.length > 0 ? (
              <div>
                {calendar.map((week, weekIndex) => (
                  <div key={weekIndex} className="grid grid-cols-7 border-b border-gray-200 last:border-b-0">
                    {week.map((date, dayIndex) => {
                      const lunarDay = getLunarDayDisplay(date);
                      const festivals = getDateFestivals(date);
                      const hasFestival = festivals.length > 0;
                      const isCurrentMonthDate = isCurrentMonth(date);
                      const isTodayDate = isToday(date);
                      const isSelectedDate = isSelected(date);
                      const isWeekendDate = isWeekend(date);
                      const holidayBorderColor = getHolidayBorderColor(festivals);
                      
                      return (
                        <button
                          key={dayIndex}
                          onClick={() => handleDateSelect(date)}
                          // THAY ĐỔI: Điều chỉnh chiều cao và padding
                          className={`
                            relative min-h-[70px] md:min-h-[85px] p-1 md:p-2 text-left transition-all duration-200 hover:bg-blue-50 border-r border-gray-200 last:border-r-0
                            ${!isCurrentMonthDate ? 'bg-gray-50' : 'bg-white'}
                            ${isTodayDate ? 'bg-yellow-100' : ''}
                            ${isSelectedDate ? 'bg-blue-100' : ''}
                            ${holidayBorderColor}
                          `}
                          title={getHolidayTooltip(festivals)}
                        >
                          <div className="flex flex-col h-full justify-between">
                            {/* Top section: Solar date */}
                            <div className="flex justify-between items-start">
                              {/* THAY ĐỔI: Điều chỉnh kích thước chữ */}
                              <div className={`text-base md:text-lg font-bold ${
                                !isCurrentMonthDate ? 'text-gray-400' : 
                                isWeekendDate ? 'text-red-600' : 
                                'text-gray-800'
                              }`}>
                                {date.getDate()}
                              </div>
                              
                              {/* Today indicator */}
                              {isTodayDate && (
                                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                              )}
                              
                              {/* Selected indicator */}
                              {isSelectedDate && (
                                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              )}
                            </div>
                            
                            {/* Middle section: Lunar date */}
                            {isCurrentMonthDate && lunarDay && (
                              <div className="text-xs text-green-600 font-medium bg-green-50 px-1 py-0.5 rounded text-center">
                                {lunarDay}
                              </div>
                            )}
                            
                            {/* Bottom section: Festival/Holiday */}
                            {hasFestival && isCurrentMonthDate && (
                              <div className="mt-1">
                                <div className="text-xs text-red-600 font-medium leading-tight bg-red-50 px-1 py-0.5 rounded">
                                  {getHolidayDisplayText(festivals)}
                                </div>
                              </div>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Không thể hiển thị lịch</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Selected Date Information */}
      {selectedDate && (
        <Card className="moonrise-card">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center space-x-2 text-purple-600">
              <Info className="w-5 h-5" />
              <span>Thông Tin Ngày Đã Chọn</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-4">
              {/* Date Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-700 mb-2">Dương Lịch</h4>
                  <p className="text-blue-600 text-lg font-medium">{formatDate(selectedDate, 'vi')}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    {selectedDate.toLocaleDateString('vi-VN', { weekday: 'long' })}
                  </p>
                </div>
                
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-green-700 mb-2">Âm Lịch</h4>
                  <p className="text-green-600 text-lg font-medium">{getLunarDateInfo(selectedDate).lunarDate}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Tháng {getLunarDateInfo(selectedDate).lunarDateDetailed.monthName}
                  </p>
                </div>
              </div>

              {/* Holidays and Festivals */}
              {getDateFestivals(selectedDate).length > 0 && (
                <div className="p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-700 mb-3">Ngày Lễ & Lễ Hội</h4>
                  <div className="space-y-3">
                    {getDateFestivals(selectedDate).map((holiday, index) => (
                      <div key={index} className="bg-white p-3 rounded-lg border border-red-100">
                        <div className="flex items-start justify-between mb-2">
                          <h5 className="font-medium text-gray-800">{holiday.name}</h5>
                          <Badge 
                            variant="secondary" 
                            className={`text-xs ${HOLIDAY_TYPE_COLORS[holiday.type]}`}
                          >
                            {HOLIDAY_TYPE_NAMES[holiday.type]}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">{holiday.description}</p>
                        {holiday.country && (
                          <div className="mt-2">
                            <Badge variant="outline" className="text-xs">
                              {holiday.country === 'VN' ? 'Việt Nam' : holiday.country === 'US' ? 'Hoa Kỳ' : holiday.country}
                            </Badge>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Enhanced Legend */}
      <Card className="moonrise-card">
        <CardContent className="p-4">
          <h4 className="font-semibold text-gray-700 mb-3">Chú Thích</h4>
          {/* THAY ĐỔI: Sử dụng grid để bố cục linh hoạt hơn */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div className="space-y-2">
              <h5 className="font-medium text-gray-600">Ngày đặc biệt</h5>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-100 rounded flex items-center justify-center relative">
                  <div className="w-1 h-1 bg-yellow-500 rounded-full absolute top-0.5 right-0.5"></div>
                </div>
                <span>Hôm nay</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-100 rounded relative">
                  <div className="w-1 h-1 bg-blue-500 rounded-full absolute top-0.5 left-0.5"></div>
                </div>
                <span>Ngày đã chọn</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <h5 className="font-medium text-gray-600">Loại ngày</h5>
              <div className="flex items-center space-x-2">
                <span className="text-red-600 font-bold">●</span>
                <span>Ngày cuối tuần</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-xs text-green-600 font-medium bg-green-50 px-1 py-0.5 rounded">15</div>
                <span>Ngày âm lịch</span>
              </div>
            </div>
            
            <div className="space-y-2 col-span-2 sm:col-span-1">
              <h5 className="font-medium text-gray-600">Ngày lễ</h5>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-red-500 rounded"></div>
                <span>Lễ chính thức</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-green-500 rounded"></div>
                <span>Lễ truyền thống</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-blue-500 rounded"></div>
                <span>Lễ quốc tế</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

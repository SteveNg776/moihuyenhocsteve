"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { validateSolarDate } from '@/lib/lunar-calendar-utils';

export function DateHandbook() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateError, setDateError] = useState<string | null>(null);
  const [conversionSuccess, setConversionSuccess] = useState<string | null>(null);

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
    </div>
  );
}
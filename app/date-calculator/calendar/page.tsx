"use client";

import React from 'react';
import { CalendarView } from '@/components/date-calculator/calendar-view';
import { Calendar } from 'lucide-react';

export default function CalendarViewPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <Calendar className="w-10 h-10 text-amber-500" />
            Lịch Vạn Niên
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Xem lịch âm dương tương tác với thông tin chi tiết về ngày lễ và tiết khí.
          </p>
        </div>
        <CalendarView />
      </div>
    </div>
  );
}

"use client";

import React from 'react';
import { DateHandbook } from '@/components/date-calculator/date-handbook';
import { BookOpen } from 'lucide-react';
import { BackButton } from '@/components/layout/back-button';

export default function DateHandbookPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <BackButton href="/date-calculator" text="Quay lại" />
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <BookOpen className="w-10 h-10 text-blue-500" />
            Sổ Tay Ngày
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Xem thông tin chi tiết cho bất kỳ ngày nào với dữ liệu lịch âm và dương.
          </p>
        </div>
        <DateHandbook />
      </div>
    </div>
  );
}

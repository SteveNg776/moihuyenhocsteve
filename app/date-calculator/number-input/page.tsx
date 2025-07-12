"use client";

import React from 'react';
import { NumberInput } from '@/components/date-calculator/number-input';
import { Hash } from 'lucide-react';
import { BackButton } from '@/components/layout/back-button';

export default function NumberInputPage() {
  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <BackButton href="/date-calculator" text="Quay lại" />
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <Hash className="w-10 h-10 text-purple-500" />
            Tìm Ngày
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tìm ngày bằng cách nhập số thứ tự ngày hoặc số ngày còn lại trong năm.
          </p>
        </div>
        <NumberInput />
      </div>
    </div>
  );
}

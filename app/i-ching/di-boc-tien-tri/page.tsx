"use client";

import React from 'react';
import { DiBocTienTri } from '@/components/i-ching/di-boc-tien-tri';

export default function DiBocTienTriPage() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Dị Bốc Tiên Tri
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá 512 quẻ tiên tri cổ đại của Thiệu Khang Tiết để nhận lời giải đáp trực tiếp.
          </p>
        </div>

        {/* Main Component */}
        <DiBocTienTri />
      </div>
    </div>
  );
}
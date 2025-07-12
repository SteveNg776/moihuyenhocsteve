"use client";

import React from 'react';
import { HexagramDivination } from '@/components/i-ching/hexagram-divination';

export default function HexagramOraclePage() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            64 Quẻ Kinh Dịch
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Khám phá trí tuệ Đông Phương qua 64 quẻ Kinh Dịch
          </p>
        </div>

        {/* Main Component */}
        <HexagramDivination />
      </div>
    </div>
  );
}
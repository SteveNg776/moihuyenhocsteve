"use client";

import React from 'react';
import { DiBocTienTri } from '@/components/i-ching/di-boc-tien-tri';
import { BackButton } from '@/components/layout/back-button';

export default function DiBocTienTriPage() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <BackButton href="/i-ching" text="Quay lại" />
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Dị Bốc Tiên Tri
          </h1>
        </div>

        {/* Main Component */}
        <DiBocTienTri />
      </div>
    </div>
  );
}

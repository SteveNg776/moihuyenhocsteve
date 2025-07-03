import React from 'react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-sm border-t border-gray-200/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Brand - Simplified */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">∞</span>
              </div>
              <span className="font-bold text-xl text-gray-800">
                Trí Tuệ Cổ Đại
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Khám phá trí tuệ cổ đại và kiến thức bí truyền thông qua các công cụ tương tác hiện đại.
            </p>
          </div>

          {/* Quick Links - Clean */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Liên Kết</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/i-ching" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Kinh Dịch Oracle
                </Link>
              </li>
              <li>
                <Link href="/date-calculator" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Thần Số Học
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-200/50" />
        
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            © 2025 Trí Tuệ Cổ Đại. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  );
}
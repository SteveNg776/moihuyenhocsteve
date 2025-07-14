import React from 'react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-white/50 backdrop-blur-sm border-t border-white/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cột 1 & 2: Brand và Mô tả */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl text-gray-800">
                Huyền Học
              </span>
            </Link>
            <p className="text-gray-600 max-w-md">
              Khám phá trí tuệ Đông Phương thông qua các công cụ tương tác và hướng dẫn toàn diện. 
            </p>
          </div>

          {/* Cột 3: Quick Links */}
          <div>
            <h3 className="text-gray-800 font-semibold mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/i-ching" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Kinh Dịch
                </Link>
              </li>
              <li>
                <Link href="/date-calculator" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Tượng Số Học
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Về Chúng Tôi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Liên Hệ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm mt-2 md:mt-0 text-center">
               "Sự đồng bộ là một món quà của thực tại dành cho ai thấy mà tin" <br /> Carl Jung
           </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  href: string;
  text: string;
}

export function BackButton({ href, text }: BackButtonProps) {
  return (
    <div className="mb-6">
      <Link href={href} passHref>
        <Button variant="ghost" className="text-gray-600 hover:text-blue-600 hover:bg-blue-50/70 px-2">
          <ArrowLeft className="w-4 h-4 mr-2" />
          {text}
        </Button>
      </Link>
    </div>
  );
}

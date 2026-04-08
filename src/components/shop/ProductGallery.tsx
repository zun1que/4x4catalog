'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: Array<{ url: string; alt?: string }>;
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-gray-300">
        <svg className="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden">
        <Image
          src={images[selectedIndex].url}
          alt={images[selectedIndex].alt || name}
          width={500}
          height={500}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={`                   w-20 h-20 rounded-md overflow-hidden border-2 transition-all cursor-pointer
                    ${selectedIndex === index
                      ? 'border-blue-500'
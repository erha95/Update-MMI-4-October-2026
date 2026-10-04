import React from 'react';
import { BinusCenterLogo } from './BinusCenterLogo';

interface BinusMmiLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const BinusMmiLogo: React.FC<BinusMmiLogoProps> = ({
  className = '',
  size = 'md'
}) => {
  const binusHeight = size === 'sm' ? 26 : size === 'lg' ? 44 : 34;
  const mmiBoxSize =
    size === 'sm'
      ? 'w-6 h-6 rounded-[5px]'
      : size === 'lg'
      ? 'w-10 h-10 rounded-[8px]'
      : 'w-8 h-8 rounded-[7px]';
  const mmiTextSize =
    size === 'sm'
      ? 'text-sm'
      : size === 'lg'
      ? 'text-xl sm:text-2xl'
      : 'text-base sm:text-lg';
  const dividerHeight = size === 'sm' ? 'h-6' : size === 'lg' ? 'h-10' : 'h-8';

  return (
    <div className={`inline-flex items-center gap-2 sm:gap-3 select-none ${className}`}>
      {/* 1. Official BINUS CENTER Vector Logo with Orb, Crosshairs, Pixel Grid, and Text */}
      <BinusCenterLogo height={binusHeight} />

      {/* 2. Divider Vertical Line */}
      <div className={`${dividerHeight} w-[1.5px] bg-[#CBD5E1] mx-0.5 sm:mx-1`} />

      {/* 3. MMI Brand Lockup */}
      <div className="flex items-center gap-1.5 sm:gap-2">
        {/* Lime Rounded Box with MMI Staircase Icon */}
        <div
          className={`${mmiBoxSize} bg-[#B6FF1A] flex items-center justify-center p-1 border border-[#0F2415]/20 shadow-xs shrink-0`}
        >
          <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 17 L5 12 L9.5 12 L9.5 7 L14 7 L14 15 L19 15 L19 9"
              stroke="#0F2415"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Text MMI */}
        <span className={`font-sans font-black tracking-tight text-[#0F2415] ${mmiTextSize}`}>
          MMI
        </span>
      </div>
    </div>
  );
};

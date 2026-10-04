import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  className?: string;
  showIcon?: boolean;
  variant?: 'light' | 'dark';
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  className = '',
  showIcon = true,
  variant = 'light'
}) => {
  const { language, setLanguage } = useLanguage();

  const isDark = variant === 'dark';

  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full p-0.5 transition-all ${
        isDark
          ? 'bg-[#FAFFEF]/10 border border-[#FAFFEF]/20'
          : 'bg-[#0F2415]/5 border border-[#0F2415]/15'
      } ${className}`}
      role="group"
      aria-label="Pilih Bahasa / Select Language"
    >
      {showIcon && (
        <span className="pl-1.5 pr-0.5">
          <Globe
            className={`w-3.5 h-3.5 ${
              isDark ? 'text-[#B6FF1A]' : 'text-[#4FAE58]'
            }`}
          />
        </span>
      )}

      <button
        type="button"
        onClick={() => setLanguage('id')}
        aria-pressed={language === 'id'}
        aria-label="Bahasa Indonesia"
        className={`px-2 py-0.5 text-xs font-mono font-bold rounded-full transition-all cursor-pointer ${
          language === 'id'
            ? isDark
              ? 'bg-[#B6FF1A] text-[#0F2415] shadow-xs'
              : 'bg-[#0F2415] text-[#B6FF1A] shadow-xs'
            : isDark
            ? 'text-[#FAFFEF]/70 hover:text-[#FAFFEF]'
            : 'text-[#4B5C4E] hover:text-[#0F2415]'
        }`}
      >
        ID
      </button>

      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        aria-label="English"
        className={`px-2 py-0.5 text-xs font-mono font-bold rounded-full transition-all cursor-pointer ${
          language === 'en'
            ? isDark
              ? 'bg-[#B6FF1A] text-[#0F2415] shadow-xs'
              : 'bg-[#0F2415] text-[#B6FF1A] shadow-xs'
            : isDark
            ? 'text-[#FAFFEF]/70 hover:text-[#FAFFEF]'
            : 'text-[#4B5C4E] hover:text-[#0F2415]'
        }`}
      >
        EN
      </button>
    </div>
  );
};

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FaqSection: React.FC = () => {
  const { t, isEn } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(t.faq.items[0]?.id || null);
  const [selectedCat, setSelectedCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const categories = [
    { id: 'all', label: t.faq.categories.all },
    { id: 'sertifikasi', label: t.faq.categories.sertifikasi },
    { id: 'asesmen', label: t.faq.categories.asesmen },
    { id: 'pembelajaran', label: t.faq.categories.pembelajaran },
    { id: 'umum', label: t.faq.categories.umum }
  ];

  const filteredFaqs = t.faq.items.filter((item) => {
    const matchesCat = selectedCat === 'all' || item.category === selectedCat;
    const matchesSearch =
      searchQuery.trim() === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 md:py-28 border-t border-[#0F2415]/10 bg-[#FAFFEF]">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 md:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-8">
          <span className="font-mono text-[0.72rem] tracking-wider uppercase text-[#4B5C4E] font-medium block">
            {t.faq.badge}
          </span>
          <h2 className="font-display font-semibold text-2xl sm:text-3xl md:text-4xl text-[#0F2415] mt-2">
            {t.faq.title}
          </h2>
          <p className="text-sm sm:text-base text-[#4B5C4E] mt-2">
            {t.faq.desc}
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCat(c.id)}
                className={`px-3 py-1.5 rounded-[3px] text-xs font-semibold transition-colors cursor-pointer ${
                  selectedCat === c.id
                    ? 'bg-[#0F2415] text-[#B6FF1A]'
                    : 'bg-white text-[#4B5C4E] hover:bg-[#EEFFD1] border border-[#0F2415]/10'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-[#4B5C4E] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={t.faq.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white rounded-[3px] border border-[#0F2415]/15 focus:outline-none focus:border-[#0F2415]"
            />
          </div>
        </div>

        {/* Faq List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-[6px] border border-[#0F2415]/15 overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-[#FAFFEF] transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-[#4FAE58] shrink-0" />
                    <span className="font-display font-semibold text-sm sm:text-base text-[#0F2415]">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-[#4B5C4E] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#0F2415]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4B5C4E] leading-relaxed border-t border-[#0F2415]/5 bg-[#FAFFEF]/40">
                    <p className="max-w-3xl">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-10 bg-white rounded-[6px] border border-[#0F2415]/10 text-[#4B5C4E] text-xs sm:text-sm">
              {isEn
                ? `No questions found matching "${searchQuery}".`
                : `Tidak ada pertanyaan yang sesuai dengan kata kunci "${searchQuery}".`}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

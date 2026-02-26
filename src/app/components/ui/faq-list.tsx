'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQList = ({ items }: { items: FAQItem[] }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className="reveal-item mb-4 w-full bg-grey rounded-[8px] overflow-hidden border border-[#dddddd] last:mb-0"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left"
            >
              <span className="font-normal leading-snug text-lg">
                {item.question}
              </span>
              <div
                className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-primary text-white transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                <ChevronDown size={24} />
              </div>
            </button>

            <div
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mx-6 md:mx-8 border-t border-black/5" />
              <div className="p-6 md:p-8 leading-relaxed text-paragraph">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
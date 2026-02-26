"use client";
import React, { ReactNode, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SubHeadingProps {
  title: ReactNode;
  text: ReactNode;
  as?: 'h2' | 'h3' | 'h4';
  className?: string;
  titleClassName?: string;
  titleAnimationType?: 'chars' | 'words' | 'lines';
  textAnimationType?: 'chars' | 'words' | 'lines';
}

const SubHeading: React.FC<SubHeadingProps> = ({ 
  title, 
  text, 
  as: Tag = 'h2',
  className = '',
  titleClassName = '',
  titleAnimationType = 'words',
  textAnimationType = 'lines'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const titleEl = containerRef.current.querySelector('.reveal-title');
    const textEl = containerRef.current.querySelector('.reveal-text');

    if (!titleEl || !textEl) return;

    const splitTitle = new SplitType(titleEl as HTMLElement, { types: titleAnimationType });
    const splitText = new SplitType(textEl as HTMLElement, { types: textAnimationType });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      }
    });

    tl.from(splitTitle[titleAnimationType], {
      y: "100%",
      opacity: 0,
      duration: 1,
      stagger: 0.03,
      ease: "power3.out"
    })
    .from(splitText[textAnimationType], {
      y: 20,
      opacity: 0,
      duration: .8,
      stagger: 0.01,
      ease: "power2.out"
    }, "-=0.5");

    return () => {
      splitTitle.revert();
      splitText.revert();
    };
  }, { scope: containerRef, dependencies: [title, text] });

  return (
    <div ref={containerRef} className={`w-full flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-16 ${className}`}>
      <div className="w-full xl:max-w-[65%] text-center xl:text-left overflow-hidden">
        <Tag className={`m-0 reveal-title ${titleClassName}`}>
          {title}
        </Tag>
      </div>

      <div className="w-full xl:max-w-[35%] text-center xl:text-right overflow-hidden flex justify-center xl:justify-end">
        <p className="m-0 reveal-text text-balance">
          {text}
        </p>
      </div>
    </div>
  );
};

export default SubHeading;
"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitType from 'split-type';

interface RevealTextProps {
  children: React.ReactNode;
  type?: 'chars' | 'words' | 'lines';
  delay?: number;
  duration?: number;
  stagger?: number;
}

export const RevealText = ({ 
  children, 
  type = 'words', 
  delay = 0, 
  duration = 1, 
  stagger = 0.05 
}: RevealTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, { 
      types: type,
      tagName: 'span'
    });

    const target = split[type];
    if (!target) return;

    gsap.fromTo(target, 
      { 
        y: "110%",
        opacity: 0 
      },
      {
        y: "0%",
        opacity: 1,
        duration: duration,
        delay: delay,
        stagger: stagger,
        ease: "power4.out",
        overwrite: "auto", 
        force3D: true, 
      }
    );

    return () => {
      split.revert();
    };
  }, { scope: textRef });

  return (
    <div ref={textRef} className="overflow-hidden block translate-z-0 pb-2">
      {children}
    </div>
  );
};
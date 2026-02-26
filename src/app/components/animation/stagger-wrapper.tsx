'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function StaggerWrapper({ 
  children, 
  delay = 0, 
  staggerTime = 0.15, 
  startPoint = "95%" 
}: any) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!container.current) return;

    const targets = container.current.querySelectorAll('.reveal-item');
    if (targets.length === 0) return;

    ScrollTrigger.batch(targets, {
      start: `top ${startPoint}`,
      once: true,
      onEnter: (batch) => {
        gsap.fromTo(batch, 
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: staggerTime,
            ease: "power2.out",
            delay: delay,
            overwrite: true
          }
        );
      }
    });
  }, { scope: container });

  return (
    <div ref={container} className="w-full">
      {children}
    </div>
  );
}
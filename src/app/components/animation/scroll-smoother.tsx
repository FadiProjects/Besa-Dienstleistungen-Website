'use client';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useRef } from "react";
import { usePathname } from "next/navigation";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
}

export default function ScrollSmootherWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const wrapper = useRef<HTMLDivElement | null>(null);
  const content = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useGSAP(() => {
    const smoother = ScrollSmoother.create({
      wrapper: wrapper.current,
      content: content.current,
      smooth: 1.5,
      effects: true,
    });

    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        smoother.scrollTo(hash, {
          duration: 1,
          ease: "power2.out",
        });
      }, 200);
    }

    return () => {
      smoother.kill();
    };
  }, { scope: wrapper, dependencies: [pathname] });

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content" ref={content}>
        {children}
      </div>
    </div>
  );
}
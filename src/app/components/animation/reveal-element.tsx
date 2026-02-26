'use client';

import { useRef, useEffect } from "react";
import gsap from "gsap";

type Props = {
 children: React.ReactNode;
 delay?: number;
 y?: number;
 duration?: number;
};

export function RevealElement({
 children,
 delay = 0,
 y = 40,
 duration = 0.8
}: Props) {

 const ref = useRef<HTMLDivElement>(null);

 useEffect(()=>{

  gsap.fromTo(
   ref.current,
   {
    opacity:0,
    y
   },
   {
    opacity:1,
    y:0,
    delay,
    duration,
    ease:"power3.out"
   }
  )

 },[])

 return(
  <div ref={ref}>
   {children}
  </div>
 )
}
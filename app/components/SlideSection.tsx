"use client";
import type { ReactNode } from "react";
import { useEffect,useRef } from "react";

// Sticky layer for the homepage stack: the next layer slides up and covers this one.
// Layers taller than the viewport expose --slide-h so they scroll fully before being covered.
export function SlideSection({as:Tag="section",className="",children}:{as?:"section"|"div";className?:string;children:ReactNode}){
  const ref=useRef<HTMLElement>(null);
  useEffect(()=>{const node=ref.current;if(!node)return;const measure=()=>node.style.setProperty("--slide-h",`${node.offsetHeight}px`);measure();const observer=new ResizeObserver(measure);observer.observe(node);return()=>observer.disconnect()},[]);
  return <Tag ref={ref as never} className={`slide-layer ${className}`}>{children}</Tag>
}

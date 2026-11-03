"use client";
import type { ReactNode } from "react";
import { useEffect,useRef,useState } from "react";

export function ScrollReveal({children,className="",delay=0}:{children:ReactNode;className?:string;delay?:number}){
  const ref=useRef<HTMLDivElement>(null);const[visible,setVisible]=useState(false);
  useEffect(()=>{const node=ref.current;if(!node)return;const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setVisible(true);observer.unobserve(node)}},{threshold:.14,rootMargin:"0px 0px -8%"});observer.observe(node);return()=>observer.disconnect()},[]);
  return <div ref={ref} className={`scroll-reveal ${visible?"is-visible":""} ${className}`} style={{transitionDelay:`${delay}ms`}}>{children}</div>
}

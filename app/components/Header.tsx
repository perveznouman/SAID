"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navigation=[["/about","About us"],["/services","Services"],["/architecture","Architecture Projects"],["/interiors","Interior Projects"],["/process","Process"],["/contact","Contact us"]];

export function Header({solid=false}:{solid?:boolean}){
  const pathname=usePathname();const[scrolled,setScrolled]=useState(false);const[open,setOpen]=useState(false);
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>30);onScroll();window.addEventListener("scroll",onScroll,{passive:true});return()=>window.removeEventListener("scroll",onScroll)},[]);
  return <header className={`site-header ${solid||scrolled?"solid":""}`}><nav className="wrap"><a className="brand" href="/" aria-label="SAID home"><img src="/assets/said-logo.png" alt="SAID"/></a><button className="menu" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(!open)}>☰</button><div className={`navlinks ${open?"open":""}`}>{navigation.map(([href,label])=><a className={pathname===href?"active":""} href={href} key={href}>{label}</a>)}</div></nav></header>;
}

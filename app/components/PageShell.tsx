import type { ReactNode } from "react";
import { Footer } from "./Footer";import { Header } from "./Header";
export function PageShell({children,solidHeader=false}:{children:ReactNode;solidHeader?:boolean}){return <><Header solid={solidHeader}/><main>{children}</main><Footer/></>}
export function PageHero({eyebrow,title,image}:{eyebrow:string;title:string;image?:string}){return <section className={`page-hero ${image?"image-hero":""}`} style={image?{backgroundImage:`url('${image}')`}:undefined}><div className="page-hero-shade"/><div className="wrap"><span>{eyebrow}</span><h1>{title}</h1></div></section>}
export function CTA({eyebrow,title}:{eyebrow:string;title:string}){return <section className="cta"><div className="wrap"><span>{eyebrow}</span><h2>{title}</h2><a href="/contact">Start a project ↗</a></div></section>}

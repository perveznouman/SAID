import type { Metadata } from "next";
import { AboutValues } from "../components/AboutValues";
import { PageShell } from "../components/PageShell";
import { ScrollReveal } from "../components/ScrollReveal";

export const metadata:Metadata={title:"About Us"};

export default function AboutPage(){return <PageShell>
  <section className="reference-hero about-reference-hero"><div className="reference-hero-shade"/><div className="wrap reference-hero-copy"><h1>Designed with purpose,<br/>delivered with care.</h1><p>For over twelve years, Mohamed Suhaib has shaped architecture and interiors where concept, detail and delivery remain connected.</p></div><span className="scroll-cue">Scroll</span></section>

  <section className="about-story-section"><div className="wrap about-story-layout"><ScrollReveal className="about-story-heading"><div className="reference-label"><i/>Our story</div><h2>One studio.<br/>One clear design direction.</h2></ScrollReveal><ScrollReveal className="about-story-copy" delay={140}><p>Suhaib Architecture & Interior Design is a Dubai-based consultancy led by Mohamed Suhaib, an architect and interior designer with more than 12 years of experience across the UAE design and build industry.</p><p>The practice brings architectural design, interior design and design supervision together in one coordinated process. This integrated approach gives every project greater clarity, accountability and consistency—from the first layout to the completed space.</p><p>Today, SAID works across residential, commercial, healthcare and F&amp;B environments, balancing creative ambition with technical coordination, buildability and long-term value.</p></ScrollReveal></div></section>

  <section className="direction-section"><div className="wrap direction-grid"><ScrollReveal className="direction-card"><div className="reference-label"><i/>Our direction</div><h2>Vision</h2><p>To be a trusted architecture and interior design practice recognised for refined, intelligent and enduring spaces. We aim to create environments that respond thoughtfully to context, purpose and the people who use them.</p></ScrollReveal><ScrollReveal className="direction-card" delay={160}><div className="reference-label"><i/>How we deliver</div><h2>Mission</h2><p>To deliver coordinated design solutions through a structured, collaborative and detail-driven process. We provide clarity at every stage by connecting design thinking, technical precision and practical site supervision.</p></ScrollReveal></div></section>

  <AboutValues/>

  <section className="about-founder"><div className="founder-image"/><div className="founder-shade"/><div className="wrap founder-copy"><ScrollReveal><span>The practice</span><h2>Meet the designer<br/>behind SAID.</h2><p>Mohamed Suhaib · Architect &amp; Founder</p><a href="/contact">Start a conversation</a></ScrollReveal></div></section>
</PageShell>}

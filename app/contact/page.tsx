import type { Metadata } from "next";
import { ContactEnquiryForm } from "../components/ContactEnquiryForm";
import { PageShell } from "../components/PageShell";
import { ScrollReveal } from "../components/ScrollReveal";
export const metadata:Metadata={title:"Contact Us"};
export default function ContactPage(){return <PageShell>
  <section className="reference-contact-hero"><div className="reference-contact-shade"/><div className="wrap reference-contact-copy"><h1>Contact</h1><p>Tell us about your project.</p></div></section>
  <section className="contact-enquire-section"><div className="wrap reference-contact-grid">
    <ScrollReveal><ContactEnquiryForm/></ScrollReveal>
    <ScrollReveal delay={140}><div className="contact-details-panel">
      <div className="contact-detail"><span className="contact-detail-icon" aria-hidden="true">⌖</span><div><small>Studio</small><p>Dubai · United Arab Emirates</p><a href="https://www.google.com/maps/search/?api=1&query=Dubai%2C%20United%20Arab%20Emirates" target="_blank" rel="noreferrer">Open in Google Maps <b>→</b></a></div></div>
      <div className="contact-detail"><span className="contact-detail-icon" aria-hidden="true">✉</span><div><small>Email</small><a href="mailto:suhaibprojects@gmail.com">suhaibprojects@gmail.com</a></div></div>
      <div className="contact-detail"><span className="contact-detail-icon" aria-hidden="true">⌕</span><div><small>Telephone</small><a href="tel:+971526713316">+971 52 671 3316</a></div></div>
      <div className="contact-detail"><span className="contact-detail-icon" aria-hidden="true">◌</span><div><small>WhatsApp</small><a href="https://wa.me/971526713316" target="_blank" rel="noreferrer">+971 52 671 3316</a></div></div>
    </div></ScrollReveal>
  </div></section>
  <section className="contact-map-section"><div className="wrap"><ScrollReveal><h2>Headquarter</h2><div className="contact-map"><iframe title="SAID — Dubai, United Arab Emirates" src="https://maps.google.com/maps?q=Dubai%2C%20United%20Arab%20Emirates&t=&z=12&ie=UTF8&iwloc=&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/></div></ScrollReveal></div></section>
</PageShell>}

"use client";

import type { FormEvent } from "react";

export function ContactEnquiryForm(){
  function submitEnquiry(event:FormEvent<HTMLFormElement>){
    event.preventDefault();
    const data=new FormData(event.currentTarget);
    const subject=`${data.get("enquiryType")||"New project enquiry"} — ${data.get("name")||"SAID website"}`;
    const body=[
      `Name: ${data.get("name")||""}`,
      `Email: ${data.get("email")||""}`,
      `Phone: ${data.get("phone")||""}`,
      `Type of enquiry: ${data.get("enquiryType")||""}`,
      "",
      `${data.get("message")||""}`
    ].join("\n");
    window.location.href=`mailto:suhaibprojects@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return <form className="contact-enquiry-form" onSubmit={submitEnquiry}>
    <label className="contact-field full"><span>Name</span><input name="name" type="text" autoComplete="name" required/></label>
    <label className="contact-field"><span>Email</span><input name="email" type="email" autoComplete="email" required/></label>
    <label className="contact-field"><span>Phone</span><input name="phone" type="tel" autoComplete="tel" required/></label>
    <label className="contact-field full"><span>Type of enquiry</span><select name="enquiryType" defaultValue="" required><option value="" disabled>Select…</option><option>Architectural design</option><option>Interior design</option><option>Design supervision</option><option>Collaboration</option><option>General enquiry</option></select></label>
    <label className="contact-field full"><span>Message</span><textarea name="message" rows={5} required/></label>
    <div className="contact-form-action full"><p>By submitting you agree to be contacted<br/>about your enquiry.</p><button type="submit">Send enquiry <b>→</b></button></div>
  </form>
}

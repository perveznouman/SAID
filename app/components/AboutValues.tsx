"use client";
import { useState } from "react";

const values=[
  {title:"Integrated Thinking",text:"Architecture, interiors and site delivery are developed as one continuous response—not as disconnected packages."},
  {title:"Design Clarity",text:"Every decision reinforces the original idea, from the first approved concept through detailed documentation."},
  {title:"Continuity",text:"One design team carries intent across planning, materials, coordination and supervision for a consistent result."},
  {title:"Precision & Care",text:"Details are resolved with care and practical judgement so each space performs beautifully and endures."},
];

export function AboutValues(){const[active,setActive]=useState(0);return <section className="about-values-section"><div className="wrap about-values-layout"><div className="values-image"/><div className="values-content"><div className="reference-label"><i/>What we value</div><div className="values-tabs">{values.map((value,index)=><button className={active===index?"active":""} onMouseEnter={()=>setActive(index)} onFocus={()=>setActive(index)} onClick={()=>setActive(index)} key={value.title}>{value.title}</button>)}</div><p key={active} className="value-description">{values[active].text}</p></div></div></section>}

import type { Metadata } from "next";
import { CTA, PageHero, PageShell } from "../components/PageShell";
export const metadata:Metadata={title:"Process"};
const steps=[
  ["Discover","Briefing, site review, programme definition and project priorities."],
  ["Concept","Space planning, design narrative, mood, material direction and initial visualisation."],
  ["Develop","Coordinated layouts, detailed design, authority requirements and technical resolution."],
  ["Document","IFC drawings, schedules, specifications and tender or construction information."],
  ["Supervise","Material reviews, site inspections, design coordination, snagging and handover."],
];
export default function ProcessPage(){return <PageShell><PageHero eyebrow="Our process" title="A clear path from ambition to built reality."/><section className="content-section"><div className="wrap process-list">{steps.map(([title,text],index)=><article className="process-item" key={title}><span>{String(index+1).padStart(2,"0")}</span><h2>{title}</h2><p>{text}</p></article>)}</div></section><CTA eyebrow="Next step" title="Bring your brief to the table."/></PageShell>}

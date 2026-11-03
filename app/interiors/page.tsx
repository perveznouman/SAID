import type { Metadata } from "next";
import { CTA, PageShell } from "../components/PageShell";
import { ProjectGrid } from "../components/ProjectGrid";
import { interiorProjects } from "../data/projects";
export const metadata:Metadata={title:"Interior Projects"};
export default function InteriorsPage(){return <PageShell><section className="project-page-hero interior-hero"><div className="project-hero-shade"/><div className="wrap project-hero-copy"><h1>Interior Projects</h1><p>Homes, workplaces, places of care and hospitality spaces designed around human experience.</p></div></section><ProjectGrid projects={interiorProjects} filters={[{label:"All interiors",value:"all"},{label:"Residential",value:"residential"},{label:"Corporate Office",value:"corporate"},{label:"Healthcare",value:"healthcare"},{label:"F&B",value:"fnb"}]}/><CTA eyebrow="Interior design enquiry" title="Let’s build your experience."/></PageShell>}

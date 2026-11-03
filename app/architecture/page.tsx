import type { Metadata } from "next";
import { CTA, PageShell } from "../components/PageShell";
import { ProjectGrid } from "../components/ProjectGrid";
import { architectureProjects } from "../data/projects";
export const metadata:Metadata={title:"Architecture Projects"};
export default function ArchitecturePage(){return <PageShell><section className="project-page-hero architecture-hero"><div className="project-hero-shade"/><div className="wrap project-hero-copy"><h1>Projects</h1><p>A working record of architecture shaped by place, climate and purpose.</p></div></section><ProjectGrid projects={architectureProjects} filters={[{label:"All work",value:"all"},{label:"Residential",value:"residential"},{label:"Commercial",value:"commercial"},{label:"Hospitality",value:"hospitality"}]}/><CTA eyebrow="Architecture enquiry" title="Planning a new building?"/></PageShell>}

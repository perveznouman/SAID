import type { Metadata } from "next";
import { PageShell } from "../components/PageShell";
import { ScrollReveal } from "../components/ScrollReveal";

export const metadata:Metadata={title:"Services"};

const services=[
  {title:"Architectural Design",description:"We create context-led architecture that balances form, climate, planning requirements and the everyday experience of the people who occupy it.",image:"/assets/casa-nur-architecture.png",position:"center",items:["Site & brief analysis","Concept design","Space planning","Schematic design","Authority coordination","Design development","Tender documentation","Construction drawings"]},
  {title:"Interior Design",description:"Our interiors are developed as complete environments, connecting planning, materiality, lighting, bespoke details and furniture into one coherent experience.",image:"/assets/residential-triptych.png",position:"center",items:["Interior concept","Space planning","3D visualisation","Material selection","Lighting intent","Joinery design","FF&E specification","Technical documentation"]},
  {title:"Design Supervision",description:"We protect the approved design throughout construction through structured reviews, material control, regular inspections and clear design coordination.",image:"/assets/healthcare-triptych.png",position:"left",items:["IFC drawing review","Shop drawing review","Material submissions","Mock-up approvals","Site inspections","Design coordination","Snagging & de-snagging","Handover support"]},
  {title:"Design Management",description:"For complex projects, we provide a single design point of coordination, aligning client decisions, specialist consultants, contractors and programme requirements.",image:"/assets/fnb-triptych.png",position:"right",items:["Design programme","Consultant coordination","Client representation","Technical reviews","Authority tracking","Value engineering","Progress reporting","Construction support"]},
];

export default function ServicesPage(){return <PageShell>
  <section className="reference-hero services-reference-hero"><div className="reference-hero-shade"/><div className="wrap reference-hero-copy"><h1>Services</h1><p>Integrated design disciplines carrying a single vision from first sketch to finished space.</p></div></section>

  <section className="services-editorial"><div className="wrap">{services.map((service,index)=><article className={`service-feature ${index%2?"reverse":""}`} key={service.title}><ScrollReveal className="service-feature-image" delay={80}><div style={{backgroundImage:`url('${service.image}')`,backgroundPosition:service.position}}/></ScrollReveal><ScrollReveal className="service-feature-copy" delay={index%2?0:140}><span className="service-number">0{index+1}</span><h2>{service.title}</h2><p>{service.description}</p><div className="service-includes"><span>Services include</span><ul>{service.items.map(item=><li key={item}>{item}</li>)}</ul></div></ScrollReveal></article>)}</div></section>

  <section className="integrated-capability"><div className="wrap"><ScrollReveal><div className="reference-label"><i/>Integrated capability</div><h2>From design direction<br/>to project handover.</h2><p>SAID connects architectural thinking, interior design expertise and design supervision under one consistent creative direction—giving clients greater clarity, efficiency and confidence throughout the project.</p><a href="/contact">Get in touch</a></ScrollReveal></div></section>
</PageShell>}

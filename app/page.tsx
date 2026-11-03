import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSlider } from "./components/HeroSlider";

const services = [
  ["01", "Architecture", "Concept design, planning, authority coordination and construction documentation."],
  ["02", "Interior Design", "Residential, commercial, healthcare and F&B interiors with a clear material identity."],
  ["03", "Design Supervision", "Design coordination, material reviews, site inspections and handover support."],
];

const projects = [
  ["architecture", "Architecture", "Casa Nur", "Dubai · UAE", "/assets/casa-nur-architecture.png", "center"],
  ["interiors", "Residential Interior", "Horizon 9 Villa", "UAE", "/assets/residential-triptych.png", "center"],
  ["interiors", "Healthcare Interior", "Serenity Clinic", "Dubai · UAE", "/assets/healthcare-triptych.png", "left"],
  ["interiors", "F&B Interior", "Ember Dining", "Dubai · UAE", "/assets/fnb-triptych.png", "right"],
];

export default function Home() {
  return <><Header /><main><HeroSlider />
    <section className="home-about section"><div className="wrap split-layout"><div className="about-image" aria-label="Contemporary architecture detail" /><div className="about-copy"><span className="eyebrow">About SAID</span><h2>Purposeful spaces, thoughtfully composed.</h2><p>Suhaib Architecture & Interior Design is a Dubai-based studio creating considered architecture and interiors across residential, commercial, healthcare and hospitality projects.</p><p>We combine a clear design narrative with practical coordination, guiding each project from the first concept through detailed design and site supervision.</p><a className="text-link" href="/about">Discover the studio ↗</a><div className="stats"><div><strong>12+</strong><small>Years of design experience</small></div><div><strong>04</strong><small>Specialist project sectors</small></div><div><strong>UAE</strong><small>Dubai-based consultancy</small></div></div></div></div></section>
    <section className="home-services section muted-section"><div className="wrap"><div className="section-heading"><div><span className="eyebrow">What we do</span><h2>Integrated design services.</h2></div><p>One design direction, carried consistently from space planning and material selection to technical coordination and site delivery.</p></div><div className="service-list">{services.map(([number,title,description])=><a className="service-row" href="/services" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p><b>↗</b></a>)}</div></div></section>
    <section className="selected-work section"><div className="wrap"><div className="section-heading project-heading"><div><span className="eyebrow">Selected work</span><h2>Projects across every scale.</h2></div><a className="all-projects" href="/architecture">View architecture ↗</a></div><div className="editorial-grid">{projects.map(([href,type,title,location,image,position],index)=><a className={`editorial-project ${index%2?"offset":""}`} href={`/${href}`} key={title}><div className="project-image" style={{backgroundImage:`url('${image}')`,backgroundPosition:position}}/><div className="project-meta"><span>{type}</span><span>{location}</span></div><h3>{title}</h3><p>Explore project ↗</p></a>)}</div></div></section>
    <section className="home-process section muted-section"><div className="wrap"><div className="section-heading"><div><span className="eyebrow">Our process</span><h2>Clear from concept to completion.</h2></div><a className="text-link" href="/process">Explore the process ↗</a></div><div className="process-three"><div><span>01</span><h3>Discover</h3><p>We define the brief, project priorities, site constraints and the experience the space must create.</p></div><div><span>02</span><h3>Design</h3><p>Layouts, visual direction, material palettes and detailed documentation evolve as one coordinated package.</p></div><div><span>03</span><h3>Deliver</h3><p>Design supervision protects intent through samples, site reviews, coordination and final handover.</p></div></div></div></section>
    <section className="enquire"><div className="wrap"><span>Begin a project</span><h2>Let’s shape something lasting.</h2><a href="/contact">Start a conversation ↗</a></div></section>
  </main><Footer /></>;
}

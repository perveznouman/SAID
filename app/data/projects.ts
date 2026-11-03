export type Project = {
  title: string;
  category: "residential" | "commercial" | "hospitality" | "healthcare" | "fnb" | "corporate";
  location: string;
  year: string;
  type: string;
  area: string;
  summary: string;
  image?: string;
  position?: "left" | "center" | "right";
  gallery?: string[];
};

export const architectureProjects: Project[] = [
  {title:"Casa Nur",category:"residential",location:"Dubai · UAE",year:"Concept",type:"Residential architecture",area:"Private villa",summary:"Deep-framed volumes, warm bronze fins and full-height glazing create a contemporary family home with a distinct evening identity.",image:"/assets/casa-nur-architecture.png"},
  {title:"Courtyard Villa",category:"residential",location:"Dubai · UAE",year:"2024",type:"Residential architecture",area:"1,180 m²",summary:"A private residence organised around shaded courtyards, long views and a measured sequence between social and family spaces.",image:"/assets/architecture-triptych.png",position:"left"},
  {title:"Royse Warehouse",category:"commercial",location:"UAE",year:"Ongoing",type:"Warehouse architecture",area:"Built-up area on request",summary:"A contemporary industrial facility shaped around efficient operations, a strong architectural identity and a confident arrival experience.",image:"/assets/royse-warehouse-01.png",gallery:["/assets/royse-warehouse-01.png","/assets/royse-warehouse-02.png","/assets/royse-warehouse-03.png"]},
  {title:"Desert Retreat",category:"hospitality",location:"Al Ain · UAE",year:"2025",type:"Hospitality architecture",area:"2,950 m²",summary:"Low-slung pavilions sit lightly in the landscape, balancing private guest experiences with expansive desert views.",image:"/assets/architecture-triptych.png",position:"right"},
];

export const interiorProjects: Project[] = [
  {title:"Casa Nur Dubai",category:"residential",location:"Dubai · UAE",year:"On request",type:"Residential interior",area:"Built-up area on request",summary:"A warm contemporary villa interior balancing pale stone, natural timber and layered light. Open family spaces are composed with bespoke details and a quiet sense of luxury.",image:"/assets/residential-triptych.png",position:"left"},
  {title:"Horizon 9 Villa",category:"residential",location:"On request",year:"On request",type:"Residential interior",area:"Built-up area on request",summary:"Calm living spaces pair tactile materials with soft indirect lighting. The plan supports family interaction while retaining clear zones and visual privacy.",image:"/assets/residential-triptych.png",position:"center"},
  {title:"Hameem Residence",category:"residential",location:"On request",year:"On request",type:"Residential interior",area:"Built-up area on request",summary:"A contemporary family residence shaped by generous daylight, landscaped views and a restrained natural palette that unifies social and private rooms.",image:"/assets/residential-triptych.png",position:"right"},
  {title:"Real Estate Office",category:"corporate",location:"Dubai · UAE",year:"Concept",type:"Corporate office interior",area:"Built-up area on request",summary:"A biophilic workplace for a real-estate team, bringing open workstations, executive rooms and social spaces together through warm timber, natural stone, generous planting and expressive architectural lighting.",image:"/assets/real-estate-office-01.jpg",gallery:["/assets/real-estate-office-01.jpg","/assets/real-estate-office-02.jpg","/assets/real-estate-office-03.jpg","/assets/real-estate-office-04.jpg","/assets/real-estate-office-05.jpg","/assets/real-estate-office-06.jpg"]},
  {title:"Royse HQ",category:"corporate",location:"UAE",year:"Ongoing",type:"Corporate headquarters",area:"Built-up area on request",summary:"A contemporary headquarters concept developed around brand identity, efficient workplace planning and a confident arrival experience."},
  {title:"Serenity Clinic",category:"healthcare",location:"Dubai · UAE",year:"2024",type:"Healthcare interior",area:"680 m²",summary:"A reassuring patient journey built around intuitive wayfinding, warm finishes and carefully controlled clinical lighting.",image:"/assets/healthcare-triptych.png",position:"left"},
  {title:"Oral Care Studio",category:"healthcare",location:"Abu Dhabi · UAE",year:"2023",type:"Healthcare interior",area:"420 m²",summary:"A precise dental environment that softens clinical requirements through natural colour, curved details and discreet technology.",image:"/assets/healthcare-triptych.png",position:"center"},
  {title:"Wellness Day Centre",category:"healthcare",location:"Sharjah · UAE",year:"2025",type:"Healthcare interior",area:"910 m²",summary:"A flexible care setting with clear circulation, generous daylight and quiet waiting spaces designed to reduce stress.",image:"/assets/healthcare-triptych.png",position:"right"},
  {title:"Ember Dining",category:"fnb",location:"Dubai · UAE",year:"2024",type:"F&B interior",area:"540 m²",summary:"An immersive dining room layered with warm metal, dark timber and pools of intimate light around a theatrical central bar.",image:"/assets/fnb-triptych.png",position:"left"},
  {title:"Maison Café",category:"fnb",location:"Dubai · UAE",year:"2023",type:"F&B interior",area:"260 m²",summary:"A tactile neighbourhood café where sculpted counters, artisanal finishes and soft daylight create an easy all-day rhythm.",image:"/assets/fnb-triptych.png",position:"center"},
  {title:"Terrace Social",category:"fnb",location:"Abu Dhabi · UAE",year:"2025",type:"F&B interior",area:"730 m²",summary:"Indoor and outdoor dining flow together through a relaxed palette, lush planting and a series of social settings for day and night.",image:"/assets/fnb-triptych.png",position:"right"},
];

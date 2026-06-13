import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const BORDER = 'rgba(255,255,255,0.08)';

const SERVICES = [
  { id:'infrastructure', icon:'🏛', title:'Infrastructure Development', tagline:'Roads, Bridges & Public Infrastructure', desc:'Delivering large-scale infrastructure projects including roads, bridges, utility networks, smart infrastructure and industrial-grade civil works across India.', points:['Roads & Highways','Bridges & Flyovers','Utility Networks','Smart Infrastructure'] },
  { id:'construction', icon:'🏢', title:'Construction Services', tagline:'Commercial, Industrial & Institutional', desc:'End-to-end construction solutions for commercial complexes, industrial buildings, institutional campuses, healthcare facilities and corporate headquarters.', points:['Commercial Buildings','Industrial Construction','Healthcare Facilities','Corporate Campuses'] },
  { id:'peb', icon:'🏭', title:'Pre-Engineered Buildings', tagline:'Warehouses, Sheds & Industrial Structures', desc:'Fast, cost-effective pre-engineered building solutions for warehousing, logistics parks, manufacturing units, storage facilities and industrial sheds.', points:['Warehouses','Logistics Facilities','Manufacturing Units','Industrial Sheds'] },
  { id:'mep', icon:'⚡', title:'MEP Services', tagline:'Mechanical, Electrical & Plumbing', desc:'Comprehensive mechanical, electrical, plumbing and HVAC engineering services for commercial, industrial and institutional projects of all scales.', points:['Electrical Systems','HVAC & Mechanical','Plumbing Systems','Building Services'] },
  { id:'fire', icon:'🔥', title:'Fire Protection Systems', tagline:'Design, Installation & Maintenance', desc:'Complete fire safety ecosystem including fire fighting systems, alarm systems, detection, suppression and ongoing AMC and compliance management.', points:['Fire Fighting Systems','Fire Alarm & Detection','Fire Suppression','AMC & Maintenance'] },
  { id:'interiors', icon:'🎨', title:'Interior Fit-Out', tagline:'Workplace & Commercial Interiors', desc:'Premium interior design and fit-out services for corporate offices, retail spaces, hospitality projects and healthcare environments via Inovvio Interior.', points:['Office Fit-Out','Retail Interiors','Hospitality Design','Turnkey Interiors'] },
  { id:'facility', icon:'⚙️', title:'Facility Management', tagline:'Integrated Asset & Operations Management', desc:'Full-spectrum integrated facility management including technical services, soft services, asset management and occupant experience via Ortus Apex.', points:['Technical FM','Soft Services','Preventive Maintenance','Energy Management'] },
  { id:'industrial', icon:'🏗', title:'Industrial Solutions', tagline:'Factory Setup & Plant Infrastructure', desc:'Specialized industrial infrastructure including manufacturing plant setup, factory expansion, utility infrastructure and industrial modernization projects.', points:['Manufacturing Plants','Factory Expansion','Plant Infrastructure','Industrial Modernization'] },
];

function PageHero() {
  return (
    <section id="services-hero" className="relative overflow-hidden py-20 md:py-28" style={{ background: '#050A14' }}>
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize:'60px 60px' }} />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full pointer-events-none" style={{ background:'radial-gradient(circle,rgba(212,137,26,0.15),transparent 70%)', filter:'blur(60px)' }} />
      <div className="container-xl relative z-10 flex flex-col items-center text-center gap-5">
        <div className="flex items-center gap-2 text-xs font-medium" style={{ color:'#8A9BB5' }}>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span style={{ color:'#D4891A' }}>Services</span>
        </div>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border" style={{ color:'#D4891A', borderColor:'rgba(212,137,26,0.4)', background:'rgba(212,137,26,0.08)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          14 Specialized Service Lines
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight max-w-3xl">Our Services</h1>
        <p className="text-base md:text-lg max-w-2xl leading-relaxed" style={{ color:'#8A9BB5' }}>
          From concept to completion and beyond — Mahendram Landmark Ventures delivers engineering, construction, interiors and facility management under one roof.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {['500+ Projects','Pan India Operations','Single Point Accountability','End-to-End Delivery'].map((s) => (
            <span key={s} className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ background:'rgba(255,255,255,0.05)', color:'#8A9BB5', border:`1px solid ${BORDER}` }}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <article id={`service-card-${service.id}`}
      className="group relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      style={{ background:'#0D1B2E', borderColor:BORDER }}>
      <div className="absolute top-0 left-0 right-0 h-0.5 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl" style={{ backgroundColor:'#D4891A' }} />
      <div className="flex flex-col gap-4 p-7 flex-grow">
        <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background:'rgba(212,137,26,0.1)' }}>
          {service.icon}
        </div>
        <div>
          <h2 className="text-base font-extrabold text-white leading-snug">{service.title}</h2>
          <p className="text-xs font-semibold uppercase tracking-wide mt-0.5" style={{ color:'#D4891A' }}>{service.tagline}</p>
        </div>
        <p className="text-sm leading-relaxed flex-grow" style={{ color:'#8A9BB5' }}>{service.desc}</p>
        <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
          {service.points.map((pt) => (
            <li key={pt} className="flex items-center gap-1.5 text-xs font-medium" style={{ color:'#8A9BB5' }}>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor:'#D4891A' }} />{pt}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-7 py-4 border-t flex items-center justify-between" style={{ borderColor:BORDER }}>
        <Link to="/contact" id={`service-learn-${service.id}`}
          className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group/link" style={{ color:'#D4891A' }}>
          Learn More <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
        </Link>
        <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background:'rgba(255,255,255,0.05)', color:'#8A9BB5' }}>View Details</span>
      </div>
    </article>
  );
}

function ServicesGrid() {
  return (
    <section id="services-grid" className="section-padding" style={{ background:'#050A14' }}>
      <div className="container-xl">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color:'#D4891A' }}>What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">End-to-End Engineering Solutions</h2>
          <p className="mt-3 text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ color:'#8A9BB5' }}>
            Eight core service verticals, delivered by qualified professionals with deep domain expertise across commercial, industrial and institutional sectors.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc) => <ServiceCard key={svc.id} service={svc} />)}
        </div>
      </div>
    </section>
  );
}

function ProcessStrip() {
  const steps = [
    { n:'01', label:'Enquiry & Scope' }, { n:'02', label:'Design & Planning' },
    { n:'03', label:'Procurement' }, { n:'04', label:'Execution' },
    { n:'05', label:'Quality Check' }, { n:'06', label:'Handover & Support' },
  ];
  return (
    <section id="delivery-process" className="py-16" style={{ background:'#0D1B2E' }}>
      <div className="container-xl">
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color:'#D4891A' }}>How We Work</p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Our Delivery Process</h2>
        </div>
        <div className="overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex items-start justify-start md:justify-center gap-0 min-w-max md:min-w-0">
            {steps.map((step, idx) => (
              <div key={step.n} className="flex items-center gap-0">
                <div className="flex flex-col items-center gap-2 px-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-extrabold text-white flex-shrink-0" style={{ background:'linear-gradient(135deg,#D4891A,#b87315)' }}>
                    {step.n}
                  </div>
                  <span className="text-xs font-semibold text-center w-20 text-white">{step.label}</span>
                </div>
                {idx < steps.length - 1 && (
                  <span className="text-lg font-bold mb-4 flex-shrink-0" style={{ color:'#D4891A' }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section id="services-cta" className="py-20 relative overflow-hidden" style={{ background:'linear-gradient(135deg,#0D1B2E 0%,#050A14 100%)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background:'radial-gradient(ellipse at center,rgba(212,137,26,0.1) 0%,transparent 70%)' }} />
      <div className="container-xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Need a Custom Engineering Solution?</h2>
          <p className="mt-2 text-sm md:text-base max-w-lg leading-relaxed" style={{ color:'#8A9BB5' }}>
            Tell us your project requirements and our team will prepare a detailed scope and proposal tailored to your needs.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <Link to="/contact" id="services-cta-btn" className="px-8 py-4 rounded-sm text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95" style={{ background:'linear-gradient(135deg,#D4891A,#b87315)', boxShadow:'0 4px 24px rgba(212,137,26,0.35)' }}>
            Request Proposal →
          </Link>
          <Link to="/contact" id="services-consult-btn" className="px-8 py-4 rounded-sm text-sm font-bold text-white border transition-all hover:bg-white/10 active:scale-95" style={{ borderColor:'rgba(255,255,255,0.2)' }}>
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Our Services — Engineering, Construction, PEB, MEP, Fire Protection | Mahendram Landmark</title>
        <meta name="description" content="14 specialized engineering services: Infrastructure, Construction, PEB, MEP, Fire Protection, Interior Fit-Out, Facility Management and Industrial Solutions across India." />
        <meta property="og:title" content="Engineering & Infrastructure Services — Mahendram Landmark Ventures" />
        <meta property="og:description" content="End-to-end engineering solutions from concept to operations. 8 core service verticals delivered across India." />
        <meta property="og:url" content="https://www.mahendramlandmark.com/services" />
      </Helmet>
      <PageHero />
      <ServicesGrid />
      <ProcessStrip />
      <CTABanner />
    </>
  );
}

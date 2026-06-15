import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import {
  Building2, HardHat, Factory, Zap, Flame, Sofa, ClipboardCheck, Cog
} from 'lucide-react';
import TiltCard from '../components/TiltCard';

const BORDER = 'rgba(255,255,255,0.08)';

const SERVICES = [
  { id:'infrastructure', bgImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80', Icon: HardHat, title:'Infrastructure Development', tagline:'Roads, Bridges & Public Infrastructure',        desc:'Delivering large-scale infrastructure projects including roads, bridges, utility networks, smart infrastructure and industrial-grade civil works across India.',  points:['Roads & Highways','Bridges & Flyovers','Utility Networks','Smart Infrastructure'] },
  { id:'construction',   bgImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80', Icon: Building2,   title:'Construction Services',       tagline:'Commercial, Industrial & Institutional',          desc:'End-to-end construction solutions for commercial complexes, industrial buildings, institutional campuses, healthcare facilities and corporate headquarters.',       points:['Commercial Buildings','Industrial Construction','Healthcare Facilities','Corporate Campuses'] },
  { id:'peb',            bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80', Icon: Factory,    title:'Pre-Engineered Buildings',    tagline:'Warehouses, Sheds & Industrial Structures',       desc:'Fast, cost-effective pre-engineered building solutions for warehousing, logistics parks, manufacturing units, storage facilities and industrial sheds.',            points:['Warehouses','Logistics Facilities','Manufacturing Units','Industrial Sheds'] },
  { id:'mep',            bgImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80', Icon: Zap,  title:'MEP Services',                tagline:'Mechanical, Electrical & Plumbing',               desc:'Comprehensive mechanical, electrical, plumbing and HVAC engineering services for commercial, industrial and institutional projects of all scales.',               points:['Electrical Systems','HVAC & Mechanical','Plumbing Systems','Building Services'] },
  { id:'fire',           bgImage: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=600&q=80', Icon: Flame,       title:'Fire Protection Systems',     tagline:'Design, Installation & Maintenance',             desc:'Complete fire safety ecosystem including fire fighting systems, alarm systems, detection, suppression and ongoing AMC and compliance management.',                  points:['Fire Fighting Systems','Fire Alarm & Detection','Fire Suppression','AMC & Maintenance'] },
  { id:'interiors',      bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80', Icon: Sofa,    title:'Interior Fit-Out',            tagline:'Workplace & Commercial Interiors',                desc:'Premium interior design and fit-out services for corporate offices, retail spaces, hospitality projects and healthcare environments via Inovvio Interior.',         points:['Office Fit-Out','Retail Interiors','Hospitality Design','Turnkey Interiors'] },
  { id:'facility',       bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80', Icon: ClipboardCheck,       title:'Software Solutions & IT Services',         tagline:'Custom Software & Data Analytics',       desc:'Custom software development, IT infrastructure, cloud solutions, and data analytics to drive digital transformation and operational efficiency via Ortus Apex.',               points:['Custom Software Development','IT Infrastructure & Cloud','Data Analytics','Digital Transformation'] },
  { id:'industrial',     bgImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80', Icon: Cog,      title:'Industrial Solutions',        tagline:'Factory Setup & Plant Infrastructure',            desc:'Specialized industrial infrastructure including manufacturing plant setup, factory expansion, utility infrastructure and industrial modernization projects.',        points:['Manufacturing Plants','Factory Expansion','Plant Infrastructure','Industrial Modernization'] },
];


function PageHero() {
  return (
    <section id="services-hero" className="relative pt-32 pb-14 md:pt-40 md:pb-20 overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      {/* Services hero - construction/engineering */}
      <img
        src="/services_hero.png"
        alt="Engineering Services Hero"
        aria-hidden="true"
        className="ken-burns-bg"
        style={{ opacity: 0.25, objectFit: 'cover', position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      />
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize:'60px 60px' }} />
      <div className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full pointer-events-none" style={{ background:'radial-gradient(circle, rgba(41, 171, 226, 0.2), transparent 70%)', filter:'blur(60px)' }} />
      <div className="container-xl relative z-10 flex flex-col items-center text-center gap-5">
        <div className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--color-muted)' }}>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span style={{ color:'var(--color-accent)' }}>Services</span>
        </div>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border" style={{ color:'var(--color-accent)', borderColor:'rgba(41, 171, 226, 0.2)', background:'rgba(41, 171, 226, 0.05)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          14 Specialized Service Lines
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold gradient-text leading-tight tracking-tight max-w-3xl">Our Services</h1>
        <p className="text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: 'var(--color-muted)' }}>
          From concept to completion and beyond — Mahendram Landmark Ventures delivers engineering, construction, interiors and facility management under one roof.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-2">
          {['500+ Projects','Pan India Operations','Single Point Accountability','End-to-End Delivery'].map((s) => (
            <span key={s} className="px-4 py-1.5 rounded-full text-xs font-semibold" style={{ background:'rgba(0,63,135,0.05)', color:'var(--color-muted)', border:`1px solid ${BORDER}` }}>{s}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }) {
  const isOffset = typeof index === 'number' && index % 2 !== 0;
  return (
    <TiltCard as="article" id={`service-card-${service.id}`}
      className={`glass-card group relative flex flex-col overflow-hidden h-full block ${isOffset ? 'lg:translate-y-8' : ''}`}
      style={{ borderRadius: '16px' }}>
      <div className="relative h-48 w-full flex-shrink-0 overflow-hidden">
        <img src={service.bgImage} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="flex flex-col gap-4 p-7 pt-8 flex-grow relative z-10">
        <div className="absolute -top-6 left-6 w-12 h-12 rounded-full flex items-center justify-center shadow-xl border-2 border-[var(--color-bg)] z-20" style={{ background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)', color: '#ffffff' }}>
          <service.Icon size={22} strokeWidth={2} />
        </div>
        <div>
          <h2 className="text-base font-extrabold gradient-text leading-snug">{service.title}</h2>
          <p className="text-xs font-semibold uppercase tracking-wide mt-0.5" style={{ color:'var(--color-accent)' }}>{service.tagline}</p>
        </div>
        <p className="text-sm leading-relaxed flex-grow" style={{ color: 'var(--color-muted)' }}>{service.desc}</p>
        <ul className="grid grid-cols-2 gap-x-3 gap-y-1.5">
          {service.points.map((pt) => (
            <li key={pt} className="flex items-center gap-1.5 text-xs font-medium" style={{ color: 'var(--color-muted)' }}>
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor:'var(--color-accent)' }} />{pt}
            </li>
          ))}
        </ul>
      </div>
      <div className="px-7 py-4 border-t flex items-center justify-between mt-auto" style={{ borderColor:BORDER }}>
        <Link to="/contact" id={`service-learn-${service.id}`}
          className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group/link" style={{ color:'var(--color-accent)' }}>
          Learn More <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
        </Link>
        <span className="text-xs px-2.5 py-1 rounded-full font-medium" style={{ background:'rgba(255,255,255,0.05)', color:'#7A9BBF' }}>View Details</span>
      </div>
    </TiltCard>
  );
}

function ServicesGrid() {
  return (
    <section id="services-grid" className="section-padding relative overflow-hidden" style={{ background:'var(--color-card)' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="container-xl relative z-10">
        <div className="text-center mb-12">
          <FadeIn delay={0}><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color:'var(--color-accent)' }}>What We Offer</p></FadeIn>
          <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold gradient-text">End-to-End Engineering Solutions</h2></FadeIn>
          <FadeIn delay={0.2}><p className="mt-3 text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: 'var(--color-muted)' }}>
            Eight core service verticals, delivered by qualified professionals with deep domain expertise across commercial, industrial and institutional sectors.
          </p></FadeIn>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((svc, i) => (
            <FadeIn key={svc.id} delay={i * 0.1}>
              <ServiceCard service={svc} index={i} />
            </FadeIn>
          ))}
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
    <section id="delivery-process" className="py-8 md:py-10 relative overflow-hidden" style={{ background:'var(--color-bg)' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="container-xl relative z-10">
        <div className="text-center mb-10">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color:'var(--color-accent)' }}>How We Work</p>
          <h2 className="text-2xl md:text-3xl font-extrabold gradient-text">Our Delivery Process</h2>
        </div>
        <div className="overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex items-start justify-start md:justify-center gap-0 min-w-max md:min-w-0">
            {steps.map((step, idx) => (
              <div key={step.n} className="flex items-center gap-0">
                <div className="flex flex-col items-center gap-2 px-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-extrabold text-white flex-shrink-0" style={{ background:'linear-gradient(135deg,var(--color-accent),var(--color-accent-2))' }}>
                    {step.n}
                  </div>
                  <span className="text-xs font-semibold text-center w-20 text-[var(--color-primary)]">{step.label}</span>
                </div>
                {idx < steps.length - 1 && (
                  <span className="text-lg font-bold mb-4 flex-shrink-0" style={{ color:'var(--color-accent)' }}>→</span>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Decorative dots pattern */}
        <svg className="absolute bottom-0 left-0 w-64 h-64 text-[var(--color-accent)] opacity-[0.08] pointer-events-none z-0" viewBox="0 0 100 100" fill="currentColor">
          <pattern id="dots-pattern-services" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#dots-pattern-services)" />
        </svg>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section id="services-cta" className="py-10 md:py-14 relative overflow-hidden" style={{ background: 'var(--color-card)' }}>
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none ken-burns-bg" />
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background:'radial-gradient(ellipse at center, rgba(41, 171, 226, 0.05) 0%, transparent 70%)' }} />
      <div className="container-xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold gradient-text">Need a Custom Engineering Solution?</h2>
          <p className="mt-2 text-sm md:text-base max-w-lg leading-relaxed" style={{ color: 'var(--color-muted)' }}>
            Tell us your project requirements and our team will prepare a detailed scope and proposal tailored to your needs.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <Link to="/contact" id="services-cta-btn" className="px-8 py-4 rounded-sm text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95" style={{ background:'linear-gradient(135deg,var(--color-accent),var(--color-accent-2))', boxShadow:'0 4px 24px rgba(41, 171, 226, 0.3)' }}>
            Request Proposal →
          </Link>
          <Link to="/contact" id="services-consult-btn" className="px-8 py-4 rounded-sm text-sm font-bold text-[var(--color-primary)] border transition-all hover:bg-[var(--color-primary)] hover:text-white active:scale-95" style={{ borderColor:'rgba(0,63,135,0.2)' }}>
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

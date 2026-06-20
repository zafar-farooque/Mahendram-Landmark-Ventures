import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import {
  Building2, HardHat, Factory, Zap, Flame, Sofa, ClipboardCheck, Cog
} from 'lucide-react';

const SERVICES = [
  { id:'infrastructure', bgImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80', Icon: HardHat, title:'Infrastructure Development', tagline:'Roads, Bridges & Public Infrastructure',        desc:'Delivering large-scale infrastructure projects including roads, bridges, utility networks, smart infrastructure and industrial-grade civil works across India.',  points:['Roads & Highways','Bridges & Flyovers','Utility Networks','Smart Infrastructure'] },
  { id:'construction',   bgImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80', Icon: Building2,   title:'Construction Services',       tagline:'Commercial, Industrial & Institutional',          desc:'End-to-end construction solutions for commercial complexes, industrial buildings, institutional campuses, healthcare facilities and corporate headquarters.',       points:['Commercial Buildings','Industrial Construction','Healthcare Facilities','Corporate Campuses'] },
  { id:'peb',            bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80', Icon: Factory,    title:'Pre-Engineered Buildings',    tagline:'Warehouses, Sheds & Industrial Structures',       desc:'Fast, cost-effective pre-engineered building solutions for warehousing, logistics parks, manufacturing units, storage facilities and industrial sheds.',            points:['Warehouses','Logistics Facilities','Manufacturing Units','Industrial Sheds'] },
  { id:'mep',            bgImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80', Icon: Zap,  title:'MEP Services',                tagline:'Mechanical, Electrical & Plumbing',               desc:'Comprehensive mechanical, electrical, plumbing and HVAC engineering services for commercial, industrial and institutional projects of all scales.',               points:['Electrical Systems','HVAC & Mechanical','Plumbing Systems','Building Services'] },
  { id:'fire',           bgImage: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=600&q=80', Icon: Flame,       title:'Fire Protection Systems',     tagline:'Design, Installation & Maintenance',             desc:'Complete fire safety ecosystem including fire fighting systems, alarm systems, detection, suppression and ongoing AMC and compliance management.',                  points:['Fire Fighting Systems','Fire Alarm & Detection','Fire Suppression','AMC & Maintenance'] },
  { id:'interiors',      bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80', Icon: Sofa,    title:'Interior Fit-Out',            tagline:'Workplace & Commercial Interiors',                desc:'Premium interior design and fit-out services for corporate offices, retail spaces, hospitality projects and healthcare environments via Inovvio Interior.',         points:['Office Fit-Out','Retail Interiors','Hospitality Design','Turnkey Interiors'] },
  { id:'facility',       bgImage: '/ortus_facility_management.png', Icon: ClipboardCheck,       title:'Facility Management',         tagline:'Technical Services, Soft Services & AMC',       desc:'End-to-end facility management including MEP maintenance, HVAC, housekeeping, pest control, waste management, asset tracking and energy management via Ortus Apex.',               points:['MEP & HVAC Maintenance','Housekeeping & Soft Services','Asset Management & AMC','Energy Management'] },
  { id:'industrial',     bgImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80', Icon: Cog,      title:'Industrial Solutions',        tagline:'Factory Setup & Plant Infrastructure',            desc:'Specialized industrial infrastructure including manufacturing plant setup, factory expansion, utility infrastructure and industrial modernization projects.',        points:['Manufacturing Plants','Factory Expansion','Plant Infrastructure','Industrial Modernization'] },
];

function PageHero() {
  return (
    <section id="services-hero" className="relative pt-20 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-gray-900">
      {/* High-res architectural background */}
      <img
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
        alt="Engineering Services"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-60 ken-burns-bg"
      />
      
      {/* Dark gradient to make text pop and keep the bottom edge sharp */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/60" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <FadeIn delay={0}>
          <div className="flex items-center gap-2 text-xs font-bold text-white/70 tracking-widest uppercase mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#29ABE2]">Services</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold border border-white/20 bg-black/30 backdrop-blur-md text-white mb-6">
            <span className="w-2 h-2 rounded-full bg-[#29ABE2] animate-pulse" />
            14 Specialized Service Lines
          </span>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl leading-[1.1]">
            Our Services
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-base md:text-lg max-w-2xl text-white/90 mt-6 font-medium leading-relaxed">
            From concept to completion and beyond — Mahendram Landmark Ventures delivers engineering, construction, interiors and facility management under one roof.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['500+ Projects','Pan India Operations','Single Point Accountability','End-to-End Delivery'].map((s) => (
              <span key={s} className="px-5 py-2 rounded-full text-xs font-bold bg-white/10 backdrop-blur-sm text-white border border-white/20 shadow-lg">{s}</span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ServiceCard({ service }) {
  return (
    <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-6 pb-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-white/10 flex flex-col overflow-hidden h-full group hover:-translate-y-2 transition-transform duration-300">
      <div className="relative h-48 w-full flex-shrink-0 overflow-hidden rounded-2xl mb-6 shadow-sm">
        <img src={service.bgImage} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="flex flex-col gap-4 flex-grow relative z-10 px-2">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg bg-[#F0F7FF] text-[#29ABE2] -mt-14 relative z-20 border-4 border-white mb-2">
          <service.Icon size={26} strokeWidth={2} />
        </div>
        
        <div>
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-white leading-snug">{service.title}</h2>
          <p className="text-xs font-bold uppercase tracking-wider mt-1.5 text-[#29ABE2]">{service.tagline}</p>
        </div>
        
        <p className="text-sm leading-relaxed flex-grow text-gray-600 dark:text-gray-400 font-medium">{service.desc}</p>
        
        <ul className="grid grid-cols-1 gap-x-3 gap-y-2 mt-4">
          {service.points.map((pt) => (
            <li key={pt} className="flex items-center gap-2 text-xs font-bold text-gray-700">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-[#29ABE2]" />{pt}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="px-2 pt-6 flex items-center justify-between mt-6 border-t border-gray-100 dark:border-white/10">
        <Link to="/contact" className="flex items-center gap-1.5 text-sm font-bold text-[#29ABE2] transition-all duration-200 group/link hover:text-blue-600">
          Learn More <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
        </Link>
        <span className="text-xs px-3 py-1.5 rounded-full font-bold bg-[#F0F7FF] text-[#29ABE2]">View Details</span>
      </div>
    </div>
  );
}

function ServicesGrid() {
  return (
    <section id="services-grid" className="section-padding relative overflow-hidden">
      <div className="container-xl relative z-10">
        <div className="text-center mb-16">
          <FadeIn delay={0}><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#29ABE2]">What We Offer</p></FadeIn>
          <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">End-to-End Engineering Solutions</h2></FadeIn>
          <FadeIn delay={0.2}><p className="mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
            Eight core service verticals, delivered by qualified professionals with deep domain expertise across commercial, industrial and institutional sectors.
          </p></FadeIn>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-10">
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
    { n:'01', label:'Enquiry & Scope', desc: 'Understanding requirements', bgImage: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=400&q=80' }, 
    { n:'02', label:'Design & Planning', desc: 'Detailed blueprints', bgImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=400&q=80' },
    { n:'03', label:'Procurement', desc: 'Sourcing materials', bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=400&q=80' }, 
    { n:'04', label:'Execution', desc: 'On-site deployment', bgImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=400&q=80' },
    { n:'05', label:'Quality Check', desc: 'Rigorous testing', bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400&q=80' }, 
    { n:'06', label:'Handover', desc: 'Final delivery', bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80' },
  ];
  return (
    <section id="delivery-process" className="py-20 relative overflow-hidden mb-10">
      <div className="container-xl relative z-10">
        <div className="text-center mb-16">
          <FadeIn delay={0}>
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#29ABE2]">How We Work</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Our Delivery Process</h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
              A systematic, six-step approach to ensure maximum efficiency, safety, and quality across all our engineering projects.
            </p>
          </FadeIn>
        </div>
        
        <div className="relative px-4 lg:px-8">
          {/* Continuous Line underneath */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-transparent via-[#29ABE2]/30 to-transparent z-0" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
            {steps.map((step, idx) => (
              <FadeIn key={step.n} delay={idx * 0.1}>
                <div className="flex flex-col items-center gap-5 relative z-10 group cursor-default">
                  
                  {/* Floating Glassmorphism Image Popup */}
                  <div className="absolute bottom-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-48 h-32 opacity-0 pointer-events-none origin-bottom scale-50 translate-y-6 group-hover:scale-100 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-500 ease-out z-50">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-gray-900 [transform:translateZ(0)]">
                      <img src={step.bgImage} className="absolute inset-0 w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-700 ease-out" alt={step.label} />
                      <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] z-10 group-hover:backdrop-blur-0 transition-all duration-500" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent z-20" />
                      <div className="absolute bottom-3 left-0 right-0 text-center z-30 px-2">
                        <span className="text-[10px] font-black text-white uppercase tracking-widest drop-shadow-md">{step.label}</span>
                      </div>
                    </div>
                  </div>

                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-extrabold text-[#29ABE2] bg-white dark:bg-[#111827] shadow-[0_10px_30px_rgba(41,171,226,0.15)] border border-gray-100 dark:border-white/10 group-hover:scale-110 group-hover:-translate-y-1 group-hover:bg-[#29ABE2] group-hover:text-white group-hover:shadow-[0_15px_35px_rgba(41,171,226,0.4)] transition-all duration-300 relative z-40">
                    {step.n}
                  </div>
                  <div className="text-center relative z-40">
                    <h3 className="text-sm font-extrabold text-gray-900 dark:text-white mb-1">{step.label}</h3>
                    <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">{step.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section id="services-cta" className="py-12 md:py-14 relative overflow-hidden bg-gray-900 rounded-t-[2.5rem] shadow-2xl mt-10">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80')] opacity-10 object-cover mix-blend-overlay pointer-events-none ken-burns-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#29ABE2]/20 to-transparent pointer-events-none" />
      
      <div className="container-xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Need a Custom Engineering Solution?</h2>
          <p className="mt-4 text-base max-w-xl leading-relaxed text-white/80 font-medium">
            Tell us your project requirements and our team will prepare a detailed scope and proposal tailored to your needs.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <Link to="/contact" className="px-10 py-4 rounded-full text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-[0_10px_25px_rgba(41,171,226,0.3)] bg-[#29ABE2]">
            Request Proposal
          </Link>
          <Link to="/contact" className="px-10 py-4 rounded-full text-sm font-bold text-white border-2 border-white/20 hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
            Schedule Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen transition-colors duration-300">
      <Helmet>
        <title>Our Services | Mahendram Landmark</title>
        <meta name="description" content="14 specialized engineering services: Infrastructure, Construction, PEB, MEP, Fire Protection, Interior Fit-Out, Facility Management and Industrial Solutions across India." />
        <meta property="og:title" content="Engineering & Infrastructure Services — Mahendram Landmark Ventures" />
        <meta property="og:description" content="End-to-end engineering solutions from concept to operations. 8 core service verticals delivered across India." />
        <meta property="og:url" content="https://www.mahendramlandmark.com/services" />
      </Helmet>
      
      <PageHero />
      <ServicesGrid />
      <ProcessStrip />
      <CTABanner />
    </div>
  );
}

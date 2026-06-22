import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import {
  Building2, HardHat, Factory, Zap, Flame, Sofa, ClipboardCheck, Cog,
  PenTool, Layers, Truck, ShoppingBag, Wrench, TreePine, ChevronDown, ChevronUp, ArrowRight
} from 'lucide-react';

const SERVICE_CATEGORIES = [
  {
    id: 'engineering-design',
    Icon: PenTool,
    title: 'Engineering & Design',
    tagline: 'Architecture, Structure, BIM & MEP',
    desc: 'Comprehensive engineering and design services covering architectural planning, structural design, BIM coordination, MEP engineering and fire protection design for projects of all scales across India.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    accent: '#29ABE2',
    subServices: ['Architectural Design', 'Structural Design', 'BIM Coordination', 'MEP Design', 'Fire Protection Design'],
  },
  {
    id: 'turnkey',
    Icon: Layers,
    title: 'Turnkey Design & Build',
    tagline: 'Single Source. Complete Delivery.',
    desc: 'End-to-end design-build contracts where Mahendram Landmark takes full responsibility from concept design to commissioning — delivering projects on time, within budget and at highest quality.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    accent: '#0A4D8C',
    subServices: ['Concept to Commissioning', 'Single Point Accountability', 'Design Management', 'Value Engineering', 'Project Handover'],
  },
  {
    id: 'construction',
    Icon: Building2,
    title: 'Construction Services',
    tagline: 'Commercial, Industrial & Institutional',
    desc: 'End-to-end construction solutions for commercial complexes, industrial buildings, institutional campuses, healthcare facilities and corporate headquarters across India.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80',
    accent: '#60A5FA',
    subServices: ['Commercial Buildings', 'Industrial Construction', 'Institutional Buildings', 'Healthcare Facilities', 'Corporate Campuses'],
  },
  {
    id: 'infrastructure',
    Icon: HardHat,
    title: 'Infrastructure Development',
    tagline: 'Roads, Utilities & Public Infrastructure',
    desc: 'Delivering large-scale infrastructure projects including roads, utility networks, public infrastructure and industrial-grade civil works across India.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    accent: '#F59E0B',
    subServices: ['Roads & Highways', 'Utility Infrastructure', 'Public Infrastructure', 'Drainage Systems', 'Site Development'],
  },
  {
    id: 'industrial',
    Icon: Cog,
    title: 'Industrial Projects',
    tagline: 'Factories, Plants & Industrial Buildings',
    desc: 'Specialized industrial infrastructure including manufacturing plant setup, factory expansion, utility infrastructure and industrial modernization projects Pan India.',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    accent: '#EF4444',
    subServices: ['Factories & Manufacturing Plants', 'Industrial Buildings', 'Plant Expansion', 'Utility Infrastructure', 'Industrial Modernization'],
  },
  {
    id: 'peb',
    Icon: Factory,
    title: 'PEB Solutions',
    tagline: 'Warehouses & Industrial Sheds',
    desc: 'Fast, cost-effective pre-engineered building solutions for warehousing, logistics parks, manufacturing units, storage facilities and industrial sheds.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    accent: '#34D399',
    subServices: ['PEB Warehouses', 'Industrial Sheds', 'Logistics Parks', 'Cold Storage', 'Manufacturing Units'],
  },
  {
    id: 'mep',
    Icon: Zap,
    title: 'MEP Services',
    tagline: 'HVAC, Electrical & Plumbing',
    desc: 'Comprehensive mechanical, electrical, plumbing and HVAC engineering services for commercial, industrial and institutional projects of all scales.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    accent: '#8B5CF6',
    subServices: ['HVAC Systems', 'Electrical Works', 'Plumbing & Sanitation', 'Building Automation', 'Energy Management'],
  },
  {
    id: 'fire',
    Icon: Flame,
    title: 'Fire Protection',
    tagline: 'Design, Installation & AMC',
    desc: 'Complete fire safety ecosystem including fire fighting systems, alarm systems, detection, suppression and ongoing AMC and compliance management.',
    image: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=800&q=80',
    accent: '#F97316',
    subServices: ['Fire System Design', 'Sprinkler Installation', 'Fire Alarm & Detection', 'Gas Suppression Systems', 'AMC & Compliance'],
  },
  {
    id: 'fabrication',
    Icon: Wrench,
    title: 'Fabrication & Structural Works',
    tagline: 'Steel Fabrication & Structural Erection',
    desc: 'High-precision steel fabrication, structural erection and metalwork for industrial, commercial and infrastructure projects with in-house fabrication capacity.',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=800&q=80',
    accent: '#6B7280',
    subServices: ['Structural Steel Fabrication', 'Structural Erection', 'Miscellaneous Metalwork', 'Modular Structures', 'Skywalk & Platforms'],
  },
  {
    id: 'landscaping',
    Icon: TreePine,
    title: 'Landscaping & External Development',
    tagline: 'Greens, Hardscapes & Site Finishing',
    desc: 'Transforming project exteriors with professional landscaping, hardscape design, site finishing, entrance plazas, gardens and external infrastructure.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
    accent: '#22C55E',
    subServices: ['Landscape Design', 'Hardscape & Paving', 'Irrigation Systems', 'Entrance Plazas', 'Site Finishing Works'],
  },
  {
    id: 'power',
    Icon: Zap,
    title: 'Power & Utility Infrastructure',
    tagline: 'HT/LT, DG & Renewable Power',
    desc: 'Complete power infrastructure solutions including HT/LT distribution, DG sets, substations, solar power integration and utility corridor development.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
    accent: '#EAB308',
    subServices: ['HT/LT Distribution', 'DG & Substation Works', 'Solar Power Integration', 'Utility Corridor', 'Power Backup Systems'],
  },
  {
    id: 'warehousing',
    Icon: Truck,
    title: 'Warehousing & Logistics Infrastructure',
    tagline: 'Storage, Docking & Logistics Parks',
    desc: 'Design and construction of modern warehousing facilities, logistics parks, truck docking yards, material handling infrastructure and cold chain facilities.',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
    accent: '#14B8A6',
    subServices: ['Logistics Parks', 'Truck Docking Yards', 'Material Handling', 'Cold Chain Facilities', 'Racking & Storage Systems'],
  },
  {
    id: 'equipment-rental',
    Icon: Factory,
    title: 'Equipment Rental',
    tagline: 'Construction Machinery & Equipment',
    desc: 'Providing high-quality construction equipment and machinery on rental basis — cranes, forklifts, excavators, concrete pumps and scaffolding systems.',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=800&q=80',
    accent: '#F43F5E',
    subServices: ['Cranes & Hoists', 'Excavators & Earthmovers', 'Concrete Equipment', 'Scaffolding Systems', 'Forklifts & Loaders'],
  },
  {
    id: 'supply-trading',
    Icon: ShoppingBag,
    title: 'Supply & Trading',
    tagline: 'Materials, Furniture & Industrial Products',
    desc: 'Reliable supply and trading of construction materials, electrical materials, furniture, fixtures and industrial products through a verified pan-India vendor network.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    accent: '#A855F7',
    subServices: ['Construction Materials', 'Electrical Materials', 'Furniture & Fixtures', 'Industrial Products', 'Procurement Management'],
  },
];

function PageHero() {
  return (
    <section id="services-hero" className="relative pt-20 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-gray-900">
      <img
        src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80"
        alt="Engineering Services"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-60 ken-burns-bg"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/60" />
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
            {['500+ Projects', 'Pan India Operations', 'Single Point Accountability', 'End-to-End Delivery'].map((s) => (
              <span key={s} className="px-5 py-2 rounded-full text-xs font-bold bg-white/10 backdrop-blur-sm text-white border border-white/20 shadow-lg">{s}</span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ServiceCard({ svc, isOpen, onToggle }) {
  return (
    <div className="group bg-white dark:bg-[#111827] rounded-[2rem] overflow-hidden border border-gray-100 dark:border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-44 overflow-hidden flex-shrink-0">
        <img src={svc.image} alt={svc.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-white/80">{svc.tagline}</span>
        </div>
        <div className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center" style={{ background: svc.accent + '33', border: `1.5px solid ${svc.accent}55` }}>
          <svc.Icon size={16} style={{ color: svc.accent }} strokeWidth={2.5} />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col">
        <h3 className="text-lg font-extrabold text-gray-900 dark:text-white mb-2 leading-tight">{svc.title}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-4 flex-1">{svc.desc}</p>

        {/* Sub-services toggle */}
        <button
          onClick={onToggle}
          className="flex items-center justify-between w-full pt-4 border-t border-gray-100 dark:border-white/10 text-xs font-bold text-gray-600 dark:text-gray-300 hover:text-[#29ABE2] transition-colors"
        >
          <span>Service Breakdown</span>
          {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
        </button>
        {isOpen && (
          <ul className="mt-3 space-y-1.5">
            {svc.subServices.map((s) => (
              <li key={s} className="flex items-center gap-2 text-xs font-semibold text-gray-700 dark:text-gray-300">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: svc.accent }} />
                {s}
              </li>
            ))}
          </ul>
        )}

        <Link to="/contact" className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold transition-colors hover:gap-2.5" style={{ color: svc.accent }}>
          Enquire Now <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}

function ServicesGrid() {
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId(prev => (prev === id ? null : id));
  };

  return (
    <section id="services-grid" className="section-padding relative overflow-hidden">
      <div className="container-xl relative z-10">
        <div className="text-center mb-16">
          <FadeIn delay={0}><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#29ABE2]">What We Offer</p></FadeIn>
          <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">14 Specialized Service Lines</h2></FadeIn>
          <FadeIn delay={0.2}><p className="mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
            From engineering design to facility management — every service you need, delivered by one trusted partner across India.
          </p></FadeIn>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-10 items-start">
          {SERVICE_CATEGORIES.map((svc, i) => (
            <FadeIn key={svc.id} delay={i * 0.05}>
              <ServiceCard
                svc={svc}
                isOpen={openId === svc.id}
                onToggle={() => handleToggle(svc.id)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessStrip() {
  const steps = [
    { n: '01', label: 'Enquiry & Scope', desc: 'Understanding requirements' },
    { n: '02', label: 'Design & Planning', desc: 'Detailed blueprints' },
    { n: '03', label: 'Procurement', desc: 'Sourcing materials' },
    { n: '04', label: 'Execution', desc: 'On-site deployment' },
    { n: '05', label: 'Quality Check', desc: 'Rigorous testing' },
    { n: '06', label: 'Handover', desc: 'Final delivery' },
  ];
  return (
    <section id="delivery-process" className="py-20 relative overflow-hidden bg-[#F8FAFC] dark:bg-[#0A1628]/50">
      <div className="container-xl relative z-10">
        <div className="text-center mb-16">
          <FadeIn delay={0}><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#29ABE2]">How We Work</p></FadeIn>
          <FadeIn delay={0.1}><h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Our Delivery Process</h2></FadeIn>
          <FadeIn delay={0.2}><p className="mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-400 font-medium">
            A systematic, six-step approach to ensure maximum efficiency, safety, and quality across all our engineering projects.
          </p></FadeIn>
        </div>
        <div className="relative px-4 lg:px-8">
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-0.5 bg-gradient-to-r from-transparent via-[#29ABE2]/30 to-transparent z-0" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
            {steps.map((step, idx) => (
              <FadeIn key={step.n} delay={idx * 0.1}>
                <div className="flex flex-col items-center gap-5 relative z-10 group cursor-default">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-extrabold text-[#29ABE2] bg-white dark:bg-[#111827] shadow-[0_10px_30px_rgba(41,171,226,0.15)] border border-gray-100 dark:border-white/10 group-hover:scale-110 group-hover:-translate-y-1 group-hover:bg-[#29ABE2] group-hover:text-white transition-all duration-300 relative z-40">
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
        <meta name="description" content="14 specialized engineering services: Engineering & Design, Turnkey Build, Construction, Infrastructure, Industrial, PEB, MEP, Fire Protection, Fabrication, Landscaping, Power, Warehousing, Equipment Rental and Supply & Trading across India." />
        <meta property="og:title" content="Engineering & Infrastructure Services — Mahendram Landmark Ventures" />
        <meta property="og:description" content="End-to-end engineering solutions from concept to operations. 14 service lines delivered across India." />
        <meta property="og:url" content="https://www.mahendramlandmark.com/services" />
      </Helmet>
      <PageHero />
      <ServicesGrid />
      <ProcessStrip />
      <CTABanner />
    </div>
  );
}

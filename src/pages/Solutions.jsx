import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import { Building2, PenTool, Settings, BarChart3, Layers, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';

const SOLUTIONS = [
  {
    id: 'infrastructure-development',
    num: '01',
    icon: Building2,
    title: 'Infrastructure Development',
    tagline: 'From Groundbreaking to Grand Opening.',
    accent: '#29ABE2',
    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=85',
    galleryImgs: [
      '/infra_gallery_1.png',
      '/infra_gallery_2.png',
      '/infra_gallery_3.png',
    ],
    intro: 'Mahendram Landmark Ventures delivers end-to-end infrastructure development projects across India — from complex industrial facilities and large-scale commercial buildings to pre-engineered structures, warehouses, and institutional campuses. Our integrated EPC model ensures single-point accountability at every phase.',
    services: [
      'Greenfield & Brownfield Industrial Facilities',
      'Commercial & Institutional Construction',
      'Pre-Engineered Buildings (PEB)',
      'EPC Turnkey Project Delivery',
      'Civil, Structural & Foundation Works',
      'MEP (Mechanical, Electrical & Plumbing)',
      'Fire Protection & Safety Systems',
      'Utility Infrastructure (Power, Water, Gas)',
    ],
    outcomes: [
      { val: '500+', label: 'Projects Delivered' },
      { val: '10M+', label: 'Sq.Ft. Developed' },
      { val: '24', label: 'Cities in India' },
    ],
    sectors: ['Manufacturing', 'Warehousing & Logistics', 'Healthcare', 'Education', 'Government & PSU', 'Data Centers'],
    cta: 'Discuss Your Infrastructure Project',
  },
  {
    id: 'commercial-interiors',
    num: '02',
    icon: PenTool,
    title: 'Commercial Interiors',
    tagline: 'Workspaces That Inspire. Environments That Perform.',
    accent: '#6366F1',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85',
    galleryImgs: [
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&q=80',
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=700&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80',
    ],
    intro: 'Inovvio Interior — our specialized interiors division — transforms raw commercial spaces into premium, high-performance environments. From corporate headquarters and tech campuses to retail showrooms and hospitality suites, we deliver turnkey interior solutions that merge design excellence with engineering precision across India.',
    services: [
      'Corporate Office Design & Fit-Outs',
      'Retail & Showroom Interiors',
      'Healthcare & Hospitality Interiors',
      'Space Planning & Workplace Strategy',
      'MEP Integration within Interiors',
      'Furniture, Fixtures & Equipment (FF&E)',
      'Acoustic & Lighting Design',
      'Signage & Brand Environment',
    ],
    outcomes: [
      { val: '200+', label: 'Fit-Outs Completed' },
      { val: '5M+', label: 'Sq.Ft. Designed' },
      { val: '15', label: 'Cities Covered' },
    ],
    sectors: ['Corporate Offices', 'IT & ITES', 'BFSI', 'Retail & Hospitality', 'Healthcare', 'Education'],
    cta: 'Plan Your Interior Fit-Out',
  },
  {
    id: 'facility-management',
    num: '03',
    icon: Settings,
    title: 'Facility Management',
    tagline: 'Keep Your Assets Running at Peak Performance.',
    accent: '#10B981',
    img: '/indian_facility_management.png',
    galleryImgs: [
      '/fm_gallery_1.png',
      '/fm_gallery_2.png',
      '/fm_gallery_3.png',
    ],
    intro: 'Ortus Apex — our facility management division — provides comprehensive Integrated Facility Management (IFM) services for commercial, industrial, and institutional assets. We take full operational responsibility for your built environment so you can focus on your core business. Our 24×7 model ensures zero unplanned downtime.',
    services: [
      'Integrated Facility Management (IFM)',
      'MEP Maintenance & AMC Contracts',
      'Building Operations & Management',
      'Soft Services (Housekeeping, Security)',
      'Pest Control & Waste Management',
      'Energy Management & Audits',
      'Asset Lifecycle Management',
      'Helpdesk & IoT-Based Monitoring',
    ],
    outcomes: [
      { val: '150+', label: 'FM Contracts' },
      { val: '24×7', label: 'Operations' },
      { val: 'ISO', label: '45001 Certified' },
    ],
    sectors: ['Corporate Offices', 'Industrial Plants', 'Hospitals', 'Malls & Retail', 'Government Assets', 'IT Parks'],
    cta: 'Request FM Proposal',
  },
  {
    id: 'project-management',
    num: '04',
    icon: BarChart3,
    title: 'Project Management',
    tagline: 'On Time. On Budget. Every Time.',
    accent: '#F59E0B',
    img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=85',
    galleryImgs: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=80',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&q=80',
      'https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=700&q=80',
    ],
    intro: 'Our Project Management Consultancy (PMC) service gives clients an experienced, independent project authority that represents their interests at every stage. We deploy certified project managers, BIM coordinators, quantity surveyors, and site engineers to ensure complex projects are delivered on time, within budget — across India.',
    services: [
      'Project Management Consultancy (PMC)',
      "Owner's & Lender's Engineer Services",
      'BIM Coordination & Digital Delivery',
      'Cost Estimation & Quantity Surveying',
      'Procurement & Vendor Management',
      'Schedule Control & Risk Management',
      'Quality Assurance & Snag Management',
      'Commissioning & Handover Management',
    ],
    outcomes: [
      { val: '100+', label: 'PMC Assignments' },
      { val: '₹2000Cr+', label: 'Projects Managed' },
      { val: '98%', label: 'On-Time Delivery' },
    ],
    sectors: ['Real Estate Developers', 'Industrial Clients', 'Government & PSU', 'BFSI Sector', 'Hospitality', 'Infrastructure Funds'],
    cta: 'Engage Our PMC Team',
  },
  {
    id: 'design-and-build',
    num: '05',
    icon: Layers,
    title: 'Design & Build',
    tagline: 'One Contract. One Team. Zero Gaps.',
    accent: '#8B5CF6',
    img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=85',
    galleryImgs: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80',
      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=700&q=80',
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=700&q=80',
    ],
    intro: 'Our Design & Build model gives you a single point of contact for both design and construction — eliminating the friction between architects and contractors that often derails projects. From concept and engineering to construction and commissioning, our integrated team delivers cohesive, fast-track projects with higher quality and lower risk.',
    services: [
      'Concept Design & Architectural Planning',
      'Structural & MEP Engineering',
      'Interior Design Integration',
      'Value Engineering & Cost Optimization',
      'Fast-Track Construction Delivery',
      'BIM-Based Design Coordination',
      'Regulatory Approvals & Compliance',
      'Commissioning & Occupation Support',
    ],
    outcomes: [
      { val: '30%', label: 'Faster Delivery' },
      { val: '15%', label: 'Cost Savings' },
      { val: '1', label: 'Point of Contact' },
    ],
    sectors: ['Commercial Developers', 'Industrial Clients', 'Healthcare', 'Hospitality', 'Educational Institutions', 'Data Centers'],
    cta: 'Start Your Design & Build Project',
  },
  {
    id: 'renovation-and-modernization',
    num: '06',
    icon: Wrench,
    title: 'Renovation & Modernization',
    tagline: 'Upgrade Your Asset. Without Halting Your Business.',
    accent: '#EF4444',
    img: '/reno_main.png',
    galleryImgs: [
      '/reno_gallery_1.png',
      '/reno_gallery_2.png',
      '/reno_gallery_3.png',
    ],
    intro: "Renovation and modernization of operational facilities requires precision phasing, minimal disruption, and deep technical expertise. We have delivered complex live-site renovations — from factory upgrades and MEP overhauls to office refurbishments and retail rebranding — across India without disrupting our clients' ongoing operations.",
    services: [
      'Factory & Plant Upgrades (Live-Site)',
      'Commercial Office Refurbishment',
      'MEP Systems Overhaul & Replacement',
      'Retail & Hospitality Rebranding',
      'Facade Renovation & Waterproofing',
      'Structural Retrofitting & Strengthening',
      'Energy Efficiency Upgrades',
      'Compliance-Driven Asset Upgrades',
    ],
    outcomes: [
      { val: '0', label: 'Production Stoppages' },
      { val: '80+', label: 'Live-Site Projects' },
      { val: '40%', label: 'Avg. Energy Saving' },
    ],
    sectors: ['Manufacturing Plants', 'Corporate Offices', 'Retail Chains', 'Hospitals', 'Hotels & Resorts', 'Government Buildings'],
    cta: 'Plan Your Renovation Project',
  },
];

/* ── Sticky filter nav ─────────────────────────── */
function QuickNav({ activeSec }) {
  return (
    <div className="sticky top-[84px] z-40 bg-[#f8f9fa]/95 dark:bg-[#0A0F1A]/95 backdrop-blur-md py-4 mb-4">
      <div className="container-xl px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-2.5">
          {SOLUTIONS.map(s => {
            const active = activeSec === s.id;
            return (
              <a key={s.id} href={`#${s.id}`}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                  active
                    ? 'bg-gray-900 dark:bg-white dark:text-gray-900 text-white shadow-md scale-105 border border-gray-900'
                    : 'bg-white dark:bg-[#111827] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-gray-300 hover:text-gray-900 hover:bg-gray-50 shadow-sm'
                }`}>
                {s.title}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ── Individual solution block ─────────────────── */
function SolutionBlock({ sol, idx }) {
  const [open, setOpen] = useState(false);
  const isEven = idx % 2 === 0;

  return (
    <section id={sol.id} className="py-16 md:py-20">
      <div className="container-xl px-4 sm:px-6">

        {/* Section badge */}
        <FadeIn>
          <div className="flex items-center gap-3 mb-10">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: sol.accent + '18' }}>
              <sol.icon size={22} style={{ color: sol.accent }} />
            </div>
            <div>
              <p className="text-[10px] font-black tracking-[0.2em] uppercase" style={{ color: sol.accent }}>Solution {sol.num}</p>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white leading-tight">{sol.title}</h2>
            </div>
            <span className="hidden md:block ml-auto text-[7rem] font-black leading-none text-gray-100 dark:text-white/[0.04] select-none -mt-4">{sol.num}</span>
          </div>
        </FadeIn>

        {/* Two-column content */}
        <div className={`grid lg:grid-cols-2 gap-10 items-start`}>

          {/* ── Image column ── */}
          <div className={`flex flex-col gap-4 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            {/* Hero image */}
            <FadeIn delay={0.1}>
              <div className="relative rounded-3xl overflow-hidden shadow-xl group" style={{ aspectRatio: '16/10' }}>
                <img
                  src={sol.img}
                  alt={sol.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <span className="absolute bottom-5 left-5 right-5 inline-block px-4 py-2 rounded-full text-xs font-bold text-white border border-white/25 bg-black/35 backdrop-blur-sm w-fit">
                  {sol.tagline}
                </span>
              </div>
            </FadeIn>

            {/* 3-thumbnail gallery */}
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-3 gap-3">
                {sol.galleryImgs.map((img, i) => (
                  <div key={i} className="rounded-2xl overflow-hidden group cursor-pointer shadow-sm" style={{ aspectRatio: '4/3' }}>
                    <img src={img} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* KPI stats */}
            <FadeIn delay={0.3}>
              <div className="grid grid-cols-3 gap-3">
                {sol.outcomes.map(o => (
                  <div key={o.label} className="bg-white dark:bg-[#111827] rounded-2xl py-4 px-3 text-center border border-gray-100 dark:border-white/10 shadow-sm">
                    <p className="text-lg md:text-xl font-black" style={{ color: sol.accent }}>{o.val}</p>
                    <p className="text-[9px] font-bold text-gray-500 uppercase tracking-wider mt-1 leading-tight">{o.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* ── Text column ── */}
          <div className={`flex flex-col gap-5 ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            {/* Intro */}
            <FadeIn delay={0.1}>
              <p className="text-sm md:text-[0.95rem] text-gray-600 dark:text-gray-300 leading-relaxed">{sol.intro}</p>
            </FadeIn>

            {/* Services list */}
            <FadeIn delay={0.2}>
              <div className="bg-white dark:bg-[#111827] rounded-2xl border border-gray-100 dark:border-white/10 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpen(!open)}
                  className="w-full flex items-center justify-between px-5 py-4 text-xs font-black uppercase tracking-widest transition-colors"
                  style={{ color: sol.accent }}
                >
                  <span>What We Deliver</span>
                  <span className={`transition-transform duration-200 text-base ${open ? 'rotate-180' : ''}`}>↓</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${open ? 'max-h-[400px]' : 'max-h-[120px]'}`}>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 px-5 pb-5">
                    {sol.services.map(s => (
                      <li key={s} className="flex items-start gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        <CheckCircle2 size={14} className="flex-shrink-0 mt-0.5" style={{ color: sol.accent }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Sectors */}
            <FadeIn delay={0.3}>
              <div>
                <p className="text-[10px] font-black tracking-[0.18em] uppercase mb-3 text-gray-400">Sectors We Serve</p>
                <div className="flex flex-wrap gap-2">
                  {sol.sectors.map(sec => (
                    <span key={sec} className="px-3 py-1.5 rounded-full text-xs font-semibold border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 bg-white dark:bg-white/5">
                      {sec}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* CTA buttons */}
            <FadeIn delay={0.4}>
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-white shadow-lg hover:opacity-90 hover:scale-105 transition-all"
                  style={{ background: sol.accent }}
                >
                  {sol.cta} <ArrowRight size={14} />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold border-2 text-gray-700 dark:text-gray-300 hover:scale-105 transition-transform bg-transparent"
                  style={{ borderColor: sol.accent + '55' }}
                >
                  View Projects
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Page ──────────────────────────────────────── */
export default function Solutions() {
  const [activeSec, setActiveSec] = useState(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSec(entry.target.id);
      });
    }, { rootMargin: '-15% 0px -75% 0px' });

    SOLUTIONS.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen">
      <Helmet>
        <title>Solutions | Mahendram Landmark Ventures</title>
        <meta name="description" content="Infrastructure Development, Commercial Interiors, Facility Management, Project Management, Design & Build, and Renovation & Modernization solutions across India." />
      </Helmet>

      {/* ── Hero ── */}
      <section className="relative pt-20 pb-24 md:pt-40 md:pb-36 overflow-hidden bg-gray-900">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=85"
          alt="Solutions hero"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/75" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <FadeIn>
            <div className="flex items-center gap-2 text-xs font-bold text-white/70 tracking-widest uppercase mb-4">
              <Link to="/" className="hover:text-white">Home</Link>
              <span>/</span>
              <span className="text-[#29ABE2]">Solutions</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold border border-white/20 bg-black/30 backdrop-blur-md text-white mb-6">
              <span className="w-2 h-2 rounded-full bg-[#29ABE2] animate-pulse" />
              6 Integrated Service Lines
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight max-w-5xl leading-[1.1]">
              Complete Built<br />Environment Solutions
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-base md:text-lg max-w-2xl text-white/80 mt-6 font-medium leading-relaxed">
              From building the structure to designing the interiors, managing the facility,
              and modernizing existing assets — Mahendram delivers every service under one accountable partnership.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Stats banner (floats above hero bottom) ── */}
      <div className="relative z-20 -mt-14 px-4 mb-6">
        <div className="container-xl max-w-4xl mx-auto">
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap items-center justify-around gap-6 py-7 px-8 rounded-3xl bg-white dark:bg-[#111827] shadow-xl border border-gray-100 dark:border-white/10">
              {[['6','Service Lines'],['500+','Projects'],['10M+','Sq.Ft.'],['24','Cities']].map(([v,l]) => (
                <div key={l} className="flex flex-col items-center text-center">
                  <span className="text-3xl md:text-4xl font-extrabold text-[#29ABE2]">{v}</span>
                  <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">{l}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* ── Sticky filter nav ── */}
      <QuickNav activeSec={activeSec} />

      {/* ── Solution blocks ── */}
      <div>
        {SOLUTIONS.map((sol, idx) => (
          <div
            key={sol.id}
            className={idx % 2 !== 0 ? 'bg-white dark:bg-[#080D18]' : 'bg-[#f8f9fa] dark:bg-[#0A0F1A]'}
          >
            <SolutionBlock sol={sol} idx={idx} />
            {idx < SOLUTIONS.length - 1 && (
              <div className="container-xl px-4 sm:px-6">
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-white/5 to-transparent" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* ── CTA ── */}
      <section className="py-16 bg-[#0A4D8C]">
        <div className="container-xl text-center px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Need a Custom Solution?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto font-medium">
              Our integrated model means we can combine multiple service lines into a single, seamless partnership tailored to your exact requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-10 py-4 rounded-full text-sm font-bold text-[#0A4D8C] bg-white hover:scale-105 transition-transform shadow-xl inline-block">
                Request a Consultation
              </Link>
              <Link to="/projects" className="px-10 py-4 rounded-full text-sm font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-colors inline-block">
                View Our Projects
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

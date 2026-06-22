import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import { Factory, Truck, Building2, HeartPulse, Hotel, GraduationCap, Landmark, Server, ArrowRight, CheckCircle2 } from 'lucide-react';

const SOLUTIONS = [
  {
    id: 'manufacturing',
    Icon: Factory,
    title: 'For Manufacturing Companies',
    accent: '#EF4444',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    tagline: 'Factory Setup. Plant Expansion. End-to-End.',
    intro: 'Whether you are setting up a greenfield manufacturing facility or expanding an existing plant, Mahendram Landmark delivers the complete infrastructure package — from civil works to MEP, utilities and long-term facility management.',
    services: ['Factory Setup & Greenfield Development', 'Plant Expansion & Modernisation', 'Utility Infrastructure (Power, Water, Gas)', 'MEP Engineering & Commissioning', 'Fire Protection Systems', 'Facility Management via Ortus Apex'],
    clients: ['Tata Motors ancillary units', 'Auto-component manufacturers', 'FMCG production facilities', 'Pharma manufacturing plants'],
  },
  {
    id: 'warehousing',
    Icon: Truck,
    title: 'For Warehousing & Logistics',
    accent: '#7C3AED',
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80',
    tagline: 'Faster Build. Smarter Storage. Lower Cost.',
    intro: 'We design and build modern warehousing and logistics infrastructure including PEB warehouses, logistics parks, cold chain facilities and truck terminals — delivered faster and at lower cost than traditional construction.',
    services: ['PEB Warehouse Design & Build', 'Logistics Park Development', 'Cold Chain Facilities', 'Truck Docking Yards', 'Racking & Material Handling Systems', 'Facility Maintenance via Ortus Apex'],
    clients: ['3PL logistics companies', 'E-commerce fulfillment centres', 'FMCG distribution hubs', 'Cold chain operators'],
  },
  {
    id: 'corporate',
    Icon: Building2,
    title: 'For Corporate Offices',
    accent: '#29ABE2',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    tagline: 'Design. Build. Furnish. Maintain.',
    intro: 'From large-scale office fit-outs to complete campus development, Inovvio Interior and Ortus Apex work together to create and sustain world-class corporate workspaces that improve productivity and reflect your brand.',
    services: ['Office Interior Design & Fit-Out', 'MEP & HVAC Engineering', 'Furniture & Workplace Solutions', 'Facility Management', 'Workplace Upgrades & Renovation', 'Energy Management'],
    clients: ['IT & ITES companies', 'BFSI sector offices', 'Consulting & law firms', 'Startup campuses'],
  },
  {
    id: 'developers',
    Icon: Landmark,
    title: 'For Developers & Builders',
    accent: '#0369A1',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    tagline: 'Your Project Partner from Foundation to Finish.',
    intro: 'We partner with developers as a multi-trade contractor, providing construction, MEP, fire protection and PMC services under one contract — reducing vendor coordination complexity and protecting project timelines.',
    services: ['Turnkey Construction', 'Project Management Consultancy (PMC)', 'MEP Engineering', 'Fire Protection Systems', 'Landscaping & External Works', 'Façade & Finishing Works'],
    clients: ['Residential developers', 'Commercial real estate developers', 'Mixed-use project developers', 'SEZ developers'],
  },
  {
    id: 'healthcare',
    Icon: HeartPulse,
    title: 'For Healthcare',
    accent: '#DC2626',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=800&q=80',
    tagline: 'Precision Built. Safety Certified. Always Operational.',
    intro: 'Healthcare facilities demand zero-compromise on safety, infection control and system reliability. We deliver hospitals, clinics and medical facilities built to NABH, NBC and NFPA standards.',
    services: ['Hospital Construction & Fit-Out', 'Medical-Grade MEP Engineering', 'Fire Protection & Safety Systems', 'HVAC & Clean Room Solutions', 'Facility Management for Healthcare', 'Compliance & Certification Support'],
    clients: ['Multi-specialty hospitals', 'Diagnostic chains', 'Day care & specialty clinics', 'Medical college campuses'],
  },
  {
    id: 'hospitality',
    Icon: Hotel,
    title: 'For Hospitality',
    accent: '#D97706',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    tagline: 'Spaces That Delight Guests. Designed for Operations.',
    intro: 'We create stunning hospitality environments — from luxury hotels and business hotels to resorts and banquet facilities — combining award-winning interior design with robust engineering infrastructure.',
    services: ['Hotel Interior Design & Fit-Out', 'MEP Engineering for Hospitality', 'Swimming Pool & Recreation Infrastructure', 'Fire Protection & Safety', 'Facility Management & Housekeeping', 'Energy Management'],
    clients: ['Star hotel chains', 'Boutique & heritage hotels', 'Resort developments', 'Banquet & event venues'],
  },
  {
    id: 'education',
    Icon: GraduationCap,
    title: 'For Educational Institutions',
    accent: '#059669',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80',
    tagline: 'Inspiring Campuses. Future-Ready Infrastructure.',
    intro: 'Educational campuses demand durable, safe and inspiring infrastructure. We build and maintain schools, colleges and university campuses with a focus on safety compliance, sustainable design and long-term operational efficiency.',
    services: ['Campus Construction', 'Classroom & Lab Interior Fit-Out', 'MEP & HVAC Engineering', 'Fire Safety Systems', 'Landscaping & Sports Infrastructure', 'Campus Facility Management'],
    clients: ['K-12 school groups', 'Engineering & management colleges', 'University campuses', 'Coaching & training institutes'],
  },
  {
    id: 'government',
    Icon: Landmark,
    title: 'For Government & PSU',
    accent: '#6D28D9',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    tagline: 'Quality. Compliance. On Time. Every Time.',
    intro: 'We execute government and PSU projects with full statutory compliance, CPWD/PWD standard adherence and transparent reporting — delivering roads, buildings, utility infrastructure and public facility projects on schedule.',
    services: ['Government Buildings Construction', 'Roads & Public Infrastructure', 'Utility Infrastructure Projects', 'MEP for Government Campuses', 'Fire Safety Compliance', 'Facility Management for Government Assets'],
    clients: ['Central government departments', 'State PWD projects', 'PSU infrastructure projects', 'Municipal corporation works'],
  },
  {
    id: 'datacenters',
    Icon: Server,
    title: 'For Data Centers',
    accent: '#0891B2',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80',
    tagline: 'Critical Infrastructure. Zero Downtime.',
    intro: 'Data centers demand the highest precision in MEP design, fire suppression and thermal management. We build and maintain mission-critical data center facilities with Tier III and Tier IV standards.',
    services: ['Data Center Civil & Structural Works', 'Precision MEP Engineering', 'Gas-Based Fire Suppression Systems', 'Precision Air Conditioning (PAC/CRAC)', 'UPS & Power Infrastructure', 'Ongoing Facility Management & AMC'],
    clients: ['Co-location data center operators', 'Enterprise IT campuses', 'Cloud infrastructure providers', 'Banking & financial sector data centers'],
  },
];

function PageHero() {
  return (
    <section id="solutions-hero" className="relative pt-20 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-gray-900">
      <img src="/solutions_hero.png" alt="Solutions" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-60 ken-burns-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/60" />
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <FadeIn delay={0}>
          <div className="flex items-center gap-2 text-xs font-bold text-white/70 tracking-widest uppercase mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#29ABE2]">Solutions</span>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold border border-white/20 bg-black/30 backdrop-blur-md text-white mb-6">
            <span className="w-2 h-2 rounded-full bg-[#29ABE2] animate-pulse" />
            Clients Buy Solutions, Not Services
          </span>
        </FadeIn>
        <FadeIn delay={0.2}>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight max-w-5xl leading-[1.1]">
            Solutions for Every Industry
          </h1>
        </FadeIn>
        <FadeIn delay={0.3}>
          <p className="text-base md:text-lg max-w-2xl text-white/90 mt-6 font-medium leading-relaxed">
            We don't just provide services — we solve your infrastructure challenges. Find your industry below and discover the integrated solution we can deliver for you.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function SolutionCard({ sol, idx }) {
  const [open, setOpen] = useState(false);
  const isEven = idx % 2 === 0;
  return (
    <FadeIn delay={0.1}>
      <section id={`solution-${sol.id}`} className={`py-16 md:py-20 ${idx % 2 === 0 ? '' : 'bg-[#F8FAFC] dark:bg-[#0A1628]/30'}`}>
        <div className="container-xl">
          <div className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-col-dense'}`}>
            {/* Image */}
            <div className={`relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] ${isEven ? '' : 'lg:col-start-2'}`}>
              <img src={sol.image} alt={sol.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-white border border-white/30 bg-black/40 backdrop-blur-sm">
                  <sol.Icon size={13} /> {sol.tagline}
                </span>
              </div>
            </div>
            {/* Content */}
            <div className={`flex flex-col gap-6 ${isEven ? '' : 'lg:col-start-1 lg:row-start-1'}`}>
              <div>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 shadow-lg" style={{ background: sol.accent + '22' }}>
                  <sol.Icon size={26} style={{ color: sol.accent }} />
                </div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: sol.accent }}>Industry Solution</p>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">{sol.title}</h2>
              </div>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-medium">{sol.intro}</p>

              {/* Services we provide */}
              <div>
                <button onClick={() => setOpen(!open)} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-3 transition-colors" style={{ color: sol.accent }}>
                  {open ? '▼' : '▶'} What We Deliver
                </button>
                {open && (
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {sol.services.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                        <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{ color: sol.accent }} />
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Clients served */}
              <div className="flex flex-wrap gap-2">
                {sol.clients.map((c) => (
                  <span key={c} className="px-3 py-1 rounded-full text-xs font-bold border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 bg-white dark:bg-white/5">{c}</span>
                ))}
              </div>

              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold text-white shadow-lg w-fit transition-all hover:scale-105"
                style={{ background: sol.accent }}>
                Discuss Your {sol.title.replace('For ', '')} Project <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}

export default function Solutions() {
  const [activeSec, setActiveSec] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSec(entry.target.id.replace('solution-', ''));
        }
      });
    }, { rootMargin: '-20% 0px -60% 0px', threshold: 0 });

    SOLUTIONS.forEach(s => {
      const el = document.getElementById(`solution-${s.id}`);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen transition-colors duration-300">
      <Helmet>
        <title>Industry Solutions | Mahendram Landmark</title>
        <meta name="description" content="Integrated engineering and infrastructure solutions for Manufacturing, Warehousing, Corporate Offices, Healthcare, Hospitality, Education, Government and Data Centers across India." />
      </Helmet>
      <PageHero />
      {/* Quick Jump Nav */}
      <section className="pt-12 md:pt-16 pb-8">
        <div className="container-xl">
          <div className="w-full flex justify-center">
            <div className="flex flex-wrap justify-center gap-3">
              {SOLUTIONS.map((s) => {
                const active = activeSec === s.id;
                return (
                  <a key={s.id} href={`#solution-${s.id}`}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${active ? 'bg-gray-900 dark:bg-white dark:text-gray-900 text-white shadow-md scale-105 border border-gray-900' : 'bg-white dark:bg-[#111827] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-gray-300 hover:text-gray-900 hover:bg-gray-50 shadow-sm'}`}>
                    {s.title.replace('For ', '')}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      {SOLUTIONS.map((sol, idx) => <SolutionCard key={sol.id} sol={sol} idx={idx} />)}
      {/* CTA */}
      <section className="py-14 bg-gray-900">
        <div className="container-xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Don't See Your Industry?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">We work across 14+ industry verticals. Get in touch and we'll design a custom solution for your specific requirements.</p>
          <Link to="/contact" className="px-10 py-4 rounded-full text-sm font-bold text-white bg-[#29ABE2] hover:scale-105 transition-all shadow-lg inline-block">Talk to Our Team</Link>
        </div>
      </section>
    </div>
  );
}

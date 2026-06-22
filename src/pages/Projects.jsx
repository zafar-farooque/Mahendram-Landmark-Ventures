import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import { getAllProjects, imageUrl } from '../lib/sanityClient';

/* ── Constants ─────────────────────────────── */
const CATEGORIES = [
  { label: 'All',                value: 'all'                 },
  { label: 'Construction',       value: 'construction'        },
  { label: 'Infrastructure',     value: 'infrastructure'      },
  { label: 'PEB',                value: 'peb'                 },
  { label: 'Warehousing',        value: 'warehousing'         },
  { label: 'MEP',                value: 'mep'                 },
  { label: 'Fire Protection',    value: 'fire-protection'     },
  { label: 'Interiors',          value: 'interiors'           },
  { label: 'Facility Management',value: 'facility-management' },
];

const CAT_LABEL = Object.fromEntries(
  CATEGORIES.filter((c) => c.value !== 'all').map((c) => [c.value, c.label])
);

const CAT_COLOR = {
  construction: '#29ABE2', infrastructure: '#0369A1', peb: '#92400E',
  warehousing: '#7C3AED', mep: '#B45309', 'fire-protection': '#B91C1C',
  interiors: '#BE185D', 'facility-management': '#065F46',
};

const FALLBACK_PROJECTS = [
  { _id:'p1', title:'Corporate Headquarters — Phase II', category:'construction', location:'Bengaluru, Karnataka', year:2024, overview:'A 12-floor corporate HQ for a leading Indian IT firm, delivered in 18 months.', scopeOfWork:'Turnkey construction including structure, façade, MEP, interiors and landscaping over 4.5 lakh sq ft.', challenges:'Tight urban site with limited laydown area and concurrent design-build execution.', solutions:'Adopted top-down construction sequencing and BIM-driven coordination to eliminate rework.', outcomes:'Delivered 3 weeks ahead of schedule with zero LTI safety record.', gallery:['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80'], coverImage:null, fallbackUrl:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80' },
  { _id:'p2', title:'Premium Office Fit-Out — Inovvio', category:'interiors', location:'Delhi NCR', year:2024, overview:'Turnkey interior fit-out for a 60,000 sq ft BFSI sector client.', scopeOfWork:'False ceiling, flooring, glass partitions, furniture, lighting design and IT infrastructure.', challenges:'Client required zero business disruption — work carried out in phased weekend shifts.', solutions:'Modular pre-fabricated partition systems installed with minimal site noise and dust.', outcomes:'IGBC Gold certified workspace; employee satisfaction score improved by 42%.', gallery:['https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80'], coverImage:null, fallbackUrl:'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80' },
  { _id:'p3', title:'Logistics Park — PEB Warehouses', category:'peb', location:'Nashik, Maharashtra', year:2024, overview:'3-unit pre-engineered warehouse complex for a leading 3PL logistics company.', scopeOfWork:'PEB design, fabrication, erection and civil finishing with loading docks and fire protection.', challenges:'Monsoon season delivery with strict tenant move-in deadlines.', solutions:'Pre-fabricated portal frames dispatched from factory in sequence to enable parallel erection.', outcomes:'All 3 units handed over within 14 weeks; 18% cost saving vs RCC alternative.', gallery:['https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80'], coverImage:null, fallbackUrl:'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80' },
  { _id:'p4', title:'Fire Protection — Multi-Specialty Hospital', category:'fire-protection', location:'Chennai, Tamil Nadu', year:2023, overview:'Complete fire safety system for a 450-bed hospital across 8 floors.', scopeOfWork:'Sprinklers, fire alarm, detection, PA system and gas suppression across 8 floors.', challenges:'Active hospital — no service disruption allowed during installation.', solutions:'Night-shift installation with floor-by-floor isolation protocols.', outcomes:'NBC 2016 and NABH compliant; fire NOC obtained in first inspection.', gallery:['https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=800&q=80'], coverImage:null, fallbackUrl:'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=800&q=80' },
  { _id:'p5', title:'MEP Integration — IT Park Towers', category:'mep', location:'Hyderabad, Telangana', year:2023, overview:'Full MEP design-build for 5 IT park towers totalling 8 lakh sq ft.', scopeOfWork:'HVAC, electrical HT/LT, plumbing, BMS integration and commissioning across 5 towers.', challenges:'Coordinating 5 parallel towers with a single MEP team and shared shaft routing.', solutions:'BIM clash detection reduced site conflicts by 65%; centralised BMS control room installed.', outcomes:'Energy consumption 22% below design benchmark; LEED Gold certification achieved.', gallery:['https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'], coverImage:null, fallbackUrl:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80' },
  { _id:'p6', title:'Cold Chain Warehouse Complex', category:'warehousing', location:'Pune, Maharashtra', year:2024, overview:'State-of-the-art cold chain facility for a leading FMCG brand.', scopeOfWork:'PEB structure, insulated panels, refrigeration systems, dock levellers and fire protection.', challenges:'Precise temperature zoning required from -25°C to +10°C in a single facility.', solutions:'Multi-zone refrigeration design with independent temperature controls per bay.', outcomes:'Operational efficiency improved by 30%; zero product loss in first operational year.', gallery:['https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80'], coverImage:null, fallbackUrl:'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=80' },
  { _id:'p7', title:'Highway Corridor Infrastructure', category:'infrastructure', location:'Rajasthan', year:2023, overview:'42 km highway corridor development including road, drainage and utility infrastructure.', scopeOfWork:'Road construction, culverts, street lighting, utility ducting and signage.', challenges:'Remote site with extreme heat conditions and supply chain constraints.', solutions:'Pre-positioned material depots at 10 km intervals; night-shift paving during summer.', outcomes:'Completed 5% under budget; MORTH quality certification achieved.', gallery:['https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80'], coverImage:null, fallbackUrl:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80' },
  { _id:'p8', title:'Integrated FM — SEZ Campus', category:'facility-management', location:'Noida, Uttar Pradesh', year:2024, overview:'Annual facility management contract for a 3 mn sq ft SEZ campus via Ortus Apex.', scopeOfWork:'MEP maintenance, housekeeping, pest control, security, landscaping and energy management.', challenges:'Managing 250+ tenants with varying SLA requirements across a sprawling campus.', solutions:'IoT-enabled CAFM platform deployed for real-time asset tracking and ticket resolution.', outcomes:'SLA compliance at 98.7%; energy costs reduced by 19% in first year of operations.', gallery:['/ortus_facility_management.png'], coverImage:null, fallbackUrl:'/ortus_facility_management.png' },
];

/* ── Hero ──────────────────────────────────── */
function PageHero() {
  return (
    <section id="projects-hero" className="relative pt-20 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-gray-900">
      {/* High-res architectural background */}
      <img
        src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80"
        alt="Projects Portfolio"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-60 ken-burns-bg"
      />
      
      {/* Dark gradient to make text pop and keep the bottom edge sharp */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/60" />

      <div className="container-xl relative z-10 flex flex-col items-center text-center gap-5">
        <FadeIn delay={0}>
          <div className="flex items-center gap-2 text-xs font-bold text-white/70 tracking-widest uppercase mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#29ABE2]">Projects</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold border border-white/20 bg-black/30 backdrop-blur-md text-white mb-4">
            <span className="w-2 h-2 rounded-full bg-[#29ABE2] animate-pulse" />
            500+ Projects Delivered Pan India
          </span>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl leading-[1.1]">
            Our Projects
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-base md:text-lg max-w-2xl text-white/90 mt-4 font-medium leading-relaxed">
            A portfolio of infrastructure, construction, industrial, PEB and facility management projects delivered across India.
          </p>
        </FadeIn>

        {/* Stats row */}
        <FadeIn delay={0.4}>
          <div className="flex flex-wrap justify-center gap-6 mt-6 p-6 rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/20 shadow-xl">
            {[['500+', 'Projects'], ['9', 'Categories'], ['Pan India', 'Operations'], ['2010', 'Est. Year']].map(([val, lbl]) => (
              <div key={lbl} className="flex flex-col items-center px-4">
                <span className="text-2xl md:text-3xl font-black text-white">{val}</span>
                <span className="text-xs font-bold text-white/70 uppercase tracking-wider">{lbl}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ── Project Card ───────────────────────────── */
const DETAIL_TABS = ['Overview','Scope','Challenges','Solutions','Outcomes','Gallery'];

function ProjectCard({ project }) {
  const [activeTab, setActiveTab] = useState(null);
  const img      = imageUrl(project.coverImage) || project.fallbackUrl;
  const catColor = CAT_COLOR[project.category] || '#29ABE2';
  const catLabel = CAT_LABEL[project.category]  || project.category;
  const isOpen   = activeTab !== null;

  const tabContent = {
    Overview:   project.overview   || project.scopeOfWork,
    Scope:      project.scopeOfWork,
    Challenges: project.challenges,
    Solutions:  project.solutions,
    Outcomes:   project.outcomes,
    Gallery:    null,
  };

  return (
    <div className="bg-white dark:bg-[#111827] rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-white/10 overflow-hidden group transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
      {/* Cover */}
      <div className="relative h-52 w-full flex-shrink-0 overflow-hidden bg-gray-100 p-2">
        <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
          {img
            ? <img src={img} alt={project.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            : <div className="flex items-center justify-center w-full h-full bg-gray-200 text-gray-400">No Image</div>
          }
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <span className="absolute top-4 left-4 text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full text-white shadow-md" style={{ backgroundColor: catColor }}>{catLabel}</span>
          <span className="absolute top-4 right-4 text-[10px] font-black px-3 py-1.5 rounded-full text-white bg-black/50 backdrop-blur-sm">{project.year}</span>
        </div>
      </div>

      {/* Body */}
      <div className="p-6 pt-4">
        <h2 className="font-extrabold text-xl text-gray-900 dark:text-white leading-snug mb-2 group-hover:text-[#29ABE2] transition-colors">{project.title}</h2>
        <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 dark:text-gray-400 mb-4">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#29ABE2]"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          {project.location}
        </div>

        {/* Tab pills */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {DETAIL_TABS.map((tab) => (
            <button key={tab}
              onClick={() => setActiveTab(activeTab === tab ? null : tab)}
              className={`px-3 py-1 rounded-full text-[10px] font-bold transition-all ${activeTab === tab ? 'text-white shadow-sm' : 'bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 hover:bg-gray-200'}`}
              style={activeTab === tab ? { backgroundColor: catColor } : {}}
            >{tab}</button>
          ))}
        </div>

        {/* Tab Content */}
        {isOpen && (
          <div className="mt-2 p-4 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 text-sm text-gray-700 dark:text-gray-300 font-medium leading-relaxed">
            {activeTab === 'Gallery' ? (
              project.gallery?.length ? (
                <div className="grid grid-cols-2 gap-2">
                  {project.gallery.map((url, i) => (
                    <img key={i} src={url} alt={`Gallery ${i+1}`} className="w-full h-24 object-cover rounded-xl" />
                  ))}
                </div>
              ) : <p className="text-gray-400">No gallery images available.</p>
            ) : (
              <p>{tabContent[activeTab] || <span className="text-gray-400">Not available.</span>}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ── Skeleton ───────────────────────────────── */
function Skeleton() {
  return (
    <div className="rounded-[2rem] bg-white dark:bg-[#111827] border border-gray-100 dark:border-white/10 overflow-hidden animate-pulse shadow-sm">
      <div className="h-52 bg-gray-200 p-2"><div className="w-full h-full bg-gray-300 rounded-[1.5rem]"></div></div>
      <div className="p-6 flex flex-col gap-3">
        <div className="h-6 rounded bg-gray-200 w-3/4"></div>
        <div className="h-4 rounded bg-gray-200 w-1/2"></div>
        <div className="flex gap-2">{Array.from({length:6}).map((_,i)=><div key={i} className="h-6 w-16 rounded-full bg-gray-200"></div>)}</div>
      </div>
    </div>
  );
}


/* ── CTABanner ──────────────────────────────── */
function CTABanner() {
  return (
    <section id="projects-cta" className="py-12 md:py-14 relative overflow-hidden bg-gray-900 rounded-t-[2.5rem] shadow-2xl mt-10">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888081622-1cb42c75a40a?auto=format&fit=crop&w=1920&q=80')] opacity-10 object-cover mix-blend-overlay pointer-events-none ken-burns-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#29ABE2]/20 to-transparent pointer-events-none" />
      
      <div className="container-xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Have a Project in Mind?</h2>
          <p className="mt-4 text-base max-w-xl leading-relaxed text-white/80 font-medium">
            Share your requirements and our engineering team will get back to you with a detailed proposal and execution strategy.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <Link to="/contact" className="px-10 py-4 rounded-full text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-[0_10px_25px_rgba(41,171,226,0.3)] bg-[#29ABE2]">
            Request Proposal
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Page ───────────────────────────────────── */
export default function Projects() {
  const [projects,  setProjects]  = useState([]);
  const [loading,   setLoading]   = useState(true);
  const [error,     setError]     = useState(null);
  const [activeCat, setActiveCat] = useState('all');
  const [search,    setSearch]    = useState('');

  useEffect(() => {
    getAllProjects()
      .then((data) => { setProjects(data?.length ? data : FALLBACK_PROJECTS); setLoading(false); })
      .catch(() => { setProjects(FALLBACK_PROJECTS); setError('Sanity not yet configured — showing sample projects.'); setLoading(false); });
  }, []);

  const filtered = projects.filter((p) => {
    const matchCat    = activeCat === 'all' || p.category === activeCat;
    const matchSearch = !search.trim() ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      (p.location || '').toLowerCase().includes(search.toLowerCase()) ||
      (p.scopeOfWork || '').toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen flex flex-col transition-colors duration-300">
      <Helmet>
        <title>Projects Portfolio | Mahendram Landmark</title>
        <meta name="description" content="Browse 500+ projects by Mahendram Landmark Ventures: Infrastructure, Construction, Industrial, Warehousing, PEB, MEP, Fire Protection, Interiors and Facility Management across India." />
      </Helmet>
      
      <PageHero />
      
      <section id="projects-content" className="section-padding relative overflow-hidden flex-grow">
        <div className="container-xl relative z-10 pt-10">

          {/* Search + filters */}
          <div className="flex flex-col gap-8 mb-12 items-center">
            {/* Search */}
            <div className="relative w-full max-w-2xl mx-auto flex-shrink-0">
              <svg className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              <input type="text" placeholder="Search projects by name or location..." value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-14 pr-12 py-4 rounded-full border border-gray-200 dark:border-white/10 text-base font-medium text-gray-900 dark:text-white bg-white dark:bg-[#111827] shadow-[0_10px_30px_rgba(0,0,0,0.04)] focus:outline-none focus:ring-4 focus:ring-[#29ABE2]/20 focus:border-[#29ABE2] transition-all" />
              {search && (
                <button onClick={() => setSearch('')} aria-label="Clear search" className="absolute right-5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors text-sm font-bold">✕</button>
              )}
            </div>

            {/* Category pills */}
            <div className="w-full flex justify-center">
              <div className="flex flex-wrap justify-center gap-3">
                {CATEGORIES.map((cat) => {
                  const active = activeCat === cat.value;
                  return (
                    <button key={cat.value} aria-pressed={active} onClick={() => setActiveCat(cat.value)}
                      className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${active ? 'bg-gray-900 dark:bg-white dark:text-gray-900 text-white shadow-md scale-105 border border-gray-900' : 'bg-white dark:bg-[#111827] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-gray-300 hover:text-gray-900 hover:bg-gray-50 shadow-sm'}`}>
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CMS notice */}
          {error && (
            <div className="mb-10 px-6 py-4 rounded-[1.5rem] text-sm font-bold flex items-center gap-3 bg-red-50 border border-red-100 text-red-600 shadow-sm">
              <span className="text-xl">⚠️</span>
              <p>{error} Replace <code className="font-mono bg-white px-1.5 py-0.5 rounded shadow-sm mx-1 text-xs">REPLACE</code> in <code className="font-mono bg-white px-1.5 py-0.5 rounded shadow-sm mx-1 text-xs">src/lib/sanityClient.js</code> with your Sanity ID.</p>
            </div>
          )}

          {/* Count */}
          {!loading && (
            <p className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-8">
              Showing <span className="text-[#29ABE2]">{filtered.length}</span> project{filtered.length !== 1 ? 's' : ''}
              {activeCat !== 'all' && <span> in {CAT_LABEL[activeCat]}</span>}
            </p>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-10">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
              : filtered.length > 0
              ? filtered.map((p, i) => (
                  <FadeIn key={p._id} delay={(i % 10) * 0.1}>
                    <ProjectCard project={p} />
                  </FadeIn>
                ))
              : (
                <div className="col-span-full flex flex-col items-center justify-center py-20 gap-4 bg-white dark:bg-[#111827] rounded-[2rem] border border-gray-100 dark:border-white/10 shadow-sm">
                  <span className="text-6xl mb-2">📭</span>
                  <p className="text-lg font-extrabold text-gray-900 dark:text-white">No projects found.</p>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400 text-center max-w-sm mb-4">We couldn't find any projects matching your current filters and search criteria.</p>
                  <button onClick={() => { setActiveCat('all'); setSearch(''); }} className="px-6 py-2.5 rounded-full bg-[#f8f9fa] border border-gray-200 text-gray-700 font-bold text-sm hover:bg-gray-100 transition-colors">
                    Clear all filters
                  </button>
                </div>
              )}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

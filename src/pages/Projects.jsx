import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import { getAllProjects, imageUrl } from '../lib/sanityClient';

/* ── Constants ─────────────────────────────── */
const CATEGORIES = [
  { label: 'All',               value: 'all'                 },
  { label: 'Infrastructure',    value: 'infrastructure'      },
  { label: 'Construction',      value: 'construction'        },
  { label: 'Industrial',        value: 'industrial'          },
  { label: 'Warehousing',       value: 'warehousing'         },
  { label: 'PEB',               value: 'peb'                 },
  { label: 'MEP',               value: 'mep'                 },
  { label: 'Fire Protection',   value: 'fire-protection'     },
  { label: 'Interiors',         value: 'interiors'           },
  { label: 'Software & IT',     value: 'software-it'         },
];

const CAT_LABEL = Object.fromEntries(
  CATEGORIES.filter((c) => c.value !== 'all').map((c) => [c.value, c.label])
);

const CAT_COLOR = {
  infrastructure: '#0369A1', construction: '#29ABE2', industrial: '#374151',
  warehousing: '#7C3AED', peb: '#92400E', mep: '#B45309',
  'fire-protection': '#B91C1C', interiors: '#BE185D', 'software-it': '#065F46',
};

const FALLBACK_PROJECTS = [
  { _id: 'p1', title: 'Large-Scale Warehouse Complex',         category: 'warehousing',   location: 'Pune, Maharashtra',      year: 2024, scopeOfWork: 'Complete warehouse infrastructure including PEB structure, MEP, fire protection and landscaping over 2 lakh sq ft.', coverImage: null, fallbackUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80' },
  { _id: 'p2', title: 'Commercial Office Fit-Out',               category: 'interiors',  location: 'Delhi NCR',              year: 2024, scopeOfWork: 'Premium corporate office fit-out interior, modern workspaces, elegant lighting, and facility management setup.', coverImage: null, fallbackUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80' },
  { _id: 'p3', title: 'PEB Industrial Shed — Logistics Park',  category: 'peb',           location: 'Nashik, Maharashtra',    year: 2024, scopeOfWork: 'Pre-engineered building structures for a 3-unit logistics park with loading docks and utility connections.', coverImage: null, fallbackUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80' },
  { _id: 'p4', title: 'Fire Protection — Multi-Specialty Hospital', category: 'fire-protection', location: 'Chennai, Tamil Nadu', year: 2023, scopeOfWork: 'Design and installation of complete fire fighting, detection, alarm and suppression systems across 8 floors.', coverImage: null, fallbackUrl: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=800&q=80' },
  { _id: 'p5', title: 'Manufacturing Plant Setup',             category: 'industrial',    location: 'Ahmedabad, Gujarat',     year: 2023, scopeOfWork: 'Greenfield manufacturing plant with utility infrastructure, electrical systems and industrial fit-out.', coverImage: null, fallbackUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80' },
  { _id: 'p6', title: 'MEP Integration — IT Park',             category: 'mep',           location: 'Hyderabad, Telangana',   year: 2023, scopeOfWork: 'Complete MEP design and installation across 5 towers including HVAC, electrical, plumbing and BMS integration.', coverImage: null, fallbackUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80' },
];

/* ── Hero ──────────────────────────────────── */
function PageHero() {
  return (
    <section id="projects-hero" className="relative pt-40 pb-28 md:pt-48 md:pb-32 overflow-hidden bg-gray-900">
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
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl leading-[1.1]">
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
function ProjectCard({ project }) {
  const img      = imageUrl(project.coverImage) || project.fallbackUrl;
  const catColor = CAT_COLOR[project.category] || '#29ABE2';
  const catLabel = CAT_LABEL[project.category]  || project.category;

  return (
    <div className="bg-white dark:bg-[#111827] rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-white/10 flex flex-col overflow-hidden h-full group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)]">

      {/* Cover */}
      <div className="relative h-56 w-full flex-shrink-0 overflow-hidden bg-gray-100 p-2">
        <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
          {img
            ? <img src={img} alt={project.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
            : (
              <div className="flex flex-col items-center justify-center w-full h-full bg-gray-200 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/></svg>
              </div>
            )
          }
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Category badge */}
          <span className="absolute top-4 left-4 text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full text-white shadow-md"
            style={{ backgroundColor: catColor }}>{catLabel}</span>
          
          {/* Year badge */}
          <span className="absolute top-4 right-4 text-[10px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full text-white bg-black/50 backdrop-blur-sm shadow-md">
            {project.year}
          </span>
          
          {/* Featured ribbon */}
          {project.featured && (
            <div className="absolute bottom-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full text-[#29ABE2] bg-white shadow-md">
              ⭐ Featured
            </div>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 p-6 pt-4 flex-grow relative z-10">
        <h2 className="font-extrabold text-xl text-gray-900 dark:text-white leading-snug group-hover:text-[#29ABE2] transition-colors">{project.title}</h2>

        <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-bold text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-[#29ABE2]"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            {project.location}
          </span>
          {project.clientName && <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-[#29ABE2]"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/></svg>
            {project.clientName}
          </span>}
        </div>

        {project.scopeOfWork && (
          <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 font-medium line-clamp-3">
            {project.scopeOfWork}
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 py-5 border-t border-gray-100 dark:border-white/10 flex items-center justify-between mt-auto">
        <Link to={`/projects/${project.slug || project._id}`} className="flex items-center gap-1.5 text-sm font-bold text-[#29ABE2] group/link">
          View Project Details
          <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </div>
  );
}

/* ── Skeleton ───────────────────────────────── */
function Skeleton() {
  return (
    <div className="rounded-[2rem] bg-white dark:bg-[#111827] border border-gray-100 dark:border-white/10 overflow-hidden animate-pulse shadow-sm">
      <div className="h-56 bg-gray-200 p-2">
        <div className="w-full h-full bg-gray-300 rounded-[1.5rem]"></div>
      </div>
      <div className="p-6 flex flex-col gap-4">
        <div className="h-6 rounded bg-gray-200 w-3/4"></div>
        <div className="h-4 rounded bg-gray-200 w-1/2"></div>
        <div className="h-4 rounded bg-gray-200"></div>
        <div className="h-4 rounded bg-gray-200 w-5/6"></div>
      </div>
      <div className="px-6 py-5 border-t border-gray-100">
        <div className="h-4 rounded bg-gray-200 w-1/3"></div>
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

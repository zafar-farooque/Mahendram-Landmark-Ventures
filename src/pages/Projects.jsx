import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAllProjects, imageUrl } from '../lib/sanityClient';
import TiltCard from '../components/TiltCard';

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
  infrastructure: '#0369A1', construction: 'var(--color-primary)', industrial: '#374151',
  warehousing: '#7C3AED', peb: '#92400E', mep: '#B45309',
  'fire-protection': '#B91C1C', interiors: '#BE185D', 'software-it': '#065F46',
};

const FALLBACK_PROJECTS = [
  { _id: 'p1', title: 'Large-Scale Warehouse Complex',         category: 'warehousing',   location: 'Pune, Maharashtra',      year: 2024, scopeOfWork: 'Complete warehouse infrastructure including PEB structure, MEP, fire protection and landscaping over 2 lakh sq ft.', coverImage: null, fallbackUrl: '/project_warehouse.png' },
  { _id: 'p2', title: 'Commercial Office Fit-Out',               category: 'interiors',  location: 'Delhi NCR',              year: 2024, scopeOfWork: 'Premium corporate office fit-out interior, modern workspaces, elegant lighting, and facility management setup.', coverImage: null, fallbackUrl: '/project_fitout.png' },
  { _id: 'p3', title: 'PEB Industrial Shed — Logistics Park',  category: 'peb',           location: 'Nashik, Maharashtra',    year: 2024, scopeOfWork: 'Pre-engineered building structures for a 3-unit logistics park with loading docks and utility connections.', coverImage: null, fallbackUrl: '/project_peb.png' },
  { _id: 'p4', title: 'Fire Protection — Multi-Specialty Hospital', category: 'fire-protection', location: 'Chennai, Tamil Nadu', year: 2023, scopeOfWork: 'Design and installation of complete fire fighting, detection, alarm and suppression systems across 8 floors.', coverImage: null, fallbackUrl: '/project_fire.png' },
  { _id: 'p5', title: 'Manufacturing Plant Setup',             category: 'industrial',    location: 'Ahmedabad, Gujarat',     year: 2023, scopeOfWork: 'Greenfield manufacturing plant with utility infrastructure, electrical systems and industrial fit-out.', coverImage: null, fallbackUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80' },
  { _id: 'p6', title: 'MEP Integration — IT Park',             category: 'mep',           location: 'Hyderabad, Telangana',   year: 2023, scopeOfWork: 'Complete MEP design and installation across 5 towers including HVAC, electrical, plumbing and BMS integration.', coverImage: null, fallbackUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80' },
];

/* ── Hero ──────────────────────────────────── */
function PageHero() {
  return (
    <section id="projects-hero" className="relative pt-32 pb-14 md:pt-40 md:pb-20 overflow-hidden"
      style={{ background: 'var(--color-bg)' }}>
      {/* Background image overlay */}
      <img
        src="/projects_hero.png"
        alt="Projects Hero"
        aria-hidden="true"
        className="section-img-overlay ken-burns-bg"
        style={{ opacity: 0.25, objectFit: 'cover', position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      />
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(41, 171, 226, 0.2), transparent 70%)' }} />

      <div className="container-xl relative z-10 flex flex-col items-center text-center gap-5">
        <div className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--color-muted)' }}>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-accent)' }}>Projects</span>
        </div>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border"
          style={{ color: 'var(--color-accent)', borderColor: 'rgba(41, 171, 226, 0.1)', background: 'rgba(41, 171, 226, 0.1)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-current" />
          500+ Projects Delivered Pan India
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold gradient-text leading-tight tracking-tight">
          Our Projects
        </h1>
        <p className="text-base max-w-xl leading-relaxed" style={{ color: 'var(--color-muted)' }}>
          A portfolio of infrastructure, construction, industrial, PEB and facility management
          projects delivered across India.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {[['500+', 'Projects'], ['9', 'Categories'], ['Pan India', 'Operations'], ['2010', 'Est. Year']].map(([val, lbl]) => (
            <div key={lbl} className="flex flex-col items-center">
              <span className="text-2xl font-extrabold" style={{ color: 'var(--color-primary)' }}>{val}</span>
              <span className="text-xs" style={{ color: 'var(--color-muted)' }}>{lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Project Card ───────────────────────────── */
function ProjectCard({ project }) {
  const img      = imageUrl(project.coverImage) || project.fallbackUrl;
  const catColor = CAT_COLOR[project.category] || 'var(--color-primary)';
  const catLabel = CAT_LABEL[project.category]  || project.category;

  return (
    <TiltCard as="article" id={`project-${project._id}`}
      className="glass-card group flex flex-col overflow-hidden h-full">

      {/* Cover */}
      <div className="relative h-48 overflow-hidden flex items-center justify-center"
        style={{ background: `${catColor}18` }}>
        {img
          ? <img src={img} alt={project.coverImage?.alt || project.title} loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          : (
            <div className="flex flex-col items-center gap-1 opacity-30 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/></svg>
            </div>
          )
        }
        {/* Category badge */}
        <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white"
          style={{ backgroundColor: catColor }}>{catLabel}</span>
        {/* Year badge */}
        <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full text-white"
          style={{ background: 'rgba(0,0,0,0.55)' }}>{project.year}</span>
        {/* Featured ribbon */}
        {project.featured && (
          <div className="absolute bottom-0 left-0 right-0 py-1.5 text-center text-xs font-bold text-white"
            style={{ background: 'rgba(41, 171, 226, 0.1)' }}>⭐ Featured Project</div>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-5 flex-grow">
        <h2 className="font-extrabold text-sm leading-snug gradient-text">{project.title}</h2>

        <div className="flex flex-wrap gap-3 text-xs" style={{ color: 'var(--color-muted)' }}>
          <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            {project.location}
          </span>
          {project.clientName && <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"/><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/></svg>
            {project.clientName}
          </span>}
          {project.projectValue && <span className="flex items-center gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            {project.projectValue}
          </span>}
        </div>

        {project.scopeOfWork && (
          <p className="text-xs leading-relaxed line-clamp-3" style={{ color: '#6B7280' }}>
            {project.scopeOfWork}
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3.5 border-t flex items-center justify-between mt-auto" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <Link to={`/projects/${project.slug || project._id}`}
          className="flex items-center gap-1.5 text-sm font-semibold group/link w-fit"
          style={{ color: 'var(--color-accent)' }}>
          View Project
          <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
        </Link>
        <span className="text-xs px-2.5 py-1 rounded-full font-medium"
          style={{ background: 'rgba(0,63,135,0.06)', color: 'var(--color-muted)' }}>
          {catLabel}
        </span>
      </div>
    </TiltCard>
  );
}

/* ── Skeleton ───────────────────────────────── */
function Skeleton() {
  return (
    <div className="rounded-2xl border overflow-hidden animate-pulse" style={{ background: 'var(--color-card)', borderColor: 'rgba(0,63,135,0.1)' }}>
      <div className="h-48" style={{ background: 'rgba(255,255,255,0.04)' }} />
      <div className="p-5 flex flex-col gap-3">
        <div className="h-4 rounded w-3/4" style={{ background: 'rgba(255,255,255,0.06)' }} />
        <div className="h-3 rounded w-1/2" style={{ background: 'rgba(255,255,255,0.04)' }} />
        <div className="h-3 rounded" style={{ background: 'rgba(255,255,255,0.04)' }} />
        <div className="h-3 rounded w-5/6" style={{ background: 'rgba(255,255,255,0.04)' }} />
      </div>
      <div className="px-5 py-3.5 border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
        <div className="h-4 rounded w-1/4" style={{ background: 'rgba(255,255,255,0.04)' }} />
      </div>
    </div>
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
    <>
      <Helmet>
        <title>Projects Portfolio — Infrastructure, Construction, PEB, MEP | Mahendram Landmark</title>
        <meta name="description" content="Browse 500+ projects by Mahendram Landmark Ventures: Infrastructure, Construction, Industrial, Warehousing, PEB, MEP, Fire Protection, Interiors and Facility Management across India." />
        <meta property="og:title" content="Projects Portfolio — Mahendram Landmark Ventures" />
        <meta property="og:description" content="500+ delivered projects across 9 categories. Pan India engineering and infrastructure portfolio." />
        <meta property="og:url" content="https://www.mahendramlandmark.com/projects" />
      </Helmet>
      <PageHero />
      <section id="projects-content" className="section-padding relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="container-xl relative z-10">

          {/* Search + filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            {/* Search */}
            <div className="relative w-full sm:max-w-sm flex-shrink-0">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none"
                width="15" height="15" viewBox="0 0 15 15" fill="none"
                xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
              >
                <circle cx="6.5" cy="6.5" r="5" stroke="#9CA3AF" strokeWidth="1.5"/>
                <line x1="10.354" y1="10.646" x2="13.5" y2="13.793" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <input id="projects-search" type="text" placeholder="Search by name or location…" value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2"
                style={{ borderColor: 'rgba(0,63,135,0.1)', background: 'var(--color-card)', color: 'var(--color-primary)' }} />
              {search && (
                <button onClick={() => setSearch('')} aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold"
                  style={{ color: 'var(--color-muted)' }}>✕</button>
              )}
            </div>

            {/* Category pills — scroll on mobile */}
            <div className="overflow-x-auto -mx-4 px-4 pb-1 sm:mx-0 sm:px-0">
              <div className="flex gap-2 min-w-max sm:flex-wrap sm:min-w-0" role="group" aria-label="Filter by category">
                {CATEGORIES.map((cat) => {
                  const active = activeCat === cat.value;
                  return (
                    <button key={cat.value} id={`proj-filter-${cat.value}`} aria-pressed={active}
                      onClick={() => setActiveCat(cat.value)}
                      className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap flex-shrink-0"
                      style={active
                        ? { background: 'var(--color-primary)', color: '#fff' }
                        : { background: 'var(--color-card)', color: 'var(--color-primary)' }}>
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CMS notice */}
          {error && (
            <div className="mb-8 px-5 py-3.5 rounded-xl text-xs font-medium flex items-start gap-2"
              style={{ background: 'rgba(41, 171, 226, 0.1)', color: '#92400E', border: '1px solid rgba(41, 171, 226, 0.1)' }}>
              ⚠️ {error} Replace <code className="font-mono bg-white/60 px-1 rounded mx-1">REPLACE</code>
              in <code className="font-mono bg-white/60 px-1 rounded mx-1">src/lib/sanityClient.js</code> with your Sanity project ID.
            </div>
          )}

          {/* Count */}
          {!loading && (
            <p className="text-xs font-medium mb-6" style={{ color: 'var(--color-muted)' }}>
              Showing <strong className="text-[var(--color-primary)]">{filtered.length}</strong> project{filtered.length !== 1 ? 's' : ''}
              {activeCat !== 'all' ? ` in "${CAT_LABEL[activeCat]}"` : ''}
              {search ? ` matching "${search}"` : ''}
            </p>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
              : filtered.length > 0
              ? filtered.map((p, i) => (
                  <div key={p._id} className={i === 0 && activeCat === 'all' ? 'md:col-span-2 lg:col-span-2' : ''}>
                    <ProjectCard project={p} />
                  </div>
                ))
              : (
                <div className="col-span-full flex flex-col items-center py-8 md:py-10 gap-3">
                  <span className="text-4xl">📭</span>
                  <p className="text-sm font-medium text-[var(--color-primary)]">No projects found.</p>
                  <button onClick={() => { setActiveCat('all'); setSearch(''); }}
                    className="text-sm font-semibold underline" style={{ color: 'var(--color-accent)' }}>
                    Clear filters
                  </button>
                </div>
              )}
          </div>

          {/* CTA */}
          {!loading && filtered.length > 0 && (
            <div className="mt-14 rounded-2xl p-10 text-center"
              style={{ background: 'var(--color-card)', border: '1px solid rgba(0,63,135,0.1)' }}>
              <h2 className="text-2xl font-extrabold gradient-text mb-2">Have a Project in Mind?</h2>
              <p className="text-sm mb-6" style={{ color: 'var(--color-muted)' }}>
                Share your requirements and our team will get back to you within 24 hours.
              </p>
              <Link to="/contact" id="projects-cta"
                className="inline-block px-8 py-3.5 rounded-sm text-sm font-bold text-white hover:opacity-90 transition-opacity"
                style={{ background: 'var(--color-accent)' }}>
                Request Proposal →
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

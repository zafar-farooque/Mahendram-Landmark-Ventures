import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAllPosts, imageUrl } from '../lib/sanityClient';

/* ── Constants ─────────────────────────────── */
const CATEGORIES = [
  { label: 'All',               value: 'all'                 },
  { label: 'Construction',      value: 'construction'        },
  { label: 'Infrastructure',    value: 'infrastructure'      },
  { label: 'Warehousing',       value: 'warehousing'         },
  { label: 'Facility Mgmt',     value: 'facility-management' },
  { label: 'PEB',               value: 'peb'                 },
  { label: 'MEP',               value: 'mep'                 },
  { label: 'Fire Protection',   value: 'fire-protection'     },
  { label: 'Interiors',         value: 'interiors'           },
  { label: 'Manufacturing',     value: 'manufacturing'       },
  { label: 'Govt Projects',     value: 'government-projects' },
];

const CAT_LABEL = Object.fromEntries(
  CATEGORIES.filter((c) => c.value !== 'all').map((c) => [c.value, c.label])
);

const CAT_COLOR = {
  construction: '#1A2B4A', infrastructure: '#0369A1', warehousing: '#7C3AED',
  'facility-management': '#065F46', peb: '#92400E', mep: '#B45309',
  'fire-protection': '#B91C1C', interiors: '#BE185D',
  manufacturing: '#1D4ED8', 'government-projects': '#374151',
};

const FALLBACK_POSTS = [
  { _id: 'f1', title: 'Top Trends in Commercial Construction 2025',              category: 'construction',        publishedAt: '2025-06-01', excerpt: 'Exploring the major shifts shaping commercial construction across India in 2025.', readTime: 6, author: 'Editorial Team' },
  { _id: 'f2', title: 'Why Pre-Engineered Buildings Are the Future of Warehousing', category: 'peb',             publishedAt: '2025-05-15', excerpt: 'PEB structures are transforming how India builds warehouses — faster, cheaper and stronger.', readTime: 5, author: 'Editorial Team' },
  { _id: 'f3', title: 'MEP Planning for Large Industrial Facilities',             category: 'mep',                publishedAt: '2025-05-01', excerpt: 'A deep dive into coordinated MEP design for manufacturing plants and industrial complexes.', readTime: 7, author: 'Editorial Team' },
  { _id: 'f4', title: 'Integrated Facility Management: Reducing Operational Costs', category: 'facility-management', publishedAt: '2025-04-20', excerpt: 'How integrated FM models reduce operational expenditure while improving occupant experience.', readTime: 5, author: 'Editorial Team' },
  { _id: 'f5', title: 'Smart Infrastructure Development Trends in India',          category: 'infrastructure',     publishedAt: '2025-04-05', excerpt: 'Government and private-led smart infrastructure projects are accelerating across urban India.', readTime: 6, author: 'Editorial Team' },
  { _id: 'f6', title: 'Workplace Design Trends for Modern Corporate Offices',      category: 'interiors',          publishedAt: '2025-03-18', excerpt: 'Post-pandemic workplace design is evolving — here is what leading corporates are prioritising.', readTime: 4, author: 'Editorial Team' },
];

function formatDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

/* ── Hero ──────────────────────────────────── */
function PageHero() {
  return (
    <section id="kc-hero" className="relative py-20 md:py-24 overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#0F1C2E 0%,#1A2B4A 70%,#1e3a5f 100%)' }}>
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="container-xl relative z-10 flex flex-col items-center text-center gap-5">
        <div className="flex items-center gap-2 text-xs font-medium" style={{ color: '#64748B' }}>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span style={{ color: '#D4891A' }}>Knowledge Center</span>
        </div>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border"
          style={{ color: '#D4891A', borderColor: 'rgba(212,137,26,0.4)', background: 'rgba(212,137,26,0.1)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          4–8 Articles Published Monthly
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
          Knowledge Center
        </h1>
        <p className="text-base max-w-xl leading-relaxed" style={{ color: '#8A9BB5' }}>
          Engineering insights, industry guides and infrastructure knowledge across 10+ categories.
        </p>
      </div>
    </section>
  );
}

/* ── Article Card ───────────────────────────── */
function ArticleCard({ post }) {
  const img      = imageUrl(post.coverImage);
  const catColor = CAT_COLOR[post.category] || '#1A2B4A';
  const catLabel = CAT_LABEL[post.category]  || post.category;

  return (
    <article id={`post-${post._id}`}
      className="group flex flex-col rounded-2xl border hover:-translate-y-1 transition-all duration-300 overflow-hidden"
      style={{ background: '#0D1B2E', borderColor: 'rgba(255,255,255,0.08)' }}>
      {/* Image / placeholder */}
      <div className="relative h-44 flex items-center justify-center overflow-hidden"
        style={{ background: `${catColor}18` }}>
        {img
          ? <img src={img} alt={post.coverImage?.alt || post.title} loading="lazy"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
          : <span className="text-5xl opacity-30">📰</span>}
        <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full text-white"
          style={{ backgroundColor: catColor }}>{catLabel}</span>
        {post.featured && (
          <span className="absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-full text-white"
            style={{ background: '#D4891A' }}>⭐ Featured</span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col gap-3 p-5 flex-grow">
        <div className="flex items-center justify-between text-xs" style={{ color: '#9CA3AF' }}>
          <span>{formatDate(post.publishedAt)}</span>
          {post.readTime && <span>📖 {post.readTime} min read</span>}
        </div>
        <h2 className="font-extrabold text-sm leading-snug text-white">
          {post.title}
        </h2>
        {post.excerpt && (
          <p className="text-xs leading-relaxed line-clamp-3" style={{ color: '#6B7280' }}>{post.excerpt}</p>
        )}
        {post.author && (
          <p className="text-xs font-medium" style={{ color: '#9CA3AF' }}>By {post.author}</p>
        )}
      </div>

      {/* Footer */}
      <div className="px-5 py-3.5 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
        <Link to={`/knowledge-center/${post.slug || post._id}`}
          className="flex items-center gap-1.5 text-sm font-semibold group/link w-fit"
          style={{ color: '#D4891A' }}>
          Read Article
          <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
        </Link>
      </div>
    </article>
  );
}

/* ── Skeleton ───────────────────────────────── */
function Skeleton() {
  return (
    <div className="rounded-2xl border overflow-hidden animate-pulse" style={{ background: '#0D1B2E', borderColor: 'rgba(255,255,255,0.08)' }}>
      <div className="h-44" style={{ background: 'rgba(255,255,255,0.04)' }} />
      <div className="p-5 flex flex-col gap-3">
        <div className="h-3 rounded w-1/3" style={{ background: 'rgba(255,255,255,0.06)' }} />
        <div className="h-4 rounded w-3/4" style={{ background: 'rgba(255,255,255,0.06)' }} />
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
export default function KnowledgeCenter() {
  const [posts,     setPosts]     = useState([]);
  const [loading,   setLoading]   = useState(true);
  const [error,     setError]     = useState(null);
  const [activeCat, setActiveCat] = useState('all');
  const [search,    setSearch]    = useState('');

  useEffect(() => {
    getAllPosts()
      .then((data) => { setPosts(data?.length ? data : FALLBACK_POSTS); setLoading(false); })
      .catch(() => { setPosts(FALLBACK_POSTS); setError('Sanity not yet configured — showing sample articles.'); setLoading(false); });
  }, []);

  const filtered = posts.filter((p) => {
    const matchCat    = activeCat === 'all' || p.category === activeCat;
    const matchSearch = !search.trim() ||
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      (p.excerpt || '').toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <Helmet>
        <title>Knowledge Center — Engineering & Infrastructure Insights | Mahendram Landmark</title>
        <meta name="description" content="Engineering insights, construction guides, PEB, MEP, facility management articles and infrastructure knowledge published monthly by Mahendram Landmark Ventures." />
        <meta property="og:title" content="Knowledge Center — Mahendram Landmark Ventures" />
        <meta property="og:description" content="4–8 expert articles monthly across Construction, Infrastructure, PEB, MEP, Interiors, Facility Management and more." />
        <meta property="og:url" content="https://www.mahendramlandmark.com/knowledge-center" />
      </Helmet>
      <PageHero />
      <section id="kc-content" className="section-padding" style={{ background: '#050A14' }}>
        <div className="container-xl">

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
              <input
                id="kc-search"
                type="text"
                placeholder="Search articles…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent"
                style={{ borderColor: 'rgba(255,255,255,0.1)', background: '#0D1B2E', color: '#FFFFFF' }}
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold"
                  style={{ color: '#9CA3AF' }}
                  aria-label="Clear search"
                >✕</button>
              )}
            </div>

            {/* Category pills — horizontal scroll on mobile */}
            <div className="overflow-x-auto -mx-4 px-4 pb-1 sm:mx-0 sm:px-0">
              <div className="flex gap-2 min-w-max sm:flex-wrap sm:min-w-0" role="group" aria-label="Filter by category">
                {CATEGORIES.map((cat) => {
                  const active = activeCat === cat.value;
                  return (
                    <button
                      key={cat.value}
                      id={`kc-filter-${cat.value}`}
                      aria-pressed={active}
                      onClick={() => setActiveCat(cat.value)}
                      className="px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap flex-shrink-0"
                      style={
                        active
                          ? { background: '#1A2B4A', color: '#fff' }
                          : { background: '#0D1B2E', color: '#8A9BB5', border: '1px solid rgba(255,255,255,0.08)' }
                      }
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CMS config notice */}
          {error && (
            <div className="mb-8 px-5 py-3.5 rounded-xl text-xs font-medium flex items-start gap-2"
              style={{ background: 'rgba(212,137,26,0.08)', color: '#92400E', border: '1px solid rgba(212,137,26,0.2)' }}>
              ⚠️ {error} Replace <code className="font-mono bg-white/60 px-1 rounded mx-1">REPLACE</code>
              in <code className="font-mono bg-white/60 px-1 rounded mx-1">src/lib/sanityClient.js</code> with your Sanity project ID.
            </div>
          )}

          {/* Count */}
          {!loading && (
            <p className="text-xs font-medium mb-6" style={{ color: '#8A9BB5' }}>
              Showing <strong className="text-white">{filtered.length}</strong> article{filtered.length !== 1 ? 's' : ''}
              {activeCat !== 'all' ? ` in "${CAT_LABEL[activeCat]}"` : ''}
              {search ? ` matching "${search}"` : ''}
            </p>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading
              ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
              : filtered.length > 0
              ? filtered.map((p) => <ArticleCard key={p._id} post={p} />)
              : (
                <div className="col-span-full flex flex-col items-center py-16 gap-3">
                  <span className="text-4xl">📭</span>
                  <p className="text-sm font-medium" style={{ color: '#6B7280' }}>No articles found.</p>
                  <button onClick={() => { setActiveCat('all'); setSearch(''); }}
                    className="text-sm font-semibold underline" style={{ color: '#D4891A' }}>
                    Clear filters
                  </button>
                </div>
              )}
          </div>

          {/* Bottom CTA */}
          {!loading && filtered.length > 0 && (
            <div className="text-center mt-14">
              <p className="text-sm mb-4" style={{ color: '#6B7280' }}>
                Stay updated with engineering insights published 4–8 times monthly.
              </p>
              <Link to="/contact" id="kc-cta"
                className="inline-block px-8 py-3.5 rounded-sm text-sm font-bold text-white hover:opacity-90 transition-opacity"
                style={{ background: '#D4891A' }}>
                Subscribe to Updates →
              </Link>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

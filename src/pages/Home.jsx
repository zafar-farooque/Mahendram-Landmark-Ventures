import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/* ─────────────────────────────────────────
   Data
───────────────────────────────────────── */
const STATS = [
  { value: '500+',     label: 'Projects Delivered'  },
  { value: '14',       label: 'Service Lines'        },
  { value: 'Pan India', label: 'Operations'          },
  { value: '3',        label: 'Business Divisions'   },
];

const DIVISIONS = [
  {
    id:       'mlv',
    name:     'Mahendram Landmark Ventures',
    sub:      'Engineering & Infrastructure',
    desc:     'Turnkey engineering, construction, PEB, MEP, fire protection, industrial infrastructure and large-scale project delivery across India.',
    icon:     '🏗',
    accent:   '#1A2B4A',
    to:       '/about',
  },
  {
    id:       'inovvio',
    name:     'Inovvio Interior',
    sub:      'Design & Interior Solutions',
    desc:     'Premium workplace strategy, interior design, office fit-out, retail and hospitality interiors that merge design with business productivity.',
    icon:     '🎨',
    accent:   '#D4891A',
    to:       '/services',
  },
  {
    id:       'ortus',
    name:     'Ortus Apex',
    sub:      'Facility & Asset Management',
    desc:     'Integrated technical facility management, soft services, preventive maintenance, AMC and occupant experience solutions.',
    icon:     '⚙️',
    accent:   '#2563EB',
    to:       '/services',
  },
];

const SOLUTIONS = [
  { icon: '🏗', title: 'Build',    desc: 'Construction, Infrastructure & Industrial Facilities'  },
  { icon: '✏️', title: 'Design',   desc: 'Architecture, Interiors & Engineering'                 },
  { icon: '⚡', title: 'Install',  desc: 'MEP, Fire Protection & Electrical Systems'             },
  { icon: '🔧', title: 'Operate',  desc: 'Facility Management & Maintenance'                     },
  { icon: '🔄', title: 'Upgrade',  desc: 'Renovation & Modernization'                           },
  { icon: '📦', title: 'Supply',   desc: 'Construction Materials & Industrial Products'          },
];

const INDUSTRIES = [
  'Real Estate', 'Manufacturing', 'Warehousing', 'Logistics',
  'Healthcare', 'Hospitality', 'Retail', 'Education',
  'Corporate Offices', 'Government', 'PSU', 'Railways',
  'Ports', 'Power', 'Data Centers',
];

const WHY_US = [
  { icon: '🎓', title: 'Engineering Expertise',      desc: 'Qualified multidisciplinary professionals across all service lines.'     },
  { icon: '🔗', title: 'Integrated Service Model',   desc: 'One partner covering engineering, design, build and operations.'         },
  { icon: '🗺️', title: 'Pan India Delivery',          desc: 'Active projects across multiple states and regions of India.'           },
  { icon: '📊', title: 'Project Visibility',          desc: 'Structured monitoring, digital dashboards and transparent reporting.'    },
  { icon: '✅', title: 'Quality Commitment',          desc: 'System-driven quality assurance at every stage of project delivery.'     },
  { icon: '🛡️', title: 'Long-Term Support',           desc: 'From construction to ongoing facility operations and asset lifecycle.'   },
];

/* ─────────────────────────────────────────
   Sub-Components
───────────────────────────────────────── */

/** Reusable section heading */
function SectionHeading({ eyebrow, title, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#D4891A' }}>
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: '#1A2B4A' }}>
        {title}
      </h2>
    </div>
  );
}

/* ─────────────────────────────────────────
   Section 1 — Hero
───────────────────────────────────────── */
function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F1C2E 0%, #1A2B4A 60%, #1e3a5f 100%)' }}
    >
      {/* Decorative grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow blob */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4891A 0%, transparent 70%)' }}
      />

      <div className="container-xl relative z-10 py-20 md:py-32 flex flex-col items-center text-center gap-8">
        {/* Badge */}
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border"
          style={{ color: '#D4891A', borderColor: 'rgba(212,137,26,0.4)', background: 'rgba(212,137,26,0.1)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          India's Integrated Engineering Company
        </span>

        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] max-w-4xl tracking-tight">
          Building Infrastructure.{' '}
          <span style={{ color: '#D4891A' }}>Creating Workspaces.</span>{' '}
          Managing Assets.
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: '#94A3B8' }}>
          Mahendram Landmark Ventures Pvt Ltd delivers Engineering, Construction, Infrastructure,
          PEB, MEP, Fire Protection, Industrial Solutions, Warehousing, Facility Management and
          Interior Fit-Out Services across India through its specialized business divisions.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <Link
            to="/contact"
            id="hero-cta-primary"
            className="px-7 py-3.5 rounded-sm text-sm font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-95 shadow-lg"
            style={{ background: '#D4891A', boxShadow: '0 4px 20px rgba(212,137,26,0.4)' }}
          >
            Request Proposal
          </Link>
          <Link
            to="/contact"
            id="hero-cta-secondary"
            className="px-7 py-3.5 rounded-sm text-sm font-bold text-white transition-all duration-200 hover:bg-white/10 active:scale-95 border"
            style={{ borderColor: 'rgba(255,255,255,0.35)' }}
          >
            Schedule Consultation
          </Link>
        </div>

        {/* Trust signals */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
          {[
            '✔ Multi-Disciplinary Expertise',
            '✔ End-to-End Delivery',
            '✔ Single Point Accountability',
            '✔ Safety & Compliance Focused',
          ].map((t) => (
            <span key={t} className="text-xs font-medium" style={{ color: '#64748B' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Section 2 — Stats Bar
───────────────────────────────────────── */
function StatsBar() {
  return (
    <section id="stats-bar" style={{ backgroundColor: '#F7F8FA' }} className="border-b border-gray-200">
      <div className="container-xl py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-gray-200">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center text-center px-6 py-2">
              <span
                className="text-3xl md:text-4xl font-extrabold tracking-tight"
                style={{ color: '#1A2B4A' }}
              >
                {s.value}
              </span>
              <span className="text-sm font-medium mt-1" style={{ color: '#6B7280' }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Section 3 — Group Structure
───────────────────────────────────────── */
function GroupStructure() {
  return (
    <section id="group-structure" className="section-padding bg-white">
      <div className="container-xl">
        <SectionHeading eyebrow="Our Group" title="Three Divisions. One Integrated Vision." />
        <div className="grid md:grid-cols-3 gap-6">
          {DIVISIONS.map((d) => (
            <div
              key={d.id}
              id={`division-${d.id}`}
              className="group relative flex flex-col gap-5 p-8 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              {/* Accent bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                style={{ backgroundColor: d.accent }}
              />

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: `${d.accent}15` }}
              >
                {d.icon}
              </div>

              {/* Text */}
              <div>
                <h3 className="font-extrabold text-lg leading-tight" style={{ color: '#1A2B4A' }}>
                  {d.name}
                </h3>
                <p className="text-xs font-semibold tracking-wide uppercase mt-1" style={{ color: d.accent }}>
                  {d.sub}
                </p>
                <p className="text-sm leading-relaxed mt-3" style={{ color: '#6B7280' }}>
                  {d.desc}
                </p>
              </div>

              {/* Link */}
              <Link
                to={d.to}
                className="mt-auto text-sm font-semibold flex items-center gap-1.5 transition-all duration-200 w-fit"
                style={{ color: d.accent }}
                onMouseEnter={(e) => (e.currentTarget.style.gap = '8px')}
                onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}
              >
                Learn More <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Section 4 — Solutions / Services Grid
───────────────────────────────────────── */
function SolutionsGrid() {
  return (
    <section id="solutions-grid" className="section-padding" style={{ backgroundColor: '#F7F8FA' }}>
      <div className="container-xl">
        <SectionHeading eyebrow="Solutions We Deliver" title="What We Do For You" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {SOLUTIONS.map((s) => (
            <div
              key={s.title}
              id={`solution-${s.title.toLowerCase()}`}
              className="group flex flex-col items-start gap-4 p-7 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-250 cursor-default"
            >
              {/* Icon circle */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                style={{ background: 'linear-gradient(135deg, #1A2B4A 0%, #1e3a5f 100%)' }}
              >
                <span>{s.icon}</span>
              </div>

              <div>
                <h3
                  className="text-xl font-extrabold"
                  style={{ color: '#1A2B4A' }}
                >
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed mt-1" style={{ color: '#6B7280' }}>
                  {s.desc}
                </p>
              </div>

              {/* Hover accent underline */}
              <div
                className="h-0.5 w-0 rounded-full transition-all duration-300 group-hover:w-10"
                style={{ backgroundColor: '#D4891A' }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Section 5 — Industries Marquee Strip
───────────────────────────────────────── */
function IndustriesStrip() {
  // Duplicate array so the loop is seamless
  const items = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <section
      id="industries-strip"
      className="py-10 overflow-hidden"
      style={{ backgroundColor: '#1A2B4A' }}
    >
      <p
        className="text-center text-xs font-bold tracking-[0.2em] uppercase mb-6"
        style={{ color: '#D4891A' }}
      >
        Industries We Serve
      </p>

      {/* Marquee track */}
      <div className="relative flex">
        {/* Fade edges */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(90deg, #1A2B4A, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(-90deg, #1A2B4A, transparent)' }}
        />

        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((ind, i) => (
            <span
              key={`${ind}-${i}`}
              className="inline-flex items-center gap-2 mx-5 text-sm font-semibold text-white/80 select-none"
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#D4891A' }} />
              {ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Section 6 — Why Us
───────────────────────────────────────── */
function WhyUs() {
  return (
    <section id="why-us" className="section-padding bg-white">
      <div className="container-xl">
        <SectionHeading eyebrow="Why Choose Us" title="Why Organizations Trust Mahendram Landmark" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((item) => (
            <div
              key={item.title}
              id={`why-${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="flex gap-4 p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: 'rgba(26,43,74,0.07)' }}
              >
                {item.icon}
              </div>

              <div>
                <h3 className="font-bold text-sm mb-1" style={{ color: '#1A2B4A' }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Section 7 — CTA Banner
───────────────────────────────────────── */
function CTABanner() {
  return (
    <section
      id="cta-banner"
      className="py-20"
      style={{ background: 'linear-gradient(135deg, #D4891A 0%, #b87315 100%)' }}
    >
      <div className="container-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            Let's Build Something<br className="hidden md:block" /> Exceptional Together
          </h2>
          <p className="text-white/80 text-base max-w-lg">
            Request a consultation today. Our engineering team will assess your project
            requirements and deliver a tailored proposal within 48 hours.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <Link
            to="/contact"
            id="cta-banner-primary"
            className="px-8 py-4 rounded-sm text-sm font-bold bg-white transition-all duration-200 hover:bg-gray-50 active:scale-95 shadow-lg"
            style={{ color: '#1A2B4A' }}
          >
            Get in Touch →
          </Link>
          <Link
            to="/services"
            id="cta-banner-secondary"
            className="px-8 py-4 rounded-sm text-sm font-bold text-white border border-white/40 transition-all duration-200 hover:bg-white/10 active:scale-95"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   Page Export
───────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Helmet>
        <title>Mahendram Landmark Ventures Pvt Ltd — Integrated Engineering & Infrastructure India</title>
        <meta name="description" content="Mahendram Landmark Ventures delivers Engineering, Construction, PEB, MEP, Fire Protection, Interiors and Facility Management across India. 500+ projects. Pan India." />
        <meta property="og:title" content="Mahendram Landmark Ventures Pvt Ltd — Integrated Engineering & Infrastructure" />
        <meta property="og:description" content="India's integrated engineering, infrastructure, interior and asset management company. 3 divisions. 14 service lines. 500+ projects delivered Pan India." />
        <meta property="og:url" content="https://www.mahendramlandmark.com/" />
      </Helmet>
      <Hero />
      <StatsBar />
      <GroupStructure />
      <SolutionsGrid />
      <IndustriesStrip />
      <WhyUs />
      <CTABanner />
    </>
  );
}

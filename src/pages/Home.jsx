import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const STATS = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '14', label: 'Service Lines' },
  { value: 'Pan India', label: 'Operations' },
  { value: '3', label: 'Business Divisions' },
];

const DIVISIONS = [
  { id: 'mlv', name: 'Mahendram Landmark Ventures', sub: 'Engineering & Infrastructure', desc: 'Turnkey engineering, construction, PEB, MEP, fire protection, industrial infrastructure and large-scale project delivery across India.', icon: '🏗', accent: '#D4891A', to: '/about' },
  { id: 'inovvio', name: 'Inovvio Interior', sub: 'Design & Interior Solutions', desc: 'Premium workplace strategy, interior design, office fit-out, retail and hospitality interiors that merge design with business productivity.', icon: '🎨', accent: '#60A5FA', to: '/services' },
  { id: 'ortus', name: 'Ortus Apex', sub: 'Facility & Asset Management', desc: 'Integrated technical facility management, soft services, preventive maintenance, AMC and occupant experience solutions.', icon: '⚙️', accent: '#34D399', to: '/services' },
];

const SOLUTIONS = [
  { icon: '🏗', title: 'Build',   desc: 'Construction, Infrastructure & Industrial Facilities' },
  { icon: '✏️', title: 'Design',  desc: 'Architecture, Interiors & Engineering' },
  { icon: '⚡', title: 'Install', desc: 'MEP, Fire Protection & Electrical Systems' },
  { icon: '🔧', title: 'Operate', desc: 'Facility Management & Maintenance' },
  { icon: '🔄', title: 'Upgrade', desc: 'Renovation & Modernization' },
  { icon: '📦', title: 'Supply',  desc: 'Construction Materials & Industrial Products' },
];

const INDUSTRIES = ['Real Estate','Manufacturing','Warehousing','Logistics','Healthcare','Hospitality','Retail','Education','Corporate Offices','Government','PSU','Railways','Ports','Power','Data Centers'];

const WHY_US = [
  { icon: '🎓', title: 'Engineering Expertise',    desc: 'Qualified multidisciplinary professionals across all service lines.' },
  { icon: '🔗', title: 'Integrated Service Model', desc: 'One partner covering engineering, design, build and operations.' },
  { icon: '🗺️', title: 'Pan India Delivery',        desc: 'Active projects across multiple states and regions of India.' },
  { icon: '📊', title: 'Project Visibility',        desc: 'Structured monitoring, digital dashboards and transparent reporting.' },
  { icon: '✅', title: 'Quality Commitment',        desc: 'System-driven quality assurance at every stage of project delivery.' },
  { icon: '🛡️', title: 'Long-Term Support',         desc: 'From construction to ongoing facility operations and asset lifecycle.' },
];

function SectionHeading({ eyebrow, title, center = true }) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      {eyebrow && <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#D4891A' }}>{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl font-extrabold text-white">{title}</h2>
    </div>
  );
}

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden flex items-center" style={{ background: '#050A14', minHeight: '92vh' }}>
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,137,26,0.18) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="container-xl relative z-10 py-20 md:py-32 flex flex-col items-center text-center gap-8">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border" style={{ color: '#D4891A', borderColor: 'rgba(212,137,26,0.4)', background: 'rgba(212,137,26,0.08)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          India's Integrated Engineering Company
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] max-w-4xl tracking-tight">
          Building Infrastructure.{' '}
          <span style={{ background: 'linear-gradient(135deg,#D4891A,#f5c842)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Creating Workspaces.</span>{' '}
          Managing Assets.
        </h1>
        <p className="text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: '#8A9BB5' }}>
          Mahendram Landmark Ventures Pvt Ltd delivers Engineering, Construction, Infrastructure, PEB, MEP, Fire Protection, Industrial Solutions, Warehousing, Facility Management and Interior Fit-Out Services across India.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
          <Link to="/contact" id="hero-cta-primary" className="px-7 py-3.5 rounded-sm text-sm font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-95" style={{ background: 'linear-gradient(135deg,#D4891A,#b87315)', boxShadow: '0 4px 24px rgba(212,137,26,0.4)' }}>
            Request Proposal
          </Link>
          <Link to="/contact" id="hero-cta-secondary" className="px-7 py-3.5 rounded-sm text-sm font-bold text-white border transition-all duration-200 hover:bg-white/10 active:scale-95" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
            Schedule Consultation
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4">
          {['✔ Multi-Disciplinary Expertise','✔ End-to-End Delivery','✔ Single Point Accountability','✔ Safety & Compliance Focused'].map((t) => (
            <span key={t} className="text-xs font-medium" style={{ color: '#8A9BB5' }}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section id="stats-bar" className="py-12" style={{ background: '#0D1B2E', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container-xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col items-center gap-1">
            <span className="text-3xl md:text-4xl font-extrabold" style={{ color: '#D4891A' }}>{s.value}</span>
            <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#8A9BB5' }}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function GroupStructure() {
  return (
    <section id="group-structure" className="section-padding" style={{ background: '#050A14' }}>
      <div className="container-xl">
        <SectionHeading eyebrow="Group Structure" title="Three Specialized Divisions" />
        <div className="grid md:grid-cols-3 gap-6">
          {DIVISIONS.map((d) => (
            <Link to={d.to} key={d.id} id={`division-${d.id}`}
              className="group relative flex flex-col gap-5 p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              style={{ background: '#0D1B2E', borderColor: 'rgba(255,255,255,0.07)' }}>
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: `linear-gradient(90deg,${d.accent},transparent)` }} />
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl" style={{ background: `${d.accent}18` }}>{d.icon}</div>
              <div>
                <h3 className="font-extrabold text-base text-white leading-snug">{d.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wide mt-1" style={{ color: d.accent }}>{d.sub}</p>
                <p className="text-sm leading-relaxed mt-3" style={{ color: '#8A9BB5' }}>{d.desc}</p>
              </div>
              <span className="text-xs font-semibold mt-auto" style={{ color: d.accent }}>Learn More →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsGrid() {
  return (
    <section id="solutions-grid" className="section-padding" style={{ background: '#0D1B2E' }}>
      <div className="container-xl">
        <SectionHeading eyebrow="What We Do" title="Integrated Engineering Solutions" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {SOLUTIONS.map((s) => (
            <div key={s.title} className="group flex flex-col gap-3 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1" style={{ background: '#050A14', borderColor: 'rgba(255,255,255,0.07)' }}>
              <span className="text-3xl">{s.icon}</span>
              <h3 className="font-extrabold text-base text-white">{s.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: '#8A9BB5' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesStrip() {
  const items = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <section id="industries-strip" className="py-10 overflow-hidden" style={{ background: '#050A14', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <p className="text-center text-xs font-bold tracking-[0.2em] uppercase mb-6" style={{ color: '#D4891A' }}>Industries We Serve</p>
      <div className="relative flex">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg,#050A14,transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(-90deg,#050A14,transparent)' }} />
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((ind, i) => (
            <span key={`${ind}-${i}`} className="inline-flex items-center gap-2 mx-6 text-sm font-semibold select-none" style={{ color: '#8A9BB5' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#D4891A' }} />{ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="section-padding" style={{ background: '#0D1B2E' }}>
      <div className="container-xl">
        <SectionHeading eyebrow="Why Choose Us" title="The Mahendram Landmark Advantage" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((w) => (
            <div key={w.title} className="flex gap-4 p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5" style={{ background: '#050A14', borderColor: 'rgba(255,255,255,0.07)' }}>
              <span className="text-2xl flex-shrink-0 mt-0.5">{w.icon}</span>
              <div>
                <h3 className="font-bold text-sm text-white mb-1">{w.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#8A9BB5' }}>{w.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section id="cta-banner" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#0D1B2E 0%,#050A14 100%)' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center,rgba(212,137,26,0.12) 0%,transparent 70%)' }} />
      <div className="container-xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div className="flex flex-col gap-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
            Let's Build Something<br className="hidden md:block" /> Exceptional Together
          </h2>
          <p className="max-w-lg text-base leading-relaxed" style={{ color: '#8A9BB5' }}>
            Request a consultation today. Our engineering team will assess your project requirements and deliver a tailored proposal within 48 hours.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <Link to="/contact" id="cta-banner-primary" className="px-8 py-4 rounded-sm text-sm font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-95" style={{ background: 'linear-gradient(135deg,#D4891A,#b87315)', boxShadow: '0 4px 24px rgba(212,137,26,0.35)' }}>
            Get in Touch →
          </Link>
          <Link to="/services" id="cta-banner-secondary" className="px-8 py-4 rounded-sm text-sm font-bold text-white border transition-all duration-200 hover:bg-white/10 active:scale-95" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}

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

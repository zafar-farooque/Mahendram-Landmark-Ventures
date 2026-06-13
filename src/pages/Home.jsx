import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import CountUp from '../components/CountUp';
import Footer from '../components/Footer';

const STATS = [
  { target: 500, suffix: '+', label: 'Projects Delivered' },
  { target: 14,  suffix: '',  label: 'Service Lines'      },
  { target: 20,  suffix: '+', label: 'Industries Served'  },
  { target: 3,   suffix: '',  label: 'Business Divisions' },
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

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden flex items-center"
      style={{ background: '#050A14', minHeight: '100vh', scrollSnapAlign: 'start' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212,137,26,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="hero-grid" />
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(212,137,26,0.18) 0%, transparent 70%)', filter: 'blur(40px)', zIndex: 0 }} />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 70%)', filter: 'blur(60px)', zIndex: 0 }} />
      {/* Glow rings */}
      <div className="glow-ring" style={{ width: '600px', height: '600px', animationDelay: '0s' }} />
      <div className="glow-ring" style={{ width: '750px', height: '750px', animationDelay: '0.8s' }} />
      <div className="glow-ring" style={{ width: '900px', height: '900px', animationDelay: '1.6s' }} />
      <div className="container-xl relative z-10 py-20 md:py-32 flex flex-col items-center text-center gap-8">
        <FadeIn delay={0}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border" style={{ color: '#D4891A', borderColor: 'rgba(212,137,26,0.4)', background: 'rgba(212,137,26,0.08)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
            India's Integrated Engineering Company
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold gradient-text leading-[1.1] max-w-4xl tracking-tight">
            Building Infrastructure.{' '}
            <span style={{ background: 'linear-gradient(135deg,#D4891A,#f5c842)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Creating Workspaces.</span>{' '}
            Managing Assets.
          </h1>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="text-base md:text-lg max-w-2xl leading-relaxed" style={{ color: '#8A9BB5' }}>
            Mahendram Landmark Ventures Pvt Ltd delivers Engineering, Construction, Infrastructure, PEB, MEP, Fire Protection, Industrial Solutions, Warehousing, Facility Management and Interior Fit-Out Services across India.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" id="hero-cta-primary" className="px-7 py-3.5 rounded-sm text-sm font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-95" style={{ background: 'linear-gradient(135deg,#D4891A,#b87315)', boxShadow: '0 4px 24px rgba(212,137,26,0.4)' }}>
              Request Proposal
            </Link>
            <Link to="/contact" id="hero-cta-secondary" className="px-7 py-3.5 rounded-sm text-sm font-bold text-white border transition-all duration-200 hover:bg-white/10 active:scale-95" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
              Schedule Consultation
            </Link>
          </div>
        </FadeIn>
        <FadeIn delay={0.4}>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {['✔ Multi-Disciplinary Expertise','✔ End-to-End Delivery','✔ Single Point Accountability','✔ Safety & Compliance Focused'].map((t) => (
              <span key={t} className="text-xs font-medium" style={{ color: '#8A9BB5' }}>{t}</span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <section id="stats-bar" className="flex items-center relative overflow-hidden"
      style={{ background: '#0D1B2E', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', minHeight: '100vh', scrollSnapAlign: 'start' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212,137,26,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
      <div className="container-xl w-full relative z-10">
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#D4891A' }}>By The Numbers</p>
            <h2 className="text-3xl md:text-4xl font-extrabold gradient-text">Our Track Record</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <div className="glass-card flex flex-col items-center text-center p-8 relative overflow-hidden">
                {/* Amber top border */}
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(90deg,transparent,#D4891A,transparent)' }} />
                <span className="text-5xl font-bold text-white mb-3">
                  <CountUp target={s.target} suffix={s.suffix} duration={2000} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#8A9BB5' }}>{s.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function GroupStructure() {
  return (
    <section id="group-structure" className="section-padding flex items-center relative overflow-hidden"
      style={{ background: '#050A14', minHeight: '100vh', scrollSnapAlign: 'start' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212,137,26,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
      <div className="container-xl w-full relative z-10">
        <FadeIn delay={0}>
          <div className="mb-12 text-center">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#D4891A' }}>Group Structure</p>
            <h2 className="text-3xl md:text-4xl font-extrabold gradient-text">Three Specialized Divisions</h2>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6">
          {DIVISIONS.map((d, i) => (
            <FadeIn key={d.id} delay={i * 0.1}>
              <Link to={d.to} id={`division-${d.id}`}
                className="glass-card group relative flex flex-col gap-5 p-8 overflow-hidden h-full">
                <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl" style={{ background: `linear-gradient(90deg,${d.accent},transparent)` }} />
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl" style={{ background: `${d.accent}18` }}>{d.icon}</div>
                <div>
                  <h3 className="font-extrabold text-base text-white leading-snug">{d.name}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wide mt-1" style={{ color: d.accent }}>{d.sub}</p>
                  <p className="text-sm leading-relaxed mt-3" style={{ color: '#8A9BB5' }}>{d.desc}</p>
                </div>
                <span className="text-xs font-semibold mt-auto" style={{ color: d.accent }}>Learn More →</span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function SolutionsGrid() {
  return (
    <section id="solutions-grid" className="section-padding flex items-center relative overflow-hidden"
      style={{ background: '#0D1B2E', minHeight: '100vh', scrollSnapAlign: 'start' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212,137,26,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
      <div className="container-xl w-full relative z-10">
        <FadeIn delay={0}>
          <div className="mb-12 text-center">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#D4891A' }}>What We Do</p>
            <h2 className="text-3xl md:text-4xl font-extrabold gradient-text">Integrated Engineering Solutions</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {SOLUTIONS.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="flex flex-col gap-3 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1" style={{ background: '#050A14', borderColor: 'rgba(255,255,255,0.07)' }}>
                <span className="text-3xl">{s.icon}</span>
                <h3 className="font-extrabold text-base text-white">{s.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: '#8A9BB5' }}>{s.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesStrip() {
  const items = [...INDUSTRIES, ...INDUSTRIES];
  return (
    <section id="industries-strip" className="py-10 overflow-hidden flex flex-col items-center justify-center relative"
      style={{ background: '#050A14', borderTop: '1px solid rgba(255,255,255,0.05)', minHeight: '100vh', scrollSnapAlign: 'start' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212,137,26,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
      <FadeIn delay={0}>
        <p className="text-center text-xs font-bold tracking-[0.2em] uppercase mb-6 relative z-10" style={{ color: '#D4891A' }}>Industries We Serve</p>
      </FadeIn>
      <div className="relative flex w-full z-10">
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
    <section id="why-us" className="section-padding flex items-center relative overflow-hidden"
      style={{ background: '#0D1B2E', minHeight: '100vh', scrollSnapAlign: 'start' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212,137,26,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
      <div className="container-xl w-full relative z-10">
        <FadeIn delay={0}>
          <div className="mb-12 text-center">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#D4891A' }}>Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold gradient-text">The Mahendram Landmark Advantage</h2>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((w, i) => (
            <FadeIn key={w.title} delay={i * 0.1}>
              <div className="flex gap-4 p-6 rounded-2xl border transition-all duration-200 hover:-translate-y-0.5" style={{ background: '#050A14', borderColor: 'rgba(255,255,255,0.07)' }}>
                <span className="text-2xl flex-shrink-0 mt-0.5">{w.icon}</span>
                <div>
                  <h3 className="font-bold text-sm text-white mb-1">{w.title}</h3>
                  <p className="text-xs leading-relaxed" style={{ color: '#8A9BB5' }}>{w.desc}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section id="cta-banner" className="py-20 relative overflow-hidden flex items-center"
      style={{ background: 'linear-gradient(135deg,#0D1B2E 0%,#050A14 100%)', minHeight: '100vh', scrollSnapAlign: 'start' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212,137,26,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212,137,26,0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center,rgba(212,137,26,0.12) 0%,transparent 70%)' }} />
      <div className="container-xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left w-full">
        <FadeIn delay={0}>
          <div className="flex flex-col gap-3">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold gradient-text leading-tight">
              Let's Build Something<br className="hidden md:block" /> Exceptional Together
            </h2>
            <p className="max-w-lg text-base leading-relaxed" style={{ color: '#8A9BB5' }}>
              Request a consultation today. Our engineering team will assess your project requirements and deliver a tailored proposal within 48 hours.
            </p>
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link to="/contact" id="cta-banner-primary" className="px-8 py-4 rounded-sm text-sm font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-95" style={{ background: 'linear-gradient(135deg,#D4891A,#b87315)', boxShadow: '0 4px 24px rgba(212,137,26,0.35)' }}>
              Get in Touch →
            </Link>
            <Link to="/services" id="cta-banner-secondary" className="px-8 py-4 rounded-sm text-sm font-bold text-white border transition-all duration-200 hover:bg-white/10 active:scale-95" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
              Explore Services
            </Link>
          </div>
        </FadeIn>
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
      <div
        id="home-scroll-container"
        className="scroll-smooth"
        style={{ scrollSnapType: 'y mandatory', overflowY: 'scroll', height: 'calc(100vh - 64px)' }}
        onScroll={(e) =>
          window.dispatchEvent(
            new CustomEvent('containerScroll', { detail: { scrollTop: e.currentTarget.scrollTop } })
          )
        }
      >
        <Hero />
        <StatsBar />
        <GroupStructure />
        <SolutionsGrid />
        <IndustriesStrip />
        <WhyUs />
        <CTABanner />
        <div style={{ scrollSnapAlign: 'start' }}>
          <Footer />
        </div>
      </div>
    </>
  );
}

import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';

const VALUES = [
  { icon: '🤝', label: 'Integrity' }, { icon: '💪', label: 'Commitment' },
  { icon: '💡', label: 'Innovation' }, { icon: '✅', label: 'Quality' },
  { icon: '🛡️', label: 'Safety' }, { icon: '🌱', label: 'Sustainability' },
  { icon: '🏆', label: 'Customer Success' },
];

const DIVISIONS = [
  { name: 'Mahendram Landmark Ventures Pvt Ltd', sub: 'Engineering, Infrastructure & Contracting', icon: '🏗', color: '#D4891A', desc: 'Turnkey engineering, construction, PEB, MEP, fire protection, industrial infrastructure and large-scale project delivery across India.' },
  { name: 'Inovvio Interior', sub: 'Design, Interior & Workplace Solutions', icon: '🎨', color: '#60A5FA', desc: 'Premium workplace strategy, interior design, office fit-out, retail and hospitality interiors that merge design with business productivity.' },
  { name: 'Ortus Apex', sub: 'Integrated Facility & Asset Management', icon: '⚙️', color: '#34D399', desc: 'Integrated technical facility management, soft services, preventive maintenance, AMC and occupant experience solutions.' },
];

const TIMELINE = [
  { year: '2010', event: 'Company Founded' },
  { year: '2013', event: 'First Major Infrastructure Project' },
  { year: '2016', event: 'Launch of Inovvio Interior Division' },
  { year: '2019', event: 'Pan India Operations Established' },
  { year: '2021', event: 'Launch of Ortus Apex FM Division' },
  { year: '2024', event: '500+ Projects Milestone Achieved' },
];

const BORDER = 'rgba(255,255,255,0.08)';

function PageHero() {
  return (
    <section id="about-hero" className="relative py-20 md:py-28 overflow-hidden" style={{ background: '#050A14' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212,137,26,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle,rgba(212,137,26,0.4),transparent 70%)', filter: 'blur(60px)' }} />
      <div className="container-xl relative z-10 flex flex-col items-center text-center gap-5">
        <div className="flex items-center gap-2 text-xs font-medium" style={{ color: '#8A9BB5' }}>
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <span style={{ color: '#D4891A' }}>About Us</span>
        </div>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border" style={{ color: '#D4891A', borderColor: 'rgba(212,137,26,0.4)', background: 'rgba(212,137,26,0.08)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          Integrated Engineering & Infrastructure
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold gradient-text leading-tight tracking-tight max-w-3xl">
          About Mahendram Landmark Ventures
        </h1>
        <p className="text-base max-w-2xl leading-relaxed" style={{ color: '#8A9BB5' }}>
          An integrated engineering, infrastructure, contracting and asset management company delivering comprehensive solutions across India.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-4">
          {[['500+','Projects'],['14','Service Lines'],['3','Divisions'],['Pan India','Presence']].map(([val,lbl]) => (
            <div key={lbl} className="flex flex-col items-center">
              <span className="text-2xl font-extrabold" style={{ color: '#D4891A' }}>{val}</span>
              <span className="text-xs" style={{ color: '#8A9BB5' }}>{lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section id="about-overview" className="section-padding relative overflow-hidden" style={{ background: '#0D1B2E' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212,137,26,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <FadeIn delay={0}>
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#D4891A' }}>Company Overview</p>
              <h2 className="text-3xl md:text-4xl font-extrabold gradient-text leading-tight">
                One Company. Three Divisions.<br />Infinite Possibilities.
              </h2>
            </div>
            </FadeIn>
            <FadeIn delay={0.1}>
            <p className="text-sm leading-relaxed" style={{ color: '#8A9BB5' }}>
              Mahendram Landmark Ventures Pvt Ltd is an integrated engineering, infrastructure, contracting and asset management company delivering comprehensive solutions for commercial, industrial, institutional and infrastructure projects across India.
            </p>
            </FadeIn>
            <FadeIn delay={0.2}>
            <p className="text-sm leading-relaxed" style={{ color: '#8A9BB5' }}>
              The company operates through specialized divisions focusing on engineering, construction, interiors, facility management, industrial infrastructure and lifecycle asset solutions — providing single-point accountability for every project phase.
            </p>
            </FadeIn>
            <FadeIn delay={0.3}>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {['✔ Multi-Disciplinary Engineering','✔ End-to-End Project Delivery','✔ Pan India Operations','✔ Single Point Accountability','✔ Technology Driven Execution','✔ Safety & Compliance Focused'].map((t) => (
                <div key={t} className="text-xs font-medium" style={{ color: '#8A9BB5' }}>{t}</div>
              ))}
            </div>
            </FadeIn>
          </div>
          <div className="flex flex-col gap-4">
            <FadeIn delay={0.1}>
            <div className="p-8 rounded-2xl" style={{ background: 'linear-gradient(135deg,#0D1B2E,#050A14)', border: `1px solid ${BORDER}` }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-4" style={{ background: 'rgba(212,137,26,0.15)' }}>🔭</div>
              <h3 className="text-xl font-extrabold text-white mb-3">Our Vision</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8A9BB5' }}>To become India's most trusted integrated engineering and infrastructure company, delivering excellence at every stage of the project lifecycle.</p>
            </div>
            </FadeIn>
            <FadeIn delay={0.2}>
            <div className="p-8 rounded-2xl" style={{ background: 'linear-gradient(135deg,rgba(212,137,26,0.12),rgba(212,137,26,0.05))', border: '1px solid rgba(212,137,26,0.2)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-xl mb-4" style={{ background: 'rgba(212,137,26,0.15)' }}>🎯</div>
              <h3 className="text-xl font-extrabold text-white mb-3">Our Mission</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#8A9BB5' }}>To create long-term value through innovative engineering, quality execution, operational excellence and sustainable infrastructure development across India.</p>
            </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

function Divisions() {
  return (
    <section id="about-divisions" className="section-padding relative overflow-hidden" style={{ background: '#050A14' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212,137,26,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="container-xl relative z-10">
        <div className="text-center mb-12">
          <FadeIn delay={0}><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#D4891A' }}>Group Structure</p></FadeIn>
          <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold gradient-text">Our Three Business Divisions</h2></FadeIn>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {DIVISIONS.map((d, i) => (
            <FadeIn key={d.name} delay={i * 0.1}>
            <div key={d.name} className="glass-card relative flex flex-col gap-5 p-8 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style={{ background: `linear-gradient(90deg,${d.color},transparent)` }} />
              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl" style={{ background: `${d.color}18` }}>{d.icon}</div>
              <div>
                <h3 className="font-extrabold text-base text-white leading-snug">{d.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wide mt-1" style={{ color: d.color }}>{d.sub}</p>
                <p className="text-sm leading-relaxed mt-3" style={{ color: '#8A9BB5' }}>{d.desc}</p>
              </div>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreValues() {
  return (
    <section id="about-values" className="section-padding relative overflow-hidden" style={{ background: '#0D1B2E' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212,137,26,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="container-xl relative z-10">
        <div className="text-center mb-12">
          <FadeIn delay={0}><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#D4891A' }}>What Drives Us</p></FadeIn>
          <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold gradient-text">Our Core Values</h2></FadeIn>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {VALUES.map((v, i) => (
            <FadeIn key={v.label} delay={i * 0.1}>
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border hover:-translate-y-0.5 transition-all duration-200" style={{ background: '#050A14', borderColor: BORDER }}>
              <span className="text-2xl">{v.icon}</span>
              <span className="font-bold text-sm text-white">{v.label}</span>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Timeline() {
  return (
    <section id="about-timeline" className="section-padding relative overflow-hidden" style={{ background: '#050A14' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212,137,26,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="container-xl relative z-10">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#D4891A' }}>Our Journey</p>
          <h2 className="text-3xl md:text-4xl font-extrabold gradient-text">Milestones Over the Years</h2>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block" style={{ background: BORDER }} />
          <div className="flex flex-col gap-6">
            {TIMELINE.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={item.year} className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:order-last md:text-left'}`}>
                    <div className="inline-block p-5 rounded-2xl border w-full md:w-auto" style={{ background: '#0D1B2E', borderColor: BORDER }}>
                      <p className="text-xs font-bold tracking-wider uppercase mb-1" style={{ color: '#D4891A' }}>{item.year}</p>
                      <p className="text-sm font-semibold text-white">{item.event}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full border-4 flex-shrink-0 z-10 hidden md:block" style={{ backgroundColor: '#D4891A', borderColor: '#050A14' }} />
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section id="about-cta" className="py-20 relative overflow-hidden" style={{ background: 'linear-gradient(135deg,#0D1B2E 0%,#050A14 100%)' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212,137,26,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center,rgba(212,137,26,0.1) 0%,transparent 70%)' }} />
      <div className="container-xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold gradient-text">Ready to Partner With Us?</h2>
          <p className="mt-2 text-sm max-w-lg leading-relaxed" style={{ color: '#8A9BB5' }}>
            Whether it's a new construction project, interior fit-out or facility management requirement — our team is ready to deliver.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <Link to="/contact" id="about-cta-primary" className="px-8 py-4 rounded-sm text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95" style={{ background: 'linear-gradient(135deg,#D4891A,#b87315)', boxShadow: '0 4px 24px rgba(212,137,26,0.35)' }}>
            Get in Touch →
          </Link>
          <Link to="/services" id="about-cta-services" className="px-8 py-4 rounded-sm text-sm font-bold text-white border transition-all hover:bg-white/10 active:scale-95" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — Mahendram Landmark Ventures Pvt Ltd</title>
        <meta name="description" content="Learn about Mahendram Landmark Ventures Pvt Ltd — India's integrated engineering and infrastructure company. Vision, mission, core values and three business divisions." />
        <meta property="og:title" content="About Mahendram Landmark Ventures Pvt Ltd" />
        <meta property="og:description" content="Integrated engineering, construction, interiors and facility management company operating across India through Mahendram Landmark, Inovvio Interior and Ortus Apex." />
        <meta property="og:url" content="https://www.mahendramlandmark.com/about" />
      </Helmet>
      <PageHero />
      <Overview />
      <Divisions />
      <CoreValues />
      <Timeline />
      <CTABanner />
    </>
  );
}

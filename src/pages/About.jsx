import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import {
  Handshake, Activity, Lightbulb, CheckCircle2,
  ShieldCheck, Leaf, Trophy, Building2, PenTool, Settings
} from 'lucide-react';
import TiltCard from '../components/TiltCard';

const VALUES = [
  { Icon: Handshake,   label: 'Integrity'        },
  { Icon: Activity,      label: 'Commitment'       },
  { Icon: Lightbulb,   label: 'Innovation'       },
  { Icon: CheckCircle2, label: 'Quality'          },
  { Icon: ShieldCheck,      label: 'Safety'           },
  { Icon: Leaf,        label: 'Sustainability'   },
  { Icon: Trophy,      label: 'Customer Success' },
];

const DIVISIONS = [
  { name: 'Mahendram Landmark Ventures Pvt Ltd', sub: 'Engineering, Infrastructure & Contracting',   Icon: Building2,   color: 'var(--color-accent)', image: '/group_mlv_construction.png', desc: 'Turnkey engineering, construction, PEB, MEP, fire protection, industrial infrastructure and large-scale project delivery across India.' },
  { name: 'Inovvio Interior',                    sub: 'Design, Interior & Workplace Solutions',      Icon: PenTool, color: '#60A5FA', image: '/group_inovvio_office.png', desc: 'Premium workplace strategy, interior design, office fit-out, retail and hospitality interiors that merge design with business productivity.' },
  { name: 'Ortus Apex',                          sub: 'Software Solutions & IT Services',     Icon: Settings,    color: '#34D399', image: '/group_ortus_software.png', desc: 'Custom software development, IT infrastructure, cloud solutions, and data analytics to drive digital transformation and operational efficiency.' },
];

const TIMELINE = [
  { year: '2010', event: 'Company Founded' },
  { year: '2013', event: 'First Major Infrastructure Project' },
  { year: '2016', event: 'Launch of Inovvio Interior Division' },
  { year: '2019', event: 'Pan India Operations Established' },
  { year: '2021', event: 'Launch of Ortus Apex FM Division' },
  { year: '2024', event: '500+ Projects Milestone Achieved' },
];

const BORDER = 'var(--color-border)';

function PageHero() {
  return (
    <section id="about-hero" className="relative pt-32 pb-14 md:pt-40 md:pb-20 overflow-hidden" style={{ background: 'var(--color-bg)' }}>
      {/* About hero background */}
      <img
        src="/about_building.png"
        alt="Completed modern commercial building"
        aria-hidden="true"
        className="ken-burns-bg"
        style={{ opacity: 0.15, objectFit: 'cover', position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      />
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(41, 171, 226, 0.5),transparent 70%)', filter: 'blur(60px)' }} />
      <div className="container-xl relative z-10 flex flex-col items-center text-center gap-5">
        <div className="flex items-center gap-2 text-xs font-medium" style={{ color: 'var(--color-muted)' }}>
          <Link to="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
          <span>/</span>
          <span style={{ color: 'var(--color-accent)' }}>About Us</span>
        </div>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border" style={{ color: 'var(--color-accent)', borderColor: 'rgba(41, 171, 226, 0.2)', background: 'rgba(41, 171, 226, 0.05)' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          Integrated Engineering & Infrastructure
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold gradient-text leading-tight tracking-tight max-w-3xl">
          About Mahendram Landmark Ventures
        </h1>
        <p className="text-base max-w-2xl leading-relaxed" style={{ color: 'var(--color-muted)' }}>
          An integrated engineering, infrastructure, contracting and asset management company delivering comprehensive solutions across India.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-4">
          {[['500+','Projects'],['14','Service Lines'],['3','Divisions'],['Pan India','Presence']].map(([val,lbl]) => (
            <div key={lbl} className="flex flex-col items-center">
              <span className="text-2xl font-extrabold" style={{ color: 'var(--color-accent)' }}>{val}</span>
              <span className="text-xs" style={{ color: 'var(--color-muted)' }}>{lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section id="about-overview" className="section-padding relative overflow-hidden" style={{ background: 'var(--color-card)' }}>
      {/* Overview background */}
      <div className="absolute inset-0 bg-white/5 z-0" />
      {/* Decorative blueprint SVG */}
      <svg className="absolute top-1/2 -left-32 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none z-0" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.08, stroke: 'var(--color-accent)' }}>
        <path d="M100 700 h600 M150 700 V300 L300 200 h200 l150 100 v400 M300 200 V100 h200 v100" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M200 400 h100 v100 h-100 Z M450 400 h100 v100 h-100 Z M200 550 h100 v100 h-100 Z M450 550 h100 v100 h-100 Z" strokeWidth="8" />
        <path d="M350 700 V500 h100 v200" strokeWidth="8" />
        <path d="M150 450 h-50 M650 450 h50 M150 600 h-50 M650 600 h50" strokeWidth="8" strokeLinecap="round" />
        <circle cx="400" cy="150" r="30" strokeWidth="8" />
        <path d="M300 200 L150 700 M500 200 L650 700" strokeWidth="4" strokeDasharray="10 10" />
      </svg>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6">
            <FadeIn delay={0}>
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--color-accent)' }}>Company Overview</p>
              <h2 className="text-3xl md:text-4xl font-extrabold gradient-text leading-tight">
                One Company. Three Divisions.<br />Infinite Possibilities.
              </h2>
            </div>
            </FadeIn>
            <FadeIn delay={0.1}>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              Mahendram Landmark Ventures Pvt Ltd is an integrated engineering, infrastructure, contracting and asset management company delivering comprehensive solutions for commercial, industrial, institutional and infrastructure projects across India.
            </p>
            </FadeIn>
            <FadeIn delay={0.2}>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>
              The company operates through specialized divisions focusing on engineering, construction, interiors, facility management, industrial infrastructure and lifecycle asset solutions — providing single-point accountability for every project phase.
            </p>
            </FadeIn>
            <FadeIn delay={0.3}>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {['✔ Multi-Disciplinary Engineering','✔ End-to-End Project Delivery','✔ Pan India Operations','✔ Single Point Accountability','✔ Technology Driven Execution','✔ Safety & Compliance Focused'].map((t) => (
                <div key={t} className="text-xs font-medium" style={{ color: 'var(--color-muted)' }}>{t}</div>
              ))}
            </div>
            </FadeIn>
          </div>
          <div className="flex flex-col gap-6">
            <FadeIn delay={0.1}>
              <div className="overflow-hidden rounded-xl shadow-lg group w-full mb-2">
                <img src="/team_blueprints.png" alt="Our diverse engineering team on-site" className="w-full h-64 object-cover rounded-xl transition-transform duration-400 ease-in-out group-hover:scale-105" />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
            <div className="p-8 rounded-2xl" style={{ background: 'var(--color-bg)', border: `1px solid ${BORDER}` }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(41, 171, 226, 0.1)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/><path d="m15 4.5-3-3-3 3"/></svg>
              </div>
              <h3 className="text-xl font-extrabold text-[var(--color-primary)] mb-3">Our Vision</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>To become India's most trusted integrated engineering and infrastructure company, delivering excellence at every stage of the project lifecycle.</p>
            </div>
            </FadeIn>
            <FadeIn delay={0.2}>
            <div className="p-8 rounded-2xl" style={{ background: 'var(--color-card)', border: '1px solid rgba(41, 171, 226, 0.2)' }}>
              <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(41, 171, 226, 0.1)' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="m8 14 4-2 4 2"/></svg>
              </div>
              <h3 className="text-xl font-extrabold text-[var(--color-primary)] mb-3">Our Mission</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--color-muted)' }}>To create long-term value through innovative engineering, quality execution, operational excellence and sustainable infrastructure development across India.</p>
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
    <section id="about-divisions" className="section-padding relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="container-xl relative z-10">
        <div className="text-center mb-12">
          <FadeIn delay={0}><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--color-accent)' }}>Group Structure</p></FadeIn>
          <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold gradient-text">Our Three Business Divisions</h2></FadeIn>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {DIVISIONS.map((d, i) => (
            <FadeIn key={d.name} delay={i * 0.1}>
            <TiltCard key={d.name} className="glass-card relative flex flex-col gap-5 p-8 overflow-hidden h-full">
              <div className="relative overflow-hidden rounded-xl h-40 mb-4 group cursor-pointer">
                <img src={d.image} alt={d.name} className="w-full h-full object-cover rounded-xl transition-transform duration-400 ease-in-out group-hover:scale-105" />
              </div>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 absolute top-4 left-4 z-10 shadow-lg" style={{ background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)', color: '#ffffff', border: '1px solid rgba(255,255,255,0.2)' }}>
                <d.Icon size={24} strokeWidth={1.75} />
              </div>
              <div className="pt-2">
                <h3 className="font-extrabold text-base text-[var(--color-primary)] leading-snug">{d.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wide mt-1" style={{ color: d.color }}>{d.sub}</p>
                <p className="text-sm leading-relaxed mt-3" style={{ color: 'var(--color-muted)' }}>{d.desc}</p>
              </div>
            </TiltCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoreValues() {
  return (
    <section id="about-values" className="section-padding relative overflow-hidden" style={{ background: 'var(--color-card)' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="container-xl relative z-10">
        <div className="text-center mb-12">
          <FadeIn delay={0}><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--color-accent)' }}>What Drives Us</p></FadeIn>
          <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold gradient-text">Our Core Values</h2></FadeIn>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {VALUES.map((v, i) => (
            <FadeIn key={v.label} delay={i * 0.1}>
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl border hover:-translate-y-0.5 transition-all duration-200" style={{ background: 'var(--color-bg)', borderColor: BORDER }}>
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg" style={{ background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)', color: '#ffffff' }}>
                <v.Icon size={24} strokeWidth={1.75} />
              </div>
              <span className="font-bold text-sm text-[var(--color-primary)]">{v.label}</span>
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
    <section id="about-timeline" className="section-padding relative overflow-hidden" style={{ background: 'var(--color-bg)' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="container-xl relative z-10">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--color-accent)' }}>Our Journey</p>
          <h2 className="text-3xl md:text-4xl font-extrabold gradient-text">Milestones Over the Years</h2>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px hidden md:block" style={{ background: BORDER }} />
          <div className="flex flex-col gap-8 md:gap-12 relative">
            {TIMELINE.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <FadeIn key={item.year} delay={idx * 0.15}>
                  <div className="flex flex-col md:flex-row items-start md:items-center relative w-full group">
                    {/* The centered dot */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full border-4 shadow-[0_0_15px_rgba(41,171,226,0.5)] z-20 transition-all duration-300 group-hover:scale-150 group-hover:bg-white" 
                         style={{ backgroundColor: 'var(--color-accent)', borderColor: 'var(--color-bg)' }} />
                         
                    {/* Timeline Content */}
                    <div className={`w-full md:w-1/2 flex ${isLeft ? 'md:justify-end md:pr-10' : 'md:justify-start md:pl-10 md:ml-auto'} pl-8 md:pl-0`}>
                      <div className={`inline-block p-6 rounded-2xl border w-full sm:w-[90%] md:w-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-lg glass-card relative overflow-hidden ${isLeft ? 'text-left md:text-right' : 'text-left'}`}
                           style={{ background: 'var(--color-bg)', borderColor: BORDER }}>
                        <div className={`absolute top-0 w-1 h-full ${isLeft ? 'left-0 md:left-auto md:right-0' : 'left-0'}`} style={{ background: 'var(--color-accent)' }} />
                        <p className="text-sm font-black tracking-widest uppercase mb-1" style={{ color: 'var(--color-accent)' }}>{item.year}</p>
                        <p className="text-base font-bold text-[var(--color-primary)]">{item.event}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
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
    <section id="about-cta" className="py-10 md:py-14 relative overflow-hidden" style={{ background: 'var(--color-card)' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center, rgba(41, 171, 226, 0.05) 0%, transparent 70%)' }} />
      <div className="container-xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold gradient-text">Ready to Partner With Us?</h2>
          <p className="mt-2 text-sm max-w-lg leading-relaxed" style={{ color: 'var(--color-muted)' }}>
            Whether it's a new construction project, interior fit-out or facility management requirement — our team is ready to deliver.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <Link to="/contact" id="about-cta-primary" className="px-8 py-4 rounded-sm text-sm font-bold text-[var(--color-primary)] transition-all hover:opacity-90 active:scale-95" style={{ background: 'linear-gradient(135deg,var(--color-accent),var(--color-accent-2))', boxShadow: '0 4px 24px rgba(41, 171, 226, 0.3)' }}>
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

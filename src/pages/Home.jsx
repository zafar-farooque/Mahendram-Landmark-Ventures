import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import {
  Building2, PenTool, Settings, HardHat, Wrench, ArrowUpCircle, Package,
  GraduationCap, Link as LinkIcon, MapPin, BarChart3, CheckCircle2, ShieldCheck, Zap
} from 'lucide-react';
import TiltCard from '../components/TiltCard';
import CountUp from '../components/CountUp';

const STATS = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '14', label: 'Service Lines' },
  { value: 'Pan India', label: 'Operations' },
  { value: '3', label: 'Business Divisions' },
];

const DIVISIONS = [
  { id: 'mlv',     name: 'Mahendram Landmark Ventures', sub: 'Engineering & Infrastructure',   Icon: Building2,   accent: 'var(--color-accent)', to: '/about', bgImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80'    },
  { id: 'inovvio', name: 'Inovvio Interior',             sub: 'Design & Interior Solutions',    Icon: PenTool, accent: '#60A5FA', to: '/services', bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80' },
  { id: 'ortus',   name: 'Ortus Apex',                   sub: 'Software Solutions & IT Services',    Icon: Settings,    accent: '#34D399', to: '/services', bgImage: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80' },
];

const SOLUTIONS = [
  { Icon: HardHat,    title: 'Build',   desc: 'Construction, Infrastructure & Industrial Facilities', bgImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80' },
  { Icon: PenTool,   title: 'Design',  desc: 'Architecture, Interiors & Engineering', bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' },
  { Icon: Wrench,title: 'Install', desc: 'MEP, Fire Protection & Electrical Systems', bgImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
  { Icon: Settings,   title: 'Operate', desc: 'Facility Management & Maintenance', bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
  { Icon: ArrowUpCircle,  title: 'Upgrade', desc: 'Renovation & Modernization', bgImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80' },
  { Icon: Package,      title: 'Supply',  desc: 'Construction Materials & Industrial Products', bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80' },
];

const INDUSTRIES = ['Real Estate', 'Manufacturing', 'Warehousing', 'Logistics', 'Healthcare', 'Hospitality', 'Retail', 'Education', 'Corporate Offices', 'Government', 'PSU', 'Railways', 'Ports', 'Power', 'Data Centers'];

const WHY_US = [
  { Icon: GraduationCap,    title: 'Engineering Expertise',   desc: 'Qualified multidisciplinary professionals across all service lines.' },
  { Icon: LinkIcon,        title: 'Integrated Service Model', desc: 'One partner covering engineering, design, build and operations.' },
  { Icon: MapPin,         title: 'Pan India Delivery',       desc: 'Active projects across multiple states and regions of India.' },
  { Icon: BarChart3,       title: 'Project Visibility',       desc: 'Structured monitoring, digital dashboards and transparent reporting.' },
  { Icon: CheckCircle2, title: 'Quality Commitment',       desc: 'System-driven quality assurance at every stage of project delivery.' },
  { Icon: ShieldCheck,      title: 'Long-Term Support',        desc: 'From construction to ongoing facility operations and asset lifecycle.' },
];

function Hero() {
  return (
    <div style={{ background: 'var(--color-bg)' }}>
      <section id="hero" className="relative overflow-hidden flex flex-col items-center justify-center pt-32 pb-14 md:pt-40 md:pb-20"
        style={{ minHeight: '100vh' }}>
        
        {/* Three-part split interactive background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 flex flex-col md:flex-row">
          <div className="flex-1 hover:flex-[1.3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] relative h-full group overflow-hidden border-r border-white/5 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80" alt="Infrastructure" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/60 transition-colors duration-700 group-hover:bg-black/20" />
            <div className="absolute bottom-10 left-10 opacity-0 transform translate-y-4 transition-all duration-700 delay-100 group-hover:opacity-100 group-hover:translate-y-0 z-10 hidden md:block">
               <h3 className="text-white text-3xl font-extrabold tracking-tight">Infrastructure</h3>
               <p className="text-white/90 font-medium tracking-wide mt-1">Engineering & Construction</p>
            </div>
          </div>
          <div className="flex-1 hover:flex-[1.3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] relative h-full group overflow-hidden border-r border-white/5 cursor-pointer">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" alt="Interiors" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" />
            <div className="absolute inset-0 bg-black/50 transition-colors duration-700 group-hover:bg-black/20" />
            <div className="absolute bottom-10 left-10 opacity-0 transform translate-y-4 transition-all duration-700 delay-100 group-hover:opacity-100 group-hover:translate-y-0 z-10 hidden md:block">
               <h3 className="text-white text-3xl font-extrabold tracking-tight">Interiors</h3>
               <p className="text-white/90 font-medium tracking-wide mt-1">Premium Fit-Out Solutions</p>
            </div>
          </div>
          <div className="flex-1 hover:flex-[1.3] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] relative h-full group overflow-hidden cursor-pointer">
            <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80" alt="Software" className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" />
            <div className="absolute inset-0 bg-[var(--color-primary)]/80 transition-colors duration-700 group-hover:bg-[var(--color-primary)]/40" />
            <div className="absolute bottom-10 left-10 opacity-0 transform translate-y-4 transition-all duration-700 delay-100 group-hover:opacity-100 group-hover:translate-y-0 z-10 hidden md:block">
               <h3 className="text-white text-3xl font-extrabold tracking-tight">Software & IT</h3>
               <p className="text-white/90 font-medium tracking-wide mt-1">Custom Digital Transformation</p>
            </div>
          </div>
        </div>
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />

        {/* Top-left small uppercase caption */}
        <div className="absolute top-28 left-8 md:top-36 md:left-12 z-10">
          <p className="text-[10px] md:text-xs font-semibold tracking-[0.2em] uppercase text-white drop-shadow-sm">
            SINCE EST. 2005 · ENGINEERING & INFRASTRUCTURE
          </p>
        </div>

        {/* Floating stat badge cards on the right side */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20 hidden lg:flex">
          <TiltCard className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-5 w-48 shadow-2xl">
            <h3 className="text-3xl font-extrabold text-white mb-1"><CountUp end="500+" /></h3>
            <p className="text-xs text-white/80 font-medium tracking-wide">Projects Delivered</p>
          </TiltCard>
          <TiltCard className="bg-black/30 backdrop-blur-md border border-white/10 rounded-2xl p-5 w-48 shadow-2xl">
            <h3 className="text-3xl font-extrabold text-white mb-1"><CountUp end="20+" /></h3>
            <p className="text-xs text-white/80 font-medium tracking-wide">Years Combined Expertise</p>
          </TiltCard>
        </div>

        {/* Center content */}
        <div className="relative z-10 flex flex-col items-center text-center w-full px-4">
          <FadeIn delay={0}>
            <h1 className="text-white font-normal leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 12rem)', fontFamily: "'Playfair Display', serif" }}>
              MAHENDRAM
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-sm md:text-xl text-white mt-4 md:mt-2 font-medium tracking-wide drop-shadow-md max-w-3xl">
              Building Infrastructure. Creating Workspaces. Managing Assets.
            </p>
          </FadeIn>
        </div>

        {/* Bottom-center pill button with 3D floating badge */}
        <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
          <FadeIn delay={0.4}>
            <Link to="/about" className="group flex items-center gap-3 bg-[#1E2329] hover:bg-black transition-colors rounded-full pl-6 pr-2 py-2 shadow-xl">
              <span className="text-xs font-bold text-white tracking-widest uppercase">Discover More</span>
              <span className="w-8 h-8 rounded-full flex items-center justify-center bg-white text-[#1E2329] group-hover:scale-105 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
              </span>
            </Link>
          </FadeIn>
          
          <FadeIn delay={0.6}>
            <div className="floating-3d-wrapper hidden sm:block">
              <div className="floating-3d-badge">
                <div className="floating-3d-badge-layer2"></div>
                <div className="floating-3d-badge-layer1"></div>
                <div className="floating-3d-badge-icon">
                  <Zap size={20} strokeWidth={2} />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

function StatsBar() {
  return (
    <section id="stats-bar" className="py-12 relative overflow-hidden"
      style={{ background: 'var(--color-card)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
      {/* Subtle animated orb */}
      <div style={{ position: 'absolute', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.05) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
      <div className="container-xl w-full grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
        {STATS.map((s, i) => (
          <FadeIn key={s.label} delay={i * 0.1}>
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl md:text-4xl font-extrabold" style={{ color: 'var(--color-accent)' }}><CountUp end={s.value} /></span>
              <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-muted)' }}>{s.label}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function GroupStructure() {
  return (
    <section id="group-structure" className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-bg)' }}>
      {/* Subtle animated orb */}
      <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
      <div className="container-xl w-full relative z-10">
        <FadeIn delay={0}>
          <div className="mb-12 text-center relative z-10">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--color-accent)' }}>Group Structure</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 relative inline-block">
              Three Specialized Divisions
              <svg className="absolute -bottom-3 right-0 w-32 h-auto text-[var(--color-accent)] opacity-80" viewBox="0 0 100 20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                <path d="M5,15 Q50,0 95,15" />
              </svg>
            </h2>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          {DIVISIONS.map((d, i) => (
            <FadeIn key={d.id} delay={i * 0.1}>
              <TiltCard as={Link} to={d.to} id={`division-${d.id}`}
                className={`group block h-full ${i % 2 !== 0 ? 'md:translate-y-6' : ''}`}>
                <div className="relative w-full h-full rounded-[24px] overflow-hidden shadow-xl border border-white/10">
                  <img src={d.bgImage} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 transition-opacity duration-500 group-hover:opacity-80" />
                  
                  <div className="relative z-10 flex flex-col gap-5 p-8 h-full">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg mb-auto" style={{ background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)', color: '#ffffff' }}>
                      <d.Icon size={26} strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-2xl text-white leading-tight">{d.name}</h3>
                      <p className="text-[11px] font-bold uppercase tracking-widest mt-2" style={{ color: d.accent }}>{d.sub}</p>
                      <p className="text-sm leading-relaxed mt-4 text-white/80 line-clamp-3">{d.desc}</p>
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider mt-4 flex items-center gap-2" style={{ color: '#fff' }}>
                      <span className="w-8 h-[1px]" style={{ background: d.accent }} /> Explore Division
                    </span>
                  </div>
                </div>
            </TiltCard>
            </FadeIn>
          ))}
        </div>
        
        {/* Decorative dots pattern */}
        <svg className="absolute top-0 right-0 w-64 h-64 text-[var(--color-accent)] opacity-[0.08] pointer-events-none z-0" viewBox="0 0 100 100" fill="currentColor">
          <pattern id="dots-pattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1.5" />
          </pattern>
          <rect x="0" y="0" width="100" height="100" fill="url(#dots-pattern)" />
        </svg>
      </div>
    </section>
  );
}

function SolutionsGrid() {
  return (
    <section id="solutions-grid" className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-card)' }}>
      {/* Subtle animated orb */}
      <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
      <div className="container-xl w-full relative z-10">
        <FadeIn delay={0}>
          <div className="mb-12 text-center">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--color-accent)' }}>What We Do</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Integrated Engineering Solutions</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 relative z-10">
          {SOLUTIONS.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <TiltCard className={`group block h-full ${i % 2 !== 0 ? 'md:translate-y-4' : ''}`}>
                <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-white/10 flex flex-col">
                  <img src={s.bgImage} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 transition-opacity duration-500 group-hover:opacity-90" />
                  
                  <div className="relative z-10 flex flex-col gap-3 p-6 h-full">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg mb-auto" style={{ background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)', color: '#ffffff' }}>
                      <s.Icon size={22} strokeWidth={1.75} />
                    </div>
                    <h3 className="font-extrabold text-lg text-white mt-4">{s.title}</h3>
                    <p className="text-xs leading-relaxed text-white/80">{s.desc}</p>
                  </div>
                </div>
              </TiltCard>
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
    <section id="industries-strip" className="py-8 md:py-10 overflow-hidden flex flex-col items-center justify-center relative"
      style={{ background: 'var(--color-bg)', borderTop: '1px solid rgba(0,63,135,0.1)' }}>
      <FadeIn delay={0}>
        <p className="text-center text-xs font-bold tracking-[0.2em] uppercase mb-6" style={{ color: 'var(--color-accent)' }}>Industries We Serve</p>
      </FadeIn>
      <div className="relative flex w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(90deg,var(--color-bg),transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none" style={{ background: 'linear-gradient(-90deg,var(--color-bg),transparent)' }} />
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((ind, i) => (
            <span key={`${ind}-${i}`} className="inline-flex items-center gap-2 mx-6 text-sm font-semibold select-none" style={{ color: 'var(--color-muted)' }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: 'var(--color-accent)' }} />{ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden"
      style={{ background: 'var(--color-bg)' }}>
      {/* Why Us background image — engineering/team */}
      <img
        src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1920&q=80"
        alt=""
        aria-hidden="true"
        style={{ opacity: 0.06, objectFit: 'cover', position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
      />
      <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
      <div className="container-xl w-full relative z-10">
        <FadeIn delay={0}>
          <div className="mb-12 text-center">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: 'var(--color-accent)' }}>Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">The Mahendram Landmark Advantage</h2>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_US.map((w, i) => (
            <FadeIn key={w.title} delay={i * 0.1}>
              <div className="group flex gap-5 p-6 rounded-2xl border border-[rgba(41,171,226,0.1)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[0_8px_30px_rgba(41,171,226,0.15)] bg-white/50 backdrop-blur-md">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors duration-300 group-hover:bg-[var(--color-accent)] group-hover:text-white" style={{ background: 'rgba(41, 171, 226, 0.1)', color: 'var(--color-accent)' }}>
                  <w.Icon size={24} />
                </div>
                <div>
                  <h3 className="font-extrabold text-base mb-1 text-gray-900 group-hover:text-[var(--color-accent)] transition-colors duration-300">{w.title}</h3>
                  <p className="text-xs leading-relaxed text-gray-500">{w.desc}</p>
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
    <section id="cta-banner" className="py-12 md:py-14 relative overflow-hidden bg-gray-900 rounded-t-[2.5rem] shadow-2xl mt-10">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888081622-1cb42c75a40a?auto=format&fit=crop&w=1920&q=80')] opacity-10 object-cover mix-blend-overlay pointer-events-none ken-burns-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#29ABE2]/20 to-transparent pointer-events-none" />
      
      <div className="container-xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <FadeIn delay={0}>
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
              Let's Build Something<br className="hidden md:block" /> Exceptional Together
            </h2>
            <p className="mt-4 text-base max-w-xl leading-relaxed text-white/80 font-medium">
              Request a consultation today. Our engineering team will assess your project requirements and deliver a tailored proposal within 48 hours.
            </p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link to="/contact" className="px-10 py-4 rounded-full text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-[0_10px_25px_rgba(41,171,226,0.3)] bg-[#29ABE2]">
              Get in Touch
            </Link>
            <Link to="/services" className="px-10 py-4 rounded-full text-sm font-bold text-white border-2 border-white/20 hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
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
      <div id="home-scroll-container">
        <Hero />
        <StatsBar />
        <GroupStructure />
        <SolutionsGrid />
        <IndustriesStrip />
        <WhyUs />
        <CTABanner />
      </div>
    </>
  );
}

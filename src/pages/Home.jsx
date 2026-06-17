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
  { id: 'mlv',     name: 'Mahendram Landmark Ventures', sub: 'Engineering & Infrastructure',   accent: '#60A5FA', to: '/about', bgImage: '/engineering_bg_1781672667460.png'    },
  { id: 'inovvio', name: 'Inovvio Interior',             sub: 'Design & Interior Solutions',    accent: '#FCD34D', to: '/services', bgImage: '/interior_bg_1781672681086.png' },
  { id: 'ortus',   name: 'Ortus Apex',                   sub: 'Software Solutions & IT Services',    accent: '#34D399', to: '/services', bgImage: '/software_bg_1781672695199.png' },
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
            <h1 className="text-white font-extrabold leading-none tracking-tight" style={{ fontSize: 'clamp(2.5rem, 10vw, 12rem)' }}>
              MAHENDRAM
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-sm md:text-xl text-white mt-4 md:mt-2 font-medium tracking-wide max-w-3xl leading-relaxed" style={{ textShadow: '0 4px 12px rgba(0,0,0,0.6)' }}>
              Building Infrastructure. Creating Workspaces. Managing Assets.
            </p>
          </FadeIn>
        </div>

        {/* Bottom-center pill button with 3D floating badge */}
        <div className="absolute bottom-20 md:bottom-28 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
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
    <div className="relative z-20 -mt-16 mb-16 px-4">
      <div className="container-xl max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-around gap-6 p-8 md:p-10 rounded-[2.5rem] bg-white/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br from-[#29ABE2] to-[#0A4D8C]">
                  <CountUp end={s.value} />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-1">{s.label}</span>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

function GroupStructure() {
  return (
    <section id="group-structure" className="relative pt-10 pb-20 overflow-hidden">
      <div className="container-xl w-full relative z-10">
        <FadeIn delay={0}>
          <div className="mb-16 text-center relative z-10">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[#29ABE2]">Group Structure</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 relative inline-block">
              Three Specialized Divisions
            </h2>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8 relative z-10">
          {DIVISIONS.map((d, i) => (
            <FadeIn key={d.id} delay={i * 0.1}>
              <TiltCard as={Link} to={d.to} id={`division-${d.id}`}
                className={`group block h-full ${i % 2 !== 0 ? 'md:translate-y-8' : ''}`}>
                <div className="relative w-full h-[400px] md:h-[450px] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] border border-white/20 bg-white">
                  <img src={d.bgImage} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" />
                  
                  {/* Clean gradient overlay for maximum clarity and text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-50" />
                  
                  <div className="relative z-10 flex flex-col justify-between p-8 h-full">
                    <div className="flex justify-between items-start">
                      <span className="text-5xl font-black text-white/90 drop-shadow-md tracking-tighter">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 text-white group-hover:bg-white group-hover:text-black group-hover:rotate-45 transition-all duration-500">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
                      </div>
                    </div>
                    
                    <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                      <h3 className="font-extrabold text-3xl text-white leading-tight tracking-tight drop-shadow-lg">{d.name}</h3>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" style={{ color: d.accent }}>{d.sub}</p>
                    </div>
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

function SolutionsGrid() {
  return (
    <section id="solutions-grid" className="py-20 relative overflow-hidden">
      <div className="container-xl w-full relative z-10">
        <FadeIn delay={0}>
          <div className="mb-16 text-center">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[#29ABE2]">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900">Integrated Engineering Solutions</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
          {SOLUTIONS.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="group block h-full bg-white rounded-[2rem] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#29ABE2]/10 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm mb-6 bg-[#F0F7FF] text-[#29ABE2] group-hover:scale-110 group-hover:bg-[#29ABE2] group-hover:text-white transition-all duration-500 border border-[#29ABE2]/10">
                  <s.Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="font-extrabold text-xl text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500 font-medium">{s.desc}</p>
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
    <section id="industries-strip" className="py-12 overflow-hidden flex flex-col items-center justify-center relative">
      <FadeIn delay={0}>
        <p className="text-center text-xs font-bold tracking-[0.2em] uppercase mb-8 text-[#29ABE2]">Industries We Serve</p>
      </FadeIn>
      <div className="relative flex w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-[#f8f9fa] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-[#f8f9fa] to-transparent" />
        <div className="flex animate-marquee whitespace-nowrap">
          {items.map((ind, i) => (
            <span key={`${ind}-${i}`} className="inline-flex items-center gap-3 mx-8 text-sm md:text-base font-extrabold text-gray-400 select-none hover:text-[#29ABE2] transition-colors cursor-default">
              <span className="w-2 h-2 rounded-full bg-[#29ABE2]/50" />{ind}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section id="why-us" className="py-24 relative overflow-hidden">
      <div className="container-xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          
          {/* Left: Image Composition */}
          <FadeIn delay={0}>
            <div className="relative">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.12)] border border-gray-100 aspect-square md:aspect-[4/3] lg:aspect-[4/5]">
                <img src="/why_us_team.png" alt="Our Team" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A4D8C]/20 to-transparent mix-blend-multiply" />
              </div>
              
              {/* Floating Glassmorphism Badge */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white/90 backdrop-blur-xl border border-white p-6 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.08)] max-w-[240px] hidden sm:block animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                  </div>
                  <h4 className="text-3xl font-black text-gray-900">100%</h4>
                </div>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Commitment to Engineering Excellence</p>
              </div>
            </div>
          </FadeIn>

          {/* Right: Content & Features */}
          <div className="flex flex-col">
            <FadeIn delay={0.1}>
              <div className="mb-10 text-center lg:text-left">
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[#29ABE2]">Why Choose Us</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
                  The Mahendram<br /> Advantage
                </h2>
                <p className="mt-4 text-base text-gray-500 font-medium max-w-lg mx-auto lg:mx-0">
                  We blend deep engineering expertise with innovative project management to deliver infrastructure and spaces that stand the test of time.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
              {WHY_US.map((w, i) => (
                <FadeIn key={w.title} delay={0.2 + (i * 0.1)}>
                  <div className="group flex gap-4">
                    <div className="w-12 h-12 rounded-[1rem] flex items-center justify-center flex-shrink-0 bg-white shadow-sm border border-gray-100 text-[#29ABE2] group-hover:scale-110 group-hover:bg-[#29ABE2] group-hover:text-white transition-all duration-300">
                      <w.Icon size={20} strokeWidth={2.5} />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-bold text-sm mb-1.5 text-gray-900">{w.title}</h3>
                      <p className="text-xs leading-relaxed text-gray-500 font-medium">{w.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
          
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
    <div className="bg-[#f8f9fa] min-h-screen relative overflow-hidden">
      <Helmet>
        <title>Mahendram Landmark Ventures Pvt Ltd — Integrated Engineering & Infrastructure India</title>
        <meta name="description" content="Mahendram Landmark Ventures delivers Engineering, Construction, PEB, MEP, Fire Protection, Interiors and Facility Management across India. 500+ projects. Pan India." />
        <meta property="og:title" content="Mahendram Landmark Ventures Pvt Ltd — Integrated Engineering & Infrastructure" />
        <meta property="og:description" content="India's integrated engineering, infrastructure, interior and asset management company. 3 divisions. 14 service lines. 500+ projects delivered Pan India." />
        <meta property="og:url" content="https://www.mahendramlandmark.com/" />
      </Helmet>
      
      {/* Seamless sweeping background gradient connecting the whole page */}
      <div className="absolute top-0 right-0 w-full h-[200vh] bg-gradient-to-b from-transparent via-[#29ABE2]/[0.03] to-transparent pointer-events-none z-0 transform -skew-y-12" />
      <div className="absolute top-[150vh] left-0 w-full h-[200vh] bg-gradient-to-b from-transparent via-[#0A4D8C]/[0.02] to-transparent pointer-events-none z-0 transform skew-y-12" />

      <div id="home-scroll-container" className="relative z-10">
        <Hero />
        <StatsBar />
        <GroupStructure />
        <SolutionsGrid />
        <IndustriesStrip />
        <WhyUs />
        <CTABanner />
      </div>
    </div>
  );
}

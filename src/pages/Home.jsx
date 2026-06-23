import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import {
  Building2, PenTool, Settings, HardHat, Wrench, ArrowUpCircle, Package,
  GraduationCap, Link as LinkIcon, MapPin, BarChart3, CheckCircle2, ShieldCheck, Zap,
  Factory, Landmark, HeartPulse, ShoppingBag, Hotel, GraduationCap as GradCap2, Train, Briefcase,
  Star, Quote, ArrowRight, Calendar, Clock
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
  { id: 'mlv',     name: 'Mahendram Landmark Ventures', sub: 'Engineering & Infrastructure',   accent: '#60A5FA', to: '/about', bgImage: '/div_mlv.png'    },
  { id: 'inovvio', name: 'Inovvio Interior',             sub: 'Interior Design & Turnkey Fit-Out',    accent: '#FCD34D', to: '/services', bgImage: '/div_inovvio.png' },
  { id: 'ortus',   name: 'Ortus Apex',                   sub: 'Facility & Asset Management',    accent: '#34D399', to: '/services', bgImage: '/div_ortus.png' },
];

const PARTNERS = [
  '/logos/1.png', '/logos/2.png', '/logos/3.png', '/logos/4.png', '/logos/5.png',
  '/logos/6.png', '/logos/7.png', '/logos/8.png', '/logos/9.png', '/logos/10.png',
  '/logos/11.png', '/logos/12.png', '/logos/13.png', '/logos/14.png', '/logos/15.png',
  '/logos/16.png', '/logos/17.png',
];

const SOLUTIONS = [
  { Icon: HardHat,       title: 'Build New Facilities',           desc: 'Turnkey construction for factories, warehouses, commercial buildings and institutional campuses.', bgImage: '/sol_build.png' },
  { Icon: Building2,     title: 'Expand Manufacturing Capacity',  desc: 'Plant expansion, production line setup and industrial infrastructure augmentation.', bgImage: '/sol_expand.png' },
  { Icon: Package,       title: 'Develop Warehousing',            desc: 'Warehouse design, PEB warehousing, logistics parks and cold storage infrastructure.', bgImage: '/sol_warehouse.png' },
  { Icon: PenTool,       title: 'Create Productive Workspaces',   desc: 'Office interiors, workplace strategy, retail and hospitality fit-out via Inovvio Interior.', bgImage: '/sol_workspace.png' },
  { Icon: ArrowUpCircle, title: 'Upgrade Existing Facilities',    desc: 'Renovation, modernization, MEP upgrades and fire protection retrofitting.', bgImage: '/sol_upgrade.png' },
  { Icon: Settings,      title: 'Manage Assets Efficiently',      desc: 'Facility management, AMC, energy management and lifecycle asset support via Ortus Apex.', bgImage: '/sol_manage.png' },
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
    <section id="hero" className="relative w-full pt-20 md:pt-32 lg:pt-28 pb-12 md:pb-32 lg:pb-24 lg:min-h-[90vh] xl:min-h-[95vh] flex items-center">
      


      <div className="w-full max-w-[1750px] px-6 lg:px-12 xl:px-16 mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-16 items-center pt-10 lg:pt-0">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6 text-center lg:text-left lg:col-span-5">
          <FadeIn delay={0}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/10 dark:border-white/10 shadow-sm border border-gray-100 mb-4 mx-auto lg:mx-0 w-max">
              <span className="w-2 h-2 rounded-full bg-[#29ABE2] animate-pulse" />
              <span className="text-xs font-bold text-gray-600 dark:text-gray-300 tracking-widest uppercase">Shaping the Future</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-5xl 2xl:text-6xl font-black tracking-tight leading-[1.05] text-transparent bg-clip-text bg-gradient-to-br from-gray-900 via-gray-800 to-gray-500 dark:from-white dark:via-gray-200 dark:to-gray-400">
              MAHENDRAM
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-base md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-medium tracking-tight max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Building <span className="text-[#0A4D8C] font-bold">Infrastructure</span>. Creating <span className="text-[#29ABE2] font-bold">Workspaces</span>. Managing <span className="text-gray-900 dark:text-white font-bold">Assets</span>.
            </p>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed mt-2">
              Integrated Engineering, Construction, Interior, Infrastructure & Facility Management Solutions Across India.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="hidden lg:flex flex-wrap gap-2 mt-2">
              {['Pan India Operations','End-to-End Solutions','Single Point Accountability','Safety First','Technology Driven'].map(t => (
                <span key={t} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold bg-[#F0F7FF] dark:bg-white/10 text-[#0A4D8C] dark:text-[#29ABE2] border border-[#29ABE2]/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2]" />{t}
                </span>
              ))}
            </div>
          </FadeIn>

          <div className="hidden lg:block">
            <FadeIn delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center lg:justify-start">
                <Link to="/services" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0A4D8C] to-[#29ABE2] text-white font-bold text-base hover:shadow-[0_10px_30px_rgba(41,171,226,0.3)] hover:scale-105 transition-all flex items-center justify-center gap-2 group">
                  Explore More
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
                <Link to="/contact" className="px-8 py-4 rounded-full bg-white dark:bg-white/10 dark:border-white/20 dark:text-white border-2 border-gray-200 text-gray-700 font-bold text-base hover:border-[#29ABE2] hover:text-[#29ABE2] hover:bg-gray-50 hover:scale-105 transition-all flex items-center justify-center">
                  Contact Us
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Right Side — 16:9 Video Composition */}
        <div className="relative w-full aspect-video z-10 lg:col-span-7 lg:mt-0 mt-6 max-h-[70vh]">
          <FadeIn delay={0.3} className="w-full h-full relative">

            {/* Main Video Card */}
            <div className="w-full h-full rounded-[2.5rem] xl:rounded-[4rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.2)] border-[6px] border-white relative z-10 group">
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: '180%',
                  height: '180%',
                  objectFit: 'cover',
                  transform: 'translate(-50%, -50%)',
                  transition: 'transform 1.5s ease',
                }}
              >
                <source src="/Hero.mp4" type="video/mp4" />
              </video>

              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge 1 — Portfolio Value — bottom edge, slightly outside */}
            <div
              className="absolute -bottom-5 left-8 bg-white dark:bg-[#0A1628] backdrop-blur-xl border border-gray-100 dark:border-white/10 p-3 xl:p-4 rounded-2xl shadow-[0_20px_40px_rgba(41,171,226,0.15)] z-20 animate-bounce hidden sm:flex items-center gap-3"
              style={{ animationDuration: '4s' }}
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#29ABE2]/20 to-[#0A4D8C]/10 flex items-center justify-center text-[#29ABE2] flex-shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              </div>
              <div>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Portfolio Value</p>
                <p className="text-base xl:text-lg font-black text-gray-900 dark:text-white leading-tight">₹2500 Cr+</p>
              </div>
            </div>

            {/* Floating Badge 2 — Expert Team — top edge, slightly outside */}
            <div
              className="absolute -top-5 right-8 bg-white dark:bg-[#0A1628] backdrop-blur-xl border border-gray-100 dark:border-white/10 p-3 xl:p-4 rounded-2xl shadow-[0_20px_40px_rgba(10,77,140,0.12)] z-20 animate-bounce hidden sm:flex items-center gap-3"
              style={{ animationDuration: '5s', animationDelay: '1s' }}
            >
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="/avatar_engineer.png" alt="Engineer" />
                <img className="w-8 h-8 rounded-full border-2 border-white object-cover shadow-sm" src="/avatar_architect.png" alt="Architect" />
                <div className="w-8 h-8 rounded-full border-2 border-white bg-[#0A4D8C] flex items-center justify-center text-white text-[10px] font-bold shadow-inner z-10">+50</div>
              </div>
              <div>
                <p className="text-sm font-black text-gray-900 dark:text-white">Expert Team</p>
                <p className="text-[9px] font-bold text-gray-400 uppercase tracking-wide">Engineers & Archs</p>
              </div>
            </div>

          </FadeIn>
        </div>



        {/* Mobile only buttons & stats (shown below video) */}
        <div className="lg:hidden flex flex-col gap-6 mt-2 w-full max-w-xl mx-auto relative z-20">
          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/services" className="px-8 py-4 rounded-full bg-gradient-to-r from-[#0A4D8C] to-[#29ABE2] text-white font-bold text-base active:scale-95 transition-all flex items-center justify-center gap-2 group shadow-[0_10px_30px_rgba(41,171,226,0.3)]">
                Explore More
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </Link>
              <Link to="/contact" className="px-8 py-4 rounded-full bg-white dark:bg-white/10 dark:border-white/20 dark:text-white border-2 border-gray-200 text-gray-700 font-bold text-base hover:bg-gray-50 active:scale-95 transition-all flex items-center justify-center">
                Contact Us
              </Link>
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <div className="relative z-20 -mt-8 md:-mt-16 mb-10 md:mb-16 px-4">
      <div className="container-xl max-w-5xl mx-auto">
        <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-around gap-6 p-8 md:p-10 rounded-[2.5rem] bg-white/90 dark:bg-[#111827]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white dark:border-white/10">
          {STATS.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <div className="flex flex-col items-center gap-1">
                <span className="text-3xl md:text-5xl font-black bg-clip-text text-transparent bg-gradient-to-br from-[#29ABE2] to-[#0A4D8C]">
                  <CountUp end={s.value} />
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mt-1">{s.label}</span>
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
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white relative inline-block">
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
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[#29ABE2]">Business Solutions</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">What Can We Do For You?</h2>
            <p className="mt-4 text-sm md:text-base max-w-2xl mx-auto leading-relaxed text-gray-500 dark:text-gray-400 font-medium">Clients buy solutions, not services. Tell us your business objective and we'll deliver the right engineering solution.</p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
          {SOLUTIONS.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="group block h-full bg-white dark:bg-[#111827] rounded-[2rem] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-white/10 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-visible">
                
                {/* Floating Glassmorphism Image Popup */}
                <div className="absolute bottom-[calc(100%+0.5rem)] left-1/2 -translate-x-1/2 w-56 h-36 opacity-0 pointer-events-none origin-bottom scale-50 translate-y-6 group-hover:scale-100 group-hover:-translate-y-2 group-hover:opacity-100 transition-all duration-500 ease-out z-50">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-gray-900 [transform:translateZ(0)]">
                    <img src={s.bgImage} className="absolute inset-0 w-full h-full object-cover scale-125 group-hover:scale-100 transition-transform duration-700 ease-out" alt={s.title} />
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] z-10 group-hover:backdrop-blur-0 transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent z-20" />
                    <div className="absolute bottom-3 left-0 right-0 text-center z-30 px-2">
                      <span className="text-[10px] font-black text-white uppercase tracking-widest drop-shadow-md">{s.title}</span>
                    </div>
                  </div>
                </div>

                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-[#29ABE2]/10 to-transparent rounded-bl-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm mb-6 bg-[#F0F7FF] text-[#29ABE2] group-hover:scale-110 group-hover:bg-[#29ABE2] group-hover:text-white transition-all duration-500 border border-[#29ABE2]/10">
                  <s.Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="font-extrabold text-xl text-gray-900 dark:text-white mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400 font-medium">{s.desc}</p>
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
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-[#f8f9fa] dark:from-[#0A0F1A] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-[#f8f9fa] dark:from-[#0A0F1A] to-transparent" />
        <div className="flex min-w-max animate-marquee">
          {items.map((ind, i) => (
            <span key={`${ind}-${i}`} className="inline-flex items-center gap-3 mx-8 text-sm md:text-base font-extrabold text-gray-400 dark:text-gray-500 select-none hover:text-[#29ABE2] transition-colors cursor-default">
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
                <img src="/mahendram_advantage.png" alt="Our Indian Engineering Team" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A4D8C]/20 to-transparent mix-blend-multiply" />
              </div>
              
              {/* Floating Glassmorphism Badge */}
              <div className="absolute -bottom-8 -right-4 md:-right-8 bg-white/90 dark:bg-[#111827]/90 backdrop-blur-xl border border-white dark:border-white/10 p-6 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.08)] max-w-[240px] hidden sm:block animate-bounce" style={{ animationDuration: '4s' }}>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-[#29ABE2]/10 text-[#29ABE2] flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/></svg>
                  </div>
                  <h4 className="text-3xl font-black text-gray-900 dark:text-white">100%</h4>
                </div>
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Commitment to Engineering Excellence</p>
              </div>
            </div>
          </FadeIn>

          {/* Right: Content & Features */}
          <div className="flex flex-col">
            <FadeIn delay={0.1}>
              <div className="mb-10 text-center lg:text-left">
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[#29ABE2]">Why Choose Us</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
                  The Mahendram<br /> Advantage
                </h2>
                <p className="mt-4 text-base text-gray-500 dark:text-gray-400 font-medium max-w-lg mx-auto lg:mx-0">
                  We blend deep engineering expertise with innovative project management to deliver infrastructure and spaces that stand the test of time.
                </p>
              </div>
            </FadeIn>
            
            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-8">
              {WHY_US.map((w, i) => (
                <FadeIn key={w.title} delay={0.2 + (i * 0.1)}>
                  <div className="group flex gap-4">
                    <div className="w-12 h-12 rounded-[1rem] flex items-center justify-center flex-shrink-0 bg-white dark:bg-white/10 shadow-sm border border-gray-100 dark:border-white/10 text-[#29ABE2] group-hover:scale-110 group-hover:bg-[#29ABE2] group-hover:text-white transition-all duration-300">
                      <w.Icon size={20} strokeWidth={2.5} />
                    </div>
                    <div className="pt-1">
                      <h3 className="font-bold text-sm mb-1.5 text-gray-900 dark:text-white">{w.title}</h3>
                      <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400 font-medium">{w.desc}</p>
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
              Let's Discuss Your<br className="hidden md:block" /> Project
            </h2>
            <p className="mt-4 text-base max-w-xl leading-relaxed text-white/80 font-medium">
              Request a proposal today. Our engineering team will assess your project requirements and deliver a tailored scope within 48 hours.
            </p>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Link to="/contact" className="px-8 py-4 rounded-full text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-[0_10px_25px_rgba(41,171,226,0.3)] bg-[#29ABE2]">
              Request Proposal
            </Link>
            <Link to="/contact" className="px-8 py-4 rounded-full text-sm font-bold text-white border-2 border-white/20 hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
              Schedule Consultation
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    name: 'Rajesh Kapoor',
    role: 'Managing Director',
    company: 'Kapoor Realty Group',
    sector: 'Real Estate',
    photo: '/testimonial_1.png',
    quote: 'Mahendram Landmark delivered our 3-lakh sq ft commercial complex in Pune ahead of schedule. Their engineering precision and project management capabilities are truly world-class. We have already engaged them for our next township project.',
    rating: 5,
  },
  {
    name: 'Priya Venkatesh',
    role: 'VP — Operations',
    company: 'Meridian Manufacturing Pvt Ltd',
    sector: 'Manufacturing',
    photo: '/testimonial_2.png',
    quote: 'From plant layout to MEP integration, the team handled our entire factory expansion in Gujarat with remarkable professionalism. Zero safety incidents across 14 months of construction. That speaks volumes about their commitment.',
    rating: 5,
  },
  {
    name: 'Arjun Mehta',
    role: 'General Manager — Facilities',
    company: 'NexGen IT Park, Hyderabad',
    sector: 'Corporate',
    photo: '/testimonial_3.png',
    quote: 'Inovvio Interior transformed our 5-tower IT campus interiors beautifully, and Ortus Apex now manages our entire facility. Having one group handle design, build and operations has simplified everything for us.',
    rating: 5,
  },
];

const CLIENT_SECTORS = [
  { Icon: Building2, label: 'Real Estate' },
  { Icon: Factory, label: 'Manufacturing' },
  { Icon: Landmark, label: 'Government' },
  { Icon: Briefcase, label: 'Corporate' },
  { Icon: HeartPulse, label: 'Healthcare' },
  { Icon: ShoppingBag, label: 'Retail' },
  { Icon: Hotel, label: 'Hospitality' },
  { Icon: Train, label: 'Logistics' },
];

function Clientele() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive(p => (p + 1) % TESTIMONIALS.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const t = TESTIMONIALS[active];

  return (
    <section id="clientele" className="py-24 relative overflow-hidden">
      <div className="container-xl relative z-10">

        {/* Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[#29ABE2]">Client Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">What Our Clients Say</h2>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 font-medium max-w-xl mx-auto">Trusted by leading enterprises across India. Hear directly from the people we've built for.</p>
          </div>
        </FadeIn>

        {/* Testimonial Card */}
        <FadeIn delay={0.1}>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white dark:bg-[#111827] rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-white/10 overflow-hidden">

              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-[#29ABE2]/10">
                <Quote size={80} strokeWidth={1} />
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center relative z-10">
                {/* Photo */}
                <div className="flex-shrink-0">
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-3xl overflow-hidden shadow-lg border-4 border-[#29ABE2]/20">
                    <img
                      key={t.photo}
                      src={t.photo}
                      alt={t.name}
                      className="w-full h-full object-cover object-top transition-opacity duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  {/* Stars */}
                  <div className="flex items-center gap-1 justify-center md:justify-start mb-4">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-base md:text-lg leading-relaxed text-gray-600 dark:text-gray-300 font-medium italic mb-6">
                    "{t.quote}"
                  </p>

                  <div>
                    <p className="font-extrabold text-gray-900 dark:text-white text-lg">{t.name}</p>
                    <p className="text-sm text-[#29ABE2] font-bold">{t.role}</p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 font-medium mt-0.5">{t.company} · {t.sector}</p>
                  </div>
                </div>
              </div>

              {/* Dots */}
              <div className="flex items-center justify-center gap-2 mt-8">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-full transition-all duration-300 ${i === active ? 'w-8 h-2.5 bg-[#29ABE2]' : 'w-2.5 h-2.5 bg-gray-200 dark:bg-white/10 hover:bg-gray-300'}`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Sector Pills */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-3 mt-14">
            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mr-2">Sectors We Serve</p>
            {CLIENT_SECTORS.map(s => (
              <div key={s.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-[#111827] border border-gray-100 dark:border-white/10 shadow-sm text-xs font-bold text-gray-600 dark:text-gray-300 hover:border-[#29ABE2]/30 hover:text-[#29ABE2] transition-all duration-200">
                <s.Icon size={14} strokeWidth={2} />
                {s.label}
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
function Partners() {
  const all = [...PARTNERS, ...PARTNERS];
  return (
    <section id="partners" className="py-16 relative overflow-hidden">
      <div className="container-xl relative z-10">
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[#29ABE2]">Our Ecosystem</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Strategic Partners</h2>
            <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 font-medium max-w-xl mx-auto">Backed by specialized partners across strategy, technology, marketing, communication and talent.</p>
          </div>
        </FadeIn>
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-r from-[#fafcff] dark:from-[#0A0F1A] to-transparent" />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none bg-gradient-to-l from-[#fafcff] dark:from-[#0A0F1A] to-transparent" />
          <div className="flex min-w-max animate-marquee gap-6">
            {all.map((logo, i) => (
              <div key={`partner-${i}`} className="flex-shrink-0 flex items-center justify-center bg-white dark:bg-[#111827] border border-gray-100 dark:border-white/10 rounded-2xl px-10 py-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 w-44 h-24">
                <img src={logo} alt="Partner" className="h-10 w-auto max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all duration-300" onError={e => { e.target.style.display='none'; }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const FEATURED_PROJECTS = [
  { title: 'CyberHub IT Park Phase II', location: 'Bengaluru, Karnataka', division: 'Mahendram Landmark Ventures', area: '1.2M sq. ft.', image: '/project_it_park.png' },
  { title: 'Global Auto-Components Plant', location: 'Pune, Maharashtra', division: 'Mahendram Landmark Ventures', area: '450,000 sq. ft.', image: '/project_industrial.png' },
  { title: 'The Crest Luxury Residences', location: 'Gurugram, Haryana', division: 'Inovvio Interior (Fit-Out)', area: '850,000 sq. ft.', image: '/project_residential.png' },
];

function FeaturedProjects() {
  return (
    <section className="py-24 relative overflow-hidden bg-white/50 dark:bg-[#111827]/50">
      <div className="container-xl relative z-10">
        <FadeIn delay={0}>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[#29ABE2]">Latest Portfolio</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">Showcasing our recent engineering and interior milestones across commercial, industrial, and residential sectors.</p>
            </div>
            <Link to="/projects" className="inline-flex items-center gap-2 text-[#0A4D8C] dark:text-[#29ABE2] font-bold hover:gap-3 transition-all group">
              View All Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((p, i) => (
            <FadeIn key={p.title} delay={0.1 * i}>
              <div className="group rounded-3xl overflow-hidden bg-white dark:bg-[#111827] border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden flex-shrink-0">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                    <p className="text-[10px] font-bold text-white uppercase tracking-wider">{p.division}</p>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-4 group-hover:text-[#29ABE2] transition-colors">{p.title}</h3>
                  <div className="flex items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400 mt-auto">
                    <div className="flex items-center gap-1.5"><MapPin size={14} className="text-[#29ABE2]" />{p.location}</div>
                    <div className="flex items-center gap-1.5"><Building2 size={14} className="text-[#29ABE2]" />{p.area}</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const KNOWLEDGE_ARTICLES = [
  { title: 'The Future of Sustainable Construction in India', category: 'Sustainability', date: 'Jun 12, 2026', read: '5 min read', image: '/knowledge_sustainability.png' },
  { title: 'IoT and AI in Modern Facility Management', category: 'Technology', date: 'May 28, 2026', read: '8 min read', image: '/knowledge_facility.png' },
  { title: 'Biophilic Design Trends for Corporate Offices', category: 'Interior Design', date: 'May 15, 2026', read: '6 min read', image: '/knowledge_workspace.png' },
];

function KnowledgeCenter() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#F8FAFC] dark:bg-[#0A1628]/50">
      <div className="container-xl relative z-10">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[#29ABE2]">Insights</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Knowledge Center Highlights</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">Latest insights, trends, and expert opinions on engineering, facility management, and workspaces.</p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {KNOWLEDGE_ARTICLES.map((a, i) => (
            <FadeIn key={a.title} delay={0.1 * i}>
              <Link to="/knowledge" className="group flex flex-col h-full bg-white dark:bg-[#111827] rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 dark:border-white/10 transition-all duration-300">
                <div className="relative aspect-[16/9] overflow-hidden flex-shrink-0">
                  <img src={a.image} alt={a.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1 rounded-full">
                    <p className="text-[10px] font-extrabold text-[#29ABE2] uppercase tracking-wider">{a.category}</p>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-[#29ABE2] transition-colors leading-snug">{a.title}</h3>
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100 dark:border-white/10">
                    <div className="flex items-center gap-3 text-xs font-medium text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-1.5"><Calendar size={14} />{a.date}</div>
                      <div className="flex items-center gap-1.5"><Clock size={14} />{a.read}</div>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.3}>
          <div className="mt-12 text-center">
            <Link to="/knowledge" className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-gray-200 dark:border-white/20 text-gray-900 dark:text-white font-bold hover:border-[#29ABE2] hover:text-[#29ABE2] hover:bg-gray-50 dark:hover:bg-white/5 transition-all">
              Visit Knowledge Center
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-[#fafcff] dark:bg-[#0A0F1A] min-h-screen relative overflow-hidden transition-colors duration-300">
      <Helmet>
        <title>Mahendram Landmark Ventures Pvt Ltd — Integrated Engineering & Infrastructure India</title>
        <meta name="description" content="Mahendram Landmark Ventures delivers Engineering, Construction, PEB, MEP, Fire Protection, Interiors and Facility Management across India. 500+ projects. Pan India." />
        <meta property="og:title" content="Mahendram Landmark Ventures Pvt Ltd — Integrated Engineering & Infrastructure" />
        <meta property="og:description" content="India's integrated engineering, infrastructure, interior and asset management company. 3 divisions. 14 service lines. 500+ projects delivered Pan India." />
        <meta property="og:url" content="https://www.mahendramlandmark.com/" />
      </Helmet>
      
      {/* Massive seamless background elements connecting the entire page */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-[#29ABE2]/10 to-transparent blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-[#0A4D8C]/5 to-transparent blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] rounded-full bg-gradient-to-t from-[#29ABE2]/10 to-transparent blur-[150px]" />
      </div>

      <div id="home-scroll-container" className="relative z-10">
        <Hero />
        <StatsBar />
        <GroupStructure />
        <SolutionsGrid />
        <FeaturedProjects />
        <IndustriesStrip />
        <WhyUs />
        <Clientele />
        <KnowledgeCenter />
        <Partners />
        <CTABanner />
      </div>
    </div>
  );
}

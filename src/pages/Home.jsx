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
              Building robust <span className="text-[#0A4D8C] font-bold">Infrastructure</span>.<br/>
              Creating dynamic <span className="text-[#29ABE2] font-bold">Workspaces</span>.<br/>
              Managing core <span className="text-gray-900 dark:text-white font-bold">Assets</span>.
            </p>
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
            
            {/* Quick stats below text */}
            <FadeIn delay={0.6}>
              <div className="flex items-center gap-8 mt-10 justify-center lg:justify-start pt-8 border-t border-gray-200/60 dark:border-white/10">
                <div>
                  <h4 className="text-3xl font-black text-gray-900 dark:text-white">500+</h4>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">Projects</p>
                </div>
                <div className="w-px h-10 bg-gray-200 dark:bg-white/20"></div>
                <div>
                  <h4 className="text-3xl font-black text-gray-900 dark:text-white">20+</h4>
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">Years Exp</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* Right Side Image Composition */}
        <div className="relative w-full h-[380px] sm:h-[450px] md:h-[500px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px] max-h-[50vh] lg:max-h-[60vh] xl:max-h-[70vh] z-10 lg:col-span-7 lg:mt-0 mt-6">
          <FadeIn delay={0.3} className="w-full h-full relative">
            
            {/* Main Video Card */}
            <div className="w-full h-full rounded-[2.5rem] xl:rounded-[4rem] overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.15)] border-[6px] border-white relative z-10 group bg-white">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                poster="/@fs/home/zafar-farooque/.gemini/antigravity/brain/15140b34-30d2-4d7a-b767-a7deb8004a91/hero_infrastructure_1781678147300.png"
                className="w-full h-full object-cover object-center scale-[1.3] md:scale-[1.35] transition-transform duration-[1.5s] group-hover:scale-[1.4]"
              >
                <source src="/lv_0_20260618184154.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A4D8C]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </div>

            {/* Floating Element 1 (Value) */}
            <div className="absolute -left-8 lg:-left-12 bottom-[10%] xl:bottom-[15%] bg-white/95 dark:bg-[#111827]/95 backdrop-blur-xl border border-white dark:border-white/10 p-4 xl:p-6 rounded-3xl shadow-[0_30px_60px_rgba(41,171,226,0.15)] z-20 animate-bounce hidden sm:block" style={{ animationDuration: '4s' }}>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 xl:w-14 xl:h-14 rounded-full bg-gradient-to-br from-[#29ABE2]/20 to-[#0A4D8C]/10 flex items-center justify-center text-[#29ABE2]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div>
                  <p className="text-[10px] xl:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">Portfolio Value</p>
                  <p className="text-xl xl:text-2xl font-black text-gray-900 dark:text-white">₹2500 Cr+</p>
                </div>
              </div>
            </div>

            {/* Floating Element 2 (Team) */}
            <div className="absolute -right-4 lg:-right-10 top-[10%] xl:top-[12%] bg-white/95 dark:bg-[#111827]/95 backdrop-blur-xl border border-white dark:border-white/10 p-4 xl:p-6 rounded-3xl shadow-[0_30px_60px_rgba(10,77,140,0.15)] z-20 animate-bounce hidden sm:block" style={{ animationDuration: '5s', animationDelay: '1s' }}>
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3 xl:-space-x-4">
                  <img className="w-10 h-10 xl:w-12 xl:h-12 rounded-full border-[3px] border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80" alt="Engineer" />
                  <img className="w-10 h-10 xl:w-12 xl:h-12 rounded-full border-[3px] border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Architect" />
                  <div className="w-10 h-10 xl:w-12 xl:h-12 rounded-full border-[3px] border-white bg-[#0A4D8C] flex items-center justify-center text-white text-xs xl:text-sm font-bold shadow-inner z-10">+50</div>
                </div>
                <div>
                  <p className="text-sm xl:text-base font-black text-gray-900 dark:text-white">Expert Team</p>
                  <p className="text-[10px] xl:text-xs font-bold text-gray-500 dark:text-gray-400 uppercase">Engineers & Archs</p>
                </div>
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
          
          <FadeIn delay={0.6}>
            <div className="flex items-center gap-8 justify-center pt-8 border-t border-gray-200/60 dark:border-white/10">
              <div className="text-center">
                <h4 className="text-3xl font-black text-gray-900 dark:text-white">500+</h4>
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">Projects</p>
              </div>
              <div className="w-px h-10 bg-gray-200 dark:bg-white/20"></div>
              <div className="text-center">
                <h4 className="text-3xl font-black text-gray-900 dark:text-white">20+</h4>
                <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">Years Exp</p>
              </div>
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
            <p className="text-xs font-bold tracking-[0.2em] uppercase mb-3 text-[#29ABE2]">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white">Integrated Engineering Solutions</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
          {SOLUTIONS.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="group block h-full bg-white dark:bg-[#111827] rounded-[2rem] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-white/10 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-300 relative overflow-hidden">
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
      <div className="relative flex w-full">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-[#f8f9fa] dark:from-[#0A0F1A] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-[#f8f9fa] dark:from-[#0A0F1A] to-transparent" />
        <div className="flex animate-marquee whitespace-nowrap">
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
                <img src="/why_us_team.png" alt="Our Team" className="w-full h-full object-cover" />
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
        <IndustriesStrip />
        <WhyUs />
        <CTABanner />
      </div>
    </div>
  );
}

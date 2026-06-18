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
  { name: 'Mahendram Landmark Ventures Pvt Ltd', sub: 'Engineering, Infrastructure & Contracting',   Icon: Building2,   color: '#29ABE2', image: '/group_mlv_construction.png', desc: 'Turnkey engineering, construction, PEB, MEP, fire protection, industrial infrastructure and large-scale project delivery across India.' },
  { name: 'Inovvio Interior',                    sub: 'Design, Interior & Workplace Solutions',      Icon: PenTool, color: '#60A5FA', image: '/group_inovvio_office.png', desc: 'Premium workplace strategy, interior design, office fit-out, retail and hospitality interiors that merge design with business productivity.' },
  { name: 'Ortus Apex',                          sub: 'Software Solutions & IT Services',     Icon: Settings,    color: '#34D399', image: '/group_ortus_software.png', desc: 'Custom software development, IT infrastructure, cloud solutions, and data analytics to drive digital transformation and operational efficiency.' },
];

const TIMELINE = [
  { year: '2010', event: 'Company Founded', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=600&q=80' },
  { year: '2013', event: 'First Major Infrastructure Project', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80' },
  { year: '2016', event: 'Launch of Inovvio Interior Division', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' },
  { year: '2019', event: 'Pan India Operations Established', img: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=600&q=80' },
  { year: '2021', event: 'Launch of Ortus Apex FM Division', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80' },
  { year: '2024', event: '500+ Projects Milestone Achieved', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' },
];

function PageHero() {
  return (
    <section id="about-hero" className="relative pt-20 pb-16 md:pt-40 md:pb-32 overflow-hidden bg-gray-900">
      {/* High-res architectural background */}
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
        alt="Modern commercial building"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover opacity-60 ken-burns-bg"
      />
      
      {/* Dark gradient to make text pop and keep the bottom edge sharp */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/60" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <FadeIn delay={0}>
          <div className="flex items-center gap-2 text-xs font-bold text-white/70 tracking-widest uppercase mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#29ABE2]">About Us</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold border border-white/20 bg-black/30 backdrop-blur-md text-white mb-6">
            <span className="w-2 h-2 rounded-full bg-[#29ABE2] animate-pulse" />
            Integrated Engineering & Infrastructure
          </span>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl leading-[1.1]">
            About Mahendram Landmark
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-base md:text-lg max-w-2xl text-white/90 mt-6 font-medium leading-relaxed">
            An integrated engineering, infrastructure, contracting and asset management company delivering comprehensive solutions across India.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function FloatingStats() {
  return (
    <div className="relative z-20 -mt-16 mb-12 px-4">
      <div className="container-xl max-w-5xl mx-auto">
        <FadeIn delay={0.4}>
          <div className="flex flex-wrap items-center justify-around gap-6 p-8 rounded-[2rem] bg-white dark:bg-[#111827] shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-white/10">
            {[
              ['500+', 'Projects'],
              ['14', 'Service Lines'],
              ['3', 'Divisions'],
              ['Pan India', 'Presence']
            ].map(([val,lbl]) => (
              <div key={lbl} className="flex flex-col items-center">
                <span className="text-3xl md:text-4xl font-extrabold text-[#29ABE2]">{val}</span>
                <span className="text-xs md:text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-2">{lbl}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
}

function Overview() {
  return (
    <section id="about-overview" className="section-padding relative overflow-hidden">
      {/* Decorative blueprint SVG spanning the background */}
      <svg className="absolute top-0 -left-32 w-[800px] h-[800px] pointer-events-none z-0 opacity-[0.03] text-[#29ABE2]" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
        <path d="M100 700 h600 M150 700 V300 L300 200 h200 l150 100 v400 M300 200 V100 h200 v100" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M200 400 h100 v100 h-100 Z M450 400 h100 v100 h-100 Z M200 550 h100 v100 h-100 Z M450 550 h100 v100 h-100 Z" strokeWidth="8" />
        <path d="M350 700 V500 h100 v200" strokeWidth="8" />
        <circle cx="400" cy="150" r="30" strokeWidth="8" />
      </svg>
      
      <div className="container-xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col gap-6">
            <FadeIn delay={0}>
              <div>
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#29ABE2]">Company Overview</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
                  One Company. Three Divisions.<br />Infinite Possibilities.
                </h2>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                Mahendram Landmark Ventures Pvt Ltd is an integrated engineering, infrastructure, contracting and asset management company delivering comprehensive solutions for commercial, industrial, institutional and infrastructure projects across India.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed font-medium">
                The company operates through specialized divisions focusing on engineering, construction, interiors, facility management, industrial infrastructure and lifecycle asset solutions — providing single-point accountability for every project phase.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="grid grid-cols-2 gap-4 mt-4">
                {['✔ Multi-Disciplinary Engineering','✔ End-to-End Project Delivery','✔ Pan India Operations','✔ Single Point Accountability','✔ Technology Driven Execution','✔ Safety & Compliance Focused'].map((t) => (
                  <div key={t} className="text-xs md:text-sm font-bold text-gray-800 dark:text-gray-200">{t}</div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="flex flex-col gap-6 relative">
            {/* Massive Revolving Gear behind the entire column */}
            <div className="absolute top-[35%] -right-20 md:-right-32 z-0 animate-[spin_30s_linear_infinite] text-[#29ABE2] opacity-[0.08] pointer-events-none">
              <Settings size={400} strokeWidth={1} />
            </div>

            <FadeIn delay={0.1}>
              <div className="relative z-10 w-full mb-2">
                <div className="overflow-hidden rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.08)] group w-full bg-white">
                  <img src="/team_blueprints.png" alt="Engineering team" className="w-full h-64 md:h-80 object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" />
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="p-8 rounded-3xl relative z-10 bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md shadow-xl border border-white dark:border-white/10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-[#F0F7FF] text-[#29ABE2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/><path d="m15 4.5-3-3-3 3"/></svg>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-3">Our Vision</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">To become India's most trusted integrated engineering and infrastructure company, delivering excellence at every stage of the project lifecycle.</p>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="p-8 rounded-3xl relative z-10 bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md shadow-xl border border-white dark:border-white/10">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-[#F0F7FF] text-[#29ABE2]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v4"/><path d="m8 14 4-2 4 2"/></svg>
                </div>
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-3">Our Mission</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-medium">To create long-term value through innovative engineering, quality execution, operational excellence and sustainable infrastructure development across India.</p>
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
    <section id="about-divisions" className="section-padding relative overflow-hidden">
      <div className="container-xl relative z-10">
        <div className="text-center mb-16">
          <FadeIn delay={0}><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#29ABE2]">Group Structure</p></FadeIn>
          <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Our Three Business Divisions</h2></FadeIn>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {DIVISIONS.map((d, i) => (
            <FadeIn key={d.name} delay={i * 0.1}>
              <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-white/10 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300">
                <div className="relative overflow-hidden rounded-2xl h-48 mb-6 group cursor-pointer shadow-sm">
                  <img src={d.image} alt={d.name} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center -mt-12 relative z-10 shadow-lg mb-4" style={{ background: d.color, color: '#ffffff' }}>
                  <d.Icon size={26} strokeWidth={2} />
                </div>
                
                <div className="flex-grow">
                  <h3 className="font-extrabold text-xl text-gray-900 dark:text-white leading-snug">{d.name}</h3>
                  <p className="text-xs font-bold uppercase tracking-wider mt-2" style={{ color: d.color }}>{d.sub}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-4 font-medium">{d.desc}</p>
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
    <section id="about-values" className="section-padding relative overflow-hidden">
      <div className="container-xl relative z-10">
        <div className="text-center mb-16">
          <FadeIn delay={0}><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#29ABE2]">What Drives Us</p></FadeIn>
          <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Our Core Values</h2></FadeIn>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {VALUES.map((v, i) => (
            <FadeIn key={v.label} delay={i * 0.1}>
              <div className="flex items-center gap-4 px-8 py-5 rounded-full bg-white dark:bg-[#111827] shadow-md border border-gray-100 dark:border-white/10 hover:scale-105 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-[#F0F7FF] text-[#29ABE2]">
                  <v.Icon size={22} strokeWidth={2.5} />
                </div>
                <span className="font-extrabold text-base text-gray-900 dark:text-white tracking-wide">{v.label}</span>
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
    <section id="about-timeline" className="section-padding pb-32 relative overflow-hidden">
      <div className="container-xl relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#29ABE2]">Our Journey</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Milestones Over the Years</h2>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Central Line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-1 bg-[#29ABE2]/20 rounded-full" />
          
          <div className="flex flex-col relative py-10">
            {TIMELINE.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <FadeIn key={item.year} delay={idx * 0.1}>
                  <div className={`flex flex-col md:flex-row items-start md:items-center relative w-full group ${idx > 0 ? 'mt-8 md:-mt-20 lg:-mt-28' : ''}`}>
                    
                    {/* The glowing dot on the timeline */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-white border-[3px] border-[#29ABE2] shadow-[0_0_15px_rgba(41,171,226,0.5)] z-20 transition-all duration-300 group-hover:scale-150 group-hover:bg-[#29ABE2]" />
                    
                    {/* Horizontal Connecting Line (Desktop Only) */}
                    <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 h-[2px] bg-[#29ABE2]/30 w-12 lg:w-20 z-0 transition-all duration-500 group-hover:bg-[#29ABE2]/80 ${isLeft ? 'right-1/2' : 'left-1/2'}`} />
                         
                    {/* Timeline Content */}
                    <div className={`w-full md:w-1/2 flex ${isLeft ? 'md:justify-end md:pr-12 lg:pr-20' : 'md:justify-start md:pl-12 lg:pl-20 md:ml-auto'} pl-16 md:pl-0 mt-2 md:mt-0`}>
                      <div className={`inline-block p-6 rounded-[1.5rem] bg-white dark:bg-[#111827] shadow-[0_10px_25px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-white/10 w-full sm:w-[90%] md:w-80 lg:w-96 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_30px_rgba(0,0,0,0.12)] relative overflow-hidden ${isLeft ? 'text-left md:text-right' : 'text-left'}`}>
                        {/* Decorative side accent */}
                        <div className={`absolute top-0 w-[6px] h-full bg-[#29ABE2] ${isLeft ? 'left-0 md:left-auto md:right-0' : 'left-0'}`} />
                        
                        {/* Huge background year */}
                        <p className={`text-4xl md:text-5xl font-black text-[#29ABE2]/10 absolute bottom-4 pointer-events-none select-none ${isLeft ? 'right-6 md:right-auto md:left-6' : 'right-6'}`}>
                          {item.year}
                        </p>
                        
                        <div className="relative z-10">
                          {/* Image Block */}
                          <div className="w-full h-32 md:h-36 mb-4 rounded-xl overflow-hidden shadow-sm relative group/img cursor-pointer">
                            <img src={item.img} alt={item.event} className="w-full h-full object-cover group-hover/img:scale-110 transition-transform duration-700 ease-in-out" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#29ABE2]/20 to-transparent mix-blend-overlay opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
                          </div>
                          
                          <p className="text-xs font-black tracking-widest uppercase mb-1 text-[#29ABE2]">{item.year}</p>
                          <p className="text-lg font-extrabold text-gray-900 dark:text-white leading-snug">{item.event}</p>
                        </div>
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
    <section id="about-cta" className="py-12 md:py-14 relative overflow-hidden bg-gray-900 rounded-t-[2.5rem] shadow-2xl mt-10">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888081622-1cb42c75a40a?auto=format&fit=crop&w=1920&q=80')] opacity-10 object-cover mix-blend-overlay pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#29ABE2]/20 to-transparent pointer-events-none" />
      
      <div className="container-xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Ready to Partner With Us?</h2>
          <p className="mt-4 text-base max-w-xl leading-relaxed text-white/80 font-medium">
            Whether it's a new construction project, interior fit-out or facility management requirement — our team is ready to deliver.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <Link to="/contact" className="px-10 py-4 rounded-full text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-[0_10px_25px_rgba(41,171,226,0.3)] bg-[#29ABE2]">
            Get in Touch
          </Link>
          <Link to="/services" className="px-10 py-4 rounded-full text-sm font-bold text-white border-2 border-white/20 hover:bg-white/10 transition-all hover:scale-105 active:scale-95">
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen transition-colors duration-300">
      <Helmet>
        <title>About Us | Mahendram Landmark</title>
        <meta name="description" content="Learn about Mahendram Landmark Ventures Pvt Ltd." />
      </Helmet>
      
      <PageHero />
      <FloatingStats />
      
      {/* Sections now float seamlessly on the unified off-white background */}
      <Overview />
      <Divisions />
      <CoreValues />
      <Timeline />
      <CTABanner />
    </div>
  );
}

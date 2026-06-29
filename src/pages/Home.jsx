import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import {
  Building2, PenTool, Settings, HardHat, Wrench, ArrowUpCircle, Package,
  GraduationCap, Link as LinkIcon, MapPin, BarChart3, CheckCircle2, ShieldCheck, Zap,
  Factory, Landmark, HeartPulse, ShoppingBag, Hotel, Train, Briefcase,
  Star, Quote, ArrowRight, Calendar, Clock, Download, ChevronRight, Activity, Cpu, Leaf, Target, Award, Users, FileText, ChevronLeft, Hexagon, Layers
} from 'lucide-react';
import TiltCard from '../components/TiltCard';

// ── DATA ARRAYS ─────────────────────────────────────────────────────────────

const TRUST_METRICS = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '10M+', label: 'Sq. Ft. Developed' },
  { value: '15', label: 'Industries Served' },
  { value: '24', label: 'Cities in India' },
];

const WHY_CHOOSE_US = [
  'Integrated Single-Point Responsibility',
  'Engineering-Led Execution',
  'Transparent Project Governance',
  'Safety-First Culture',
  'Predictable Timelines & Cost Control',
  'Lifecycle Asset Support',
];

const DIVISIONS = [
  {
    id: 'mlv', name: 'Mahendram Landmark', sub: 'Infrastructure Development & EPC', accent: '#60A5FA', to: '/about', bgImage: '/div_mlv.png',
    points: ['Industrial Facilities', 'Commercial Buildings', 'Warehousing', 'Civil Construction']
  },
  {
    id: 'inovvio', name: 'Inovvio Interior', sub: 'Commercial Interior Design & Fit-outs', accent: '#FCD34D', to: '/inovvio', bgImage: '/div_inovvio.png',
    points: ['Corporate Offices', 'Healthcare Interiors', 'Retail Space', 'Turnkey Fit-outs']
  },
  {
    id: 'ortus', name: 'Ortus Apex', sub: 'Facility Management & Asset Services', accent: '#34D399', to: '/ortus', bgImage: '/div_ortus.png',
    points: ['Integrated Facility Mgmt.', 'Technical Maintenance', 'Building Operations', 'Asset Lifecycle']
  },
];

const CAPABILITIES = [
  { title: 'Infrastructure Development', items: ['Industrial Construction', 'Commercial Construction', 'Warehouse Development', 'Design Coordination', 'Project Management Consultancy'], icon: Building2, img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80' },
  { title: 'Commercial Interiors', items: ['Turnkey Fit-outs', 'Renovation & Modernization', 'Space Planning', 'MEP Design Integration'], icon: PenTool, img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80' },
  { title: 'Facility Management', items: ['Engineering Support', 'Asset Maintenance', 'Annual Maintenance Contracts', 'Soft Services'], icon: Settings, img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80' },
];

const INDUSTRIES = [
  { name: 'Manufacturing', icon: Factory, img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&q=80' },
  { name: 'Warehousing & Logistics', icon: Package, img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80' },
  { name: 'Healthcare', icon: HeartPulse, img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=600&q=80' },
  { name: 'Corporate Offices', icon: Briefcase, img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600&q=80' },
  { name: 'Hospitality', icon: Hotel, img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80' },
  { name: 'Education', icon: GraduationCap, img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=600&q=80' },
];

const TECH_LIST = ['BIM Integration', 'Cloud-Based Documentation', 'Drone-Assisted Mapping', 'Digital Quality Inspections'];
const SAFETY_LIST = ['Zero Harm Philosophy', 'Behaviour-Based Safety', 'Risk Assessment & Control', 'Sustainable Practices'];
const CERTIFICATIONS = ['ISO 9001: Quality', 'ISO 14001: Environment', 'ISO 45001: Health & Safety', 'Sector Compliances'];

const PROCESS = [
  { num: '01', title: 'Business Discovery', desc: 'Understanding client vision and budget.' },
  { num: '02', title: 'Site Assessment', desc: 'Geological and feasibility studies.' },
  { num: '03', title: 'Engineering & Planning', desc: 'Detailed architectural blueprints.' },
  { num: '04', title: 'Design Development', desc: 'Refining interiors and MEP routes.' },
  { num: '05', title: 'Budget & Scheduling', desc: 'Transparent cost estimation.' },
  { num: '06', title: 'Project Execution', desc: 'On-site construction with daily monitoring.' },
  { num: '07', title: 'Quality & Safety', desc: 'Validation against ISO standards.' },
  { num: '08', title: 'Testing & Handover', desc: 'Commissioning all systems.' },
  { num: '09', title: 'Lifecycle Support', desc: 'Ongoing proactive maintenance.' },
];

const PROJECTS = [
  { name: 'Apex Industrial Park', industry: 'Manufacturing', client: 'Global AutoCorp', scope: 'Turnkey EPC', area: '250k Sq.Ft.', location: 'Pune', img: 'https://images.unsplash.com/photo-1621252179027-94459d278660?w=800&q=80' },
  { name: 'Zenith Corporate Tower', industry: 'Commercial', client: 'TechNova', scope: 'Core & Interiors', area: '120k Sq.Ft.', location: 'Bengaluru', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80' },
  { name: 'Nexus Logistics Hub', industry: 'Warehousing', client: 'Prime Freight', scope: 'PEB Warehousing', area: '500k Sq.Ft.', location: 'Gurugram', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80' },
];

const CASE_STUDIES = [
  {
    title: 'Transforming a Legacy Factory into an Industry 4.0 Facility',
    challenge: 'Upgrading a 20-year-old active manufacturing plant in India without stopping ongoing production lines.',
    solution: 'Phased macro-zoning execution with advanced vibration-dampened scaffolding.',
    impact: 'Increased client production capacity by 40% and reduced energy consumption by 25%.',
    testimonial: '"Mahendram did the impossible—they rebuilt our factory around us while we kept working." — Plant Head, Global AutoCorp',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'
  }
];

const LEADERSHIP = [
  { name: 'Rahul Sharma', role: 'Managing Director', exp: '25+ Yrs', phil: '"Infrastructure is the foundation for tomorrow."', img: '/avatar_engineer.png' },
  { name: 'Priya Patel', role: 'Director - Ops', exp: '18+ Yrs', phil: '"Execution is relentless daily tracking."', img: '/avatar_architect.png' },
  { name: 'Anil Desai', role: 'Head of Engineering', exp: '20+ Yrs', phil: '"Safety is engineered, not added."', img: '/avatar_engineer.png' },
];

const AWARDS = [
  { year: '2025', title: 'Excellence in Industrial Construction', org: 'National Infrastructure Awards India' },
  { year: '2024', title: 'Best Turnkey Interior Project', org: 'Design & Architecture Summit' },
  { year: '2023', title: 'Safety Champion of the Year', org: 'Construction Safety Council' },
];

const PARTNERS = ['/logos/1.png', '/logos/2.png', '/logos/3.png', '/logos/4.png', '/logos/5.png', '/logos/6.png', '/logos/7.png', '/logos/8.png'];

const TESTIMONIALS = [
  { quote: 'Mahendram delivered our 500,000 sq ft warehouse 2 months ahead of schedule. Their professionalism is unmatched in the Indian infrastructure sector.', name: 'Rajiv Singh', role: 'VP Operations, Prime Freight' },
  { quote: 'Inovvio transformed our corporate headquarters. The attention to detail and modern aesthetic completely elevated our brand presence in Bengaluru.', name: 'Ananya Sharma', role: 'CEO, TechNova Solutions' },
  { quote: 'Ortus Apex manages our hospital facilities 24/7. Their proactive maintenance ensures we have zero downtime on critical systems.', name: 'Dr. Vivek Menon', role: 'Director, CityCare Hospitals' }
];

const KNOWLEDGE = [
  { title: 'The Future of PEB Warehousing in India', cat: 'Trends', date: 'Oct 12', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80' },
  { title: 'Achieving Zero-Harm Sites: Our Approach', cat: 'Safety', date: 'Nov 05', img: 'https://images.unsplash.com/photo-1621252179027-94459d278660?w=600&q=80' },
  { title: 'Integrating IoT in Facility Management', cat: 'Tech', date: 'Dec 18', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80' },
];

// ── COMPONENT ───────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <div className="bg-[#FAFBFC] dark:bg-[#050A15] min-h-screen font-sans selection:bg-[#29ABE2] selection:text-white">
      <Helmet>
        <title>Mahendram Landmark Ventures | Integrated Infrastructure Company</title>
      </Helmet>

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section className="relative w-full pt-20 md:pt-28 lg:pt-36 pb-32 lg:pb-40 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent dark:from-[#0A4D8C]/10 dark:via-transparent dark:to-transparent" />
        <div className="absolute -left-40 top-40 w-[800px] h-[800px] bg-[#29ABE2]/5 dark:bg-[#29ABE2]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="w-full max-w-[1750px] px-6 lg:px-12 xl:px-16 mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left lg:col-span-6 xl:col-span-5">
            <FadeIn delay={0}>
              <div className="inline-flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-2xl sm:rounded-full bg-white dark:bg-white/5 shadow-sm border border-gray-100 dark:border-white/10 mb-2 mx-auto lg:mx-0 max-w-[95%] sm:max-w-full backdrop-blur-md">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#29ABE2] animate-pulse flex-shrink-0" />
                <span className="text-[9px] sm:text-[10px] font-black text-gray-700 dark:text-gray-300 tracking-widest sm:tracking-[0.2em] uppercase text-center break-words leading-tight">
                  India's Integrated Built Environment Company
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black tracking-tight leading-[1.1] text-gray-900 dark:text-white mt-4">
                Transforming <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#0A4D8C] to-[#29ABE2]">Land</span> into <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#29ABE2] to-[#0A4D8C]">Landmarks.</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-lg md:text-xl text-gray-800 dark:text-gray-200 font-bold max-w-xl mx-auto lg:mx-0 leading-snug">
                End-to-End Infrastructure, Interior & Asset Development Solutions.
              </p>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed mt-4">
                Mahendram Landmark Ventures is an integrated infrastructure company delivering engineering, construction, commercial interiors, facility management, and lifecycle asset solutions.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
                <Link to="/contact" className="px-8 py-4 rounded-full bg-[#0A4D8C] dark:bg-[#29ABE2] text-white font-bold text-sm hover:scale-105 transition-all shadow-lg shadow-blue-900/20 text-center">
                  Request Consultation
                </Link>
                <a href="/brochure.pdf" download className="px-8 py-4 rounded-full bg-white dark:bg-transparent text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 font-bold text-sm hover:border-[#29ABE2] hover:text-[#29ABE2] dark:hover:border-[#29ABE2] transition-all flex items-center justify-center gap-2 group">
                  <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
                  Company Profile
                </a>
              </div>
            </FadeIn>
          </div>

          <div className="relative w-full aspect-[4/3] lg:aspect-video z-10 lg:col-span-6 xl:col-span-7">
            <FadeIn delay={0.4} className="w-full h-full relative">
              <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 relative group bg-gray-100 dark:bg-gray-900">
                <video autoPlay loop muted playsInline style={{ position: 'absolute', top: '50%', left: '50%', width: '180%', height: '180%', objectFit: 'cover', transform: 'translate(-50%, -50%)' }}>
                  <source src="/Hero.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST METRICS ────────────────────────────────────────────── */}
      <div className="container-xl px-4 sm:px-6 relative z-20 -mt-20 md:-mt-24 mb-20">
        <div className="bg-white/90 dark:bg-[#111827]/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white/50 dark:border-white/5 p-6 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-gray-100 dark:divide-gray-800">
            {TRUST_METRICS.map((m, i) => (
              <FadeIn key={m.label} delay={i * 0.1}>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-3xl md:text-4xl font-black text-[#0A4D8C] dark:text-[#29ABE2] mb-1 tracking-tight">{m.value}</p>
                  <p className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-widest">{m.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. WHY MAHENDRAM ────────────────────────────────────────────── */}
      <section className="pb-20">
        <div className="container-xl px-4 sm:px-6">
          <div className="bg-white dark:bg-[#0A0F1A] rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 dark:border-white/5 overflow-hidden relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <FadeIn>
                <h2 className="text-xs font-black text-[#29ABE2] tracking-widest uppercase mb-3">Why Mahendram</h2>
                <h3 className="text-2xl md:text-4xl font-black text-gray-900 dark:text-white mb-4 leading-tight">Your Long-Term<br/>Infrastructure Partner.</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Infrastructure today demands strategic planning, engineering excellence, digital execution, and lifecycle management. We integrate every stage through a single accountable delivery model.
                </p>
                <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-6">
                  {WHY_CHOOSE_US.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={16} className="text-[#29ABE2] mt-0.5 flex-shrink-0" />
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>
              <FadeIn delay={0.2} className="h-full min-h-[300px] rounded-2xl overflow-hidden relative shadow-lg">
                <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80" alt="Indian Infrastructure" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. THREE BUSINESS DIVISIONS ─────────────────────────────────── */}
      <section className="py-16">
        <div className="container-xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-black text-[#29ABE2] tracking-widest uppercase mb-3">Integrated Ecosystem</h2>
            <p className="text-3xl font-black text-gray-900 dark:text-white">Three Business Divisions</p>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {DIVISIONS.map((d, i) => (
              <FadeIn key={d.id} delay={i * 0.1}>
                <TiltCard className="h-full rounded-3xl bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/5 shadow-sm overflow-hidden flex flex-col group">
                  <div className="h-48 relative overflow-hidden bg-gray-100 dark:bg-gray-900">
                    <img src={d.bgImage} alt={d.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-xl font-black text-white">{d.name}</h3>
                      <p className="text-[10px] font-bold uppercase tracking-wider" style={{color: d.accent}}>{d.sub}</p>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <ul className="flex flex-col gap-2 flex-1 mb-6">
                      {d.points.map(p => (
                        <li key={p} className="flex items-center gap-2 text-xs font-medium text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full" style={{backgroundColor: d.accent}} /> {p}
                        </li>
                      ))}
                    </ul>
                    <Link to={d.to} className="w-full py-3 rounded-xl text-white font-bold text-xs text-center transition-transform hover:scale-105" style={{backgroundColor: d.id === 'mlv' ? '#0A4D8C' : d.accent, color: d.id === 'inovvio' ? 'black' : 'white'}}>
                      Explore Division
                    </Link>
                  </div>
                </TiltCard>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CORE SERVICES ────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container-xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-black text-[#29ABE2] tracking-widest uppercase mb-3">Our Capabilities</h2>
            <p className="text-3xl font-black text-gray-900 dark:text-white">Core Services</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {CAPABILITIES.map((cap, i) => (
              <FadeIn key={cap.title} delay={i * 0.1}>
                <div className="bg-white dark:bg-[#111827] rounded-3xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm h-full group flex flex-col hover:shadow-md transition-shadow">
                  <div className="h-40 overflow-hidden relative">
                    <img src={cap.img} alt={cap.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute bottom-4 left-4 w-10 h-10 rounded-full bg-white dark:bg-[#0A0F1A] flex items-center justify-center">
                      <cap.icon size={20} className="text-[#0A4D8C] dark:text-[#29ABE2]" />
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">{cap.title}</h3>
                    <ul className="flex flex-col gap-2 mt-auto">
                      {cap.items.map(item => (
                        <li key={item} className="text-xs font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-gray-400 dark:bg-gray-600" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. INDUSTRIES SERVED ────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container-xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-black text-[#29ABE2] tracking-widest uppercase mb-3">Expertise</h2>
            <p className="text-3xl font-black text-gray-900 dark:text-white">Industries Served</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
            {INDUSTRIES.map((ind, i) => (
              <FadeIn key={ind.name} delay={i * 0.05}>
                <div className="relative h-40 md:h-48 rounded-2xl overflow-hidden group shadow-sm hover:shadow-lg transition-shadow">
                  <img src={ind.img} alt={ind.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/90 transition-colors" />
                  <div className="absolute inset-0 p-4 flex flex-col items-center justify-end text-center pb-6">
                    <ind.icon size={32} className="text-[#29ABE2] mb-3 -translate-y-2 group-hover:-translate-y-4 transition-transform" />
                    <p className="text-sm font-bold text-white leading-tight drop-shadow-md">{ind.name}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7, 8, 9. TECH, SAFETY, CERTIFICATIONS ───────────────────────── */}
      <section className="py-16">
        <div className="container-xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <FadeIn>
              <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-white/5 shadow-sm h-full hover:border-[#29ABE2]/30 transition-colors relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=200&q=80')] bg-cover opacity-10 rounded-bl-[100%] pointer-events-none" />
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-[#0A0F1A] flex items-center justify-center mb-6 relative z-10">
                  <Cpu size={24} className="text-[#0A4D8C] dark:text-[#29ABE2]" />
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 relative z-10">Technology & Innovation</h3>
                <ul className="flex flex-col gap-3 relative z-10">
                  {TECH_LIST.map(t => <li key={t} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"><CheckCircle2 size={16} className="text-[#29ABE2] mt-0.5 flex-shrink-0"/>{t}</li>)}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-white/5 shadow-sm h-full hover:border-green-500/30 transition-colors relative overflow-hidden">
                <div className="absolute right-0 top-0 w-32 h-32 bg-[url('https://images.unsplash.com/photo-1541888087625-f81aba8301c2?w=200&q=80')] bg-cover opacity-10 rounded-bl-[100%] pointer-events-none" />
                <div className="w-12 h-12 rounded-xl bg-green-50 dark:bg-[#0A0F1A] flex items-center justify-center mb-6 relative z-10">
                  <ShieldCheck size={24} className="text-green-500" />
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 relative z-10">Safety, Quality & Sustainability</h3>
                <ul className="flex flex-col gap-3 relative z-10">
                  {SAFETY_LIST.map(s => <li key={s} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"><ShieldCheck size={16} className="text-green-500 mt-0.5 flex-shrink-0"/>{s}</li>)}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-white/5 shadow-sm h-full hover:border-[#29ABE2]/30 transition-colors relative overflow-hidden">
                 <div className="absolute right-0 top-0 w-32 h-32 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&q=80')] bg-cover opacity-10 rounded-bl-[100%] pointer-events-none" />
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-[#0A0F1A] flex items-center justify-center mb-6 relative z-10">
                  <Award size={24} className="text-[#0A4D8C] dark:text-[#29ABE2]" />
                </div>
                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-6 relative z-10">Certifications & Compliance</h3>
                <div className="flex flex-col gap-3 relative z-10">
                  {CERTIFICATIONS.map(c => (
                    <div key={c} className="bg-gray-50 dark:bg-[#0A0F1A] p-3 rounded-xl border border-gray-100 dark:border-gray-800 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-700 dark:text-blue-400 font-black text-[9px]">ISO</div>
                      <span className="text-xs font-bold text-gray-800 dark:text-gray-300">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 10. DELIVERY PROCESS ────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container-xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-black text-[#29ABE2] tracking-widest uppercase mb-3">Delivery Process</h2>
            <p className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white">A Proven Framework for Success</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative">
            {PROCESS.map((step, i) => (
              <FadeIn key={step.num} delay={i * 0.05}>
                <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 border border-gray-100 dark:border-white/5 shadow-sm relative overflow-hidden group hover:border-[#29ABE2]/30 transition-colors h-full">
                  <div className="text-5xl md:text-7xl font-black text-gray-50 dark:text-white/5 absolute -right-2 -top-2 pointer-events-none group-hover:text-[#29ABE2]/10 transition-colors">{step.num}</div>
                  <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2 relative z-10">{step.title}</h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400 relative z-10 leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 11. FEATURED PROJECTS ───────────────────────────────────────── */}
      <section className="py-16">
        <div className="container-xl px-4 sm:px-6">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-xs font-black text-[#29ABE2] tracking-widest uppercase mb-3">Portfolio</h2>
              <p className="text-3xl font-black text-gray-900 dark:text-white">Featured Projects</p>
            </div>
            <Link to="/projects" className="hidden sm:flex items-center gap-2 text-xs font-bold text-[#0A4D8C] dark:text-[#29ABE2] hover:underline">
              View All <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {PROJECTS.map((proj, i) => (
              <FadeIn key={proj.name} delay={i * 0.1}>
                <div className="bg-white dark:bg-[#111827] rounded-3xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm group flex flex-col h-full hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden relative">
                    <img src={proj.img} alt={proj.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/80 backdrop-blur-md px-3 py-1 rounded-full text-[9px] font-bold text-gray-900 dark:text-white uppercase tracking-wider">{proj.industry}</div>
                    <h3 className="absolute bottom-4 left-4 text-lg font-bold text-white z-10">{proj.name}</h3>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="grid grid-cols-2 gap-y-3 text-xs text-gray-600 dark:text-gray-400 mt-auto">
                      <p><span className="text-gray-400 block uppercase text-[10px] tracking-wider mb-1">Client</span><strong className="text-gray-900 dark:text-white">{proj.client}</strong></p>
                      <p><span className="text-gray-400 block uppercase text-[10px] tracking-wider mb-1">Scope</span><strong className="text-gray-900 dark:text-white">{proj.scope}</strong></p>
                      <p><span className="text-gray-400 block uppercase text-[10px] tracking-wider mb-1">Area</span><strong className="text-gray-900 dark:text-white">{proj.area}</strong></p>
                      <p><span className="text-gray-400 block uppercase text-[10px] tracking-wider mb-1">Loc</span><strong className="text-gray-900 dark:text-white">{proj.location}</strong></p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 12. CASE STUDIES ────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container-xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-black text-[#29ABE2] tracking-widest uppercase mb-3">Deep Dive</h2>
            <p className="text-3xl font-black text-gray-900 dark:text-white">Case Studies</p>
          </div>
          <FadeIn>
            <div className="bg-[#0A4D8C] rounded-3xl p-6 md:p-10 text-white flex flex-col lg:flex-row gap-8 items-center relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80')] bg-cover mix-blend-overlay pointer-events-none" />
              <div className="relative z-10 lg:w-1/2">
                <span className="inline-block px-2 py-1 bg-[#29ABE2] rounded text-[9px] font-bold uppercase tracking-widest mb-4">Industrial Highlight</span>
                <h3 className="text-2xl font-black mb-4 leading-tight">{CASE_STUDIES[0].title}</h3>
                <p className="text-sm text-gray-200 mb-6 leading-relaxed">{CASE_STUDIES[0].challenge}</p>
                <div className="pl-3 border-l-2 border-[#29ABE2]">
                  <p className="text-xs italic text-gray-300">"{CASE_STUDIES[0].testimonial}"</p>
                </div>
              </div>
              <div className="relative z-10 lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl aspect-video lg:aspect-square max-h-[300px]">
                <img src={CASE_STUDIES[0].img} alt="Case Study" className="w-full h-full object-cover" />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── 13. LEADERSHIP TEAM ─────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container-xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-black text-[#29ABE2] tracking-widest uppercase mb-3">Our People</h2>
            <p className="text-3xl font-black text-gray-900 dark:text-white">Leadership Team</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {LEADERSHIP.map((leader, i) => (
              <FadeIn key={leader.name} delay={i * 0.1}>
                <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 border border-gray-100 dark:border-white/5 shadow-sm text-center group h-full hover:-translate-y-1 transition-transform">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-gray-100 dark:border-gray-800">
                    <img src={leader.img} alt={leader.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h3 className="text-base font-black text-gray-900 dark:text-white mb-1">{leader.name}</h3>
                  <p className="text-[10px] font-bold text-[#0A4D8C] dark:text-[#29ABE2] uppercase mb-2">{leader.role}</p>
                  <p className="text-xs italic text-gray-500 line-clamp-2">"{leader.phil}"</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 14. AWARDS & RECOGNITION ────────────────────────────────────── */}
      <section className="py-16">
        <div className="container-xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-black text-[#29ABE2] tracking-widest uppercase mb-3">Milestones</h2>
            <p className="text-3xl font-black text-gray-900 dark:text-white">Awards & Recognition</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {AWARDS.map((award, i) => (
              <FadeIn key={award.title} delay={i * 0.1}>
                <div className="bg-white dark:bg-[#111827] rounded-2xl p-6 border border-gray-100 dark:border-white/5 flex flex-col items-center text-center group shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-[#29ABE2] mb-4 group-hover:scale-110 transition-transform"><Award size={32} /></div>
                  <p className="text-2xl font-black text-gray-300 dark:text-gray-700 mb-2">{award.year}</p>
                  <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2">{award.title}</h3>
                  <p className="text-xs text-gray-500 font-medium">{award.org}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 15. STRATEGIC PARTNERS & CLIENTS ────────────────────────────── */}
      <section className="py-12 bg-transparent overflow-hidden opacity-70 hover:opacity-100 transition-opacity">
        <div className="container-xl px-4 sm:px-6 mb-6 text-center">
          <h2 className="text-xs font-black text-gray-500 dark:text-gray-500 tracking-widest uppercase">Strategic Partners & Clients</h2>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee flex whitespace-nowrap items-center">
            {[...PARTNERS, ...PARTNERS, ...PARTNERS].map((logo, index) => (
              <img key={index} src={logo} alt="Partner" className="h-8 md:h-10 mx-6 object-contain grayscale opacity-80" />
            ))}
          </div>
        </div>
      </section>

      {/* ── 16. TESTIMONIALS ────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container-xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-black text-[#29ABE2] tracking-widest uppercase mb-3">Client Voices</h2>
            <p className="text-3xl font-black text-gray-900 dark:text-white">Testimonials</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test, i) => (
              <FadeIn key={test.name} delay={i * 0.1}>
                <div className="bg-white dark:bg-[#111827] rounded-3xl p-8 border border-gray-100 dark:border-white/5 shadow-sm relative h-full">
                  <Quote size={40} className="text-gray-100 dark:text-gray-800 absolute top-4 left-4" />
                  <p className="text-sm text-gray-700 dark:text-gray-300 relative z-10 italic mb-6 leading-relaxed">"{test.quote}"</p>
                  <div className="mt-auto">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{test.name}</p>
                    <p className="text-[10px] font-bold text-[#29ABE2] uppercase">{test.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 17. KNOWLEDGE CENTRE ────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container-xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-xs font-black text-[#29ABE2] tracking-widest uppercase mb-3">Insights</h2>
            <p className="text-3xl font-black text-gray-900 dark:text-white">Knowledge Centre</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {KNOWLEDGE.map((article, i) => (
              <FadeIn key={article.title} delay={i * 0.1}>
                <div className="bg-white dark:bg-[#111827] rounded-3xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm group cursor-pointer h-full flex flex-col hover:shadow-md transition-shadow">
                  <div className="h-48 overflow-hidden relative">
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <p className="text-[9px] font-bold text-[#29ABE2] uppercase tracking-widest mb-2">{article.cat}</p>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-[#0A4D8C] transition-colors line-clamp-2 mb-4">{article.title}</h3>
                    <p className="text-[10px] text-gray-500 font-medium flex items-center gap-1 mt-auto"><Calendar size={12}/> {article.date}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── 18. CAREER & CULTURE ────────────────────────────────────────── */}
      <section className="py-16">
        <div className="container-xl px-4 sm:px-6">
          <div className="bg-[#0A4D8C] rounded-[3rem] p-8 md:p-12 lg:p-16 text-white grid lg:grid-cols-2 gap-12 items-center relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1541888087625-f81aba8301c2?w=1920&q=80')] bg-cover mix-blend-overlay pointer-events-none" />
            <FadeIn className="relative z-10">
              <h2 className="text-xs font-black text-[#29ABE2] tracking-widest uppercase mb-4">Career & Culture</h2>
              <p className="text-3xl md:text-5xl font-black mb-6 leading-tight">Build Your Career.<br/>Shape the Future.</p>
              <p className="text-gray-200 text-sm md:text-base mb-8 leading-relaxed">Join a team that values innovation, safety, and continuous learning. We offer dynamic growth opportunities across all divisions.</p>
              <ul className="grid sm:grid-cols-2 gap-4 mb-10">
                {['Learning & Development', 'Safety Culture', 'Innovation First', 'Growth Opportunities'].map(c => (
                  <li key={c} className="flex items-center gap-2 text-sm font-medium"><CheckCircle2 size={16} className="text-[#29ABE2]" /> {c}</li>
                ))}
              </ul>
              <Link to="/careers" className="px-8 py-4 rounded-full bg-[#29ABE2] text-white font-bold text-sm inline-flex hover:scale-105 transition-transform shadow-lg shadow-blue-500/20">View Current Openings</Link>
            </FadeIn>
            <FadeIn delay={0.2} className="relative z-10 h-full min-h-[300px] lg:min-h-[400px] rounded-[2rem] overflow-hidden shadow-2xl">
               <img src="/indian_corporate_team.png" alt="Careers at Mahendram" className="absolute inset-0 w-full h-full object-cover" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── 19. FINAL CTA ───────────────────────────────────────────────── */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-[#0A4D8C] dark:bg-[#0A0F1A] border-t border-blue-800 dark:border-white/5">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')] bg-cover bg-center opacity-10 dark:opacity-[0.03] mix-blend-overlay pointer-events-none" />
        <div className="container-xl relative z-10 text-center max-w-3xl mx-auto px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Ready to Build Your Next Landmark?</h2>
            <p className="text-sm md:text-base text-blue-100 dark:text-gray-400 mb-8 leading-relaxed">Partner with India’s leading integrated infrastructure company to deliver your project on time and to the highest global standards.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="px-8 py-4 rounded-full bg-white dark:bg-[#29ABE2] text-[#0A4D8C] dark:text-white font-black text-sm hover:scale-105 transition-transform shadow-xl shadow-black/20">
                Request a Consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

    </div>
  );
}

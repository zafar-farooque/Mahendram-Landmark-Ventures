import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import { Wrench, Wind, Flame, Leaf, BarChart3, ClipboardCheck, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    category: 'Technical Services',
    accent: '#34D399',
    items: [
      { Icon: Wrench, title: 'MEP Maintenance', desc: 'Preventive and reactive maintenance of all mechanical, electrical and plumbing systems.' },
      { Icon: Flame, title: 'Fire System Maintenance', desc: 'Regular testing, inspection and AMC for all fire fighting, alarm and suppression systems.' },
      { Icon: Wind, title: 'HVAC Maintenance', desc: 'Comprehensive HVAC servicing including AHU, chillers, FCUs and cooling towers.' },
    ],
  },
  {
    category: 'Soft Services',
    accent: '#60A5FA',
    items: [
      { Icon: Leaf, title: 'Housekeeping', desc: 'Professional housekeeping teams deployed across campuses with daily quality audits.' },
      { Icon: ClipboardCheck, title: 'Pest Control', desc: 'Scheduled and emergency pest management services with chemical safety compliance.' },
      { Icon: Leaf, title: 'Waste Management', desc: 'Segregated waste collection, disposal and compliance with local municipal regulations.' },
    ],
  },
  {
    category: 'Asset Management',
    accent: '#F59E0B',
    items: [
      { Icon: ClipboardCheck, title: 'AMC Services', desc: 'Annual maintenance contracts for all building systems with defined SLAs and response times.' },
      { Icon: BarChart3, title: 'Preventive Maintenance', desc: 'Planned preventive maintenance schedules to minimise downtime and extend asset life.' },
      { Icon: BarChart3, title: 'Energy Management', desc: 'IoT-enabled energy monitoring and optimisation to reduce utility costs by 15-25%.' },
    ],
  },
];

const STATS = [
  { val: '3 Mn+', label: 'Sq Ft Managed' },
  { val: '98.7%', label: 'SLA Compliance' },
  { val: '250+', label: 'Clients' },
  { val: '19%', label: 'Avg Energy Saving' },
];

const SECTORS = ['IT Parks & SEZs', 'Manufacturing Plants', 'Hospitals & Clinics', 'Retail Malls', 'Corporate Campuses', 'Hotels & Resorts', 'Warehousing Facilities', 'Government Buildings'];

const CLIENTS_TYPES = [
  { type: 'IT Parks & SEZs', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' },
  { type: 'Manufacturing Plants', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80' },
  { type: 'Hospitals', img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80' },
  { type: 'Corporate Offices', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' },
];

const PROCESS = [
  { n: '01', label: 'Site Assessment', desc: 'Detailed audit of all assets, systems and current maintenance gaps' },
  { n: '02', label: 'SLA Agreement', desc: 'Custom SLA framework designed around your operational requirements' },
  { n: '03', label: 'Team Deployment', desc: 'Trained facility management teams mobilised within 7-14 days' },
  { n: '04', label: 'Digital Monitoring', desc: 'IoT-enabled CAFM dashboard for real-time visibility and reporting' },
];

export default function Ortus() {
  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen transition-colors duration-300">
      <Helmet>
        <title>Ortus Apex | Facility Management Company India</title>
        <meta name="description" content="Ortus Apex — integrated facility management company offering technical services, MEP maintenance, housekeeping, energy management and AMC across India. A Mahendram Landmark Ventures brand." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-20 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-[#0A2E1A]">
        <img src="/ortus_hero.png" alt="Ortus Apex" className="absolute inset-0 w-full h-full object-cover opacity-50 ken-burns-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2E1A]/80 via-[#0A2E1A]/40 to-[#0A2E1A]/80" />
        <div className="relative z-10 flex flex-col items-center text-center px-4 gap-6">
          <FadeIn delay={0}>
            <div className="flex items-center gap-2 text-xs font-bold text-white/60 tracking-widest uppercase">
              <Link to="/" className="hover:text-white">Home</Link><span>/</span>
              <span className="text-[#34D399]">Ortus Apex</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold border border-[#34D399]/40 bg-[#34D399]/10 text-[#34D399]">
              <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse" />A Mahendram Landmark Ventures Brand
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight max-w-5xl leading-[1.05]">
              Ortus <span style={{ color: '#34D399' }}>Apex</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg max-w-2xl text-white/80 font-medium leading-relaxed">
              Integrated Facility & Asset Management Services<br />
              Technology-driven, SLA-guaranteed facility management for campuses across India.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="px-8 py-3 rounded-full text-sm font-bold text-[#0A2E1A] bg-[#34D399] hover:scale-105 transition-all shadow-lg">Request FM Proposal</Link>
              <Link to="/contact" className="px-8 py-3 rounded-full text-sm font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-all">Get AMC Quote</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#0A2E1A]">
        <div className="container-xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#34D399]">{s.val}</div>
              <div className="text-xs font-bold text-white/60 uppercase tracking-widest mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="text-center mb-14">
            <FadeIn><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#34D399]">What We Manage</p></FadeIn>
            <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Facility Management Services</h2></FadeIn>
          </div>
          {SERVICES.map((cat, ci) => (
            <div key={cat.category} className="mb-14">
              <FadeIn>
                <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 rounded-full inline-block" style={{ background: cat.accent }} />
                  {cat.category}
                </h3>
              </FadeIn>
              <div className="grid sm:grid-cols-3 gap-6">
                {cat.items.map((svc, i) => (
                  <FadeIn key={svc.title} delay={i * 0.1}>
                    <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-white/10 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ background: cat.accent + '22' }}>
                        <svc.Icon size={22} style={{ color: cat.accent }} />
                      </div>
                      <h4 className="font-extrabold text-gray-900 dark:text-white mb-2">{svc.title}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{svc.desc}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sectors */}
      <section className="section-padding bg-[#F8FAFC] dark:bg-[#0A1628]/40">
        <div className="container-xl">
          <div className="text-center mb-14">
            <FadeIn><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#34D399]">Sectors We Serve</p></FadeIn>
            <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Sectors We Serve</h2></FadeIn>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SECTORS.map((s, i) => (
              <FadeIn key={s} delay={i * 0.06}>
                <div className="px-6 py-5 rounded-2xl bg-white dark:bg-[#111827] border border-gray-100 dark:border-white/10 shadow-sm text-center font-bold text-gray-800 dark:text-white text-sm hover:bg-[#34D399]/10 hover:border-[#34D399]/30 transition-all">{s}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="text-center mb-14">
            <FadeIn><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#34D399]">Our Onboarding</p></FadeIn>
            <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">How We Onboard</h2></FadeIn>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <FadeIn key={p.n} delay={i * 0.1}>
                <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-white/10 shadow-md text-center hover:-translate-y-1 transition-all">
                  <div className="text-5xl font-black text-[#34D399]/30 mb-4">{p.n}</div>
                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-3">{p.label}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#0A2E1A]">
        <div className="container-xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Hand Over Your Facility?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">We'll audit your facility within 5 working days and submit a detailed FM proposal with SLA terms and pricing.</p>
          <Link to="/contact" className="px-10 py-4 rounded-full text-sm font-bold text-[#0A2E1A] bg-[#34D399] hover:scale-105 transition-all shadow-lg inline-flex items-center gap-2">
            Get Your FM Proposal <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}

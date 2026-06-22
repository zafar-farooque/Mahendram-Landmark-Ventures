import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import { Palette, Layers, Sofa, Wrench, CheckCircle2, ArrowRight } from 'lucide-react';

const SERVICES = [
  { Icon: Palette, title: 'Workplace Strategy', desc: 'Space planning, workflow analysis and future-ready workplace design for Indian corporate environments.' },
  { Icon: Layers, title: 'Interior Design', desc: 'Concept to execution interior design for offices, retail, healthcare and hospitality across India.' },
  { Icon: Sofa, title: 'Furniture Solutions', desc: 'Ergonomic and aesthetic furniture procurement, customisation and installation for all workspace types.' },
  { Icon: Wrench, title: 'Turnkey Fit-Out', desc: 'End-to-end fit-out including false ceiling, flooring, glass partitions, joinery and MEP coordination.' },
];

const SECTORS = [
  { label: 'Office Interiors', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' },
  { label: 'Retail Interiors', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80' },
  { label: 'Healthcare Interiors', img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80' },
  { label: 'Hospitality Interiors', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80' },
];

const PROCESS = [
  { n: '01', label: 'Design', desc: 'Concept development, space planning, mood boards and 3D visualisation' },
  { n: '02', label: 'Build', desc: 'Civil works, false ceiling, flooring, MEP coordination and joinery' },
  { n: '03', label: 'Furnish', desc: 'Furniture supply, fixture installation, signage and branding elements' },
  { n: '04', label: 'Handover', desc: 'Snag-free handover, client walkthrough and post-handover support' },
];

const PROJECTS = [
  { title: 'BFSI Corporate HQ Fit-Out', area: '60,000 sq ft', location: 'Delhi NCR', img: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80' },
  { title: 'IT Company Open Office', area: '45,000 sq ft', location: 'Bengaluru', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' },
  { title: 'Luxury Retail Flagship Store', area: '8,000 sq ft', location: 'Mumbai', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80' },
  { title: 'Multi-Specialty Clinic', area: '12,000 sq ft', location: 'Hyderabad', img: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=600&q=80' },
  { title: 'Boutique Hotel Interiors', area: '30,000 sq ft', location: 'Pune', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80' },
  { title: 'Co-working Space', area: '20,000 sq ft', location: 'Chennai', img: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=600&q=80' },
];

const STATS = [
  { val: '200+', label: 'Projects Completed' },
  { val: '50+', label: 'Corporate Clients' },
  { val: '10+', label: 'Cities' },
  { val: '100%', label: 'Turnkey Delivery' },
];

export default function Inovvio() {
  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen transition-colors duration-300">
      <Helmet>
        <title>Inovvio Interior | Premium Interior Design & Fit-Out India</title>
        <meta name="description" content="Inovvio Interior — premium office, retail, healthcare and hospitality interior design and turnkey fit-out services across India. A Mahendram Landmark Ventures brand." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-20 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-[#1A0A2E]">
        <img src="/inovvio_hero.png" alt="Inovvio Interior" className="absolute inset-0 w-full h-full object-cover opacity-50 ken-burns-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A0A2E]/80 via-[#1A0A2E]/40 to-[#1A0A2E]/80" />
        <div className="relative z-10 flex flex-col items-center text-center px-4 gap-6">
          <FadeIn delay={0}>
            <div className="flex items-center gap-2 text-xs font-bold text-white/60 tracking-widest uppercase">
              <Link to="/" className="hover:text-white">Home</Link><span>/</span>
              <span className="text-[#FCD34D]">Inovvio Interior</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold border border-[#FCD34D]/40 bg-[#FCD34D]/10 text-[#FCD34D]">
              <span className="w-2 h-2 rounded-full bg-[#FCD34D] animate-pulse" />A Mahendram Landmark Ventures Brand
            </span>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight max-w-5xl leading-[1.05]">
              Inovvio <span style={{ color: '#FCD34D' }}>Interior</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-lg max-w-2xl text-white/80 font-medium leading-relaxed">
              Design → Build → Furnish → Handover<br />
              Premium interior fit-out solutions for corporate, retail, healthcare and hospitality environments across India.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="px-8 py-3 rounded-full text-sm font-bold text-[#1A0A2E] bg-[#FCD34D] hover:scale-105 transition-all shadow-lg">Request Design Consultation</Link>
              <Link to="/projects" className="px-8 py-3 rounded-full text-sm font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-all">View Projects</Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 bg-[#1A0A2E]">
        <div className="container-xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {STATS.map((s) => (
            <FadeIn key={s.label} delay={0}>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-black text-[#FCD34D]">{s.val}</div>
                <div className="text-xs font-bold text-white/60 uppercase tracking-widest mt-1">{s.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="text-center mb-14">
            <FadeIn><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#FCD34D]">What We Offer</p></FadeIn>
            <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Our Services</h2></FadeIn>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((svc, i) => (
              <FadeIn key={svc.title} delay={i * 0.1}>
                <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 bg-[#FCD34D]/10">
                    <svc.Icon size={26} className="text-[#D97706]" />
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-900 dark:text-white mb-2">{svc.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{svc.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section-padding bg-[#F8FAFC] dark:bg-[#0A1628]/40">
        <div className="container-xl">
          <div className="text-center mb-14">
            <FadeIn><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#FCD34D]">Sectors</p></FadeIn>
            <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">We Design For</h2></FadeIn>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SECTORS.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1}>
                <div className="group relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-lg">
                  <img src={s.img} alt={s.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-lg font-extrabold text-white">{s.label}</h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="text-center mb-14">
            <FadeIn><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#FCD34D]">Our Process</p></FadeIn>
            <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Design → Build → Furnish → Handover</h2></FadeIn>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROCESS.map((p, i) => (
              <FadeIn key={p.n} delay={i * 0.1}>
                <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-white/10 shadow-md text-center hover:-translate-y-1 transition-all">
                  <div className="text-5xl font-black text-[#FCD34D]/30 mb-4">{p.n}</div>
                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-3">{p.label}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-[#F8FAFC] dark:bg-[#0A1628]/40">
        <div className="container-xl">
          <div className="text-center mb-14">
            <FadeIn><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#FCD34D]">Portfolio</p></FadeIn>
            <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Featured Projects</h2></FadeIn>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <div className="group relative rounded-[2rem] overflow-hidden shadow-lg bg-white dark:bg-[#111827]">
                  <div className="h-56 overflow-hidden">
                    <img src={p.img} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-extrabold text-gray-900 dark:text-white mb-1">{p.title}</h3>
                    <p className="text-xs text-[#D97706] font-bold">{p.area} · {p.location}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-[#1A0A2E]">
        <div className="container-xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Transform Your Space?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">Tell us about your interior project and our design team will prepare a concept proposal within 48 hours.</p>
          <Link to="/contact" className="px-10 py-4 rounded-full text-sm font-bold text-[#1A0A2E] bg-[#FCD34D] hover:scale-105 transition-all shadow-lg inline-flex items-center gap-2">
            Book a Design Consultation <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}

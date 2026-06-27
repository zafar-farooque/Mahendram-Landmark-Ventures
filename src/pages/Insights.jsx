import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import { BookOpen, Newspaper, Cpu, ShieldCheck, Leaf, Image, Download, Calendar, FileText, ArrowRight } from 'lucide-react';

const CATEGORIES = [
  { id:'all',          label:'All',           icon:BookOpen    },
  { id:'articles',     label:'Articles',      icon:FileText    },
  { id:'news',         label:'News',          icon:Newspaper   },
  { id:'technology',   label:'Technology',    icon:Cpu         },
  { id:'safety',       label:'Safety',        icon:ShieldCheck },
  { id:'sustainability',label:'Sustainability',icon:Leaf       },
  { id:'media',        label:'Media',         icon:Image       },
];

const INSIGHTS = [
  { id:1, cat:'articles',      title:'The Rise of Integrated Infrastructure Companies in India', date:'Jun 15, 2025', read:'6 min', img:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80', excerpt:'How single-source accountability is reshaping India\'s construction and asset management landscape.' },
  { id:2, cat:'technology',    title:'BIM Integration in Large-Scale Indian Construction Projects', date:'May 28, 2025', read:'5 min', img:'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=700&q=80', excerpt:'Building Information Modelling is transforming how complex infrastructure projects are planned, executed, and maintained across India.' },
  { id:3, cat:'safety',        title:'Achieving Zero-Harm Construction Sites: Our Proven Framework', date:'May 10, 2025', read:'4 min', img:'/indian_safety_quality.png', excerpt:'A deep dive into our Behaviour-Based Safety (BBS) programme that has achieved 2M+ man-hours without a lost-time incident.' },
  { id:4, cat:'sustainability', title:'Green Building Certification: IGBC & LEED in India', date:'Apr 22, 2025', read:'7 min', img:'https://images.unsplash.com/photo-1498855926480-d98e83099315?w=700&q=80', excerpt:'India\'s green building market is growing rapidly. Here\'s how Mahendram delivers IGBC and LEED-compliant infrastructure.' },
  { id:5, cat:'news',          title:'Mahendram Landmark Crosses 500 Project Milestone', date:'Apr 05, 2025', read:'3 min', img:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80', excerpt:'We celebrate a landmark achievement — 500+ delivered projects across 24 Indian cities.' },
  { id:6, cat:'articles',      title:'The Future of PEB Warehousing in India\'s Logistics Sector', date:'Mar 18, 2025', read:'6 min', img:'/proj_warehouse.png', excerpt:'Pre-Engineered Buildings are transforming India\'s warehousing and logistics ecosystem. What\'s driving this shift?' },
  { id:7, cat:'technology',    title:'IoT-Enabled Facility Management: The Ortus Apex Approach', date:'Mar 05, 2025', read:'5 min', img:'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=80', excerpt:'How real-time sensor data, predictive analytics, and automated maintenance scheduling improve uptime for critical assets.' },
  { id:8, cat:'safety',        title:'Fire Protection Standards in Indian Industrial Facilities', date:'Feb 20, 2025', read:'4 min', img:'https://images.unsplash.com/photo-1565514020179-026b92b84bb6?w=700&q=80', excerpt:'NFPA, NBC, and TAC compliance in manufacturing plants — a comprehensive guide for facility managers.' },
  { id:9, cat:'sustainability', title:'Zero-Waste Construction Sites: Practices We Have Implemented', date:'Feb 08, 2025', read:'5 min', img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80', excerpt:'From recycled aggregate usage to reducing construction waste by 60%, our sustainability commitments in action.' },
  { id:10, cat:'media',        title:'Mahendram at the National Infrastructure Summit 2025', date:'Jan 25, 2025', read:'2 min', img:'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80', excerpt:'Our leadership team participated in India\'s premier infrastructure dialogue forum at New Delhi.' },
  { id:11, cat:'news',         title:'Inovvio Interior Wins Best Commercial Fit-Out Award 2024', date:'Jan 10, 2025', read:'2 min', img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80', excerpt:'Inovvio Interior\'s project for TechNova Solutions was recognised at the Design & Architecture Summit.' },
  { id:12, cat:'articles',     title:'Corporate Workspace Trends Shaping India in 2025', date:'Dec 20, 2024', read:'6 min', img:'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&q=80', excerpt:'Hybrid work, activity-based workspaces, and biophilic design are redefining what Indian offices look like in 2025.' },
];

const DOWNLOADS = [
  { title:'Company Profile 2025', type:'PDF', size:'4.2 MB', icon:'📄' },
  { title:'Sustainability Report 2024', type:'PDF', size:'2.8 MB', icon:'🌱' },
  { title:'Safety Standards Manual', type:'PDF', size:'1.5 MB', icon:'🛡️' },
  { title:'Capability Statement', type:'PDF', size:'3.1 MB', icon:'📋' },
];

const EVENTS = [
  { title:'National Infrastructure Summit 2025', date:'Sep 15, 2025', loc:'Pragati Maidan, New Delhi', status:'Upcoming' },
  { title:'India Construction Expo', date:'Aug 08, 2025', loc:'Bombay Exhibition Centre, Mumbai', status:'Upcoming' },
  { title:'Green Building India Conference', date:'Jul 20, 2025', loc:'HICC, Hyderabad', status:'Upcoming' },
];

export default function Insights() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? INSIGHTS : INSIGHTS.filter(i => i.cat === active);

  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen">
      <Helmet>
        <title>Insights | Mahendram Landmark Ventures</title>
        <meta name="description" content="Articles, news, technology insights, safety guides, sustainability reports, and industry events from Mahendram Landmark Ventures." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-20 pb-16 md:pt-40 md:pb-32 overflow-hidden bg-gray-900">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=80" alt="Insights" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <FadeIn><div className="flex items-center gap-2 text-xs font-bold text-white/70 tracking-widest uppercase mb-4"><Link to="/" className="hover:text-white">Home</Link><span>/</span><span className="text-[#29ABE2]">Insights</span></div></FadeIn>
          <FadeIn delay={0.1}><span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold border border-white/20 bg-black/30 backdrop-blur-md text-white mb-6"><span className="w-2 h-2 rounded-full bg-[#29ABE2] animate-pulse" />Knowledge · News · Media</span></FadeIn>
          <FadeIn delay={0.2}><h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight max-w-4xl leading-[1.1]">Insights &<br />Knowledge Centre</h1></FadeIn>
          <FadeIn delay={0.3}><p className="text-base md:text-lg max-w-2xl text-white/80 mt-6 font-medium leading-relaxed">Thought leadership, industry news, technology trends, safety guides, and sustainability perspectives from India's infrastructure experts.</p></FadeIn>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-10">
        <div className="container-xl px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {CATEGORIES.map(c => (
              <button key={c.id} onClick={()=>setActive(c.id)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${active === c.id ? 'bg-gray-900 dark:bg-white dark:text-gray-900 text-white shadow-md scale-105 border border-gray-900' : 'bg-white dark:bg-[#111827] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-gray-300 hover:text-gray-900 hover:bg-gray-50 shadow-sm'}`}>
                {c.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-16">
        <div className="container-xl px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((article, i) => (
              <FadeIn key={article.id} delay={i*0.05}>
                <div className="bg-white dark:bg-[#111827] rounded-3xl overflow-hidden border border-gray-100 dark:border-white/5 shadow-sm group cursor-pointer h-full flex flex-col hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="h-48 overflow-hidden relative">
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider bg-[#0A4D8C] dark:bg-[#29ABE2] text-white">{article.cat}</span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-3 text-[10px] text-gray-500 mb-3">
                      <span className="flex items-center gap-1"><Calendar size={10}/>{article.date}</span>
                      <span>·</span>
                      <span>{article.read} read</span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white group-hover:text-[#0A4D8C] dark:group-hover:text-[#29ABE2] transition-colors line-clamp-2 mb-3">{article.title}</h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2 mb-4">{article.excerpt}</p>
                    <div className="mt-auto flex items-center gap-1 text-xs font-bold text-[#0A4D8C] dark:text-[#29ABE2]">Read More <ArrowRight size={12}/></div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads & Events side by side */}
      <section className="py-16 bg-white dark:bg-[#0A0F1A]">
        <div className="container-xl px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Downloads */}
            <FadeIn>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-[#111827] flex items-center justify-center"><Download size={20} className="text-[#0A4D8C] dark:text-[#29ABE2]"/></div>
                  <div><h2 className="text-xl font-extrabold text-gray-900 dark:text-white">Downloads</h2><p className="text-xs text-gray-500">Company documents & reports</p></div>
                </div>
                <div className="flex flex-col gap-4">
                  {DOWNLOADS.map(d=>(
                    <div key={d.title} className="flex items-center justify-between bg-gray-50 dark:bg-[#111827] rounded-2xl p-5 border border-gray-100 dark:border-white/5 group hover:border-[#29ABE2]/30 transition-colors">
                      <div className="flex items-center gap-4">
                        <span className="text-2xl">{d.icon}</span>
                        <div><p className="text-sm font-bold text-gray-900 dark:text-white">{d.title}</p><p className="text-[10px] text-gray-500">{d.type} · {d.size}</p></div>
                      </div>
                      <button className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold bg-[#0A4D8C] dark:bg-[#29ABE2] text-white hover:scale-105 transition-transform"><Download size={12}/>Download</button>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            {/* Events */}
            <FadeIn delay={0.1}>
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-[#111827] flex items-center justify-center"><Calendar size={20} className="text-[#0A4D8C] dark:text-[#29ABE2]"/></div>
                  <div><h2 className="text-xl font-extrabold text-gray-900 dark:text-white">Events</h2><p className="text-xs text-gray-500">Conferences, exhibitions & summits</p></div>
                </div>
                <div className="flex flex-col gap-4">
                  {EVENTS.map(ev=>(
                    <div key={ev.title} className="bg-gray-50 dark:bg-[#111827] rounded-2xl p-5 border border-gray-100 dark:border-white/5 hover:border-[#29ABE2]/30 transition-colors">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-sm font-bold text-gray-900 dark:text-white leading-snug">{ev.title}</h3>
                        <span className="px-3 py-1 rounded-full text-[9px] font-bold bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 flex-shrink-0">{ev.status}</span>
                      </div>
                      <div className="flex items-center gap-4 text-[10px] text-gray-500">
                        <span className="flex items-center gap-1"><Calendar size={10}/>{ev.date}</span>
                        <span>{ev.loc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A4D8C]">
        <div className="container-xl text-center px-4">
          <FadeIn>
            <h2 className="text-3xl font-extrabold text-white mb-4">Subscribe to Our Insights Newsletter</h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">Get the latest infrastructure trends, safety insights, and company news delivered directly to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="your@email.com" className="flex-1 px-5 py-3 rounded-full text-sm font-medium border-0 focus:outline-none text-gray-900"/>
              <button className="px-7 py-3 rounded-full text-sm font-bold text-[#0A4D8C] bg-white hover:scale-105 transition-transform flex-shrink-0">Subscribe</button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

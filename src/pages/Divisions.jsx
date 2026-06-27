import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import { Building2, PenTool, Settings, ArrowRight, CheckCircle2 } from 'lucide-react';

const DIVISIONS = [
  {
    id:'mlv', name:'Mahendram Landmark Ventures', sub:'Engineering, Infrastructure & EPC Contracting', to:'/about',
    icon:Building2, accent:'#29ABE2',
    img:'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    desc:'Our flagship division delivers end-to-end infrastructure projects — from industrial facilities, commercial buildings, and warehouses to complex EPC contracts — with full single-point accountability across the entire project lifecycle.',
    highlights:['Greenfield & Brownfield Industrial Facilities','Commercial & Institutional Construction','Pre-Engineered Buildings (PEB)','Civil, Structural & MEP Works','Project Management Consultancy (PMC)','Fire Protection & Safety Systems'],
    stats:['500+ Projects','10M+ Sq.Ft.','Pan India'],
  },
  {
    id:'inovvio', name:'Inovvio Interior', sub:'Commercial Interior Design & Workplace Fit-Outs', to:'/inovvio',
    icon:PenTool, accent:'#60A5FA',
    img:'https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80',
    desc:'Inovvio is our design-led commercial interiors division. We transform raw office spaces, retail showrooms, hospitality venues, and healthcare interiors into premium, functional environments — from concept design through to turnkey delivery.',
    highlights:['Corporate Office Design & Fit-Outs','Retail & Showroom Interiors','Healthcare & Hospitality Interiors','Space Planning & Workplace Strategy','Furniture, Fixtures & Equipment (FF&E)','Renovation & Modernization'],
    stats:['200+ Fit-Outs','5M+ Sq.Ft.','15 Cities'],
  },
  {
    id:'ortus', name:'Ortus Apex', sub:'Integrated Facility Management & Asset Services', to:'/ortus',
    icon:Settings, accent:'#34D399',
    img:'/indian_facility_management.png',
    desc:'Ortus Apex provides comprehensive hard and soft facility management — from MEP maintenance and AMC contracts to housekeeping, pest control, and energy management — ensuring your assets perform at peak efficiency 24/7.',
    highlights:['Integrated Facility Management (IFM)','MEP Maintenance & AMC','Building Operations & Management','Soft Services (Housekeeping, Security, Pest Control)','Energy Management & Audits','Lifecycle Asset Management'],
    stats:['150+ Contracts','24×7 Operations','ISO Certified'],
  },
];

export default function Divisions() {
  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen">
      <Helmet>
        <title>Our Divisions | Mahendram Landmark Ventures</title>
        <meta name="description" content="Three specialized business divisions — MLV Infrastructure, Inovvio Interior, and Ortus Apex Facility Management." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-20 pb-16 md:pt-40 md:pb-32 overflow-hidden bg-gray-900">
        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80" alt="Divisions" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70" />
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <FadeIn><div className="flex items-center gap-2 text-xs font-bold text-white/70 tracking-widest uppercase mb-4"><Link to="/" className="hover:text-white">Home</Link><span>/</span><span className="text-[#29ABE2]">Divisions</span></div></FadeIn>
          <FadeIn delay={0.1}><span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold border border-white/20 bg-black/30 backdrop-blur-md text-white mb-6"><span className="w-2 h-2 rounded-full bg-[#29ABE2] animate-pulse" />One Company · Three Specialized Divisions</span></FadeIn>
          <FadeIn delay={0.2}><h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight max-w-4xl leading-[1.1]">Our Business Divisions</h1></FadeIn>
          <FadeIn delay={0.3}><p className="text-base md:text-lg max-w-2xl text-white/80 mt-6 font-medium leading-relaxed">Three specialized divisions working in seamless synergy to deliver integrated infrastructure, interiors, and facility management solutions across India.</p></FadeIn>
        </div>
      </section>

      {/* Stats */}
      <div className="relative z-20 -mt-12 mb-16 px-4">
        <div className="container-xl max-w-4xl mx-auto">
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap items-center justify-around gap-6 p-8 rounded-[2rem] bg-white dark:bg-[#111827] shadow-xl border border-gray-100 dark:border-white/10">
              {[['3','Specialized Divisions'],['500+','Projects Delivered'],['24','Cities in India'],['15+','Sectors Served']].map(([v,l])=>(
                <div key={l} className="flex flex-col items-center text-center">
                  <span className="text-3xl md:text-4xl font-extrabold text-[#29ABE2]">{v}</span>
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mt-1">{l}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Division Sections */}
      <section className="pb-24">
        <div className="container-xl px-4 sm:px-6">
          <div className="flex flex-col gap-20">
            {DIVISIONS.map((div, i) => (
              <FadeIn key={div.id} delay={0.1}>
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${i%2!==0?'lg:grid-flow-col-dense':''}`}>
                  <div className={`relative rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] group ${i%2!==0?'lg:col-start-2':''}`}>
                    <img src={div.img} alt={div.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6 flex gap-3 flex-wrap">
                      {div.stats.map(s=><span key={s} className="px-3 py-1.5 rounded-full text-[10px] font-bold text-white border border-white/30 bg-black/40 backdrop-blur-sm">{s}</span>)}
                    </div>
                  </div>
                  <div className={`flex flex-col gap-6 ${i%2!==0?'lg:col-start-1 lg:row-start-1':''}`}>
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg" style={{background:div.accent+'22'}}>
                      <div.icon size={28} style={{color:div.accent}} />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{color:div.accent}}>{div.sub}</p>
                      <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">{div.name}</h2>
                    </div>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-medium">{div.desc}</p>
                    <ul className="grid sm:grid-cols-2 gap-y-2 gap-x-4">
                      {div.highlights.map(h=>(
                        <li key={h} className="flex items-start gap-2 text-sm font-medium text-gray-700 dark:text-gray-300">
                          <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5" style={{color:div.accent}} />{h}
                        </li>
                      ))}
                    </ul>
                    <Link to={div.to} className="inline-flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold text-white shadow-lg w-fit hover:scale-105 transition-transform bg-[#0A4D8C]">
                      Explore Division <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#0A4D8C]">
        <div className="container-xl text-center px-4">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Not Sure Which Division You Need?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto font-medium">Our integrated model means one conversation can unlock all three. Speak to our team for a tailored recommendation.</p>
            <Link to="/contact" className="px-10 py-4 rounded-full text-sm font-bold text-[#0A4D8C] bg-white hover:scale-105 transition-transform shadow-xl inline-block">Talk to Our Team</Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';

const BORDER = 'rgba(255,255,255,0.08)';

const INDUSTRIES_DATA = [
  { id:'real-estate',      icon:'🏙',  name:'Real Estate',         desc:'Commercial, residential and mixed-use real estate development projects across India.' },
  { id:'manufacturing',    icon:'🏭',  name:'Manufacturing',        desc:'Factory construction, plant setup, expansion and industrial infrastructure.' },
  { id:'warehousing',      icon:'📦',  name:'Warehousing',          desc:'Logistics parks, distribution centres and cold storage infrastructure.' },
  { id:'logistics',        icon:'🚛',  name:'Logistics',            desc:'Transport hubs, logistics corridors and fleet operations infrastructure.' },
  { id:'healthcare',       icon:'🏥',  name:'Healthcare',           desc:'Hospitals, clinics and medical centre construction, MEP and FM services.' },
  { id:'hospitality',      icon:'🏨',  name:'Hospitality',          desc:'Hotels, resorts and serviced apartment construction and interior fit-out.' },
  { id:'retail',           icon:'🛍',  name:'Retail',               desc:'Retail fit-out, shopping complex construction and commercial interiors.' },
  { id:'education',        icon:'🎓',  name:'Education',            desc:'Schools, colleges and campus construction with infrastructure services.' },
  { id:'corporate',        icon:'🏢',  name:'Corporate Offices',    desc:'Turnkey corporate office construction, interior fit-out and FM services.' },
  { id:'government',       icon:'🏛',  name:'Government',           desc:'Government building construction, civil works and infrastructure development.' },
  { id:'psu',              icon:'⚙️',  name:'PSU',                  desc:'Public sector undertaking project execution, contracting and maintenance.' },
  { id:'railways',         icon:'🚂',  name:'Railways',             desc:'Railway station construction, platform infrastructure and facility management.' },
  { id:'ports',            icon:'⚓',  name:'Ports',                desc:'Port infrastructure, warehouse construction and industrial facility services.' },
  { id:'power',            icon:'⚡',  name:'Power',                desc:'Power plant infrastructure, substation construction and utility services.' },
  { id:'data-centers',     icon:'🖥',  name:'Data Centers',         desc:'Data centre construction, precision MEP, cooling systems and facility management.' },
];

export default function Industries() {
  return (
    <>
      <Helmet>
        <title>Industries We Serve — Engineering & Infrastructure | Mahendram Landmark</title>
        <meta name="description" content="Mahendram Landmark Ventures serves 15+ industries including Real Estate, Manufacturing, Healthcare, Hospitality, Government, Railways, Power and Data Centers across India." />
        <meta property="og:title" content="Industries Served — Mahendram Landmark Ventures" />
        <meta property="og:description" content="Engineering and infrastructure solutions across Real Estate, Manufacturing, Warehousing, Healthcare, Hospitality, Retail, Education, Government and more." />
        <meta property="og:url" content="https://www.mahendramlandmark.com/industries" />
      </Helmet>

      {/* Hero */}
      <section id="industries-hero" className="relative py-20 md:py-28 overflow-hidden" style={{ background: '#050A14' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212,137,26,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize:'60px 60px' }} />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none" style={{ background:'radial-gradient(circle,rgba(212,137,26,0.15),transparent 70%)', filter:'blur(60px)' }} />
        <div className="container-xl relative z-10 flex flex-col items-center text-center gap-5">
          <div className="flex items-center gap-2 text-xs font-medium" style={{ color:'#8A9BB5' }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color:'#D4891A' }}>Industries</span>
          </div>
          <div className="text-center mb-12">
            <FadeIn delay={0}><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color:'#D4891A' }}>Industries We Serve</p></FadeIn>
            <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold gradient-text">Industries We Serve</h2></FadeIn>
            <FadeIn delay={0.2}><p className="text-base max-w-2xl mx-auto leading-relaxed mt-3" style={{ color:'#8A9BB5' }}>
              Mahendram Landmark Ventures delivers specialized engineering, construction and facility management solutions across diverse industry verticals.
            </p></FadeIn>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section id="industries-grid" className="section-padding relative overflow-hidden" style={{ background:'#050A14' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212,137,26,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="container-xl relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_DATA.map((ind, i) => (
              <FadeIn key={ind.id} delay={i * 0.05}>
                <div id={`industry-${ind.id}`}
                  className="group flex gap-5 p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                  style={{ background:'#0D1B2E', borderColor:BORDER }}>
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background:'rgba(212,137,26,0.1)' }}>
                    {ind.icon}
                  </div>
                  <div>
                    <h2 className="font-extrabold text-base gradient-text mb-1">{ind.name}</h2>
                    <p className="text-xs leading-relaxed" style={{ color:'#8A9BB5' }}>{ind.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="industries-cta" className="py-20 relative overflow-hidden" style={{ background:'linear-gradient(135deg,#0D1B2E 0%,#050A14 100%)' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(212,137,26,0.08) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background:'radial-gradient(ellipse at center,rgba(212,137,26,0.1) 0%,transparent 70%)' }} />
        <div className="container-xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold gradient-text">Don't See Your Industry?</h2>
            <p className="mt-2 text-sm max-w-lg leading-relaxed" style={{ color:'#8A9BB5' }}>
              Our multidisciplinary team has the expertise to deliver engineering and infrastructure solutions for any sector. Let's discuss your requirements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link to="/contact" id="industries-cta-btn" className="px-8 py-4 rounded-sm text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95" style={{ background:'linear-gradient(135deg,#D4891A,#b87315)', boxShadow:'0 4px 24px rgba(212,137,26,0.35)' }}>
              Discuss Your Project →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

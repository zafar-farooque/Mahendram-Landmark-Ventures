import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import {
  IconCity, IconFactory, IconBox, IconTruck, IconHospital,
  IconHotel, IconShoppingBag, IconGraduate, IconBuilding, IconGovernment,
  IconPSU, IconTrain, IconAnchor, IconPower, IconDataCenter
} from '../components/Icons';

const BORDER = 'rgba(255,255,255,0.08)';

const INDUSTRIES_DATA = [
  { id:'real-estate',   Icon: IconCity,        name:'Real Estate',       desc:'Commercial, residential and mixed-use real estate development projects across India.', bgImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=600&q=80' },
  { id:'manufacturing', Icon: IconFactory,     name:'Manufacturing',     desc:'Factory construction, plant setup, expansion and industrial infrastructure.', bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
  { id:'warehousing',   Icon: IconBox,         name:'Warehousing',       desc:'Logistics parks, distribution centres and cold storage infrastructure.', bgImage: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80' },
  { id:'logistics',     Icon: IconTruck,       name:'Logistics',         desc:'Transport hubs, logistics corridors and fleet operations infrastructure.', bgImage: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=600&q=80' },
  { id:'healthcare',    Icon: IconHospital,    name:'Healthcare',        desc:'Hospitals, clinics and medical centre construction, MEP and FM services.', bgImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80' },
  { id:'hospitality',   Icon: IconHotel,       name:'Hospitality',       desc:'Hotels, resorts and serviced apartment construction and interior fit-out.', bgImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80' },
  { id:'retail',        Icon: IconShoppingBag, name:'Retail',            desc:'Retail fit-out, shopping complex construction and commercial interiors.', bgImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80' },
  { id:'education',     Icon: IconGraduate,    name:'Education',         desc:'Schools, colleges and campus construction with infrastructure services.', bgImage: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80' },
  { id:'corporate',     Icon: IconBuilding,    name:'Corporate Offices', desc:'Turnkey corporate office construction, interior fit-out and FM services.', bgImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' },
  { id:'government',    Icon: IconGovernment,  name:'Government',        desc:'Government building construction, civil works and infrastructure development.', bgImage: 'https://images.unsplash.com/photo-1523292562811-8fa7962ba53a?auto=format&fit=crop&w=600&q=80' },
  { id:'psu',           Icon: IconPSU,         name:'PSU',               desc:'Public sector undertaking project execution, contracting and maintenance.', bgImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80' },
  { id:'railways',      Icon: IconTrain,       name:'Railways',          desc:'Railway station construction, platform infrastructure and facility management.', bgImage: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80' },
  { id:'ports',         Icon: IconAnchor,      name:'Ports',             desc:'Port infrastructure, warehouse construction and industrial facility services.', bgImage: 'https://images.unsplash.com/photo-1584824388147-7ce85da42953?auto=format&fit=crop&w=600&q=80' },
  { id:'power',         Icon: IconPower,       name:'Power',             desc:'Power plant infrastructure, substation construction and utility services.', bgImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80' },
  { id:'data-centers',  Icon: IconDataCenter,  name:'Data Centers',      desc:'Data centre construction, precision MEP, cooling systems and facility management.', bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80' },
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
      <section id="industries-hero" className="relative pt-32 pb-14 md:pt-40 md:pb-20 overflow-hidden" style={{ background: 'var(--color-bg)' }}>
        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
          alt=""
          aria-hidden="true"
          className="section-img-overlay ken-burns-bg"
          style={{ opacity: 0.15, objectFit: 'cover', position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none' }}
        />
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage:'linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)', backgroundSize:'60px 60px' }} />
        <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full pointer-events-none" style={{ background:'radial-gradient(circle, rgba(41, 171, 226, 0.2), transparent 70%)', filter:'blur(60px)' }} />
        <div className="container-xl relative z-10 flex flex-col items-center text-center gap-5">
          <div className="flex items-center gap-2 text-xs font-medium" style={{ color:'var(--color-muted)' }}>
            <Link to="/" className="hover:text-[var(--color-primary)] transition-colors">Home</Link>
            <span>/</span>
            <span style={{ color:'var(--color-accent)' }}>Industries</span>
          </div>
          <div className="text-center mb-12">
            <FadeIn delay={0}><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color:'var(--color-accent)' }}>Industries We Serve</p></FadeIn>
            <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold gradient-text">Industries We Serve</h2></FadeIn>
            <FadeIn delay={0.2}><p className="text-base max-w-2xl mx-auto leading-relaxed mt-3" style={{ color:'var(--color-muted)' }}>
              Mahendram Landmark Ventures delivers specialized engineering, construction and facility management solutions across diverse industry verticals.
            </p></FadeIn>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section id="industries-grid" className="section-padding relative overflow-hidden" style={{ background:'var(--color-bg)' }}>
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="container-xl relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES_DATA.map((ind, i) => (
              <FadeIn key={ind.id} delay={i * 0.05}>
                <div id={`industry-${ind.id}`}
                  className="group relative flex flex-col h-[280px] rounded-2xl overflow-hidden shadow-lg border border-[rgba(255,255,255,0.1)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] bg-black">
                  
                  {/* Permanent Background Image */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <img src={ind.bgImage} alt={ind.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 transition-opacity duration-500 group-hover:opacity-80" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-end p-6 h-full">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 mb-auto shadow-lg" style={{ background: 'linear-gradient(135deg, var(--color-accent) 0%, var(--color-primary) 100%)', color: '#ffffff' }}>
                      <ind.Icon size={26} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h2 className="font-extrabold text-xl text-white mb-2">{ind.name}</h2>
                      <p className="text-sm leading-relaxed text-white/80">{ind.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="industries-cta" className="py-10 md:py-14 relative overflow-hidden bg-gradient-dark">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80" alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none ken-burns-bg" />
        <div style={{ position: 'absolute', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none', zIndex: 0 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background:'radial-gradient(ellipse at center,rgba(41, 171, 226, 0.1) 0%,transparent 70%)' }} />
        <div className="container-xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold gradient-text">Don't See Your Industry?</h2>
            <p className="mt-2 text-sm max-w-lg leading-relaxed" style={{ color:'var(--color-muted)' }}>
              Our multidisciplinary team has the expertise to deliver engineering and infrastructure solutions for any sector. Let's discuss your requirements.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link to="/contact" id="industries-cta-btn" className="px-8 py-4 rounded-sm text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95" style={{ background:'linear-gradient(135deg,var(--color-accent),var(--color-accent-2))', boxShadow:'0 4px 24px rgba(41, 171, 226, 0.1)' }}>
              Discuss Your Project →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

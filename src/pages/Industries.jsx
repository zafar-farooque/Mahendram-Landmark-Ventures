import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import {
  IconCity, IconFactory, IconBox, IconTruck, IconHospital,
  IconHotel, IconShoppingBag, IconGraduate, IconBuilding, IconGovernment,
  IconPSU, IconTrain, IconAnchor, IconPower, IconDataCenter
} from '../components/Icons';

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
  { id:'government',    Icon: IconGovernment,  name:'Government',        desc:'Government building construction, civil works and infrastructure development.', bgImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80' },
  { id:'psu',           Icon: IconPSU,         name:'PSU',               desc:'Public sector undertaking project execution, contracting and maintenance.', bgImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80' },
  { id:'railways',      Icon: IconTrain,       name:'Railways',          desc:'Railway station construction, platform infrastructure and facility management.', bgImage: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?auto=format&fit=crop&w=600&q=80' },
  { id:'ports',         Icon: IconAnchor,      name:'Ports',             desc:'Port infrastructure, warehouse construction and industrial facility services.', bgImage: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=80' },
  { id:'power',         Icon: IconPower,       name:'Power',             desc:'Power plant infrastructure, substation construction and utility services.', bgImage: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80' },
  { id:'data-centers',  Icon: IconDataCenter,  name:'Data Centers',      desc:'Data centre construction, precision MEP, cooling systems and facility management.', bgImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80' },
];

function PageHero() {
  return (
    <section id="industries-hero" className="relative pt-40 pb-28 md:pt-48 md:pb-32 overflow-hidden bg-gray-900">
      {/* High-res architectural background */}
      <img
        src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80"
        alt="Industries We Serve"
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
            <span className="text-[#29ABE2]">Industries</span>
          </div>
        </FadeIn>
        
        <FadeIn delay={0.1}>
          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold border border-white/20 bg-black/30 backdrop-blur-md text-white mb-6">
            <span className="w-2 h-2 rounded-full bg-[#29ABE2] animate-pulse" />
            15+ Industry Verticals
          </span>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl leading-[1.1]">
            Industries We Serve
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.3}>
          <p className="text-base md:text-lg max-w-2xl text-white/90 mt-6 font-medium leading-relaxed">
            Mahendram Landmark delivers specialized engineering, construction and facility management solutions across diverse industry verticals.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section id="industries-cta" className="py-12 md:py-14 relative overflow-hidden bg-gray-900 rounded-t-[2.5rem] shadow-2xl mt-10">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80')] opacity-10 object-cover mix-blend-overlay pointer-events-none ken-burns-bg" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#29ABE2]/20 to-transparent pointer-events-none" />
      
      <div className="container-xl relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Don't See Your Industry?</h2>
          <p className="mt-4 text-base max-w-xl leading-relaxed text-white/80 font-medium">
            Our multidisciplinary team has the expertise to deliver engineering and infrastructure solutions for any sector. Let's discuss your requirements.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <Link to="/contact" className="px-10 py-4 rounded-full text-sm font-bold text-white transition-all hover:scale-105 active:scale-95 shadow-[0_10px_25px_rgba(41,171,226,0.3)] bg-[#29ABE2]">
            Discuss Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Industries() {
  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen transition-colors duration-300">
      <Helmet>
        <title>Industries We Serve | Mahendram Landmark</title>
        <meta name="description" content="Mahendram Landmark Ventures serves 15+ industries including Real Estate, Manufacturing, Healthcare, Hospitality, Government, Railways, Power and Data Centers across India." />
      </Helmet>
      
      <PageHero />
      
      {/* Grid */}
      <section id="industries-grid" className="section-padding relative overflow-hidden pb-10">
        <div className="container-xl relative z-10 pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRIES_DATA.map((ind, i) => (
              <FadeIn key={ind.id} delay={i * 0.05}>
                <div id={`industry-${ind.id}`}
                  className="group relative flex flex-col h-[320px] rounded-[2rem] overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(0,0,0,0.15)] bg-black cursor-pointer">
                  
                  {/* Image & Overlay */}
                  <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <img src={ind.bgImage} alt={ind.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-500 group-hover:opacity-90" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col justify-end p-8 h-full">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 mb-auto shadow-lg bg-[#F0F7FF] text-[#29ABE2] group-hover:scale-110 transition-transform duration-300">
                      <ind.Icon size={26} strokeWidth={2} />
                    </div>
                    <div className="transform transition-transform duration-500 translate-y-4 group-hover:translate-y-0">
                      <h2 className="font-extrabold text-2xl text-white mb-2 leading-tight">{ind.name}</h2>
                      <p className="text-sm leading-relaxed text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{ind.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </div>
  );
}

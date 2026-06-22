import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import { MapPin, Phone, CheckCircle2, ArrowRight } from 'lucide-react';

/* ── City Data ── */
const CITIES = {
  mumbai: {
    name: 'Mumbai', state: 'Maharashtra', heroImg: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445?auto=format&fit=crop&w=1920&q=80',
    tagline: 'Mumbai\'s Trusted Engineering & Infrastructure Partner',
    intro: 'Mahendram Landmark Ventures is a leading construction, engineering, interior and facility management company operating across Mumbai, Navi Mumbai and the Mumbai Metropolitan Region (MMR). From corporate tower fit-outs in BKC to industrial warehouse construction in Bhiwandi, our teams deliver landmark projects across Mumbai.',
    services: ['Construction Company in Mumbai', 'Warehouse Construction in Mumbai', 'Office Interior Contractor Mumbai', 'MEP Contractor Mumbai', 'Fire Protection Company Mumbai', 'Facility Management Company Mumbai'],
    projects: [{ title: 'Corporate HQ Fit-Out, BKC', cat: 'Interiors' },{ title: 'Warehouse Complex, Bhiwandi', cat: 'PEB' },{ title: 'IT Park MEP, Andheri', cat: 'MEP' }],
    office: 'Corporate Office, Bandra Kurla Complex, Mumbai 400051',
    phone: '+91 98765 43210',
  },
  pune: {
    name: 'Pune', state: 'Maharashtra', heroImg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80',
    tagline: 'Pune\'s Leading Construction & Facility Management Company',
    intro: 'Mahendram Landmark Ventures has a strong project execution track record in Pune, Pimpri-Chinchwad and the Pune Metropolitan Area. We serve manufacturing companies, IT parks, warehousing companies and real estate developers across Pune with integrated engineering and facility management services.',
    services: ['Construction Company in Pune', 'Warehouse Construction Company Pune', 'Factory Construction Pune', 'MEP Contractor Pune', 'Facility Management Pune', 'Office Interior Contractor Pune'],
    projects: [{ title: 'Cold Chain Warehouse, Chakan', cat: 'Warehousing' },{ title: 'IT Campus MEP, Hinjewadi', cat: 'MEP' },{ title: 'Manufacturing Plant, PCMC', cat: 'Construction' }],
    office: 'Regional Office, Kalyani Nagar, Pune 411006',
    phone: '+91 98765 43210',
  },
  nashik: { name: 'Nashik', state: 'Maharashtra', heroImg: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80', tagline: 'Nashik\'s Engineering & PEB Construction Specialist', intro: 'Mahendram Landmark Ventures executes industrial, PEB warehouse and infrastructure projects across Nashik, Sinnar, Satpur and Ambad industrial areas.', services: ['PEB Warehouse Construction Nashik', 'Industrial Construction Nashik', 'MEP Contractor Nashik', 'Facility Management Nashik'], projects: [{ title: 'PEB Logistics Park, Sinnar', cat: 'PEB' },{ title: 'Industrial Shed, Ambad', cat: 'Construction' }], office: 'Regional Office, Nashik Road, Nashik 422101', phone: '+91 98765 43210' },
  nagpur: { name: 'Nagpur', state: 'Maharashtra', heroImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80', tagline: 'Nagpur\'s Infrastructure & Construction Partner', intro: 'We deliver infrastructure, construction and facility management projects across Nagpur, Butibori and MIHAN Special Economic Zone.', services: ['Construction Company Nagpur', 'Infrastructure Development Nagpur', 'MEP Services Nagpur', 'Facility Management Nagpur'], projects: [{ title: 'Commercial Complex, Dharampeth', cat: 'Construction' },{ title: 'SEZ Infrastructure, MIHAN', cat: 'Infrastructure' }], office: 'Regional Office, Sadar, Nagpur 440001', phone: '+91 98765 43210' },
  ahmedabad: { name: 'Ahmedabad', state: 'Gujarat', heroImg: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1920&q=80', tagline: 'Ahmedabad\'s Trusted Engineering & Construction Company', intro: 'Mahendram Landmark serves clients across Ahmedabad, Sanand, Changodar and the Greater Ahmedabad area with construction, MEP and facility management services.', services: ['Construction Company Ahmedabad', 'Factory Construction Ahmedabad', 'Warehouse Construction Ahmedabad', 'MEP Contractor Ahmedabad'], projects: [{ title: 'Manufacturing Plant, Sanand', cat: 'Construction' },{ title: 'Textile Factory, Changodar', cat: 'Industrial' }], office: 'Regional Office, SG Highway, Ahmedabad 380060', phone: '+91 98765 43210' },
  surat: { name: 'Surat', state: 'Gujarat', heroImg: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1920&q=80', tagline: 'Surat\'s Leading Industrial & Warehouse Construction Company', intro: 'We build warehouses, textile factories and commercial properties across Surat, Sachin, Pandesara and Kim industrial zones.', services: ['Warehouse Construction Surat', 'Industrial Construction Surat', 'MEP Services Surat', 'PEB Solutions Surat'], projects: [{ title: 'Textile Warehouse, Sachin', cat: 'Warehousing' },{ title: 'Industrial Shed, Pandesara', cat: 'PEB' }], office: 'Regional Office, Ring Road, Surat 395002', phone: '+91 98765 43210' },
  vadodara: { name: 'Vadodara', state: 'Gujarat', heroImg: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1920&q=80', tagline: 'Vadodara\'s Engineering & MEP Construction Partner', intro: 'Our teams execute MEP, civil and industrial construction projects across Vadodara, Halol and GIDC industrial areas.', services: ['MEP Contractor Vadodara', 'Industrial Construction Vadodara', 'Fire Protection Vadodara', 'Facility Management Vadodara'], projects: [{ title: 'Chemical Plant MEP, Halol', cat: 'MEP' },{ title: 'Office Complex, Alkapuri', cat: 'Interiors' }], office: 'Regional Office, Alkapuri, Vadodara 390007', phone: '+91 98765 43210' },
  bangalore: { name: 'Bengaluru', state: 'Karnataka', heroImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80', tagline: 'Bengaluru\'s Premier Office Interior & Facility Management Company', intro: 'Mahendram Landmark Ventures and Inovvio Interior are trusted partners for IT companies, startups and real estate developers across Bengaluru, Whitefield, Electronic City and Outer Ring Road.', services: ['Office Interior Contractor Bengaluru', 'Facility Management Bengaluru', 'MEP Contractor Bengaluru', 'Warehouse Construction Bengaluru', 'Fire Protection Bengaluru'], projects: [{ title: 'IT Campus Fit-Out, Whitefield', cat: 'Interiors' },{ title: 'Data Center MEP, Electronic City', cat: 'MEP' },{ title: 'Logistics Park, Hoskote', cat: 'Warehousing' }], office: 'Regional Office, Outer Ring Road, Bengaluru 560103', phone: '+91 98765 43210' },
  chennai: { name: 'Chennai', state: 'Tamil Nadu', heroImg: 'https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&w=1920&q=80', tagline: 'Chennai\'s Trusted Construction & Fire Protection Company', intro: 'We deliver hospital fire protection, office fit-outs, MEP works and industrial construction across Chennai, Ambattur, Perambur and SIPCOT industrial areas.', services: ['Construction Company Chennai', 'Fire Protection Company Chennai', 'MEP Contractor Chennai', 'Office Interior Contractor Chennai', 'Facility Management Chennai'], projects: [{ title: 'Hospital Fire Protection, Anna Nagar', cat: 'Fire Protection' },{ title: 'IT Park MEP, OMR', cat: 'MEP' },{ title: 'Industrial Construction, SIPCOT', cat: 'Construction' }], office: 'Regional Office, Anna Salai, Chennai 600002', phone: '+91 98765 43210' },
  hyderabad: { name: 'Hyderabad', state: 'Telangana', heroImg: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80', tagline: 'Hyderabad\'s Leading MEP & Construction Company', intro: 'We execute MEP, office interiors, construction and facility management projects across Hyderabad, HITEC City, Gachibowli, Shamshabad and Zaheerabad.', services: ['Construction Company Hyderabad', 'MEP Contractor Hyderabad', 'Office Interior Contractor Hyderabad', 'Warehouse Construction Hyderabad', 'Facility Management Hyderabad'], projects: [{ title: 'IT Park MEP, Gachibowli', cat: 'MEP' },{ title: 'Pharmaceutical Plant, Pashamylaram', cat: 'Construction' },{ title: 'Office Fit-Out, HITEC City', cat: 'Interiors' }], office: 'Regional Office, HITEC City, Hyderabad 500081', phone: '+91 98765 43210' },
  'delhi-ncr': { name: 'Delhi NCR', state: 'Delhi', heroImg: 'https://images.unsplash.com/photo-1566473965997-3de9c817e938?auto=format&fit=crop&w=1920&q=80', tagline: 'Delhi NCR\'s Integrated Engineering & Construction Company', intro: 'Mahendram Landmark serves corporate clients, developers and government departments across Delhi, Gurugram, Noida, Faridabad and Greater Noida.', services: ['Construction Company Delhi NCR', 'Office Interior Contractor Delhi', 'MEP Contractor Delhi', 'Facility Management Delhi NCR', 'Fire Protection Delhi'], projects: [{ title: 'BFSI Office Fit-Out, Connaught Place', cat: 'Interiors' },{ title: 'Warehouse Complex, Greater Noida', cat: 'Warehousing' },{ title: 'Government Building, Delhi', cat: 'Construction' }], office: 'Regional Office, Connaught Place, New Delhi 110001', phone: '+91 98765 43210' },
  noida: { name: 'Noida', state: 'Uttar Pradesh', heroImg: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80', tagline: 'Noida\'s Trusted Facility Management & IT Interior Company', intro: 'We deliver office interiors, MEP works, facility management and warehouse construction across Noida, Greater Noida and Yamuna Expressway Industrial Area.', services: ['Office Interior Contractor Noida', 'Facility Management Company Noida', 'MEP Contractor Noida', 'Warehouse Construction Noida'], projects: [{ title: 'SEZ Campus FM, Noida', cat: 'Facility Management' },{ title: 'IT Office Fit-Out, Sector 62', cat: 'Interiors' }], office: 'Regional Office, Sector 18, Noida 201301', phone: '+91 98765 43210' },
  gurugram: { name: 'Gurugram', state: 'Haryana', heroImg: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80', tagline: 'Gurugram\'s Premium Office Interior & MEP Company', intro: 'Inovvio Interior and Mahendram Landmark deliver premium office fit-outs, MEP works and facility management for corporate clients across Gurugram, Cyber City and NH8 corridor.', services: ['Office Interior Contractor Gurugram', 'MEP Contractor Gurugram', 'Facility Management Gurugram', 'Fire Protection Gurugram'], projects: [{ title: 'Corporate Office Fit-Out, Cyber City', cat: 'Interiors' },{ title: 'IT Campus MEP, Sohna Road', cat: 'MEP' }], office: 'Regional Office, Cyber City, Gurugram 122002', phone: '+91 98765 43210' },
  kolkata: { name: 'Kolkata', state: 'West Bengal', heroImg: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80', tagline: 'Kolkata\'s Engineering & Infrastructure Company', intro: 'We deliver construction, MEP, fire protection and facility management projects across Kolkata, Rajarhat, Durgapur and Haldia.', services: ['Construction Company Kolkata', 'MEP Contractor Kolkata', 'Fire Protection Kolkata', 'Facility Management Kolkata'], projects: [{ title: 'IT Tower MEP, Rajarhat', cat: 'MEP' },{ title: 'Warehouse, Haldia', cat: 'Warehousing' }], office: 'Regional Office, Park Street, Kolkata 700016', phone: '+91 98765 43210' },
  bhubaneswar: { name: 'Bhubaneswar', state: 'Odisha', heroImg: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80', tagline: 'Bhubaneswar\'s Construction & Infrastructure Company', intro: 'Mahendram Landmark executes government buildings, hospital construction and MEP works across Bhubaneswar and the Infocity IT park corridor.', services: ['Construction Company Bhubaneswar', 'Hospital Construction Bhubaneswar', 'MEP Services Bhubaneswar', 'Infrastructure Development Odisha'], projects: [{ title: 'Government Hospital, Bhubaneswar', cat: 'Construction' },{ title: 'IT Park MEP, Infocity', cat: 'MEP' }], office: 'Regional Office, Saheed Nagar, Bhubaneswar 751007', phone: '+91 98765 43210' },
  indore: { name: 'Indore', state: 'Madhya Pradesh', heroImg: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1920&q=80', tagline: 'Indore\'s Industrial Construction & Warehouse Company', intro: 'We build factories, warehouses and commercial properties across Indore, Pithampur and Dewas Industrial Area.', services: ['Industrial Construction Indore', 'Warehouse Construction Indore', 'MEP Contractor Indore', 'Factory Construction Pithampur'], projects: [{ title: 'Factory Construction, Pithampur', cat: 'Construction' },{ title: 'Warehouse, Dewas', cat: 'Warehousing' }], office: 'Regional Office, AB Road, Indore 452010', phone: '+91 98765 43210' },
  jaipur: { name: 'Jaipur', state: 'Rajasthan', heroImg: 'https://images.unsplash.com/photo-1477587458883-47145ed6979c?auto=format&fit=crop&w=1920&q=80', tagline: 'Jaipur\'s Trusted Construction & Infrastructure Partner', intro: 'Mahendram Landmark delivers construction, infrastructure, MEP and facility management projects across Jaipur, Sitapura and Neemrana Industrial Zones.', services: ['Construction Company Jaipur', 'Infrastructure Development Rajasthan', 'MEP Contractor Jaipur', 'Facility Management Jaipur'], projects: [{ title: 'Road Infrastructure, NH48', cat: 'Infrastructure' },{ title: 'Factory, Sitapura', cat: 'Construction' }], office: 'Regional Office, Tonk Road, Jaipur 302018', phone: '+91 98765 43210' },
};

const CAT_COLOR = { Interiors: '#BE185D', PEB: '#92400E', MEP: '#B45309', Warehousing: '#7C3AED', Construction: '#29ABE2', Infrastructure: '#0369A1', 'Fire Protection': '#DC2626', 'Facility Management': '#065F46', Industrial: '#374151' };

export default function LocationPage() {
  const { city } = useParams();
  const data = CITIES[city] || CITIES['mumbai'];

  const pageTitle = `${data.name.charAt(0).toUpperCase() + data.name.slice(1)} — Engineering & Construction Company`;
  const desc = `Mahendram Landmark Ventures — leading construction, engineering, interior and facility management company in ${data.name}, ${data.state}. ${data.services[0]}, ${data.services[1]} and more.`;

  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen">
      <Helmet>
        <title>{pageTitle} | Mahendram Landmark</title>
        <meta name="description" content={desc} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={desc} />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-20 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-gray-900">
        <img src={data.heroImg} alt={data.name} className="absolute inset-0 w-full h-full object-cover opacity-50 ken-burns-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/70" />
        <div className="relative z-10 container-xl">
          <FadeIn>
            <div className="flex items-center gap-2 text-xs font-bold text-white/60 tracking-widest uppercase mb-4">
              <Link to="/" className="hover:text-white">Home</Link><span>/</span>
              <span className="text-[#29ABE2]">{data.name}</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-2 mb-4">
              <MapPin size={16} className="text-[#29ABE2]" />
              <span className="text-xs font-bold text-white/60">{data.name}, {data.state}</span>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight max-w-4xl">{data.tagline}</h1>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="text-base md:text-lg text-white/80 mt-6 max-w-3xl leading-relaxed">{data.intro}</p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/contact" className="px-8 py-3 rounded-full text-sm font-bold text-white bg-[#29ABE2] hover:scale-105 transition-all shadow-lg flex items-center gap-2">
                Request Proposal <ArrowRight size={14} />
              </Link>
              <a href={`tel:${data.phone}`} className="px-8 py-3 rounded-full text-sm font-bold text-white border-2 border-white/30 hover:bg-white/10 transition-all flex items-center gap-2">
                <Phone size={14} /> Call Now
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services in this city */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <FadeIn>
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#29ABE2]">Services in {data.name}</p>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">What We Offer in {data.name}</h2>
              </FadeIn>
              <div className="flex flex-col gap-3">
                {data.services.map((s, i) => (
                  <FadeIn key={s} delay={i * 0.06}>
                    <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white dark:bg-[#111827] border border-gray-100 dark:border-white/10 shadow-sm">
                      <CheckCircle2 size={16} className="text-[#29ABE2] flex-shrink-0" />
                      <span className="font-bold text-gray-900 dark:text-white text-sm">{s}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <div>
              {/* Projects */}
              <FadeIn>
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#29ABE2]">Our Work</p>
                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6">Projects in {data.name}</h2>
              </FadeIn>
              <div className="flex flex-col gap-4 mb-10">
                {data.projects.map((p, i) => (
                  <FadeIn key={p.title} delay={i * 0.1}>
                    <div className="flex items-center gap-4 px-5 py-4 rounded-2xl bg-white dark:bg-[#111827] border border-gray-100 dark:border-white/10 shadow-sm">
                      <span className="text-[10px] font-black px-3 py-1 rounded-full text-white flex-shrink-0" style={{ background: CAT_COLOR[p.cat] || '#29ABE2' }}>{p.cat}</span>
                      <span className="font-bold text-gray-900 dark:text-white text-sm">{p.title}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>

              {/* Office */}
              <FadeIn>
                <div className="bg-gradient-to-br from-[#0A4D8C] to-[#0A1628] rounded-[2rem] p-8 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#29ABE2] mb-4">Our Office in {data.name}</p>
                  <div className="flex items-start gap-3 mb-3">
                    <MapPin size={16} className="text-[#29ABE2] mt-1 flex-shrink-0" />
                    <p className="text-sm font-medium">{data.office}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="text-[#29ABE2]" />
                    <a href={`tel:${data.phone}`} className="text-sm font-bold text-[#29ABE2]">{data.phone}</a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* All Cities */}
      <section className="section-padding bg-[#F8FAFC] dark:bg-[#0A1628]/40">
        <div className="container-xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">We Operate Across India</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {Object.entries(CITIES).map(([slug, c]) => (
              <Link key={slug} to={`/location/${slug}`}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${slug === city ? 'bg-[#29ABE2] text-white' : 'bg-white dark:bg-[#111827] border border-gray-200 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:border-[#29ABE2] hover:text-[#29ABE2]'}`}>
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gray-900">
        <div className="container-xl text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Have a Project in {data.name}?</h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">Our local team in {data.name} is ready to discuss your requirements. Get a proposal within 48 hours.</p>
          <Link to="/contact" className="px-10 py-4 rounded-full text-sm font-bold text-white bg-[#29ABE2] hover:scale-105 transition-all shadow-lg inline-flex items-center gap-2">
            Contact {data.name} Team <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </div>
  );
}

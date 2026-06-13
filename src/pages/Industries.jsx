import { Helmet } from 'react-helmet-async';

const industries = [
  { icon: '🏘', name: 'Real Estate', desc: 'Residential, Commercial & Mixed Use Projects' },
  { icon: '🏭', name: 'Manufacturing', desc: 'Industrial Infrastructure & Factory Solutions' },
  { icon: '📦', name: 'Warehousing & Logistics', desc: 'Warehouses, Distribution Centers & Logistics Parks' },
  { icon: '🏥', name: 'Healthcare', desc: 'Hospitals, Clinics & Medical Infrastructure' },
  { icon: '🏨', name: 'Hospitality', desc: 'Hotels, Resorts & Hospitality Facilities' },
  { icon: '🛍', name: 'Retail', desc: 'Retail Stores & Commercial Fit-Out' },
  { icon: '🏢', name: 'Corporate Offices', desc: 'Modern Workplace Solutions' },
  { icon: '🎓', name: 'Education', desc: 'Schools, Colleges & Institutions' },
  { icon: '🏛', name: 'Government & PSU', desc: 'Public Infrastructure Projects' },
  { icon: '🚉', name: 'Railways', desc: 'Railway Infrastructure & Facilities' },
  { icon: '⚓', name: 'Ports & Marine', desc: 'Port Infrastructure Development' },
  { icon: '⚡', name: 'Power & Utilities', desc: 'Utility Infrastructure & Energy Projects' },
  { icon: '💾', name: 'Data Centers', desc: 'Mission Critical Infrastructure' },
];

export default function Industries() {
  return (
    <div className="section-padding container-xl">
      <Helmet>
        <title>Industries We Serve — Real Estate, Manufacturing, Healthcare & More | Mahendram Landmark</title>
        <meta name="description" content="Mahendram Landmark Ventures serves 13+ industries: Real Estate, Manufacturing, Warehousing, Healthcare, Hospitality, Retail, Education, Government, Railways, Data Centers and more." />
        <meta property="og:title" content="Industries We Serve — Mahendram Landmark Ventures" />
        <meta property="og:description" content="Specialized engineering and infrastructure solutions across 13 sectors in India including Real Estate, Manufacturing, Healthcare, Hospitality and Data Centers." />
        <meta property="og:url" content="https://www.mahendramlandmark.com/industries" />
      </Helmet>
      <div className="text-center mb-12">
        <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: '#d4a017' }}>
          Sectors We Serve
        </span>
        <h1 className="text-4xl font-extrabold mt-2" style={{ color: '#0a2240' }}>
          Industries We Serve
        </h1>
        <p className="mt-3 text-gray-500 max-w-xl mx-auto">
          Delivering specialized infrastructure and engineering solutions across 13+ sectors in India.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {industries.map((ind) => (
          <div key={ind.name}
            className="group p-6 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-200 cursor-pointer text-center">
            <div className="text-4xl mb-3">{ind.icon}</div>
            <h3 className="font-bold text-sm mb-1 group-hover:text-blue-700 transition-colors"
              style={{ color: '#0a2240' }}>{ind.name}</h3>
            <p className="text-xs text-gray-500">{ind.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <span className="inline-block px-4 py-2 rounded-full text-sm font-medium text-white"
          style={{ background: '#1e6fa8' }}>
          🏭 Industries Page — SEO landing pages coming soon
        </span>
      </div>
    </div>
  );
}

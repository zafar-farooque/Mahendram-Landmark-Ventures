import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import { BookOpen, Download, Calculator, ArrowRight } from 'lucide-react';

/* ── Blog Posts ── */
const BLOGS = [
  { cat: 'Construction', title: 'Top 10 Things to Check Before Starting Construction in India', date: 'Jun 2024', read: '5 min', img: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80' },
  { cat: 'PEB', title: 'PEB vs RCC: Which is Better for Your Warehouse?', date: 'May 2024', read: '7 min', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80' },
  { cat: 'Facility Management', title: 'How to Write a Good Facility Management SLA', date: 'Apr 2024', read: '6 min', img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80' },
  { cat: 'Interiors', title: 'Office Interior Trends in India 2024 — Biophilic, Flexible & Smart', date: 'Mar 2024', read: '4 min', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80' },
  { cat: 'Warehousing', title: 'Warehouse Planning Guide: Key Factors for Indian Logistics Companies', date: 'Feb 2024', read: '8 min', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80' },
  { cat: 'Infrastructure', title: 'Understanding BIM in Infrastructure Projects — A Practical Guide', date: 'Jan 2024', read: '6 min', img: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80' },
];

const CAT_COLOR = { Construction: '#29ABE2', PEB: '#92400E', 'Facility Management': '#065F46', Interiors: '#BE185D', Warehousing: '#7C3AED', Infrastructure: '#0369A1' };

/* ── Downloads ── */
const DOWNLOADS = [
  { name: 'Corporate Profile', desc: 'Company overview, capabilities, projects and divisions', size: '4.2 MB', type: 'PDF' },
  { name: 'Service Brochure', desc: 'All 14 service lines with technical details', size: '3.1 MB', type: 'PDF' },
  { name: 'Capability Statement', desc: 'Project credentials and technical capabilities', size: '2.8 MB', type: 'PDF' },
  { name: 'Company Presentation', desc: 'Complete pitch deck for new clients', size: '5.5 MB', type: 'PPTX' },
  { name: 'Project Portfolio', desc: 'Selected project case studies with photos', size: '8.2 MB', type: 'PDF' },
  { name: 'Inovvio Interior Brochure', desc: 'Interior design and fit-out services catalog', size: '3.4 MB', type: 'PDF' },
  { name: 'Ortus Apex FM Brochure', desc: 'Facility management services overview', size: '2.6 MB', type: 'PDF' },
  { name: 'HSE Policy', desc: 'Health, safety and environment policy document', size: '1.2 MB', type: 'PDF' },
];

/* ── Guides ── */
const GUIDES = [
  { name: 'Warehouse Planning Guide', desc: 'Step-by-step guide to planning a warehouse from site selection to handover' },
  { name: 'Office Interior Guide', desc: 'Everything you need to know about office fit-outs in India' },
  { name: 'PEB Guide', desc: 'Pre-engineered buildings explained — design, cost and construction' },
  { name: 'Facility Management Guide', desc: 'How to set up an effective FM operation for your campus' },
];

/* ── Calculators ── */
function WarehouseCalc() {
  const [area, setArea] = useState('');
  const [type, setType] = useState('peb');
  const result = area ? {
    peb: { civil: Math.round(area * 850), mep: Math.round(area * 200), fire: Math.round(area * 120), total: Math.round(area * 1170) },
    rcc: { civil: Math.round(area * 1400), mep: Math.round(area * 200), fire: Math.round(area * 120), total: Math.round(area * 1720) },
  }[type] : null;
  return (
    <div className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className="text-xs font-bold text-gray-600 dark:text-gray-400 mb-1 block">Warehouse Area (sq ft)</label>
          <input type="number" placeholder="e.g. 50000" value={area} onChange={e => setArea(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30" /></div>
        <div><label className="text-xs font-bold text-gray-600 dark:text-gray-400 mb-1 block">Structure Type</label>
          <select value={type} onChange={e => setType(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30">
            <option value="peb">PEB Structure</option><option value="rcc">RCC Structure</option>
          </select></div>
      </div>
      {result && (
        <div className="bg-gradient-to-br from-[#0A4D8C] to-[#0A1628] rounded-2xl p-6 text-white mt-2">
          <p className="text-xs font-bold uppercase tracking-widest mb-4 text-[#29ABE2]">Estimated Cost Breakdown</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div><span className="text-white/60">Civil & Structure</span><p className="font-black text-lg">₹{result.civil.toLocaleString()}</p></div>
            <div><span className="text-white/60">MEP Services</span><p className="font-black text-lg">₹{result.mep.toLocaleString()}</p></div>
            <div><span className="text-white/60">Fire Protection</span><p className="font-black text-lg">₹{result.fire.toLocaleString()}</p></div>
            <div><span className="text-white/60">Total Estimate</span><p className="font-black text-2xl text-[#29ABE2]">₹{result.total.toLocaleString()}</p></div>
          </div>
          <p className="text-xs text-white/50 mt-4">* Indicative estimate. Actual costs may vary based on site conditions, specifications and market rates. Contact us for a detailed quote.</p>
        </div>
      )}
    </div>
  );
}

function InteriorCalc() {
  const [area, setArea] = useState('');
  const [tier, setTier] = useState('mid');
  const rates = { basic: 1200, mid: 2200, premium: 3800 };
  const result = area ? Math.round(area * rates[tier]) : null;
  return (
    <div className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div><label className="text-xs font-bold text-gray-600 dark:text-gray-400 mb-1 block">Office Area (sq ft)</label>
          <input type="number" placeholder="e.g. 10000" value={area} onChange={e => setArea(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FCD34D]/30" /></div>
        <div><label className="text-xs font-bold text-gray-600 dark:text-gray-400 mb-1 block">Fit-Out Tier</label>
          <select value={tier} onChange={e => setTier(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FCD34D]/30">
            <option value="basic">Basic (₹1,200/sqft)</option>
            <option value="mid">Mid-Range (₹2,200/sqft)</option>
            <option value="premium">Premium (₹3,800/sqft)</option>
          </select></div>
      </div>
      {result && (
        <div className="bg-gradient-to-br from-[#1A0A2E] to-[#2D1B69] rounded-2xl p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-[#FCD34D]">Estimated Interior Fit-Out Cost</p>
          <p className="font-black text-4xl text-[#FCD34D]">₹{result.toLocaleString()}</p>
          <p className="text-xs text-white/50 mt-3">* Indicative. Excludes furniture unless specified. Contact Inovvio Interior for a detailed proposal.</p>
        </div>
      )}
    </div>
  );
}

function FMCalc() {
  const [area, setArea] = useState('');
  const [services, setServices] = useState([]);
  const rates = { mep: 3.5, housekeeping: 2.8, pest: 0.8, security: 4.2, energy: 1.5 };
  const OPTS = [{ id: 'mep', label: 'MEP Maintenance' },{ id: 'housekeeping', label: 'Housekeeping' },{ id: 'pest', label: 'Pest Control' },{ id: 'security', label: 'Security Services' },{ id: 'energy', label: 'Energy Management' }];
  const toggle = (id) => setServices(s => s.includes(id) ? s.filter(x=>x!==id) : [...s, id]);
  const monthly = area ? Math.round(services.reduce((acc, s) => acc + (rates[s] * parseFloat(area || 0)), 0)) : 0;
  return (
    <div className="flex flex-col gap-4">
      <div><label className="text-xs font-bold text-gray-600 dark:text-gray-400 mb-1 block">Facility Area (sq ft)</label>
        <input type="number" placeholder="e.g. 100000" value={area} onChange={e => setArea(e.target.value)} className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#34D399]/30" /></div>
      <div><label className="text-xs font-bold text-gray-600 dark:text-gray-400 mb-2 block">Select Services</label>
        <div className="flex flex-wrap gap-2">{OPTS.map(o => <button key={o.id} onClick={() => toggle(o.id)} className={`px-4 py-2 rounded-full text-xs font-bold border transition-all ${services.includes(o.id) ? 'bg-[#34D399] text-white border-[#34D399]' : 'border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 hover:border-[#34D399]'}`}>{o.label}</button>)}</div></div>
      {area && services.length > 0 && (
        <div className="bg-gradient-to-br from-[#052E16] to-[#065F46] rounded-2xl p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-widest mb-2 text-[#34D399]">Estimated Monthly FM Cost</p>
          <p className="font-black text-4xl text-[#34D399]">₹{monthly.toLocaleString()}/mo</p>
          <p className="text-xs text-white/50 mt-3">* Indicative. Final pricing subject to site audit and SLA terms. Contact Ortus Apex for a detailed proposal.</p>
        </div>
      )}
    </div>
  );
}

const CALCULATORS = [
  { id: 'warehouse', title: 'Warehouse Cost Calculator', desc: 'Estimate your PEB or RCC warehouse construction cost', color: '#29ABE2', Comp: WarehouseCalc },
  { id: 'interior', title: 'Interior Fit-Out Calculator', desc: 'Estimate office interior fit-out cost per sq ft', color: '#FCD34D', Comp: InteriorCalc },
  { id: 'fm', title: 'Facility Management Calculator', desc: 'Estimate monthly FM cost for your facility', color: '#34D399', Comp: FMCalc },
];

const TABS = [
  { id: 'blog', label: 'Blog', Icon: BookOpen },
  { id: 'downloads', label: 'Downloads', Icon: Download },
  { id: 'guides', label: 'Guides', Icon: BookOpen },
  { id: 'calculators', label: 'Cost Calculators', Icon: Calculator },
];

export default function Resources() {
  const [tab, setTab] = useState('blog');
  const [activeCalc, setActiveCalc] = useState('warehouse');

  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen">
      <Helmet>
        <title>Resources | Mahendram Landmark</title>
        <meta name="description" content="Engineering and construction resources — blog, brochures, guides, cost calculators for warehouse, interior and facility management projects in India." />
      </Helmet>
      <section className="relative pt-20 pb-16 md:pt-48 md:pb-32 bg-gray-900 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80" alt="Resources" className="absolute inset-0 w-full h-full object-cover opacity-60 ken-burns-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/60" />
        <div className="relative z-10 container-xl text-center">
          <FadeIn><h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6">Resources &<br />Knowledge Center</h1></FadeIn>
          <FadeIn delay={0.2}><p className="text-lg text-white/80 max-w-2xl mx-auto">Guides, brochures, blog articles and cost calculators to help you plan your next engineering, construction or facility management project in India.</p></FadeIn>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="pt-12 md:pt-16 pb-8">
        <div className="container-xl">
          <div className="w-full flex justify-center">
            <div className="flex flex-wrap justify-center gap-3">
              {TABS.map(t => {
                const active = tab === t.id;
                return (
                  <button key={t.id} onClick={() => setTab(t.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${active ? 'bg-gray-900 dark:bg-white dark:text-gray-900 text-white shadow-md scale-105 border border-gray-900' : 'bg-white dark:bg-[#111827] text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-gray-300 hover:text-gray-900 hover:bg-gray-50 shadow-sm'}`}>
                    <t.Icon size={14} className={active ? 'text-white dark:text-gray-900' : 'text-gray-400'} />
                    {t.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-xl">

          {/* Blog */}
          {tab === 'blog' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {BLOGS.map((b, i) => (
                <FadeIn key={b.title} delay={i * 0.08}>
                  <div className="bg-white dark:bg-[#111827] rounded-[2rem] overflow-hidden border border-gray-100 dark:border-white/10 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all group cursor-pointer">
                    <div className="relative h-48 overflow-hidden">
                      <img src={b.img} alt={b.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <span className="absolute top-4 left-4 text-[10px] font-black px-3 py-1 rounded-full text-white" style={{ background: CAT_COLOR[b.cat] }}>{b.cat}</span>
                    </div>
                    <div className="p-6">
                      <p className="text-xs text-gray-400 mb-2">{b.date} · {b.read} read</p>
                      <h3 className="font-extrabold text-gray-900 dark:text-white leading-snug mb-3 group-hover:text-[#29ABE2] transition-colors">{b.title}</h3>
                      <span className="text-xs font-bold text-[#29ABE2] flex items-center gap-1">Read Article <ArrowRight size={11} /></span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}

          {/* Downloads */}
          {tab === 'downloads' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {DOWNLOADS.map((d, i) => (
                <FadeIn key={d.name} delay={i * 0.06}>
                  <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-white/10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all cursor-pointer group">
                    <div className="w-12 h-12 rounded-xl bg-[#29ABE2]/10 flex items-center justify-center mb-5 group-hover:bg-[#29ABE2] transition-colors">
                      <Download size={20} className="text-[#29ABE2] group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-[10px] font-black px-2 py-0.5 rounded bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300">{d.type}</span>
                    <h3 className="font-extrabold text-gray-900 dark:text-white mt-3 mb-2">{d.name}</h3>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">{d.desc}</p>
                    <p className="text-xs text-gray-400">{d.size}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}

          {/* Guides */}
          {tab === 'guides' && (
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {GUIDES.map((g, i) => (
                <FadeIn key={g.name} delay={i * 0.1}>
                  <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-white/10 shadow-md hover:-translate-y-1 hover:shadow-xl transition-all cursor-pointer group flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-[#29ABE2]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#29ABE2] transition-colors">
                      <BookOpen size={20} className="text-[#29ABE2] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-gray-900 dark:text-white mb-2">{g.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{g.desc}</p>
                      <span className="text-xs font-bold text-[#29ABE2] flex items-center gap-1">Download Free Guide <ArrowRight size={11} /></span>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}

          {/* Calculators */}
          {tab === 'calculators' && (
            <div>
              <div className="flex gap-3 justify-center mb-10 flex-wrap">
                {CALCULATORS.map(c => (
                  <button key={c.id} onClick={() => setActiveCalc(c.id)}
                    className={`px-6 py-2 rounded-full text-xs font-bold transition-all border ${activeCalc === c.id ? 'text-white border-transparent shadow-md' : 'border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300'}`}
                    style={activeCalc === c.id ? { background: c.color } : {}}>
                    {c.title}
                  </button>
                ))}
              </div>
              {CALCULATORS.map(c => activeCalc === c.id && (
                <div key={c.id} className="max-w-2xl mx-auto bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-white/10 shadow-md">
                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-2">{c.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{c.desc}</p>
                  <c.Comp />
                </div>
              ))}
            </div>
          )}

        </div>
      </section>
    </div>
  );
}

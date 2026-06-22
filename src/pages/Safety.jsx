import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import { ShieldCheck, AlertTriangle, BookOpen, ClipboardCheck, Download, Users } from 'lucide-react';

const SECTIONS = [
  { Icon: ShieldCheck, title: 'Safety Culture', desc: 'At Mahendram Landmark, safety is not a department — it is a culture. Every worker, supervisor and engineer is trained to prioritise safety above all else. Our "Zero Harm" philosophy is embedded in every project we execute across India.' },
  { Icon: Users, title: 'Safety Training', desc: 'All site personnel undergo mandatory safety induction before mobilisation. Ongoing toolbox talks, monthly safety drills and annual refresher training ensure every team member stays updated.' },
  { Icon: ClipboardCheck, title: 'Site Audits', desc: 'Weekly internal safety audits and monthly third-party audits are conducted on all active project sites. Findings are logged digitally and corrective actions are tracked to closure within 48 hours.' },
  { Icon: AlertTriangle, title: 'Emergency Preparedness', desc: 'Every site has a documented Emergency Response Plan (ERP) with trained first-aiders, fire wardens, designated assembly points and emergency contact trees updated quarterly.' },
  { Icon: BookOpen, title: 'Compliance Framework', desc: 'All our projects comply with the Factories Act 1948, Building & Other Construction Workers Act 1996, IS standards and client-specific HSE requirements.' },
  { Icon: Download, title: 'Safety Downloads', desc: 'Download our safety policy, site induction forms and emergency response templates.' },
];
const STATS = [{ val: '0', label: 'Fatalities (Last 5 Years)' },{ val: '500+', label: 'Safety Audits Conducted' },{ val: '10,000+', label: 'Workers Trained' },{ val: '100%', label: 'Sites with Safety Officer' }];
const DOWNLOADS = [{ name: 'HSE Policy Document', size: '1.2 MB' },{ name: 'Site Safety Induction Checklist', size: '850 KB' },{ name: 'Emergency Response Plan Template', size: '1.5 MB' },{ name: 'PPE Requirements Guide', size: '600 KB' }];

export default function Safety() {
  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen">
      <Helmet><title>Safety Excellence | Mahendram Landmark</title><meta name="description" content="Safety Excellence at Mahendram Landmark Ventures — Zero Harm culture, site audits, emergency preparedness and compliance framework." /></Helmet>
      <section className="relative pt-20 pb-16 md:pt-48 md:pb-32 bg-[#7F1D1D] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1920&q=80" alt="Safety" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#7F1D1D]/80 to-[#7F1D1D]/90" />
        <div className="relative z-10 container-xl text-center">
          <FadeIn><h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6">Zero Harm.<br />Every Site. Every Day.</h1></FadeIn>
          <FadeIn delay={0.2}><p className="text-lg text-white/80 max-w-2xl mx-auto">Our safety-first culture protects every worker, visitor and stakeholder on every Mahendram project site across India.</p></FadeIn>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {STATS.map(s => <div key={s.label} className="bg-[#7F1D1D] rounded-2xl p-6 text-center"><div className="text-4xl font-black text-white mb-1">{s.val}</div><div className="text-xs font-bold text-red-300 uppercase tracking-widest">{s.label}</div></div>)}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SECTIONS.map((s, i) => <FadeIn key={s.title} delay={i * 0.08}><div className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-white/10 shadow-md hover:-translate-y-1 transition-all"><div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-900/20 flex items-center justify-center mb-5"><s.Icon size={22} className="text-[#DC2626]" /></div><h3 className="text-lg font-extrabold text-gray-900 dark:text-white mb-3">{s.title}</h3><p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p></div></FadeIn>)}
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-8">Safety Downloads</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {DOWNLOADS.map(d => <div key={d.name} className="bg-white dark:bg-[#111827] rounded-2xl p-6 border border-gray-100 dark:border-white/10 shadow-sm hover:shadow-md transition-all cursor-pointer"><Download size={20} className="text-[#DC2626] mb-3" /><p className="font-bold text-gray-900 dark:text-white text-sm mb-1">{d.name}</p><p className="text-xs text-gray-400">{d.size}</p></div>)}
          </div>
        </div>
      </section>
    </div>
  );
}

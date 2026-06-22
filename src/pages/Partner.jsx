import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import { Briefcase, Users, Globe, Handshake } from 'lucide-react';

const PARTNER_TYPES = [
  { Icon: Briefcase, title: 'Become a Vendor', desc: 'Supply construction materials, equipment or specialized products to Mahendram Landmark projects across India.', color: '#29ABE2' },
  { Icon: Users, title: 'Become a Contractor', desc: 'Execute civil, MEP, fire, PEB or interior works as a registered subcontractor on Mahendram projects.', color: '#0A4D8C' },
  { Icon: Globe, title: 'Become a Regional Partner', desc: 'Represent Mahendram Landmark in your city or state and generate business from your local network.', color: '#34D399' },
  { Icon: Handshake, title: 'Become a Consultant Partner', desc: 'Architecture, PMC and design consultants can collaborate with us on projects requiring multi-discipline expertise.', color: '#F59E0B' },
];

const BENEFITS = [
  'Access to ₹500+ Crore project pipeline', 'Timely payment — 30-45 day payment cycles',
  'Long-term relationship building', 'Training and development support',
  'Digital work order and billing system', 'ISO-compliant documentation framework',
];

export default function Partner() {
  const [form, setForm] = useState({ name:'', company:'', type:'', city:'', email:'', phone:'' });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); };
  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen">
      <Helmet><title>Partner With Us | Mahendram Landmark</title><meta name="description" content="Partner with Mahendram Landmark Ventures as vendor, contractor, supplier, regional partner or consultant. Join India's growing infrastructure company." /></Helmet>
      <section className="relative pt-20 pb-16 md:pt-48 md:pb-32 bg-gray-900 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1920&q=80" alt="Partner Network" className="absolute inset-0 w-full h-full object-cover opacity-50 ken-burns-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/70" />
        <div className="relative z-10 container-xl text-center">
          <FadeIn><h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6">Grow With<br />Mahendram</h1></FadeIn>
          <FadeIn delay={0.2}><p className="text-lg text-white/80 max-w-2xl mx-auto">We're building India's infrastructure. Join our partner network and grow your business with a trusted, technology-driven organization.</p></FadeIn>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {PARTNER_TYPES.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-white/10 shadow-md hover:-translate-y-1 transition-all text-center">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5" style={{ background: p.color + '22' }}>
                    <p.Icon size={28} style={{ color: p.color }} />
                  </div>
                  <h3 className="text-lg font-extrabold text-gray-900 dark:text-white mb-3">{p.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{p.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Benefits */}
          <div className="bg-gradient-to-br from-[#0A4D8C] to-[#0A1628] rounded-[3rem] p-10 md:p-16 text-white mb-16">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">Why Partner With Us?</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {BENEFITS.map(b => <div key={b} className="flex items-center gap-3 text-sm font-medium"><span className="w-2 h-2 rounded-full bg-[#29ABE2] flex-shrink-0" />{b}</div>)}
            </div>
          </div>

          {/* Partner Form */}
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-3">Express Your Interest</h2>
              <p className="text-gray-500 dark:text-gray-400">Fill in the form and our partnerships team will get back to you within 2 working days.</p>
            </div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-white/10 shadow-md flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required placeholder="Your Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30" />
                  <input required placeholder="Company Name" value={form.company} onChange={e => setForm({...form, company: e.target.value})} className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30" />
                </div>
                <select required value={form.type} onChange={e => setForm({...form, type: e.target.value})} className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30">
                  <option value="">Select Partnership Type</option>
                  <option>Vendor</option><option>Contractor</option><option>Supplier</option><option>Regional Partner</option><option>Consultant Partner</option>
                </select>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required placeholder="City" value={form.city} onChange={e => setForm({...form, city: e.target.value})} className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30" />
                  <input required placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30" />
                </div>
                <input required type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30" />
                <button type="submit" className="px-8 py-4 rounded-xl bg-[#29ABE2] text-white font-bold hover:scale-105 transition-all mt-2">Submit Partnership Application</button>
              </form>
            ) : (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/30 rounded-[2rem] p-12 text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-xl font-extrabold text-green-800 dark:text-green-300 mb-2">Application Received!</h3>
                <p className="text-green-700 dark:text-green-400">Our partnerships team will contact you within 2 working days.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

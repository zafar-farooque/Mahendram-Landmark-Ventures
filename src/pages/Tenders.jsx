import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import { FileText, UserCheck, Building2, ArrowRight } from 'lucide-react';

const TENDERS = [
  { id: 'T-2024-001', title: 'MEP Works — IT Park Phase 2, Pune', value: '₹8.5 Crore', deadline: '15 Jul 2024', category: 'MEP', status: 'Open' },
  { id: 'T-2024-002', title: 'Civil Works — Warehouse Complex, Nashik', value: '₹22 Crore', deadline: '20 Jul 2024', category: 'Civil', status: 'Open' },
  { id: 'T-2024-003', title: 'Fire Protection — Hospital, Chennai', value: '₹3.2 Crore', deadline: '10 Jul 2024', category: 'Fire', status: 'Closing Soon' },
  { id: 'T-2024-004', title: 'Housekeeping Services — SEZ Campus, Noida', value: '₹1.8 Crore/yr', deadline: '25 Jul 2024', category: 'FM', status: 'Open' },
  { id: 'T-2024-005', title: 'PEB Supply & Erection — Logistics Park, Hyderabad', value: '₹15 Crore', deadline: '30 Jul 2024', category: 'PEB', status: 'Open' },
  { id: 'T-2024-006', title: 'Interior Fit-Out — BFSI Office, Mumbai', value: '₹6.5 Crore', deadline: '05 Aug 2024', category: 'Interiors', status: 'Open' },
];

const CAT_COLOR = { MEP: '#B45309', Civil: '#29ABE2', Fire: '#DC2626', FM: '#065F46', PEB: '#92400E', Interiors: '#BE185D' };

const REGISTRATION_TYPES = [
  { Icon: UserCheck, title: 'Vendor Registration', desc: 'Register as an approved vendor to supply materials or services to Mahendram Landmark projects.', fields: ['Company Name', 'GST Number', 'Category of Work', 'Annual Turnover', 'Contact Person'] },
  { Icon: Building2, title: 'Contractor Registration', desc: 'Empanel as a subcontractor for civil, MEP, fire protection, interiors or facility management works.', fields: ['Company Name', 'Contractor License No.', 'Class of Works', 'Experience in Years', 'PAN Number'] },
  { Icon: FileText, title: 'Supplier Registration', desc: 'Register as a material or equipment supplier for Mahendram Landmark and its group companies.', fields: ['Company Name', 'Product Category', 'Manufacturing Location', 'GST Number', 'ISO Certification'] },
];

export default function Tenders() {
  const [activeReg, setActiveReg] = useState(null);
  const [form, setForm] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => { e.preventDefault(); setSubmitted(true); setTimeout(() => { setSubmitted(false); setActiveReg(null); setForm({}); }, 3000); };

  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen">
      <Helmet><title>Tenders & Procurement | Mahendram Landmark</title><meta name="description" content="Current tenders, vendor registration, contractor registration and supplier empanelment at Mahendram Landmark Ventures." /></Helmet>
      <section className="relative pt-20 pb-16 md:pt-48 md:pb-32 bg-gray-900 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80" alt="Tenders" className="absolute inset-0 w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/70" />
        <div className="relative z-10 container-xl text-center">
          <FadeIn><h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6">Tenders &<br />Procurement</h1></FadeIn>
          <FadeIn delay={0.2}><p className="text-lg text-white/80 max-w-2xl mx-auto">Current open tenders and vendor/contractor/supplier registration portal for Mahendram Landmark Ventures and its group companies.</p></FadeIn>
        </div>
      </section>

      {/* Current Tenders */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="text-center mb-12">
            <FadeIn><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#29ABE2]">Open for Bidding</p></FadeIn>
            <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Current Tenders</h2></FadeIn>
          </div>
          <div className="flex flex-col gap-4">
            {TENDERS.map((t, i) => (
              <FadeIn key={t.id} delay={i * 0.06}>
                <div className="bg-white dark:bg-[#111827] rounded-2xl p-6 border border-gray-100 dark:border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <span className="text-xs font-black px-3 py-1 rounded-full text-white flex-shrink-0" style={{ background: CAT_COLOR[t.category] }}>{t.category}</span>
                    <div>
                      <h3 className="font-extrabold text-gray-900 dark:text-white">{t.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Ref: {t.id} · Deadline: {t.deadline} · Est. Value: {t.value}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${t.status === 'Closing Soon' ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>{t.status}</span>
                    <Link to="/contact" className="px-5 py-2 rounded-full text-xs font-bold bg-[#29ABE2] text-white hover:scale-105 transition-all">Apply Now</Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Registration */}
      <section className="section-padding bg-[#F8FAFC] dark:bg-[#0A1628]/40">
        <div className="container-xl">
          <div className="text-center mb-12">
            <FadeIn><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#29ABE2]">Join Our Network</p></FadeIn>
            <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Register With Us</h2></FadeIn>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REGISTRATION_TYPES.map((r, i) => (
              <FadeIn key={r.title} delay={i * 0.1}>
                <div className={`bg-white dark:bg-[#111827] rounded-[2rem] p-8 border-2 cursor-pointer transition-all ${activeReg === r.title ? 'border-[#29ABE2] shadow-lg' : 'border-gray-100 dark:border-white/10 shadow-md hover:-translate-y-1'}`} onClick={() => setActiveReg(activeReg === r.title ? null : r.title)}>
                  <div className="w-12 h-12 rounded-xl bg-[#29ABE2]/10 flex items-center justify-center mb-5"><r.Icon size={22} className="text-[#29ABE2]" /></div>
                  <h3 className="text-lg font-extrabold text-gray-900 dark:text-white mb-2">{r.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4">{r.desc}</p>
                  {activeReg === r.title && !submitted && (
                    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3">
                      {r.fields.map(f => <input key={f} placeholder={f} required onChange={e => setForm(prev => ({...prev, [f]: e.target.value}))} className="px-4 py-2 rounded-xl border border-gray-200 dark:border-white/10 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30" />)}
                      <button type="submit" className="px-6 py-3 rounded-xl bg-[#29ABE2] text-white text-sm font-bold hover:scale-105 transition-all mt-2">Submit Registration</button>
                    </form>
                  )}
                  {activeReg === r.title && submitted && <p className="text-green-600 font-bold text-sm mt-4">✅ Registration submitted! Our team will contact you within 2 working days.</p>}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

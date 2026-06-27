import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import { Briefcase, Heart, GraduationCap, Gift, ArrowRight } from 'lucide-react';

const OPENINGS = [
  { id: 'J001', title: 'Senior Project Manager — Civil', dept: 'Construction', location: 'Mumbai', type: 'Full-time', exp: '8-12 years' },
  { id: 'J002', title: 'MEP Engineer — HVAC', dept: 'MEP Services', location: 'Bengaluru', type: 'Full-time', exp: '4-7 years' },
  { id: 'J003', title: 'Business Development Manager', dept: 'Sales', location: 'Delhi NCR', type: 'Full-time', exp: '5-8 years' },
  { id: 'J004', title: 'Interior Designer', dept: 'Inovvio Interior', location: 'Mumbai', type: 'Full-time', exp: '3-6 years' },
  { id: 'J005', title: 'Facility Manager', dept: 'Ortus Apex', location: 'Pune', type: 'Full-time', exp: '6-10 years' },
  { id: 'J006', title: 'Site Engineer — PEB', dept: 'PEB Solutions', location: 'Nashik', type: 'Full-time', exp: '2-5 years' },
  { id: 'J007', title: 'BIM Coordinator', dept: 'Engineering & Design', location: 'Hyderabad', type: 'Full-time', exp: '3-5 years' },
  { id: 'J008', title: 'Safety Officer', dept: 'HSE', location: 'Chennai', type: 'Full-time', exp: '3-6 years' },
];

const BENEFITS = [
  { Icon: Gift, title: 'Employee Benefits', items: ['Competitive CTC benchmarked to market', 'Health insurance for employee & family', 'Provident Fund & Gratuity', 'Annual performance bonus'] },
  { Icon: GraduationCap, title: 'Training & Development', items: ['On-the-job mentorship program', 'Technical skills certification support', 'Leadership development workshops', 'Annual training budget per employee'] },
  { Icon: Heart, title: 'Life at Mahendram', items: ['Pan India project exposure', 'Fast-track career growth path', 'Diverse and inclusive workplace', 'Monthly team events and recognition'] },
];

const DEPT_COLORS = { Construction: '#29ABE2', 'MEP Services': '#B45309', Sales: '#7C3AED', 'Inovvio Interior': '#D97706', 'Ortus Apex': '#065F46', 'PEB Solutions': '#92400E', 'Engineering & Design': '#0369A1', HSE: '#DC2626' };

const API = 'http://localhost:5000';

export default function Careers() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', role:'', exp:'', city:'' });
  const [resume, setResume] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`${API}/api/careers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setError(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setError('Could not connect to server. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen">
      <Helmet><title>Careers | Mahendram Landmark</title><meta name="description" content="Join Mahendram Landmark Ventures — current job openings in construction, MEP, interiors, facility management and more across India." /></Helmet>
      <section className="relative pt-20 pb-16 md:pt-48 md:pb-32 bg-gray-900 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1920&q=80" alt="Careers" className="absolute inset-0 w-full h-full object-cover opacity-60 ken-burns-bg" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/60" />
        <div className="relative z-10 container-xl text-center">
          <FadeIn><h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6">Build Your Career.<br />Build India's Future.</h1></FadeIn>
          <FadeIn delay={0.2}><p className="text-lg text-white/80 max-w-2xl mx-auto">Join a dynamic team of 500+ engineers, designers, and facility management professionals delivering landmark projects across India.</p></FadeIn>
          <FadeIn delay={0.3}><div className="flex flex-wrap justify-center gap-3 mt-8">{['500+ Team Members','14 Service Lines','Pan India Projects','Fast-Track Growth'].map(s=><span key={s} className="px-5 py-2 rounded-full text-xs font-bold bg-white/10 border border-white/20 text-white">{s}</span>)}</div></FadeIn>
        </div>
      </section>

      {/* Life at Mahendram */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl">
                <img src="/indian_corporate_team.png" alt="Life at Mahendram" className="w-full h-full object-cover"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"/>
              </div>
            </FadeIn>
            <div className="flex flex-col gap-6">
              <FadeIn delay={0.1}>
                <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#29ABE2]">Life at Mahendram</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight mt-2">Where Talent Meets Purpose</h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">At Mahendram Landmark, we believe great people build great projects. Our culture is rooted in collaboration, innovation, and a shared commitment to engineering excellence. Whether you're on a construction site in Mumbai, designing an office in Bengaluru, or managing a facility in Hyderabad, you are part of one team.</p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="grid grid-cols-2 gap-5">
                  {[{icon:'🤝',title:'Inclusive Culture',desc:'Diverse teams from across India working with one purpose.'},{icon:'📈',title:'Fast-Track Growth',desc:'Structured career ladders and performance-based promotions.'},{icon:'🎯',title:'Ownership Mindset',desc:'We empower people to lead projects and own outcomes.'},{icon:'🌍',title:'Pan India Exposure',desc:'Work on landmark projects across 24+ Indian cities.'}].map(c=>(
                    <div key={c.title} className="bg-white dark:bg-[#111827] rounded-2xl p-5 border border-gray-100 dark:border-white/10 shadow-sm">
                      <span className="text-2xl mb-3 block">{c.icon}</span>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">{c.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                    </div>
                  ))}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="section-padding bg-[#F8FAFC] dark:bg-[#0A1628]/30">
        <div className="container-xl">
          <div className="text-center mb-12">
            <FadeIn><p className="text-xs font-bold tracking-[0.2em] uppercase mb-2 text-[#29ABE2]">Our Values in Action</p></FadeIn>
            <FadeIn delay={0.1}><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Culture</h2></FadeIn>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{icon:'🛡️',title:'Safety First',desc:'We never compromise on safety — on site or in the office. Every person goes home safe.'},{icon:'💡',title:'Innovation',desc:'We encourage new ideas, new methods and smarter ways to solve infrastructure challenges.'},{icon:'🏆',title:'Excellence',desc:'We hold ourselves to the highest standards of quality, integrity and professionalism.'},{icon:'👥',title:'Teamwork',desc:'Cross-functional collaboration across divisions, geographies and disciplines.'}].map((v,i)=>(
              <FadeIn key={v.title} delay={i*0.1}>
                <div className="bg-white dark:bg-[#111827] rounded-2xl p-6 border border-gray-100 dark:border-white/10 shadow-sm text-center hover:-translate-y-1 transition-transform h-full">
                  <span className="text-3xl mb-4 block">{v.icon}</span>
                  <h3 className="text-base font-extrabold text-gray-900 dark:text-white mb-2">{v.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding">
        <div className="container-xl">
          <div className="text-center mb-12"><FadeIn><h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Why Work With Us?</h2></FadeIn></div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {BENEFITS.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.1}>
                <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-white/10 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-[#29ABE2]/10 flex items-center justify-center mb-5"><b.Icon size={22} className="text-[#29ABE2]" /></div>
                  <h3 className="text-lg font-extrabold text-gray-900 dark:text-white mb-4">{b.title}</h3>
                  <ul className="space-y-2">{b.items.map(it => <li key={it} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"><span className="w-1.5 h-1.5 rounded-full bg-[#29ABE2]" />{it}</li>)}</ul>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Job Listings */}
          <div className="text-center mb-10"><h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Current Openings</h2></div>
          <div className="flex flex-col gap-4 mb-16">
            {OPENINGS.map((j, i) => (
              <FadeIn key={j.id} delay={i * 0.05}>
                <div className="bg-white dark:bg-[#111827] rounded-2xl p-6 border border-gray-100 dark:border-white/10 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:shadow-md transition-all">
                  <div className="flex items-start gap-4">
                    <span className="text-[10px] font-black px-3 py-1 rounded-full text-white flex-shrink-0" style={{ background: DEPT_COLORS[j.dept] || '#29ABE2' }}>{j.dept}</span>
                    <div>
                      <h3 className="font-extrabold text-gray-900 dark:text-white">{j.title}</h3>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">📍 {j.location} · {j.type} · {j.exp}</p>
                    </div>
                  </div>
                  <button onClick={() => document.getElementById('apply-form').scrollIntoView({ behavior: 'smooth' })} className="px-5 py-2 rounded-full text-xs font-bold bg-[#29ABE2] text-white hover:scale-105 transition-all flex-shrink-0 flex items-center gap-1">Apply <ArrowRight size={12} /></button>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Apply Form */}
          <div id="apply-form" className="max-w-2xl mx-auto">
            <div className="text-center mb-8"><h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Apply Online</h2><p className="text-gray-500 mt-2">We review all applications within 5 working days.</p></div>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-white/10 shadow-md flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required placeholder="Full Name" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30" />
                  <input required type="email" placeholder="Email Address" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input required placeholder="Phone Number" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})} className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30" />
                  <input required placeholder="Current City" value={form.city} onChange={e => setForm({...form, city: e.target.value})} className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30" />
                </div>
                <input required placeholder="Role Applying For" value={form.role} onChange={e => setForm({...form, role: e.target.value})} className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30" />
                <input required placeholder="Years of Experience" value={form.exp} onChange={e => setForm({...form, exp: e.target.value})} className="px-4 py-3 rounded-xl border border-gray-200 dark:border-white/10 text-sm bg-gray-50 dark:bg-white/5 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#29ABE2]/30" />
                <div>
                  <label className="text-xs font-bold text-gray-600 dark:text-gray-400 mb-2 block">Upload Resume (PDF)</label>
                  <input type="file" accept=".pdf" onChange={e => setResume(e.target.files[0])} className="text-sm text-gray-600 dark:text-gray-400" />
                </div>
                {error && <p className="text-sm text-red-500 font-medium text-center">{error}</p>}
                <button type="submit" disabled={loading} className="px-8 py-4 rounded-xl bg-[#29ABE2] text-white font-bold hover:scale-105 transition-all mt-2 disabled:opacity-60 disabled:cursor-not-allowed">{loading ? 'Submitting...' : 'Submit Application'}</button>
              </form>
            ) : (
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700/30 rounded-[2rem] p-12 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h3 className="text-xl font-extrabold text-green-800 dark:text-green-300 mb-2">Application Submitted!</h3>
                <p className="text-green-700 dark:text-green-400">Our HR team will review your profile and get back to you within 5 working days.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Internships */}
      <section className="section-padding bg-[#0A4D8C]">
        <div className="container-xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#29ABE2] mb-3">Internships</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">Start Your Engineering Journey With Us</h2>
              <p className="text-white/80 text-sm leading-relaxed mb-8">We offer structured internship programmes for engineering, architecture, interior design, and management students across India. Gain real hands-on experience working alongside professionals on live projects.</p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[{t:'Civil & Structural Engineering',d:'6-month internship on live construction sites.'},{t:'Interior Design',d:'Creative project support at Inovvio Interior.'},{t:'MEP Engineering',d:'Hands-on MEP systems exposure on real projects.'},{t:'Project Management',d:'Site coordination, scheduling and reporting.'}].map(r=>(
                  <div key={r.t} className="bg-white/10 border border-white/10 rounded-2xl p-4">
                    <h4 className="text-sm font-bold text-white mb-1">{r.t}</h4>
                    <p className="text-xs text-white/70">{r.d}</p>
                  </div>
                ))}
              </div>
              <a href="mailto:internships@mahendramlandmark.com" className="inline-block px-8 py-4 rounded-full bg-white text-[#0A4D8C] font-bold text-sm hover:scale-105 transition-transform shadow-lg">Apply for Internship</a>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] shadow-2xl">
                <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=900&q=80" alt="Internships" className="w-full h-full object-cover"/>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

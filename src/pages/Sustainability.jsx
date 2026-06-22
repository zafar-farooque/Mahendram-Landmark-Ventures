import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import { Leaf, Droplets, Zap, Recycle, Globe, TreePine } from 'lucide-react';

const PILLARS = [
  { Icon: Leaf, title: 'Green Infrastructure', accent: '#22C55E', desc: 'We design and build green-certified infrastructure integrating passive design strategies, energy-efficient systems and sustainable materials sourced from responsible Indian suppliers.' },
  { Icon: Zap, title: 'Energy Optimization', accent: '#F59E0B', desc: 'Solar power integration, LED lighting, energy-efficient HVAC and building automation systems help our clients reduce energy costs by 15-30% against conventional buildings.' },
  { Icon: Droplets, title: 'Water Management', accent: '#38BDF8', desc: 'Rainwater harvesting, water recycling systems, low-flow fixtures and sewage treatment plants are incorporated into projects to minimise potable water consumption.' },
  { Icon: Recycle, title: 'Waste Reduction', accent: '#A855F7', desc: 'Construction waste management plans ensure maximum material recycling, responsible debris disposal and minimal landfill impact on all Mahendram project sites.' },
  { Icon: TreePine, title: 'Resource Efficiency', accent: '#34D399', desc: 'We source locally manufactured materials, use recycled content where possible and optimise construction quantities through BIM-based quantity take-offs.' },
  { Icon: Globe, title: 'Environmental Responsibility', accent: '#29ABE2', desc: 'We conduct Environmental Impact Assessments (EIAs) for large projects and comply with all MoEFCC, State PCB and IGBC environmental regulations.' },
];

const TARGETS = [
  { val: '30%', label: 'Energy Reduction Target' },
  { val: '40%', label: 'Water Saving Goal' },
  { val: '80%', label: 'Construction Waste Recycled' },
  { val: '100%', label: 'ISO 14001 Compliant Sites' },
];

export default function Sustainability() {
  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen">
      <Helmet><title>Sustainability | Mahendram Landmark</title><meta name="description" content="Sustainability commitment at Mahendram Landmark Ventures — green infrastructure, energy optimization, water management, waste reduction and environmental responsibility across India." /></Helmet>
      <section className="relative pt-20 pb-16 md:pt-48 md:pb-32 bg-[#052E16] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.15)_0%,transparent_70%)]" />
        <div className="relative z-10 container-xl text-center">
          <FadeIn><span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold border border-green-400/30 bg-green-400/10 text-green-400 mb-6"><Leaf size={12} /> Sustainability Commitment</span></FadeIn>
          <FadeIn delay={0.1}><h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6">Building India.<br /><span className="text-green-400">Responsibly.</span></h1></FadeIn>
          <FadeIn delay={0.2}><p className="text-lg text-white/80 max-w-2xl mx-auto">Every structure we build considers its impact on the environment — from the materials we choose to the energy systems we design.</p></FadeIn>
        </div>
      </section>
      <section className="py-12 bg-[#052E16]">
        <div className="container-xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {TARGETS.map(t => <div key={t.label} className="text-center"><div className="text-4xl font-black text-green-400 mb-1">{t.val}</div><div className="text-xs font-bold text-white/60 uppercase tracking-widest">{t.label}</div></div>)}
        </div>
      </section>
      <section className="section-padding">
        <div className="container-xl grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((p, i) => (
            <FadeIn key={p.title} delay={i * 0.08}>
              <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-white/10 shadow-md hover:-translate-y-1 transition-all">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: p.accent + '22' }}>
                  <p.Icon size={22} style={{ color: p.accent }} />
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 dark:text-white mb-3">{p.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{p.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}

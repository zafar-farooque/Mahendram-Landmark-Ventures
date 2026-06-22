import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import { Monitor, Cpu, Camera, BarChart3, MapPin, FileText, Shield } from 'lucide-react';

const FEATURES = [
  { Icon: Monitor, title: 'Project Dashboard', desc: 'Real-time project tracking dashboard accessible to clients, giving visibility into schedule, budget, progress and quality milestones at any time.' },
  { Icon: FileText, title: 'Digital Reporting', desc: 'Automated daily, weekly and monthly project reports with photo documentation, progress percentages and issue logs delivered digitally.' },
  { Icon: Camera, title: 'Drone Monitoring', desc: 'Bi-weekly drone surveys on large projects to capture aerial progress photography, volumetric measurements and site logistics planning.' },
  { Icon: BarChart3, title: 'Progress Tracking', desc: 'Earned Value Management (EVM) based progress tracking with S-curve analysis, variance reports and look-ahead schedules.' },
  { Icon: Shield, title: 'Asset Tracking', desc: 'IoT-enabled asset tracking for construction equipment, materials and facility assets — reducing theft, loss and idle time.' },
  { Icon: MapPin, title: 'Quality Monitoring', desc: 'Digital quality checklists, non-conformance reports (NCRs) and corrective action tracking through our integrated QHSE platform.' },
  { Icon: Cpu, title: 'BIM Integration', desc: 'Building Information Modelling (BIM) used for clash detection, quantity take-off, 4D scheduling and as-built documentation.' },
  { Icon: FileText, title: 'Document Control', desc: 'Centralised digital document management for drawings, submittals, RFIs, MOMs and correspondence with version control and access logs.' },
];

export default function Technology() {
  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen">
      <Helmet><title>Technology | Mahendram Landmark</title><meta name="description" content="Technology-driven project delivery at Mahendram Landmark Ventures — BIM, drone monitoring, digital reporting, IoT asset tracking and real-time project dashboards." /></Helmet>
      <section className="relative pt-20 pb-16 md:pt-48 md:pb-32 bg-[#0A0F1A] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(41,171,226,0.15)_0%,transparent_70%)]" />
        <div className="relative z-10 container-xl text-center">
          <FadeIn><span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold border border-[#29ABE2]/40 bg-[#29ABE2]/10 text-[#29ABE2] mb-6">Technology Driven</span></FadeIn>
          <FadeIn delay={0.1}><h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6">Technology That<br />Delivers Transparency.</h1></FadeIn>
          <FadeIn delay={0.2}><p className="text-lg text-white/80 max-w-2xl mx-auto">From BIM coordination to drone surveillance, we use cutting-edge technology to deliver every project on time, within budget and at the highest quality.</p></FadeIn>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-xl grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((f, i) => (
            <FadeIn key={f.title} delay={i * 0.06}>
              <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-white/10 shadow-md hover:-translate-y-1 transition-all group">
                <div className="w-12 h-12 rounded-xl bg-[#29ABE2]/10 flex items-center justify-center mb-5 group-hover:bg-[#29ABE2] transition-colors">
                  <f.Icon size={22} className="text-[#29ABE2] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-lg font-extrabold text-gray-900 dark:text-white mb-3">{f.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}

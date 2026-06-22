import { Helmet } from 'react-helmet-async';
import FadeIn from '../components/FadeIn';
import { CheckCircle2, ClipboardList, Search, FileCheck, Award } from 'lucide-react';

const SECTIONS = [
  { Icon: ClipboardList, title: 'QA/QC Process', desc: 'Our Quality Assurance framework starts at procurement and continues through design, construction, commissioning and handover. Every project has a dedicated QA/QC engineer on site.' },
  { Icon: Search, title: 'Inspection Procedures', desc: 'Stage-wise inspections are conducted at all critical construction milestones including foundation, structure, MEP rough-in, finishing and systems commissioning.' },
  { Icon: CheckCircle2, title: 'Testing Procedures', desc: 'All systems undergo rigorous testing before handover — pressure testing for plumbing, thermal imaging for electrical, air flow measurement for HVAC, and functional testing for fire systems.' },
  { Icon: Award, title: 'Quality Standards', desc: 'We comply with BIS (IS) standards, NBC 2016, CPWD specifications and ISO 9001:2015 quality management principles on all projects.' },
  { Icon: FileCheck, title: 'Project Handover Process', desc: 'A structured 5-step handover process ensures all snags are resolved, as-built drawings are submitted, warranties are documented and client teams are trained before final handover.' },
];

const STANDARDS = ['ISO 9001:2015', 'NBC 2016', 'BIS / IS Standards', 'CPWD Specifications', 'LEED Compliance', 'IGBC Standards', 'NABH (Healthcare)', 'NFPA (Fire Systems)'];

export default function Quality() {
  return (
    <div className="bg-[#f8f9fa] dark:bg-[#0A0F1A] min-h-screen">
      <Helmet><title>Quality Assurance | Mahendram Landmark</title><meta name="description" content="QA/QC processes, inspection procedures, quality standards and project handover process at Mahendram Landmark Ventures." /></Helmet>
      <section className="relative pt-20 pb-16 md:pt-48 md:pb-32 bg-[#0A4D8C] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A4D8C]/80 to-[#0A4D8C]/90" />
        <div className="relative z-10 container-xl text-center">
          <FadeIn><span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold border border-blue-300/30 bg-blue-300/10 text-blue-300 mb-6">Quality Assurance</span></FadeIn>
          <FadeIn delay={0.1}><h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6">Uncompromising<br />Quality. Every Time.</h1></FadeIn>
          <FadeIn delay={0.2}><p className="text-lg text-white/80 max-w-2xl mx-auto">Rigorous QA/QC processes ensure every Mahendram project meets the highest standards — from procurement to final handover.</p></FadeIn>
        </div>
      </section>
      <section className="section-padding">
        <div className="container-xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {SECTIONS.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="bg-white dark:bg-[#111827] rounded-[2rem] p-8 border border-gray-100 dark:border-white/10 shadow-md hover:-translate-y-1 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-5"><s.Icon size={22} className="text-[#29ABE2]" /></div>
                  <h3 className="text-lg font-extrabold text-gray-900 dark:text-white mb-3">{s.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="bg-gradient-to-br from-[#0A4D8C] to-[#0A1628] rounded-[3rem] p-12 text-white">
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">Standards We Comply With</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {STANDARDS.map(s => <span key={s} className="px-5 py-2 rounded-full text-sm font-bold bg-white/10 border border-white/20">{s}</span>)}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

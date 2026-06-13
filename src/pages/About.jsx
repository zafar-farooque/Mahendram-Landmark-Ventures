import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

/* ── Data ───────────────────────────────────── */
const VALUES = [
  { icon: '🤝', label: 'Integrity'        },
  { icon: '💪', label: 'Commitment'       },
  { icon: '💡', label: 'Innovation'       },
  { icon: '✅', label: 'Quality'          },
  { icon: '🛡️', label: 'Safety'           },
  { icon: '🌱', label: 'Sustainability'   },
  { icon: '🏆', label: 'Customer Success' },
];

const DIVISIONS = [
  {
    name:  'Mahendram Landmark Ventures Pvt Ltd',
    sub:   'Engineering, Infrastructure & Contracting',
    icon:  '🏗',
    color: '#1A2B4A',
    desc:  'Turnkey engineering, construction, PEB, MEP, fire protection, industrial infrastructure and large-scale project delivery across India.',
  },
  {
    name:  'Inovvio Interior',
    sub:   'Design, Interior & Workplace Solutions',
    icon:  '🎨',
    color: '#D4891A',
    desc:  'Premium workplace strategy, interior design, office fit-out, retail and hospitality interiors that merge design with business productivity.',
  },
  {
    name:  'Ortus Apex',
    sub:   'Integrated Facility & Asset Management',
    icon:  '⚙️',
    color: '#2563EB',
    desc:  'Integrated technical facility management, soft services, preventive maintenance, AMC and occupant experience solutions.',
  },
];

const TIMELINE = [
  { year: '2010', event: 'Company Founded'                         },
  { year: '2013', event: 'First Major Infrastructure Project'      },
  { year: '2016', event: 'Launch of Inovvio Interior Division'     },
  { year: '2019', event: 'Pan India Operations Established'        },
  { year: '2021', event: 'Launch of Ortus Apex FM Division'        },
  { year: '2024', event: '500+ Projects Milestone Achieved'        },
];

/* ── Hero ────────────────────────────────────── */
function PageHero() {
  return (
    <section
      id="about-hero"
      className="relative py-20 md:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0F1C2E 0%, #1A2B4A 70%, #1e3a5f 100%)' }}
    >
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D4891A, transparent 70%)' }}
      />

      <div className="container-xl relative z-10 flex flex-col items-center text-center gap-5">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-medium" style={{ color: '#64748B' }}>
          <Link to="/" className="hover:text-white transition-colors duration-150">Home</Link>
          <span>/</span>
          <span style={{ color: '#D4891A' }}>About Us</span>
        </div>

        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold border"
          style={{ color: '#D4891A', borderColor: 'rgba(212,137,26,0.4)', background: 'rgba(212,137,26,0.1)' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          Integrated Engineering & Infrastructure
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight max-w-3xl">
          About Mahendram Landmark Ventures
        </h1>
        <p className="text-base max-w-2xl leading-relaxed" style={{ color: '#94A3B8' }}>
          An integrated engineering, infrastructure, contracting and asset management company
          delivering comprehensive solutions for commercial, industrial, institutional and
          infrastructure projects across India.
        </p>

        {/* Quick stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-4">
          {[['500+', 'Projects'], ['14', 'Service Lines'], ['3', 'Divisions'], ['Pan India', 'Presence']].map(([val, lbl]) => (
            <div key={lbl} className="flex flex-col items-center">
              <span className="text-2xl font-extrabold text-white">{val}</span>
              <span className="text-xs" style={{ color: '#64748B' }}>{lbl}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Company Overview ────────────────────────── */
function Overview() {
  return (
    <section id="about-overview" className="section-padding bg-white">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#D4891A' }}>
                Company Overview
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight" style={{ color: '#1A2B4A' }}>
                One Company. Three Divisions.<br />Infinite Possibilities.
              </h2>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
              Mahendram Landmark Ventures Pvt Ltd is an integrated engineering, infrastructure,
              contracting and asset management company delivering comprehensive solutions for
              commercial, industrial, institutional and infrastructure projects across India.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: '#6B7280' }}>
              The company operates through specialized divisions focusing on engineering,
              construction, interiors, facility management, industrial infrastructure and
              lifecycle asset solutions — providing single-point accountability for every
              project phase.
            </p>

            {/* Trust badges */}
            <div className="grid grid-cols-2 gap-3 mt-2">
              {[
                '✔ Multi-Disciplinary Engineering Expertise',
                '✔ End-to-End Project Delivery',
                '✔ Pan India Operations',
                '✔ Single Point Accountability',
                '✔ Technology Driven Execution',
                '✔ Safety & Compliance Focused',
              ].map((t) => (
                <div key={t} className="flex items-start gap-2 text-xs font-medium" style={{ color: '#374151' }}>
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Visual card */}
          <div className="flex flex-col gap-4">
            <div
              className="p-8 rounded-2xl text-white"
              style={{ background: 'linear-gradient(135deg, #1A2B4A 0%, #1e3a5f 100%)' }}
            >
              <h3 className="text-xl font-extrabold mb-3">Our Vision</h3>
              <p className="text-gray-200 text-sm leading-relaxed">
                To become India's most trusted integrated engineering and infrastructure company,
                delivering excellence at every stage of the project lifecycle.
              </p>
            </div>
            <div
              className="p-8 rounded-2xl text-white"
              style={{ background: 'linear-gradient(135deg, #D4891A 0%, #b87315 100%)' }}
            >
              <h3 className="text-xl font-extrabold mb-3">Our Mission</h3>
              <p className="text-white/85 text-sm leading-relaxed">
                To create long-term value through innovative engineering, quality execution,
                operational excellence and sustainable infrastructure development across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Group Divisions ─────────────────────────── */
function Divisions() {
  return (
    <section id="about-divisions" className="section-padding" style={{ backgroundColor: '#F7F8FA' }}>
      <div className="container-xl">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#D4891A' }}>
            Group Structure
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: '#1A2B4A' }}>
            Our Three Business Divisions
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {DIVISIONS.map((d) => (
            <div
              key={d.name}
              className="relative flex flex-col gap-5 p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ backgroundColor: d.color }} />

              <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                style={{ backgroundColor: `${d.color}15` }}>
                {d.icon}
              </div>

              <div>
                <h3 className="font-extrabold text-base leading-snug" style={{ color: '#1A2B4A' }}>{d.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wide mt-1" style={{ color: d.color }}>{d.sub}</p>
                <p className="text-sm leading-relaxed mt-3" style={{ color: '#6B7280' }}>{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Core Values ─────────────────────────────── */
function CoreValues() {
  return (
    <section id="about-values" className="section-padding bg-white">
      <div className="container-xl">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#D4891A' }}>
            What Drives Us
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: '#1A2B4A' }}>
            Our Core Values
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {VALUES.map((v) => (
            <div
              key={v.label}
              className="flex items-center gap-3 px-6 py-4 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <span className="text-2xl">{v.icon}</span>
              <span className="font-bold text-sm" style={{ color: '#1A2B4A' }}>{v.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Timeline ────────────────────────────────── */
function Timeline() {
  return (
    <section id="about-timeline" className="section-padding" style={{ backgroundColor: '#F7F8FA' }}>
      <div className="container-xl">
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-[0.2em] uppercase mb-2" style={{ color: '#D4891A' }}>
            Our Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: '#1A2B4A' }}>
            Milestones Over the Years
          </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

          <div className="flex flex-col gap-6">
            {TIMELINE.map((item, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <div key={item.year} className="flex flex-col md:flex-row items-start md:items-center gap-4">
                  {/* Year pill — mobile always on top */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:order-last md:text-left'}`}>
                    <div className="inline-block p-5 rounded-2xl bg-white border border-gray-100 shadow-sm w-full md:w-auto">
                      <p className="text-xs font-bold tracking-wider uppercase mb-1" style={{ color: '#D4891A' }}>
                        {item.year}
                      </p>
                      <p className="text-sm font-semibold" style={{ color: '#1A2B4A' }}>{item.event}</p>
                    </div>
                  </div>

                  {/* Dot */}
                  <div
                    className="w-4 h-4 rounded-full border-4 border-white shadow-md flex-shrink-0 z-10 hidden md:block"
                    style={{ backgroundColor: '#D4891A' }}
                  />

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── CTA ─────────────────────────────────────── */
function CTABanner() {
  return (
    <section
      id="about-cta"
      className="py-20"
      style={{ background: 'linear-gradient(135deg, #1A2B4A 0%, #0F1C2E 100%)' }}
    >
      <div className="container-xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">
            Ready to Partner With Us?
          </h2>
          <p className="mt-2 text-sm max-w-lg leading-relaxed" style={{ color: '#94A3B8' }}>
            Whether it's a new construction project, interior fit-out or facility management
            requirement — our team is ready to deliver.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
          <Link
            to="/contact"
            id="about-cta-primary"
            className="px-8 py-4 rounded-sm text-sm font-bold text-white transition-opacity hover:opacity-90 active:scale-95"
            style={{ background: '#D4891A' }}
          >
            Get in Touch →
          </Link>
          <Link
            to="/services"
            id="about-cta-services"
            className="px-8 py-4 rounded-sm text-sm font-bold text-white border border-white/30 transition-all hover:bg-white/10 active:scale-95"
          >
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Page Export ─────────────────────────────── */
export default function About() {
  return (
    <>
      <Helmet>
        <title>About Us — Mahendram Landmark Ventures Pvt Ltd</title>
        <meta name="description" content="Learn about Mahendram Landmark Ventures Pvt Ltd — India's integrated engineering and infrastructure company. Vision, mission, core values and three business divisions." />
        <meta property="og:title" content="About Mahendram Landmark Ventures Pvt Ltd" />
        <meta property="og:description" content="Integrated engineering, construction, interiors and facility management company operating across India through Mahendram Landmark, Inovvio Interior and Ortus Apex." />
        <meta property="og:url" content="https://www.mahendramlandmark.com/about" />
      </Helmet>
      <PageHero />
      <Overview />
      <Divisions />
      <CoreValues />
      <Timeline />
      <CTABanner />
    </>
  );
}

import { Link } from 'react-router-dom';

/* ── Data ─────────────────────────────────────────── */
const QUICK_LINKS = [
  { label: 'Home',     to: '/'          },
  { label: 'About',    to: '/about'     },
  { label: 'Services', to: '/services'  },
  { label: 'Projects', to: '/projects'  },
  { label: 'Contact',  to: '/contact'   },
];

const SERVICE_LINKS = [
  { label: 'Infrastructure Development', to: '/services' },
  { label: 'Construction Services',      to: '/services' },
  { label: 'PEB Solutions',              to: '/services' },
  { label: 'MEP Services',               to: '/services' },
  { label: 'Fire Protection Systems',    to: '/services' },
  { label: 'Interior Fit-Out',           to: '/services' },
  { label: 'Facility Management',        to: '/services' },
];

const WHATSAPP_NUMBER = '919999999999'; // replace with real number
const WHATSAPP_MSG    = encodeURIComponent('Hello, I would like to request a proposal from Mahendram Landmark Ventures.');

/* ── Footer ──────────────────────────────────────── */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* ════════════════════════════════════
          Main Footer
      ════════════════════════════════════ */}
      <footer
        id="main-footer"
        style={{ backgroundColor: '#0F1C2E' }}
        className="text-white"
      >
        {/* ── Grid ── */}
        <div className="container-xl py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Col 1: Brand ── */}
          <div className="flex flex-col gap-5">
            {/* Text Logo */}
            <Link to="/" id="footer-logo" className="flex flex-col leading-tight select-none w-fit">
              <span
                className="font-extrabold text-sm tracking-tight text-white"
                style={{ letterSpacing: '-0.01em' }}
              >
                MAHENDRAM LANDMARK
              </span>
              <span
                className="text-[10px] font-semibold tracking-[0.18em] uppercase"
                style={{ color: '#D4891A' }}
              >
                Ventures Pvt Ltd
              </span>
            </Link>

            {/* Tagline */}
            <p
              className="text-xs font-semibold tracking-wide uppercase leading-relaxed"
              style={{ color: '#D4891A' }}
            >
              Integrated Engineering · Infrastructure<br />
              Interior &amp; Asset Management
            </p>

            {/* Description */}
            <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
              Delivering end-to-end engineering, construction, interior fit-out
              and facility management solutions across India through three
              specialized business divisions.
            </p>

            {/* Division pills */}
            <div className="flex flex-col gap-1.5 mt-1">
              {[
                'Mahendram Landmark Ventures',
                'Inovvio Interior',
                'Ortus Apex',
              ].map((d) => (
                <span
                  key={d}
                  className="text-xs font-medium px-3 py-1 rounded-full w-fit"
                  style={{ background: 'rgba(212,137,26,0.15)', color: '#D4891A', border: '1px solid rgba(212,137,26,0.3)' }}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ── */}
          <div>
            <h3
              className="text-xs font-bold tracking-[0.15em] uppercase mb-5"
              style={{ color: '#D4891A' }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    id={`footer-link-${l.label.toLowerCase()}`}
                    className="flex items-center gap-2 text-sm transition-colors duration-200 group"
                    style={{ color: '#9CA3AF' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#D4891A')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0 transition-colors duration-200"
                      style={{ backgroundColor: '#D4891A' }}
                    />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Services ── */}
          <div>
            <h3
              className="text-xs font-bold tracking-[0.15em] uppercase mb-5"
              style={{ color: '#D4891A' }}
            >
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.to}
                    id={`footer-service-${s.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center gap-2 text-sm transition-colors duration-200"
                    style={{ color: '#9CA3AF' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#D4891A')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#D4891A' }}
                    />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact ── */}
          <div>
            <h3
              className="text-xs font-bold tracking-[0.15em] uppercase mb-5"
              style={{ color: '#D4891A' }}
            >
              Get In Touch
            </h3>
            <ul className="flex flex-col gap-4">
              {/* Address */}
              <li className="flex items-start gap-3">
                <span className="text-base mt-0.5 flex-shrink-0">📍</span>
                <p className="text-sm leading-relaxed" style={{ color: '#9CA3AF' }}>
                  Corporate Office,<br />
                  Mahendram Landmark Ventures Pvt Ltd,<br />
                  India
                </p>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <span className="text-base flex-shrink-0">📞</span>
                <a
                  href="tel:+91XXXXXXXXXX"
                  id="footer-phone"
                  className="text-sm transition-colors duration-200"
                  style={{ color: '#9CA3AF' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D4891A')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                >
                  +91 XXXXX XXXXX
                </a>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <span className="text-base flex-shrink-0">✉️</span>
                <a
                  href="mailto:info@mahendramlandmark.com"
                  id="footer-email"
                  className="text-sm transition-colors duration-200 break-all"
                  style={{ color: '#9CA3AF' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D4891A')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#9CA3AF')}
                >
                  info@mahendramlandmark.com
                </a>
              </li>

              {/* WhatsApp */}
              <li className="flex items-center gap-3">
                <span className="text-base flex-shrink-0">💬</span>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
                  id="footer-whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ color: '#25D366' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.8')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  Chat on WhatsApp
                </a>
              </li>

              {/* Hours */}
              <li className="flex items-center gap-3">
                <span className="text-base flex-shrink-0">🕘</span>
                <p className="text-sm" style={{ color: '#9CA3AF' }}>
                  Mon – Sat: 9:00 AM – 6:00 PM
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* ── Divider ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }} />

        {/* ── Bottom Bar ── */}
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs" style={{ color: '#6B7280' }}>
            © {year} Mahendram Landmark Ventures Pvt Ltd. All Rights Reserved.
          </p>
          <p className="text-xs" style={{ color: '#6B7280' }}>
            Engineering · Infrastructure · Interiors · FM · Pan India
          </p>
        </div>
      </footer>

      {/* ════════════════════════════════════
          WhatsApp Floating Button
      ════════════════════════════════════ */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        id="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{ backgroundColor: '#25D366' }}
      >
        {/* WhatsApp SVG Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="28"
          height="28"
          fill="white"
          aria-hidden="true"
        >
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.837.742 5.507 2.043 7.824L0 32l8.418-2.008A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.784-1.856l-.487-.289-5.003 1.193 1.255-4.874-.317-.502A13.267 13.267 0 012.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.27-9.862c-.4-.2-2.362-1.165-2.728-1.298-.366-.133-.633-.2-.9.2-.266.4-1.033 1.298-1.266 1.565-.233.266-.466.3-.866.1-.4-.2-1.688-.622-3.215-1.983-1.188-1.06-1.99-2.37-2.223-2.77-.233-.4-.025-.616.175-.815.18-.179.4-.466.6-.7.2-.233.266-.4.4-.666.133-.266.066-.5-.033-.7-.1-.2-.9-2.166-1.233-2.966-.325-.78-.655-.674-.9-.686l-.767-.013c-.266 0-.7.1-1.066.5-.366.4-1.4 1.366-1.4 3.332s1.433 3.865 1.633 4.132c.2.266 2.82 4.306 6.832 6.036.955.413 1.7.66 2.282.844.958.306 1.832.263 2.52.16.769-.115 2.362-.965 2.695-1.898.333-.933.333-1.733.233-1.898-.1-.166-.366-.266-.766-.466z" />
        </svg>

        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full animate-ping opacity-30"
          style={{ backgroundColor: '#25D366' }}
        />
      </a>
    </>
  );
}

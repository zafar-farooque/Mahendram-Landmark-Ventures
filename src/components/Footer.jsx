import { Link } from 'react-router-dom';

/* ── Data ─────────────────────────────────────────── */
const QUICK_LINKS = [
  { label: 'Home',     to: '/'           },
  { label: 'About',    to: '/about'      },
  { label: 'Services', to: '/services'   },
  { label: 'Projects', to: '/projects'   },
  { label: 'Contact',  to: '/contact'    },
];

const SERVICE_LINKS = [
  { label: 'Infrastructure Development', to: '/services' },
  { label: 'Construction Services',      to: '/services' },
  { label: 'PEB Solutions',              to: '/services' },
  { label: 'MEP Services',               to: '/services' },
  { label: 'Fire Protection Systems',    to: '/services' },
  { label: 'Interior Fit-Out',           to: '/services' },
  { label: 'Software Solutions & IT',    to: '/services' },
];

const WHATSAPP_NUMBER = '918210146579';
const WHATSAPP_MSG    = encodeURIComponent('Hello, I would like to request a proposal from Mahendram Landmark Ventures.');

/* ── Footer ──────────────────────────────────────── */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <footer
        id="main-footer"
        className="relative overflow-hidden bg-[var(--color-bg)] border-t border-[var(--color-border)] transition-colors duration-300"
      >
        {/* Ambient Glow */}
        <div className="absolute w-[600px] h-[600px] rounded-full top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
          style={{ background: 'radial-gradient(circle, rgba(41, 171, 226, 0.1) 0%, transparent 70%)' }}
        />

        {/* Grid */}
        <div className="container-xl py-8 md:py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 relative z-10">

          {/* Col 1: Brand */}
          <div className="flex flex-col gap-5">
            <Link to="/" id="footer-logo" className="relative flex items-center select-none w-fit">
              {/* Light mode logo sets physical dimensions */}
              <img
                src="/final_logo.png"
                alt="Mahendram Landmark Ventures"
                className="h-16 md:h-20 w-auto object-contain transition-opacity duration-300 dark:opacity-0"
                style={{ maxWidth: '300px' }}
              />
              {/* Dark mode logo perfectly overlays */}
              <img
                src="/logo_dark_mode.png"
                alt="Mahendram Landmark Ventures"
                className="absolute inset-0 w-full h-full object-contain object-left transition-opacity duration-300 opacity-0 dark:opacity-100 pointer-events-none"
                style={{ maxWidth: '300px' }}
              />
            </Link>

            <p className="text-xs font-semibold tracking-wide uppercase leading-relaxed text-[var(--color-accent)]">
              Integrated Engineering · Infrastructure<br />
              Interior & Asset Management
            </p>

            <p className="text-sm leading-relaxed text-[var(--color-muted)]">
              Delivering end-to-end engineering, construction, interior fit-out
              and facility management solutions across India through three
              specialized business divisions.
            </p>

            <div className="flex flex-col gap-1.5 mt-1">
              {['Mahendram Landmark Ventures', 'Inovvio Interior', 'Ortus Apex'].map((d) => (
                <span
                  key={d}
                  className="text-xs font-medium px-3 py-1 rounded-full w-fit text-[var(--color-accent)] border border-[var(--color-accent)]/20"
                  style={{ background: 'rgba(41, 171, 226, 0.1)' }}
                >
                  {d}
                </span>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase mb-5 text-[var(--color-accent)]">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    id={`footer-link-${l.label.toLowerCase()}`}
                    className="flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0 bg-[var(--color-accent)]" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase mb-5 text-[var(--color-accent)]">
              Our Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {SERVICE_LINKS.map((s) => (
                <li key={s.label}>
                  <Link
                    to={s.to}
                    id={`footer-service-${s.label.toLowerCase().replace(/\s+/g, '-')}`}
                    className="flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors duration-200"
                  >
                    <span className="w-1 h-1 rounded-full flex-shrink-0 bg-[var(--color-accent)]" />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 className="text-xs font-bold tracking-[0.15em] uppercase mb-5 text-[var(--color-accent)]">
              Get In Touch
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <span className="text-base mt-0.5 flex-shrink-0 text-[var(--color-accent)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                </span>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  Corporate Office,<br />
                  Mahendram Landmark Ventures Pvt Ltd,<br />
                  India
                </p>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base flex-shrink-0 text-[var(--color-accent)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 10.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 14.92z"/></svg>
                </span>
                <a href="tel:+91XXXXXXXXXX" id="footer-phone" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors duration-200">
                  +91 XXXXX XXXXX
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base flex-shrink-0 text-[var(--color-accent)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </span>
                <a href="mailto:info@mahendramlandmark.com" id="footer-email" className="text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors duration-200 break-all">
                  info@mahendramlandmark.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base flex-shrink-0" style={{ color: '#25D366' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
                </span>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`} id="footer-whatsapp" target="_blank" rel="noopener noreferrer" className="text-sm font-medium" style={{ color: '#25D366' }}>
                  Chat on WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-base flex-shrink-0 text-[var(--color-accent)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </span>
                <p className="text-sm text-[var(--color-muted)]">Mon – Sat: 9:00 AM – 6:00 PM</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="relative z-10 border-t border-[var(--color-border)]" />

        {/* Bottom Bar */}
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left relative z-10">
          <p className="text-xs text-[var(--color-muted)]">
            © {year} Mahendram Landmark Ventures Pvt Ltd. All Rights Reserved.
          </p>
          <p className="text-xs text-[var(--color-muted)]">
            Engineering · Infrastructure · Interiors · FM · Pan India
          </p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        id="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-transform duration-200 hover:scale-110 active:scale-95"
        style={{ backgroundColor: '#25D366' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="white" aria-hidden="true">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.837.742 5.507 2.043 7.824L0 32l8.418-2.008A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.784-1.856l-.487-.289-5.003 1.193 1.255-4.874-.317-.502A13.267 13.267 0 012.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.27-9.862c-.4-.2-2.362-1.165-2.728-1.298-.366-.133-.633-.2-.9.2-.266.4-1.033 1.298-1.266 1.565-.233.266-.466.3-.866.1-.4-.2-1.688-.622-3.215-1.983-1.188-1.06-1.99-2.37-2.223-2.77-.233-.4-.025-.616.175-.815.18-.179.4-.466.6-.7.2-.233.266-.4.4-.666.133-.266.066-.5-.033-.7-.1-.2-.9-2.166-1.233-2.966-.325-.78-.655-.674-.9-.686l-.767-.013c-.266 0-.7.1-1.066.5-.366.4-1.4 1.366-1.4 3.332s1.433 3.865 1.633 4.132c.2.266 2.82 4.306 6.832 6.036.955.413 1.7.66 2.282.844.958.306 1.832.263 2.52.16.769-.115 2.362-.965 2.695-1.898.333-.933.333-1.733.233-1.898-.1-.166-.366-.266-.766-.466z" />
        </svg>
        <span className="absolute inset-0 rounded-full animate-ping opacity-30" style={{ backgroundColor: '#25D366' }} />
      </a>
    </>
  );
}

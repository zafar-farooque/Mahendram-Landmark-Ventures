import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { X, Sun, Moon, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { label: 'Home',             to: '/'                 },
  { label: 'About',            to: '/about'            },
  { label: 'Services',         to: '/services'         },
  { label: 'Industries',       to: '/industries'       },
  { label: 'Projects',         to: '/projects'         },
  { label: 'Knowledge Center', to: '/knowledge-center' },
  { label: 'Contact',          to: '/contact'          },
];

const LinkedinIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.004 4.076H5.036z"/>
  </svg>
);

export default function MobileMenuSheet({ isOpen, onClose }) {
  const { theme, toggleTheme } = useTheme();

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-up Sheet */}
      <div
        id="mobile-menu-sheet"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`md:hidden fixed left-0 right-0 bottom-0 z-[100] bg-white dark:bg-[#0D1424] rounded-t-[2rem] shadow-2xl transition-transform duration-300 ease-out`}
        style={{
          transform: isOpen ? 'translateY(0)' : 'translateY(100%)',
          paddingBottom: 'calc(80px + env(safe-area-inset-bottom))',
          maxHeight: '92vh',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
      >
        {/* Handle bar */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 rounded-full bg-gray-300 dark:bg-white/20" />
        </div>

        {/* Header Row */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-white/10">
          <span className="text-sm font-extrabold text-gray-900 dark:text-white tracking-wide uppercase">Navigation</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 active:scale-90 transition-all"
            style={{ touchAction: 'manipulation' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col px-4 pt-4 gap-1" aria-label="Mobile menu navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={onClose}
              id={`sheet-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              className={({ isActive }) =>
                `flex items-center gap-3 px-5 py-3.5 rounded-2xl text-base font-semibold transition-all duration-150 active:scale-95 ${
                  isActive
                    ? 'bg-[#29ABE2] text-white shadow-sm'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/10'
                }`
              }
              style={{ touchAction: 'manipulation' }}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Divider */}
        <div className="mx-4 my-4 border-t border-gray-100 dark:border-white/10" />

        {/* Theme Toggle Row */}
        <div className="px-4">
          <button
            onClick={() => { toggleTheme(); }}
            className="w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/10 transition-all active:scale-95"
            style={{ touchAction: 'manipulation' }}
          >
            <span className="w-9 h-9 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-white/10 flex-shrink-0">
              {theme === 'dark' ? <Sun size={17} className="text-amber-400" /> : <Moon size={17} className="text-[#29ABE2]" />}
            </span>
            <span>{theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</span>
          </button>
        </div>

        {/* Phone Row */}
        <div className="px-4 mt-1">
          <a
            href="tel:+919876543210"
            className="w-full flex items-center gap-4 px-5 py-3.5 rounded-2xl text-base font-semibold text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-white/10 transition-all active:scale-95"
            style={{ touchAction: 'manipulation' }}
          >
            <span className="w-9 h-9 rounded-xl flex items-center justify-center bg-[#29ABE2]/10 text-[#29ABE2] flex-shrink-0">
              <Phone size={17} />
            </span>
            <span>+91 98765 43210</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="px-6 mt-4 pb-2 flex items-center gap-4">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"
            className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 hover:text-[#29ABE2] transition-colors active:scale-90"
            style={{ touchAction: 'manipulation' }}>
            <LinkedinIcon />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer"
            className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 hover:text-[#29ABE2] transition-colors active:scale-90"
            style={{ touchAction: 'manipulation' }}>
            <InstagramIcon />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer"
            className="w-10 h-10 rounded-xl flex items-center justify-center bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-400 hover:text-[#29ABE2] transition-colors active:scale-90"
            style={{ touchAction: 'manipulation' }}>
            <XIcon />
          </a>
          <p className="ml-2 text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest">Follow Us</p>
        </div>
      </div>
    </>
  );
}

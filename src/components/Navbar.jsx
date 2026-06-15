import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home',             to: '/'                },
  { label: 'About',            to: '/about'           },
  { label: 'Services',         to: '/services'        },
  { label: 'Industries',       to: '/industries'      },
  { label: 'Projects',         to: '/projects'        },
  { label: 'Knowledge Center', to: '/knowledge-center' },
  { label: 'Contact',          to: '/contact'         },
];

const LinkedinIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>;
const InstagramIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const XIcon = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.004 4.076H5.036z"/></svg>;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // Scrolled past hero approx
      setScrolled(scrollTop > window.innerHeight - 100);
      
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress((scrollTop / docHeight) * 100);
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const linkClass = ({ isActive }) =>
    [
      'px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap',
      isActive
        ? 'bg-[var(--color-accent)] text-white shadow-md'
        : 'text-[var(--color-primary)] hover:bg-black/5',
    ].join(' ');

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[2px] z-[60] transition-all duration-100 ease-out" 
        style={{ width: `${scrollProgress}%`, backgroundColor: 'var(--color-accent)' }} 
      />
      <header
        id="main-navbar"
        className={`z-50 transition-all duration-500 ease-in-out ${
          scrolled
            ? 'fixed top-0 left-0 right-0 bg-white shadow-md'
            : 'absolute top-6 left-4 right-4 md:left-8 md:right-8 bg-white shadow-lg border border-gray-100 rounded-[24px] md:rounded-full'
        }`}
      >
        <div className={`flex items-center justify-between mx-auto ${scrolled ? 'container-xl h-16' : 'px-4 md:px-6 h-14 md:h-16'}`}>

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            id="navbar-logo"
            className="flex items-center select-none flex-shrink-0"
          >
            <img
              src="/logo.jpeg"
              alt="Mahendram Landmark Ventures"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* Center: Desktop Nav (Pills) */}
          <nav
            id="desktop-nav"
            className="hidden lg:flex items-center gap-1 bg-black/5 px-2 py-1 rounded-full border border-black/5"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={linkClass}
                id={`nav-${link.label.toLowerCase().replace(/\\s+/g, '-')}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Right: Social + Phone + Hamburger */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Social Icons (Hidden on small mobile) */}
            <div className="hidden md:flex items-center gap-3 text-[var(--color-primary)]/70">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)] transition-colors"><LinkedinIcon /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)] transition-colors"><InstagramIcon /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)] transition-colors"><XIcon /></a>
            </div>

            {/* Phone Badge */}
            <a href="tel:+919876543210" className="hidden sm:flex items-center gap-2 bg-[#1E2329] text-white px-4 py-1.5 rounded-full hover:bg-black transition-colors shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 10.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 7.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 14.92z"/></svg>
              <span className="text-xs font-semibold tracking-wide">+91 98765 43210</span>
            </a>

            {/* Hamburger */}
            <button
              id="navbar-hamburger"
              className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5 focus:outline-none"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span
                className={[
                  'block w-5 h-0.5 rounded-full transition-all duration-300 bg-[var(--color-primary)]',
                  menuOpen ? 'rotate-45 translate-y-2' : '',
                ].join(' ')}
              />
              <span
                className={[
                  'block w-5 h-0.5 rounded-full transition-all duration-300 bg-[var(--color-primary)]',
                  menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100',
                ].join(' ')}
              />
              <span
                className={[
                  'block w-5 h-0.5 rounded-full transition-all duration-300 bg-[var(--color-primary)]',
                  menuOpen ? '-rotate-45 -translate-y-2' : '',
                ].join(' ')}
              />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          id="mobile-menu"
          className={[
            'lg:hidden overflow-hidden transition-all duration-300 ease-in-out rounded-b-[24px]',
            menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0',
          ].join(' ')}
          style={{
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            background: 'rgba(255, 255, 255, 0.98)',
            borderTop: '1px solid rgba(0, 63, 135, 0.05)',
          }}
          aria-hidden={!menuOpen}
        >
          <nav className="flex flex-col py-4 px-6 gap-2" aria-label="Mobile navigation">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={closeMenu}
                id={`mobile-nav-${link.label.toLowerCase().replace(/\\s+/g, '-')}`}
                className={({ isActive }) =>
                  [
                    'px-4 py-3 rounded-xl text-sm font-semibold transition-colors duration-150',
                    isActive
                      ? 'bg-[var(--color-accent)] text-white shadow-sm'
                      : 'text-[var(--color-primary)] hover:bg-black/5',
                  ].join(' ')
                }
              >
                {link.label}
              </NavLink>
            ))}
            
            <div className="mt-4 pt-4 border-t border-black/5 flex items-center justify-center gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-[var(--color-primary)]/70 hover:text-[var(--color-accent)]"><LinkedinIcon /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-[var(--color-primary)]/70 hover:text-[var(--color-accent)]"><InstagramIcon /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-[var(--color-primary)]/70 hover:text-[var(--color-accent)]"><XIcon /></a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

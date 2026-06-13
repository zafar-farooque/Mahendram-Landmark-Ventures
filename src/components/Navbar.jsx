import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home',             to: '/'               },
  { label: 'About',            to: '/about'          },
  { label: 'Services',         to: '/services'       },
  { label: 'Industries',       to: '/industries'     },
  { label: 'Projects',         to: '/projects'       },
  { label: 'Knowledge Center', to: '/knowledge-center' },
  { label: 'Contact',          to: '/contact'        },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);

  /* ── Shadow on scroll ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Close mobile menu on route change ── */
  const closeMenu = () => setMenuOpen(false);

  /* ── Active link style helper ── */
  const linkClass = ({ isActive }) =>
    [
      'relative text-sm font-medium transition-colors duration-200 whitespace-nowrap',
      'after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full',
      'after:rounded-full after:transition-transform after:duration-200 after:origin-left',
      isActive
        ? 'text-accent after:bg-accent after:scale-x-100'
        : 'text-textMain hover:text-accent after:bg-accent after:scale-x-0 hover:after:scale-x-100',
    ].join(' ');

  return (
    <header
      id="main-navbar"
      className={[
        'sticky top-0 z-50 w-full bg-white transition-shadow duration-300',
        scrolled ? 'shadow-md' : 'shadow-none',
      ].join(' ')}
    >
      <div className="container-xl flex items-center justify-between h-16">

        {/* ── Left: Logo ── */}
        <Link
          to="/"
          onClick={closeMenu}
          id="navbar-logo"
          className="flex flex-col leading-tight select-none"
        >
          <span
            className="font-extrabold text-base tracking-tight"
            style={{ color: '#1A2B4A', fontFamily: 'Inter, sans-serif', letterSpacing: '-0.01em' }}
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

        {/* ── Centre: Desktop Nav ── */}
        <nav
          id="desktop-nav"
          className="hidden lg:flex items-center gap-7"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={linkClass}
              id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* ── Right: CTA + Hamburger ── */}
        <div className="flex items-center gap-3">
          {/* CTA — desktop */}
          <Link
            to="/contact"
            id="navbar-cta"
            className="hidden lg:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-sm text-sm font-semibold text-white transition-opacity duration-200 hover:opacity-90 active:scale-95"
            style={{ background: '#D4891A' }}
          >
            Get a Quote
          </Link>

          {/* Hamburger — mobile */}
          <button
            id="navbar-hamburger"
            className="lg:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 focus:outline-none"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={[
                'block w-5 h-0.5 bg-primary rounded-full transition-all duration-300',
                menuOpen ? 'rotate-45 translate-y-2' : '',
              ].join(' ')}
              style={{ backgroundColor: '#1A2B4A' }}
            />
            <span
              className={[
                'block w-5 h-0.5 rounded-full transition-all duration-300',
                menuOpen ? 'opacity-0 scale-x-0' : 'opacity-100',
              ].join(' ')}
              style={{ backgroundColor: '#1A2B4A' }}
            />
            <span
              className={[
                'block w-5 h-0.5 bg-primary rounded-full transition-all duration-300',
                menuOpen ? '-rotate-45 -translate-y-2' : '',
              ].join(' ')}
              style={{ backgroundColor: '#1A2B4A' }}
            />
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      <div
        id="mobile-menu"
        className={[
          'lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-gray-100',
          menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0',
        ].join(' ')}
        aria-hidden={!menuOpen}
      >
        <nav className="container-xl flex flex-col py-4 gap-1" aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={closeMenu}
              id={`mobile-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              className={({ isActive }) =>
                [
                  'px-3 py-2.5 rounded text-sm font-medium transition-colors duration-150',
                  isActive
                    ? 'text-accent bg-orange-50 font-semibold'
                    : 'text-textMain hover:text-accent hover:bg-gray-50',
                ].join(' ')
              }
              style={({ isActive }) =>
                isActive ? { color: '#D4891A' } : {}
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Mobile CTA */}
          <Link
            to="/contact"
            onClick={closeMenu}
            id="mobile-cta"
            className="mt-3 mx-3 py-2.5 text-center rounded-sm text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: '#D4891A' }}
          >
            Get a Quote
          </Link>
        </nav>
      </div>
    </header>
  );
}

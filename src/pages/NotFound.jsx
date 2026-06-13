import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | Mahendram Landmark Ventures</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <div
        className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 py-20"
        style={{ backgroundColor: '#F7F8FA' }}
      >
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center leading-tight mb-12 select-none">
          <span
            className="font-extrabold text-lg tracking-tight"
            style={{ color: '#1A2B4A', letterSpacing: '-0.01em' }}
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

        {/* 404 Display */}
        <div className="flex flex-col items-center gap-6 max-w-lg">
          {/* Large 404 */}
          <div className="relative">
            <span
              className="text-[8rem] md:text-[10rem] font-extrabold leading-none select-none"
              style={{ color: '#1A2B4A', opacity: 0.07 }}
            >
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl">🏗</span>
            </div>
          </div>

          {/* Heading */}
          <div>
            <h1
              className="text-2xl md:text-3xl font-extrabold"
              style={{ color: '#1A2B4A' }}
            >
              Page Not Found
            </h1>
            <p
              className="mt-3 text-sm md:text-base leading-relaxed"
              style={{ color: '#6B7280' }}
            >
              The page you're looking for doesn't exist or may have been moved.
              Let's get you back on track.
            </p>
          </div>

          {/* Divider */}
          <div
            className="w-16 h-1 rounded-full"
            style={{ backgroundColor: '#D4891A' }}
          />

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
            <Link
              to="/"
              id="notfound-home-link"
              className="px-8 py-3.5 rounded-sm text-sm font-bold text-white transition-opacity hover:opacity-90 active:scale-95"
              style={{ background: '#1A2B4A' }}
            >
              ← Back to Home
            </Link>
            <Link
              to="/contact"
              id="notfound-contact-link"
              className="px-8 py-3.5 rounded-sm text-sm font-bold transition-opacity hover:opacity-80 active:scale-95 border"
              style={{ color: '#D4891A', borderColor: '#D4891A' }}
            >
              Contact Us
            </Link>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-4">
            {[
              { label: 'Services',         to: '/services'         },
              { label: 'Projects',         to: '/projects'         },
              { label: 'Industries',       to: '/industries'       },
              { label: 'Knowledge Center', to: '/knowledge-center' },
            ].map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-xs font-medium underline-offset-2 hover:underline transition-colors"
                style={{ color: '#6B7280' }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

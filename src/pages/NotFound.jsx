import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 — Page Not Found | Mahendram Landmark Ventures</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main
        id="not-found-page"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
        style={{ background: 'var(--color-bg)' }}
      >
        {/* Glow blob */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center,rgba(41, 171, 226, 0.1) 0%,transparent 60%)' }} />

        {/* Logo */}
        <Link to="/" id="notfound-logo" className="flex flex-col items-center leading-tight mb-10 select-none relative z-10">
          <img
            src="/logo.jpeg"
            alt="Mahendram Landmark Ventures"
            className="h-14 w-auto object-contain"
            style={{ maxWidth: '250px' }}
          />
        </Link>

        {/* 404 */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="text-[8rem] font-black leading-none" style={{ background: 'linear-gradient(135deg,var(--color-accent),#66D1F0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            404
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold gradient-text">Page Not Found</h1>
          <p className="text-sm max-w-md leading-relaxed" style={{ color: 'var(--color-muted)' }}>
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link to="/" id="notfound-home-btn"
              className="px-8 py-3.5 rounded-sm text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: 'linear-gradient(135deg,var(--color-accent),var(--color-accent-2))', boxShadow: '0 4px 24px rgba(41, 171, 226, 0.1)' }}>
              ← Back to Home
            </Link>
            <Link to="/contact" id="notfound-contact-btn"
              className="px-8 py-3.5 rounded-sm text-sm font-bold text-[var(--color-primary)] border transition-all hover:bg-[var(--color-primary)] hover:text-white active:scale-95"
              style={{ borderColor: 'rgba(0,63,135,0.2)' }}>
              Contact Us
            </Link>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[['Services', '/services'],['Projects', '/projects'],['About', '/about'],['Industries', '/industries']].map(([label, to]) => (
              <Link key={to} to={to}
                className="text-xs font-medium px-4 py-2 rounded-full border transition-all hover:text-[var(--color-primary)] hover:border-[var(--color-primary)]"
                style={{ color: 'var(--color-muted)', borderColor: 'rgba(0,63,135,0.1)' }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

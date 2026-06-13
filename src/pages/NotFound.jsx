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
        style={{ background: '#050A14' }}
      >
        {/* Glow blob */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center,rgba(212,137,26,0.1) 0%,transparent 60%)' }} />

        {/* Logo */}
        <Link to="/" id="notfound-logo" className="flex flex-col items-center leading-tight mb-10 select-none relative z-10">
          <span className="font-extrabold text-lg tracking-tight text-white">MAHENDRAM LANDMARK</span>
          <span className="text-[10px] font-semibold tracking-[0.18em] uppercase" style={{ color: '#D4891A' }}>Ventures Pvt Ltd</span>
        </Link>

        {/* 404 */}
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="text-[8rem] font-black leading-none" style={{ background: 'linear-gradient(135deg,#D4891A,#f5c842)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            404
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold gradient-text">Page Not Found</h1>
          <p className="text-sm max-w-md leading-relaxed" style={{ color: '#8A9BB5' }}>
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link to="/" id="notfound-home-btn"
              className="px-8 py-3.5 rounded-sm text-sm font-bold text-white transition-all hover:opacity-90 active:scale-95"
              style={{ background: 'linear-gradient(135deg,#D4891A,#b87315)', boxShadow: '0 4px 24px rgba(212,137,26,0.35)' }}>
              ← Back to Home
            </Link>
            <Link to="/contact" id="notfound-contact-btn"
              className="px-8 py-3.5 rounded-sm text-sm font-bold text-white border transition-all hover:bg-white/10 active:scale-95"
              style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
              Contact Us
            </Link>
          </div>

          {/* Quick links */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {[['Services', '/services'],['Projects', '/projects'],['About', '/about'],['Industries', '/industries']].map(([label, to]) => (
              <Link key={to} to={to}
                className="text-xs font-medium px-4 py-2 rounded-full border transition-all hover:text-white hover:border-white/30"
                style={{ color: '#8A9BB5', borderColor: 'rgba(255,255,255,0.1)' }}>
                {label}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

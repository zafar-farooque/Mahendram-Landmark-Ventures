import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

/* ── Lazy-loaded page components ─────────────────────────────────── */
const Home            = lazy(() => import('./pages/Home'));
const About           = lazy(() => import('./pages/About'));
const Services        = lazy(() => import('./pages/Services'));
const Industries      = lazy(() => import('./pages/Industries'));
const Projects        = lazy(() => import('./pages/Projects'));
const KnowledgeCenter = lazy(() => import('./pages/KnowledgeCenter'));
const Contact         = lazy(() => import('./pages/Contact'));
const NotFound        = lazy(() => import('./pages/NotFound'));

/* ── Page loading fallback ────────────────────────────────────────── */
function PageLoader() {
  return (
    <div
      className="flex items-center justify-center min-h-[60vh]"
      role="status"
      aria-label="Loading page"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Spinner */}
        <div
          className="w-10 h-10 rounded-full border-4 border-t-transparent animate-spin"
          style={{ borderColor: '#E5E7EB', borderTopColor: '#D4891A' }}
        />
        <p className="text-sm font-medium" style={{ color: '#6B7280' }}>
          Loading…
        </p>
      </div>
    </div>
  );
}

/* ── App ──────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/"                 element={<Home />}            />
                <Route path="/about"            element={<About />}           />
                <Route path="/services"         element={<Services />}        />
                <Route path="/industries"       element={<Industries />}      />
                <Route path="/projects"         element={<Projects />}        />
                <Route path="/knowledge-center" element={<KnowledgeCenter />} />
                <Route path="/contact"          element={<Contact />}         />
                <Route path="*"                 element={<NotFound />}        />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
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
          style={{ borderColor: '#E5E7EB', borderTopColor: 'var(--color-accent)' }}
        />
        <p className="text-sm font-medium" style={{ color: '#6B7280' }}>
          Loading…
        </p>
      </div>
    </div>
  );
}

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"                 element={<PageTransition><Home /></PageTransition>}            />
        <Route path="/about"            element={<PageTransition><About /></PageTransition>}           />
        <Route path="/services"         element={<PageTransition><Services /></PageTransition>}        />
        <Route path="/industries"       element={<PageTransition><Industries /></PageTransition>}      />
        <Route path="/projects"         element={<PageTransition><Projects /></PageTransition>}        />
        <Route path="/knowledge-center" element={<PageTransition><KnowledgeCenter /></PageTransition>} />
        <Route path="/contact"          element={<PageTransition><Contact /></PageTransition>}         />
        <Route path="*"                 element={<PageTransition><NotFound /></PageTransition>}        />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <AnimatedRoutes />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

/* ── App ──────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </HelmetProvider>
  );
}

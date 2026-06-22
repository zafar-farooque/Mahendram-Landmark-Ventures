import { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileTopBar from './components/MobileTopBar';
import BottomTabBar from './components/BottomTabBar';
import MobileMenuSheet from './components/MobileMenuSheet';
import { ThemeProvider } from './context/ThemeContext';

/* ── Lazy-loaded page components ─────────────────────────────────── */
const Home            = lazy(() => import('./pages/Home'));
const About           = lazy(() => import('./pages/About'));
const Solutions       = lazy(() => import('./pages/Solutions'));
const Services        = lazy(() => import('./pages/Services'));
const Industries      = lazy(() => import('./pages/Industries'));
const Projects        = lazy(() => import('./pages/Projects'));
const KnowledgeCenter = lazy(() => import('./pages/KnowledgeCenter'));
const Contact         = lazy(() => import('./pages/Contact'));
const Inovvio         = lazy(() => import('./pages/Inovvio'));
const Ortus           = lazy(() => import('./pages/Ortus'));
const Resources       = lazy(() => import('./pages/Resources'));
const Safety          = lazy(() => import('./pages/Safety'));
const Quality         = lazy(() => import('./pages/Quality'));
const Technology      = lazy(() => import('./pages/Technology'));
const Sustainability  = lazy(() => import('./pages/Sustainability'));
const Tenders         = lazy(() => import('./pages/Tenders'));
const Partner         = lazy(() => import('./pages/Partner'));
const Careers         = lazy(() => import('./pages/Careers'));
const Media           = lazy(() => import('./pages/Media'));
const LocationPage    = lazy(() => import('./pages/LocationPage'));
const NotFound        = lazy(() => import('./pages/NotFound'));

/* ── Page loading fallback ────────────────────────────────────────── */
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]" role="status" aria-label="Loading page">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-4 border-t-transparent animate-spin"
          style={{ borderColor: '#E5E7EB', borderTopColor: 'var(--color-accent)' }} />
        <p className="text-sm font-medium" style={{ color: '#6B7280' }}>Loading…</p>
      </div>
    </div>
  );
}

function PageTransition({ children }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
      {children}
    </motion.div>
  );
}

const PT = ({ C }) => <PageTransition><C /></PageTransition>;

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/"                  element={<PT C={Home} />} />
        <Route path="/about"             element={<PT C={About} />} />
        <Route path="/solutions"         element={<PT C={Solutions} />} />
        <Route path="/services"          element={<PT C={Services} />} />
        <Route path="/industries"        element={<PT C={Industries} />} />
        <Route path="/projects"          element={<PT C={Projects} />} />
        <Route path="/knowledge-center"  element={<PT C={KnowledgeCenter} />} />
        <Route path="/contact"           element={<PT C={Contact} />} />
        <Route path="/inovvio"           element={<PT C={Inovvio} />} />
        <Route path="/ortus"             element={<PT C={Ortus} />} />
        <Route path="/resources"         element={<PT C={Resources} />} />
        <Route path="/safety"            element={<PT C={Safety} />} />
        <Route path="/quality"           element={<PT C={Quality} />} />
        <Route path="/technology"        element={<PT C={Technology} />} />
        <Route path="/sustainability"    element={<PT C={Sustainability} />} />
        <Route path="/tenders"           element={<PT C={Tenders} />} />
        <Route path="/partner"           element={<PT C={Partner} />} />
        <Route path="/careers"           element={<PT C={Careers} />} />
        <Route path="/media"             element={<PT C={Media} />} />
        <Route path="/location/:city"    element={<PT C={LocationPage} />} />
        <Route path="*"                  element={<PT C={NotFound} />} />
      </Routes>
    </AnimatePresence>
  );
}


function AppContent() {
  const location = useLocation();
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSheetOpen(false); // close sheet on route change
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Desktop navbar — hidden on mobile */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Mobile top bar — hidden on desktop */}
      <MobileTopBar />

      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <AnimatedRoutes />
        </Suspense>
      </main>

      <Footer />

      {/* Mobile bottom tab bar + slide-up sheet */}
      <BottomTabBar onMenuOpen={() => setSheetOpen(true)} />
      <MobileMenuSheet isOpen={sheetOpen} onClose={() => setSheetOpen(false)} />
    </div>
  );
}

/* ── App ──────────────────────────────────────────────────────────── */
export default function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <AppContent />
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  );
}

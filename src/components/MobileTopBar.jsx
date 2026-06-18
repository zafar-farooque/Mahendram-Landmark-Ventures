import { Link } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function MobileTopBar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      id="mobile-top-bar"
      className="md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 bg-white dark:bg-[#0D1424] border-b border-gray-100 dark:border-white/10 shadow-sm"
      style={{
        height: '56px',
        paddingTop: 'env(safe-area-inset-top)',
      }}
    >
      {/* Logo */}
      <Link
        to="/"
        id="mobile-top-logo"
        className="relative flex items-center select-none flex-shrink-0"
        style={{ userSelect: 'none' }}
      >
        <img
          src="/final_logo.png"
          alt="Mahendram Landmark Ventures"
          className="h-9 w-auto object-contain transition-opacity duration-300 dark:opacity-0"
        />
        <img
          src="/logo_dark_mode.png"
          alt="Mahendram Landmark Ventures"
          className="absolute inset-0 w-full h-full object-contain object-left transition-opacity duration-300 opacity-0 dark:opacity-100 pointer-events-none"
        />
      </Link>

      {/* Theme Toggle */}
      <button
        id="mobile-theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle dark mode"
        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 active:scale-90 transition-all duration-200"
        style={{ touchAction: 'manipulation' }}
      >
        <span
          className="transition-all duration-300"
          style={{ transform: theme === 'dark' ? 'rotate(0deg)' : 'rotate(180deg)' }}
        >
          {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
        </span>
      </button>
    </header>
  );
}

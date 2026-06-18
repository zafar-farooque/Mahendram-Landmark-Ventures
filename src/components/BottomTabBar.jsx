import { NavLink } from 'react-router-dom';
import { Home, Wrench, Building2, Phone, MoreHorizontal } from 'lucide-react';

const TABS = [
  { label: 'Home',     to: '/',          Icon: Home      },
  { label: 'Services', to: '/services',  Icon: Wrench    },
  { label: 'Projects', to: '/projects',  Icon: Building2 },
  { label: 'Contact',  to: '/contact',   Icon: Phone     },
];

export default function BottomTabBar({ onMenuOpen }) {
  return (
    <nav
      id="bottom-tab-bar"
      role="navigation"
      aria-label="Bottom navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-[#0D1424] border-t border-gray-200 dark:border-white/10 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] dark:shadow-[0_-4px_20px_rgba(0,0,0,0.3)]"
      style={{
        height: 'calc(64px + env(safe-area-inset-bottom))',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div className="flex items-stretch h-16">
        {/* Regular nav tabs */}
        {TABS.map(({ label, to, Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            id={`bottom-tab-${label.toLowerCase()}`}
            className={({ isActive }) =>
              `relative flex-1 flex flex-col items-center justify-center gap-0.5 select-none transition-all duration-200 active:scale-90 ${
                isActive
                  ? 'text-[#29ABE2]'
                  : 'text-gray-400 dark:text-gray-500'
              }`
            }
            style={{ touchAction: 'manipulation' }}
          >
            {({ isActive }) => (
              <>
                {/* Removed active dot indicator as requested */}
                <Icon size={22} strokeWidth={isActive ? 2.5 : 1.75} />
                <span className="text-[10px] font-bold tracking-wide">{label}</span>
              </>
            )}
          </NavLink>
        ))}

        {/* More / Menu tab */}
        <button
          id="bottom-tab-more"
          onClick={onMenuOpen}
          aria-label="Open menu"
          className="relative flex-1 flex flex-col items-center justify-center gap-0.5 select-none text-gray-400 dark:text-gray-500 transition-all duration-200 active:scale-90 active:text-[#29ABE2]"
          style={{ touchAction: 'manipulation' }}
        >
          <MoreHorizontal size={22} strokeWidth={1.75} />
          <span className="text-[10px] font-bold tracking-wide">More</span>
        </button>
      </div>
    </nav>
  );
}

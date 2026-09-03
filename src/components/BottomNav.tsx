import {
  Home,
  Compass,
  Sparkles,
  Folder,
  Bell,
  User,
} from 'lucide-react';
import type { Screen, Navigate } from '../types';

interface TabItem {
  id: Screen;
  label: string;
  Icon: React.ElementType;
}

const tabs: TabItem[] = [
  { id: 'home', label: 'HOME', Icon: Home },
  { id: 'explore', label: 'EXPLORE', Icon: Compass },
  { id: 'planner', label: 'PLAN', Icon: Sparkles },
  { id: 'trips', label: 'TRIPS', Icon: Folder },
  { id: 'profile', label: 'PROFILE', Icon: User },
];

interface BottomNavProps {
  currentScreen: Screen;
  navigate: Navigate;
}

export default function BottomNav({ currentScreen, navigate }: BottomNavProps) {
  return (
    <div
      className="absolute bottom-5 left-4 right-4 z-40 flex items-center justify-between"
      style={{
        height: 62,
        background: '#ffffff',
        borderRadius: 35,
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04)',
        border: '1px solid #f1f5f9',
        padding: '6px 8px',
      }}
    >
      {tabs.map((tab) => {
        const active = currentScreen === tab.id;
        const { Icon } = tab;

        return (
          <button
            key={tab.id}
            onClick={() => navigate(tab.id)}
            className={`flex items-center justify-center gap-1.5 cursor-pointer select-none transition-all duration-300 ease-out whitespace-nowrap outline-none active:scale-90 ${
              active
                ? 'bg-[#0f172a] text-white shadow-[0_6px_16px_rgba(15,23,42,0.25)] px-3.5 py-2 rounded-[22px]'
                : 'text-[#94a3b8] hover:text-[#64748b] px-2.5 py-2 rounded-[22px]'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
              fontFamily: 'var(--font-display)',
            }}
          >
            <div className={active ? 'anim-pop-icon flex items-center justify-center' : 'flex items-center justify-center'}>
              <Icon
                size={17}
                strokeWidth={active ? 2.5 : 2}
                color={active ? '#ffffff' : '#94a3b8'}
              />
            </div>
            {active && (
              <span
                className="anim-expand-text text-[11px] font-bold tracking-wider text-white"
                style={{
                  letterSpacing: '0.5px',
                  lineHeight: 1,
                }}
              >
                {tab.label}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}

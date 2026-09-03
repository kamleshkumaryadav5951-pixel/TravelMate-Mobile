import { useState } from 'react';
import {
  Bell,
  Moon,
  Globe,
  IndianRupee,
  Settings2,
  ShieldCheck,
  Star,
  Headphones,
  LogOut,
} from 'lucide-react';
import type { ScreenProps } from '../types';

type ItemType = 'toggle' | 'nav' | 'danger';

interface SettingItem {
  iconBg: string;
  iconColor: string;
  Icon: React.ElementType;
  label: string;
  sub: string;
  type: ItemType;
  toggleKey?: string;
  value?: string;
  color?: string;
}

const groups: { title: string; items: SettingItem[] }[] = [
  {
    title: 'Preferences',
    items: [
      {
        iconBg: '#FEF3C7', iconColor: '#D97706',
        Icon: Bell,
        label: 'Notifications', sub: 'Trip reminders & updates',
        type: 'toggle', toggleKey: 'notif',
      },
      {
        iconBg: '#EDE9FE', iconColor: '#7C3AED',
        Icon: Moon,
        label: 'Dark Mode', sub: 'Switch to dark theme',
        type: 'toggle', toggleKey: 'dark',
      },
      {
        iconBg: '#DBEAFE', iconColor: '#2563EB',
        Icon: Globe,
        label: 'Language', sub: 'English',
        type: 'nav',
      },
      {
        iconBg: '#D1FAE5', iconColor: '#059669',
        Icon: IndianRupee,
        label: 'Currency', sub: 'INR — Indian Rupee',
        type: 'nav',
      },
    ],
  },
  {
    title: 'Account',
    items: [
      {
        iconBg: '#EDE9FE', iconColor: '#7C3AED',
        Icon: Settings2,
        label: 'All Settings', sub: 'Notifications, privacy & more',
        type: 'nav',
      },
      {
        iconBg: '#D1FAE5', iconColor: '#059669',
        Icon: ShieldCheck,
        label: 'Privacy & Security', sub: '',
        type: 'nav',
      },
      {
        iconBg: '#FEF3C7', iconColor: '#D97706',
        Icon: Star,
        label: 'Rate TravelMate', sub: 'Share your experience',
        type: 'nav',
      },
      {
        iconBg: '#DBEAFE', iconColor: '#37784d',
        Icon: Headphones,
        label: 'Help & Support', sub: 'Get help and contact us',
        type: 'nav',
      },
    ],
  },
  {
    title: '',
    items: [
      {
        iconBg: '#FEE2E2', iconColor: '#EF4444',
        Icon: LogOut,
        label: 'Logout', sub: 'Sign out from your account',
        type: 'danger', color: '#EF4444',
      },
    ],
  },
];

export default function Settings({ navigate }: ScreenProps) {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    notif: true,
    dark: false,
  });
  const flip = (key: string) => setToggles(p => ({ ...p, [key]: !p[key] }));

  return (
    <div className="absolute inset-0 overflow-y-auto" style={{ background: '#F1F5FB' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(160deg,#0f172a,#1e3a5f)', paddingBottom: 24, paddingTop: 8 }}>
        <div className="flex items-center gap-3 px-5 pt-2 pb-2">
          <button
            onClick={() => navigate('profile')}
            className="rounded-full flex items-center justify-center"
            style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.14)', border: '1px solid rgba(255,255,255,0.2)' }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>
          <div>
            <h1 className="text-white font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>Settings</h1>
            <p className="text-white/50 text-xs">Manage your preferences</p>
          </div>
        </div>
      </div>

      {/* Profile card */}
      <div className="mx-5 -mt-5 mb-5 rounded-3xl p-4 bg-white flex items-center gap-4"
        style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)', border: '1px solid #e8f0fe' }}>
        <div className="rounded-full flex items-center justify-center font-bold text-white text-xl flex-shrink-0"
          style={{ width: 52, height: 52, background: 'linear-gradient(135deg,#37784d,#25573e)', fontFamily: 'var(--font-display)' }}>
          A
        </div>
        <div className="flex-1">
          <p className="font-bold text-gray-900 text-base" style={{ fontFamily: 'var(--font-display)' }}>Kamlesh Yadav</p>
          <p className="text-gray-500 text-xs mt-0.5">kamlesh.yadav@gmail.com</p>
        </div>
        <button onClick={() => navigate('profile')}
          className="rounded-xl px-3 py-1.5 text-xs font-bold"
          style={{ background: '#ecfdf5', color: '#37784d', fontFamily: 'var(--font-display)' }}>
          Edit
        </button>
      </div>

      {/* Groups */}
      <div className="px-5 pb-10 space-y-5">
        {groups.map((group, gi) => (
          <div key={gi}>
            {group.title !== '' && (
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest px-1 mb-2">
                {group.title}
              </p>
            )}
            <div className="rounded-3xl overflow-hidden bg-white"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.05)', border: '1px solid #e8f0fe' }}>
              {group.items.map((item, ii) => {
                const active = item.toggleKey ? toggles[item.toggleKey] : false;
                const { Icon } = item;
                return (
                  <div key={ii}>
                    {ii > 0 && <div style={{ height: 1, background: '#F1F5FB', marginLeft: 66 }} />}
                    <div
                      className="flex items-center gap-3.5 px-4 py-3 cursor-pointer"
                      onClick={() => item.toggleKey && flip(item.toggleKey)}
                    >
                      {/* Icon tile */}
                      <div style={{
                        width: 42, height: 42, borderRadius: 12,
                        background: item.iconBg,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0,
                      }}>
                        <Icon size={20} color={item.iconColor} strokeWidth={2} />
                      </div>

                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate"
                          style={{ color: item.color ?? '#1e293b', fontFamily: 'var(--font-display)' }}>
                          {item.label}
                        </p>
                        {item.sub && <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>}
                      </div>

                      {item.type === 'toggle' && item.toggleKey && (
                        <div style={{
                          width: 46, height: 26, borderRadius: 13,
                          background: active ? '#37784d' : '#CBD5E1',
                          position: 'relative', flexShrink: 0,
                          transition: 'background 0.2s',
                        }}>
                          <div style={{
                            position: 'absolute', width: 20, height: 20, borderRadius: '50%',
                            background: 'white', top: 3,
                            left: active ? 23 : 3,
                            boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
                            transition: 'left 0.2s',
                          }} />
                        </div>
                      )}

                      {(item.type === 'nav' || item.type === 'danger') && (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                          stroke="#CBD5E1" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0 }}>
                          <polyline points="9 18 15 12 9 6"/>
                        </svg>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        <div className="text-center pt-2">
          <p className="text-gray-400 text-xs">TravelMate v2.1.0 · Build 2025.07</p>
          <p className="text-gray-300 text-xs mt-0.5">Made with ❤️ for explorers</p>
        </div>
      </div>
    </div>
  );
}

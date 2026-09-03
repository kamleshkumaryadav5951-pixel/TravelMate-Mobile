import { ICONS } from '../icons';
import { useState } from 'react';
import type { ScreenProps } from '../types';

const stats = [
  { val: '12', label: 'Trips', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6.7 4-4.8 4.8-2.6-.7-1.4 1.4 4 1.4 1.4 4 1.4-1.4-.7-2.6 4.8-4.8 4 6.7 1.2-.7c.4-.2.7-.6.6-1.1z"/></svg> },
  { val: '4', label: 'Countries', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> },
  { val: '28', label: 'Saved', icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/></svg> },
];

const preferences = [
  { label: 'Mountains', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg> },
  { label: 'Beaches', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12h20"/><path d="M12 12v-8"/><path d="m6 12 6-8 6 8"/></svg> },
  { label: 'Food', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 20-20"/><path d="m14 10 4-4"/><path d="M10 14 6 18"/><path d="m5 13 4-4"/><path d="m19 7 2-2"/></svg> },
  { label: 'Photography', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg> },
  { label: 'Culture', icon: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16"/><path d="M4 2h16"/><path d="M12 2v20"/><path d="M6 2v20"/><path d="M18 2v20"/></svg> },
];

interface Setting {
  icon: JSX.Element;
  label: string;
  sub?: string;
  type?: 'toggle' | 'nav' | 'danger';
  value?: boolean;
  color?: string;
}



const settingGroups: { title: string; items: Setting[] }[] = [
  {
    title: 'Preferences',
    items: [
      { icon: ICONS.notifications, label: 'Notifications', sub: 'Trip reminders & updates', type: 'toggle', value: true },
      { icon: ICONS.moon, label: 'Dark Mode', sub: 'Switch to dark theme', type: 'toggle', value: false },
      { icon: ICONS.globe, label: 'Language', sub: 'English', type: 'nav' },
      { icon: ICONS.currency, label: 'Currency', sub: 'INR — Indian Rupee', type: 'nav' },
    ]
  },
  {
    title: 'Account',
    items: [
      { icon: ICONS.settings, label: 'All Settings', sub: 'Notifications, privacy & more', type: 'nav' },
      { icon: ICONS.lock, label: 'Privacy & Security', type: 'nav' },
      { icon: ICONS.star, label: 'Rate TravelMate', type: 'nav' },
      { icon: ICONS.help, label: 'Help & Support', type: 'nav' },
    ]
  },
  {
    title: '',
    items: [
      { icon: ICONS.logout, label: 'Logout', type: 'danger', color: '#ef4444' },
    ]
  },
];

export default function Profile({ navigate }: ScreenProps) {
  const [toggles, setToggles] = useState<Record<string, boolean>>({
    Notifications: true,
    'Dark Mode': document.body.classList.contains('dark-mode')
  });

  const flipToggle = (label: string) => {
    setToggles(prev => {
      const newVal = !prev[label];
      if (label === 'Dark Mode') {
        if (newVal) document.body.classList.add('dark-mode');
        else document.body.classList.remove('dark-mode');
      }
      return { ...prev, [label]: newVal };
    });
  };

  return (
    <div className="absolute inset-0 overflow-y-auto pb-[110px]" style={{ background: '#f8faff' }}>
      {/* Profile header */}
      <div style={{ background: 'linear-gradient(160deg, #37784d, #40916c)', paddingBottom: 30, paddingTop: 8 }}>
        <div className="flex justify-between items-start px-5 pt-3">
          <div />
          <button className="rounded-full flex items-center justify-center active:scale-90 transition-transform" style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center px-5 pt-2">
          {/* Avatar */}
          <div className="relative mb-4">
            <div className="rounded-full flex items-center justify-center font-bold text-white text-3xl" style={{
              width: 88, height: 88,
              background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
              border: '3px solid rgba(255,255,255,0.3)',
              fontFamily: 'var(--font-display)'
            }}>
              <img src="/avatar.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>
            <div className="absolute bottom-0 right-0 rounded-full flex items-center justify-center" style={{ width: 26, height: 26, background: '#10b981', border: '2px solid #1e3a5f' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M20 6L9 17l-5-5"/>
              </svg>
            </div>
          </div>

          <h1 className="text-white font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>Kamlesh Yadav</h1>
          <p className="text-white/60 text-sm mt-0.5">kamlesh.yadav@gmail.com</p>

          {/* Member badge */}
          {/* <div className="mt-3 rounded-full px-3.5 py-1.5 flex items-center gap-1.5" style={{ background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
            <span className="text-white text-xs font-semibold" style={{ fontFamily: 'var(--font-display)' }}>Premium Explorer</span>
          </div> */}

          {/* Stats */}
          <div className="flex gap-5 mt-5">
            {stats.map(s => (
              <div key={s.label} className="flex flex-col items-center">
                <span className="text-xl mb-1">{s.icon}</span>
                <span className="text-white font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>{s.val}</span>
                <span className="text-white/50 text-xs">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 pb-24 -mt-4">
        {/* Travel preferences */}
        <div className="rounded-3xl p-4 mb-5 bg-white" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.07)', border: '1px solid #e8f0fe' }}>
          <h2 className="font-bold text-gray-900 text-sm mb-3" style={{ fontFamily: 'var(--font-display)' }}>Travel Preferences</h2>
          <div className="flex flex-wrap gap-2">
            {preferences.map(p => (
              <span key={p.label} className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold active:scale-95 transition-transform" style={{ background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe' }}>
                {p.icon}
                {p.label}
              </span>
            ))}
            <button className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold active:scale-95 transition-transform" style={{ background: '#f8faff', color: '#94a3b8', border: '1px dashed #cbd5e1' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Kdd
            </button>
          </div>
        </div>

        {/* Settings groups */}
        {settingGroups.map((group, gi) => (
          <div key={gi} className="mb-4">
            {group.title && (
              <p className="text-gray-500 text-xs font-bold uppercase tracking-widest px-1 mb-2">{group.title}</p>
            )}
            <div className="rounded-3xl overflow-hidden bg-white" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.07)', border: '1px solid #e8f0fe' }}>
              {group.items.map((item, i) => (
                <div key={i}>
                  {i > 0 && <div style={{ height: 1, background: '#f1f5f9', marginLeft: 60 }} />}
                  <div
                    className="flex items-center gap-3 px-4 py-3.5 cursor-pointer transition-all active:bg-gray-50"
                    style={{ background: 'white' }}
                    onClick={() => { if (item.label === 'All Settings') navigate('settings'); if (item.label === 'Logout') navigate('login'); }}
                  >
                    <div className="rounded-xl flex items-center justify-center text-base flex-shrink-0" style={{ width: 38, height: 38, background: item.type === 'danger' ? '#fef2f2' : '#f8faff' }}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold" style={{ color: item.type === 'danger' ? '#ef4444' : '#1e293b' }}>{item.label}</p>
                      {item.sub && <p className="text-gray-400 text-xs mt-0.5">{item.sub}</p>}
                    </div>
                    {item.type === 'toggle' && (
                      <button
                        onClick={() => flipToggle(item.label)}
                        className="rounded-full transition-all"
                        style={{
                          width: 44, height: 24,
                          background: toggles[item.label] ? '#37784d' : '#cbd5e1',
                          position: 'relative',
                          flexShrink: 0
                        }}
                      >
                        <div className="absolute rounded-full bg-white transition-all" style={{
                          width: 18, height: 18,
                          top: 3, left: toggles[item.label] ? 23 : 3,
                          boxShadow: '0 1px 4px rgba(0,0,0,0.15)'
                        }} />
                      </button>
                    )}
                    {item.type === 'nav' && (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round">
                        <polyline points="9 18 15 12 9 6"/>
                      </svg>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-center text-gray-400 text-xs mt-2">TravelMate v2.1.0 · Made with ❤️</p>
      </div>
    </div>
  );
}

import { ICONS } from '../icons';
import { useState } from 'react';
import type { ScreenProps } from '../types';




const timeline = [
  { time: '09:00 AM', name: 'Hadimba Temple', icon: ICONS.temple, type: 'Heritage', done: true, note: 'Amazing carvings!' },
  { time: '12:30 PM', name: 'Lunch — Café 1947', icon: ICONS.food, type: 'Food', done: true, note: 'Great momos here' },
  { time: '03:30 PM', name: 'Solang Valley', icon: ICONS.adventure, type: 'Adventure', done: true, note: '' },
  { time: '06:00 PM', name: 'Sunset at Rohtang', icon: ICONS.scenic, type: 'Scenic', done: false, note: '' },
  { time: '09:00 PM', name: 'Hotel & Rest', icon: ICONS.hotel, type: 'Hotel', done: false, note: '' },
];

const typeColors: Record<string, string> = {
  Heritage: '#f97316',
  Food: '#10b981',
  Adventure: '#2563eb',
  Scenic: '#0ea5e9',
  Hotel: '#7c3aed',
};

export default function LiveTracker({ navigate }: ScreenProps) {
  const [expanded, setExpanded] = useState<number | null>(null);

  const completed = timeline.filter(t => t.done).length;
  const total = timeline.length;
  const pct = Math.round((completed / total) * 100);
  const budgetPct = Math.round((7800 / 15000) * 100);

  const circumference = 2 * Math.PI * 45;
  const dashOffset = circumference - (pct / 100) * circumference;
  const budgetOffset = circumference - (budgetPct / 100) * circumference;

  return (
    <div className="absolute inset-0 overflow-y-auto" style={{ background: '#f8faff' }}>
      {/* Header */}
      <div className="px-5 pt-4 pb-5" style={{ background: 'white', borderBottom: '1px solid #e2e8f0' }}>
        <div className="flex items-center justify-between mb-1">
          <button onClick={() => navigate('home')} style={{ color: '#64748b', fontSize: 24, background: 'none', border: 'none', cursor: 'pointer' }}>←</button>
          <div className="flex items-center gap-2">
            <div className="rounded-full" style={{ width: 8, height: 8, background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
            <span className="text-xs font-semibold" style={{ color: '#10b981', fontFamily: 'var(--font-display)' }}>LIVE</span>
          </div>
          <button style={{ color: 'rgba(255,255,255,0.5)', background: 'none', border: 'none', cursor: 'pointer' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07M4.93 4.93a10 10 0 0 0 0 14.14M8.46 8.46a5 5 0 0 0 0 7.07"/>
            </svg>
          </button>
        </div>
        <div className="text-center mt-2">
          <h1 className="text-gray-900 font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>Manali Adventure</h1>
          <div className="flex items-center justify-center gap-2 mt-1">
            <div className="rounded-full px-2.5 py-0.5" style={{ background: 'rgba(37,99,235,0.3)', border: '1px solid rgba(37,99,235,0.5)' }}>
              <span className="text-xs font-semibold" style={{ color: '#93c5fd', fontFamily: 'var(--font-display)' }}>Day 2 of 5</span>
            </div>
            <span className="text-gray-300 text-xs">•</span>
            <span className="text-gray-500 text-xs">Jul 16, 2025</span>
          </div>
        </div>
      </div>

      {/* Progress rings */}
      <div className="flex justify-around px-5 py-6">
        {/* Trip progress */}
        <div className="flex flex-col items-center">
          <div className="relative" style={{ width: 110, height: 110 }}>
            <svg width="110" height="110" viewBox="0 0 110 110" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="55" cy="55" r="45" fill="none" stroke="#e2e8f0" strokeWidth="8"/>
              <circle cx="55" cy="55" r="45" fill="none" stroke="#2563eb" strokeWidth="8"
                strokeDasharray={circumference} strokeDashoffset={dashOffset}
                strokeLinecap="round" style={{ transition: 'stroke-dashoffset 1s ease', filter: 'drop-shadow(0 0 6px #2563eb)' }}/>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-gray-900 font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>{pct}%</span>
              <span className="text-gray-900/50 text-xs">Trip</span>
            </div>
          </div>
          <p className="text-gray-900/70 text-xs mt-2 font-medium">Places Visited</p>
          <p className="text-gray-900 font-bold text-sm" style={{ fontFamily: 'var(--font-display)' }}>{completed} / {total}</p>
        </div>

        {/* Budget ring */}
        <div className="flex flex-col items-center">
          <div className="relative" style={{ width: 110, height: 110 }}>
            <svg width="110" height="110" viewBox="0 0 110 110" style={{ transform: 'rotate(-90deg)' }}>
              <circle cx="55" cy="55" r="45" fill="none" stroke="#e2e8f0" strokeWidth="8"/>
              <circle cx="55" cy="55" r="45" fill="none" stroke="#10b981" strokeWidth="8"
                strokeDasharray={circumference} strokeDashoffset={budgetOffset}
                strokeLinecap="round" style={{ transition: 'stroke-dashoffset 1s ease', filter: 'drop-shadow(0 0 6px #10b981)' }}/>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-gray-900 font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>{budgetPct}%</span>
              <span className="text-gray-900/50 text-xs">Budget</span>
            </div>
          </div>
          <p className="text-gray-900/70 text-xs mt-2 font-medium">Budget Used</p>
          <p className="text-gray-900 font-bold text-sm" style={{ fontFamily: 'var(--font-display)' }}>₹7,800 / ₹15,000</p>
        </div>
      </div>

      {/* Stats row */}
      <div className="flex gap-3 px-5 mb-6">
        {[
          { icon: ICONS.calendar, label: 'Days Left', val: '3' },
          { icon: ICONS.weather, label: 'Weather', val: '14°C' },
          { icon: ICONS.budget, label: 'Remaining', val: '₹7,200' },
        ].map(s => (
          <div key={s.label} className="flex-1 rounded-2xl p-3 text-center" style={{ background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.03)' }}>
            <div className="flex justify-center mb-1">{s.icon}</div>
            <p className="text-gray-900/50 text-xs mt-1">{s.label}</p>
            <p className="text-gray-900 font-bold text-sm" style={{ fontFamily: 'var(--font-display)' }}>{s.val}</p>
          </div>
        ))}
      </div>

      {/* Today's Timeline */}
      <div className="px-5 pb-10">
        <h2 className="font-bold text-gray-900 mb-4 text-base" style={{ fontFamily: 'var(--font-display)' }}>Today's Timeline</h2>
        {timeline.map((item, i) => (
          <div key={i} className="flex gap-3 mb-3">
            {/* Timeline line */}
            <div className="flex flex-col items-center" style={{ width: 44 }}>
              <button
                onClick={() => setExpanded(expanded === i ? null : i)}
                className="rounded-full flex items-center justify-center flex-shrink-0 text-lg"
                style={{
                  width: 44, height: 44,
                  background: item.done ? `${typeColors[item.type] || '#2563eb'}` : 'white',
                  border: `2px solid ${item.done ? typeColors[item.type] || '#2563eb' : '#cbd5e1'}`,
                  boxShadow: item.done ? `0 0 12px ${typeColors[item.type] || '#2563eb'}60` : 'none',
                  color: item.done ? 'white' : typeColors[item.type] || '#2563eb',
                  transition: 'all 0.3s ease'
                }}
              >
                {item.icon}
              </button>
              {i < timeline.length - 1 && (
                <div className="w-0.5 flex-1 mt-1" style={{
                  background: item.done ? `${typeColors[item.type] || '#2563eb'}60` : '#e2e8f0',
                  minHeight: 16
                }} />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 mb-1">
              <div
                className="rounded-2xl p-3.5 transition-all cursor-pointer"
                onClick={() => setExpanded(expanded === i ? null : i)}
                style={{
                  background: item.done ? `${typeColors[item.type] || '#2563eb'}12` : 'white',
                  border: `1.5px solid ${item.done ? typeColors[item.type] || '#2563eb' : '#e2e8f0'}`, boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold" style={{ color: item.done ? typeColors[item.type] || '#2563eb' : '#94a3b8', fontFamily: 'var(--font-display)' }}>
                        {item.time}
                      </span>
                      {item.done && (
                        <span className="text-xs font-bold rounded-full px-1.5 py-0.5" style={{ background: typeColors[item.type] + '30', color: typeColors[item.type] }}>✓ Done</span>
                      )}
                    </div>
                    <p className="text-gray-900 font-bold text-sm mt-0.5" style={{ fontFamily: 'var(--font-display)', opacity: item.done ? 1 : 0.7 }}>{item.name}</p>
                  </div>
                  <div className="rounded-lg px-2 py-1" style={{ background: '#f1f5f9' }}>
                    <span className="text-xs font-medium" style={{ color: '#64748b' }}>{item.type}</span>
                  </div>
                </div>
                {expanded === i && item.done && item.note && (
                  <div className="mt-2 pt-2" style={{ borderTop: '1px solid #e2e8f0' }}>
                    <p className="text-gray-900/60 text-xs">{ICONS.note} {item.note}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

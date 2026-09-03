import { useState } from 'react';
import type { ScreenProps } from '../types';


const initialDays = [
  {
    day: 1, title: 'Arrive & Explore',
    activities: [
      { time: '10:00 AM', name: 'Check In to Hotel', type: 'Hotel', icon: '🏨', cost: '₹3,200', travel: '—', done: true },
      { time: '12:30 PM', name: 'Lunch at Johnson\'s Café', type: 'Food', icon: '🍽️', cost: '₹450', travel: '5 min', done: true },
      { time: '02:30 PM', name: 'Hadimba Devi Temple', type: 'Heritage', icon: '🛕', cost: '₹50', travel: '15 min', done: false },
      { time: '05:00 PM', name: 'Mall Road Shopping', type: 'Shopping', icon: '🛍️', cost: '₹800', travel: '10 min', done: false },
      { time: '08:00 PM', name: 'Dinner at Drifters\' Inn', type: 'Food', icon: '🍷', cost: '₹600', travel: '5 min', done: false },
    ]
  },
  {
    day: 2, title: 'Adventure Day',
    activities: [
      { time: '08:00 AM', name: 'Breakfast at Hotel', type: 'Food', icon: '🥐', cost: '₹300', travel: '—', done: false },
      { time: '09:30 AM', name: 'Solang Valley', type: 'Adventure', icon: '⛷️', cost: '₹1,200', travel: '12 km', done: false },
      { time: '01:00 PM', name: 'Lunch — Dhaba', type: 'Food', icon: '🍛', cost: '₹250', travel: '5 min', done: false },
      { time: '03:00 PM', name: 'Paragliding Experience', type: 'Adventure', icon: '🪂', cost: '₹1,800', travel: '2 min', done: false },
      { time: '06:30 PM', name: 'Sunset at Naggar Castle', type: 'Scenic', icon: '🌄', cost: '₹100', travel: '18 km', done: false },
    ]
  },
  {
    day: 3, title: 'Scenic Drive',
    activities: [
      { time: '07:30 AM', name: 'Early Breakfast', type: 'Food', icon: '🥞', cost: '₹280', travel: '—', done: false },
      { time: '09:00 AM', name: 'Rohtang Pass', type: 'Scenic', icon: '🏔️', cost: '₹600', travel: '51 km', done: false },
      { time: '12:00 PM', name: 'Snow Play & Picnic', type: 'Recreation', icon: '⛄', cost: '₹200', travel: '—', done: false },
      { time: '03:00 PM', name: 'Vashisht Hot Springs', type: 'Wellness', icon: '♨️', cost: '₹0', travel: '51 km', done: false },
      { time: '07:30 PM', name: 'Candlelight Dinner', type: 'Food', icon: '🕯️', cost: '₹1,200', travel: '5 min', done: false },
    ]
  },
];

const typeColors: Record<string, string> = {
  Hotel: '#7c3aed',
  Food: '#f97316',
  Heritage: '#dc2626',
  Shopping: '#0ea5e9',
  Adventure: '#059669',
  Scenic: '#2563eb',
  Recreation: '#d97706',
  Wellness: '#ec4899',
};

export default function Itinerary({ navigate }: ScreenProps) {
  const [activeDay, setActiveDay] = useState(0);
  const [days, setDays] = useState(initialDays);

  const toggleActivity = (activityIndex) => {
    setDays(prev => {
      const newDays = [...prev];
      newDays[activeDay] = { ...newDays[activeDay] };
      newDays[activeDay].activities = [...newDays[activeDay].activities];
      newDays[activeDay].activities[activityIndex] = { ...newDays[activeDay].activities[activityIndex] };
      newDays[activeDay].activities[activityIndex].done = !newDays[activeDay].activities[activityIndex].done;
      console.log('Toggled activity', activityIndex, newDays[activeDay].activities[activityIndex].done);
      return newDays;
    });
  };
  
  
  const exportPDF = () => {
    // We add a class to the body before printing so we can style the print layout
    document.body.classList.add('print-mode');
    window.print();
    document.body.classList.remove('print-mode');
  };

  const day = days[activeDay];

  const totalCost = day.activities.reduce((sum, a) => {
    const n = parseInt(a.cost.replace(/[^0-9]/g, ''));
    return sum + (isNaN(n) ? 0 : n);
  }, 0);

  return (
    <div id="itinerary-content" className="absolute inset-0 flex flex-col overflow-hidden" style={{ background: '#f8faff' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(160deg,#1d4ed8,#0ea5e9)', paddingBottom: 16, paddingTop: 6 }}>
        <div className="flex items-center gap-3 px-5 pt-2 pb-3">
          <button onClick={() => navigate('planner')} className="rounded-full flex items-center justify-center" style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.2)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div className="flex-1">
            <p className="text-white/70 text-xs">AI Generated</p>
            <h1 className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>Manali Itinerary ✨</h1>
          </div>
          <button onClick={exportPDF}  className="rounded-full flex items-center justify-center active:scale-90 transition-all" style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.2)', opacity: 1 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
            </svg>
          </button>
        </div>

        {/* Day tabs */}
        <div className="flex gap-2 px-5 overflow-x-auto pb-1">
          {days.map((d, i) => (
            <button key={i} onClick={() => setActiveDay(i)}
              className="flex-shrink-0 rounded-full px-4 py-1.5 text-xs font-semibold transition-all"
              style={{
                background: activeDay === i ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.18)',
                color: activeDay === i ? '#1d4ed8' : 'rgba(255,255,255,0.85)',
                fontFamily: 'var(--font-display)'
              }}>
              Day {d.day}
            </button>
          ))}
        </div>
      </div>

      {/* Day title + budget */}
      <div className="flex items-center justify-between px-5 py-3 bg-white" style={{ borderBottom: '1px solid #e8f0fe' }}>
        <div>
          <h2 className="font-bold text-gray-900 text-sm" style={{ fontFamily: 'var(--font-display)' }}>Day {day.day} — {day.title}</h2>
          <p className="text-gray-500 text-xs">{day.activities.length} activities planned</p>
        </div>
        <div className="rounded-xl px-3 py-1.5 text-center" style={{ background: '#eff6ff' }}>
          <p className="text-xs text-gray-500">Est. Cost</p>
          <p className="font-bold text-sm" style={{ color: '#2563eb', fontFamily: 'var(--font-display)' }}>₹{totalCost.toLocaleString()}</p>
        </div>
      </div>

      {/* Timeline */}
      <div className="flex-1 overflow-y-auto px-5 py-4 pb-8">
        {day.activities.map((a, i) => (
          <div key={i} className="flex gap-3 mb-4">
            {/* Timeline line */}
            <div className="flex flex-col items-center flex-shrink-0" style={{ width: 40 }}>
              <div className="rounded-full flex items-center justify-center" style={{
                width: 36, height: 36,
                background: a.done ? typeColors[a.type] || '#2563eb' : 'white',
                border: `2.5px solid ${typeColors[a.type] || '#2563eb'}`,
                fontSize: 16,
                flexShrink: 0
              }}>
                <span style={{ filter: a.done ? 'none' : 'grayscale(0.3)' }}>{a.icon}</span>
              </div>
              {i < day.activities.length - 1 && (
                <div className="flex-1 mt-1" style={{ width: 2, background: '#e2e8f0', minHeight: 20, marginBottom: -4 }} />
              )}
            </div>

            {/* Card */}
            <div className="flex-1 rounded-2xl p-3.5 mb-1" style={{
              background: a.done ? `${typeColors[a.type] || '#2563eb'}12` : 'white',
              border: `1.5px solid ${a.done ? typeColors[a.type] || '#2563eb' : '#e8f0fe'}`,
              boxShadow: '0 2px 12px rgba(0,0,0,0.04)'
            }}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-semibold" style={{ color: typeColors[a.type] || '#2563eb' }}>{a.time}</span>
                    
                  </div>
                  <p className="text-gray-900 font-bold text-sm" style={{ fontFamily: 'var(--font-display)' }}>{a.name}</p>
                  <div className="flex items-center gap-3 mt-1.5">
                    <div className="flex items-center gap-1">
                      <span className="text-xs" style={{ color: '#94a3b8' }}>💰</span>
                      <span className="text-xs font-semibold text-gray-600">{a.cost}</span>
                    </div>
                    {a.travel !== '—' && (
                      <div className="flex items-center gap-1">
                        <span className="text-xs" style={{ color: '#94a3b8' }}>🚗</span>
                        <span className="text-xs font-semibold text-gray-600">{a.travel}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 ml-2 flex-shrink-0">
                  <div className="rounded-lg px-2 py-1" style={{ background: `${typeColors[a.type] || '#2563eb'}18` }}>
                    <span className="text-xs font-semibold" style={{ color: typeColors[a.type] || '#2563eb' }}>{a.type}</span>
                  </div>
                  <button onClick={() => toggleActivity(i)} className="w-7 h-7 cursor-pointer rounded-md flex items-center justify-center transition-all active:scale-90" style={{ background: a.done ? typeColors[a.type] || '#2563eb' : 'transparent', border: `1.5px solid ${a.done ? typeColors[a.type] || '#2563eb' : '#cbd5e1'}` }}>
                    {a.done && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Add activity */}
        <button className="w-full rounded-2xl py-3.5 flex items-center justify-center gap-2 mt-2" style={{ border: '2px dashed #bfdbfe', background: '#f0f7ff' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          <span className="font-semibold text-sm" style={{ color: '#2563eb', fontFamily: 'var(--font-display)' }}>Add Activity</span>
        </button>
      </div>
    </div>
  );
}

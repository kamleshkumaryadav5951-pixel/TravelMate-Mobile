import { ICONS } from '../icons';
import { useState } from 'react';
import type { ScreenProps } from '../types';

const categories = [
  { label: 'Transportation', icon: '✈️', pct: 28, amount: 6860, color: '#2563eb' },
  { label: 'Accommodation', icon: '🏨', pct: 32, amount: 7840, color: '#7c3aed' },
  { label: 'Food & Dining', icon: '🍽️', pct: 20, amount: 4900, color: '#f97316' },
  { label: 'Activities', icon: '🎯', pct: 12, amount: 2940, color: '#059669' },
  { label: 'Shopping', icon: '🛍️', pct: 8, amount: 1960, color: '#ec4899' },
];

const destinations = ['Manali', 'Goa', 'Jaipur', 'Kerala', 'Ladakh', 'Taj Mahal'];
const styles = ['Budget', 'Moderate', 'Premium'];




export default function PricePredictor({ navigate }: ScreenProps) {
  const [dest, setDest] = useState('Manali');
  const [travelers, setTravelers] = useState(2);
  const [days, setDays] = useState(5);
  const [style, setStyle] = useState('Moderate');
  const [calculated, setCalculated] = useState(true);

  const baseTotal = 24500;
  const multiplier = { Budget: 0.6, Moderate: 1, Premium: 1.8 }[style] || 1;
  const total = Math.round(baseTotal * multiplier * (travelers / 2) * (days / 5));

  return (
    <div className="absolute inset-0 overflow-y-auto" style={{ background: '#f8faff' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(160deg,#059669,#10b981)', paddingBottom: 20, paddingTop: 6 }}>
        <div className="flex items-center gap-3 px-5 pt-2 pb-2">
          <button onClick={() => navigate('home')} className="rounded-full flex items-center justify-center" style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.2)' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div>
            <p className="text-white/70 text-xs">AI Powered</p>
            <h1 className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>Price Predictor {ICONS.money}</h1>
          </div>
        </div>
      </div>

      <div className="px-5 py-5 space-y-5 pb-10">
        {/* Inputs */}
        <div className="rounded-3xl p-5 bg-white" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.07)', border: '1px solid #e8f0fe' }}>
          <h2 className="font-bold text-gray-900 mb-4 text-sm" style={{ fontFamily: 'var(--font-display)' }}>Trip Details</h2>

          {/* Destination */}
          <div className="mb-4">
            <p className="text-gray-600 text-xs font-semibold mb-2">{ICONS.pin} Destination</p>
            <div className="flex gap-2 flex-wrap">
              {destinations.map(d => (
                <button key={d} onClick={() => setDest(d)}
                  className="rounded-full px-3 py-1.5 text-xs font-semibold transition-all"
                  style={{ background: dest === d ? '#059669' : '#f0fdf4', color: dest === d ? 'white' : '#166534', border: `1.5px solid ${dest === d ? '#059669' : '#bbf7d0'}` }}>
                  {d}
                </button>
              ))}
            </div>
          </div>

          {/* Travelers */}
          <div className="mb-4">
            <p className="text-gray-600 text-xs font-semibold mb-2">{ICONS.users} Travelers</p>
            <div className="flex items-center gap-4">
              <button onClick={() => setTravelers(Math.max(1, travelers - 1))}
                className="rounded-full flex items-center justify-center font-bold text-lg"
                style={{ width: 36, height: 36, background: '#f0fdf4', color: '#059669', border: '1.5px solid #bbf7d0' }}>−</button>
              <span className="font-bold text-xl text-gray-900" style={{ minWidth: 30, textAlign: 'center', fontFamily: 'var(--font-display)' }}>{travelers}</span>
              <button onClick={() => setTravelers(Math.min(10, travelers + 1))}
                className="rounded-full flex items-center justify-center font-bold text-lg"
                style={{ width: 36, height: 36, background: '#059669', color: 'white' }}>+</button>
              <span className="text-gray-500 text-sm">{travelers === 1 ? 'person' : 'people'}</span>
            </div>
          </div>

          {/* Days */}
          <div className="mb-4">
            <p className="text-gray-600 text-xs font-semibold mb-2">{ICONS.calendar} Duration: <span className="font-bold text-gray-900">{days} days</span></p>
            <input type="range" min={1} max={14} value={days} onChange={e => setDays(Number(e.target.value))}
              className="w-full" style={{ accentColor: '#059669' }} />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>1 day</span><span>14 days</span>
            </div>
          </div>

          {/* Travel style */}
          <div>
            <p className="text-gray-600 text-xs font-semibold mb-2">{ICONS.sparkles} Travel Style</p>
            <div className="flex gap-2">
              {styles.map(s => (
                <button key={s} onClick={() => setStyle(s)}
                  className="flex-1 rounded-xl py-2 text-xs font-bold transition-all"
                  style={{ background: style === s ? '#059669' : '#f0fdf4', color: style === s ? 'white' : '#166534', border: `1.5px solid ${style === s ? '#059669' : '#bbf7d0'}` }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Total cost display */}
        <div className="rounded-3xl p-5 text-center" style={{ background: 'linear-gradient(135deg,#059669,#10b981)', boxShadow: '0 8px 32px rgba(5,150,105,0.3)' }}>
          <p className="text-white/80 text-sm font-medium mb-1">Estimated Trip Cost</p>
          <p className="text-white font-bold" style={{ fontFamily: 'var(--font-display)', fontSize: 42, lineHeight: 1.1 }}>
            ₹{total.toLocaleString('en-IN')}
          </p>
          <p className="text-white/70 text-xs mt-2">for {travelers} {travelers === 1 ? 'person' : 'people'} · {days} days · {style}</p>
          <div className="mt-3 rounded-xl px-3 py-1.5 inline-block" style={{ background: 'rgba(255,255,255,0.2)' }}>
            <p className="text-white text-xs">≈ ₹{Math.round(total / travelers).toLocaleString('en-IN')} per person</p>
          </div>
        </div>

        {/* Breakdown */}
        <div className="rounded-3xl p-5 bg-white" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.07)', border: '1px solid #e8f0fe' }}>
          <h2 className="font-bold text-gray-900 mb-4 text-sm" style={{ fontFamily: 'var(--font-display)' }}>Cost Breakdown</h2>
          <div className="space-y-3.5">
            {categories.map(c => {
              const amt = Math.round(c.amount * multiplier * (travelers / 2) * (days / 5));
              return (
                <div key={c.label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-base">{c.icon}</span>
                      <span className="text-sm font-medium text-gray-700">{c.label}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500">{c.pct}%</span>
                      <span className="text-sm font-bold text-gray-900">₹{amt.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  <div className="rounded-full overflow-hidden" style={{ height: 6, background: '#f1f5f9' }}>
                    <div className="h-full rounded-full transition-all duration-700" style={{ width: `${c.pct}%`, background: c.color }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* AI note */}
        <div className="rounded-2xl p-4 flex items-start gap-3" style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
          <div className="rounded-full flex items-center justify-center flex-shrink-0" style={{ width: 32, height: 32, background: '#2563eb' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
          </div>
          <p className="text-sm text-blue-800 leading-relaxed">
            <span className="font-bold">AI Prediction</span> based on destination, travel style, duration and preferences. Actual costs may vary ±15%.
          </p>
        </div>

        {/* CTA */}
        <button onClick={() => navigate('planner')}
          className="w-full py-4 rounded-2xl text-white font-bold text-base"
          style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', fontFamily: 'var(--font-display)', boxShadow: '0 4px 20px rgba(37,99,235,0.3)' }}>
          Plan This Trip ✈️
        </button>
      </div>
    </div>
  );
}

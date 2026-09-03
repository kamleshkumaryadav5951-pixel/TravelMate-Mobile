import { ICONS } from '../icons';
import { useState } from 'react';
import type { ScreenProps } from '../types';

const IMG = (id: string, w = 800, h = 500) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`;

const defaultDest = {
  id: '6',
  name: 'Manali',
  location: 'Himachal Pradesh',
  img: IMG('1606667544139-81e47935d769'),
  rating: 4.8,
  tag: 'Mountains',
  tagColor: '#2563eb',
  desc: 'A gateway to adventure in the Himalayas with snow-capped peaks, apple orchards, and ancient monasteries. Perfect for skiing, trekking, and paragliding.',
  best: 'Oct – Jun',
  cost: '₹4,000/day',
};




const attractions = [
  { name: 'Hadimba Temple', type: 'Heritage', icon: ICONS.temple, rating: 4.7 },
  { name: 'Solang Valley', type: 'Adventure', icon: ICONS.adventure, rating: 4.8 },
  { name: 'Rohtang Pass', type: 'Scenic', icon: ICONS.mountain, rating: 4.9 },
  { name: 'Mall Road', type: 'Shopping', icon: ICONS.shopping, rating: 4.5 },
];

const hotels = [
  { name: 'The Himalayan', stars: 5, price: '₹8,500/night', tag: 'Luxury' },
  { name: 'Snow Valley Resorts', stars: 4, price: '₹4,200/night', tag: 'Popular' },
  { name: 'Manali Inn', stars: 3, price: '₹1,800/night', tag: 'Budget' },
];

const food = ['Siddu', 'Trout Fish', 'Chha Gosht', 'Tudkiya Bhath', 'Babru'];

export default function DestinationDetail({ navigate, params }: ScreenProps) {
  const dest = (params?.dest as typeof defaultDest) || defaultDest;
  const [saved, setSaved] = useState(false);

  return (
    <div className="absolute inset-0 overflow-y-auto bg-white">
      {/* Hero */}
      <div className="relative" style={{ height: 280 }}>
        <img
          src={dest.img}
          alt={dest.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 40%, transparent 60%, rgba(0,0,0,0.65) 100%)' }} />

        {/* Back button */}
        <button
          onClick={() => navigate('explore')}
          className="absolute top-3 left-4 rounded-full flex items-center justify-center active:scale-90 transition-transform"
          style={{ width: 38, height: 38, background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        {/* Save button */}
        <button
          onClick={() => setSaved(s => !s)}
          className="absolute top-3 right-4 rounded-full flex items-center justify-center active:scale-90 transition-transform"
          style={{ width: 38, height: 38, background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill={saved ? '#ef4444' : 'none'} stroke={saved ? '#ef4444' : 'white'} strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>

        {/* Overlay info */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-end justify-between">
            <div>
              <div className="inline-block rounded-full px-2.5 py-0.5 text-white font-semibold mb-1.5" style={{ fontSize: 11, background: dest.tagColor || '#2563eb' }}>
                {dest.tag || 'Destination'}
              </div>
              <h1 className="text-white font-bold text-2xl leading-tight" style={{ fontFamily: 'var(--font-display)' }}>{dest.name}</h1>
              <div className="flex items-center gap-1 mt-0.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <span className="text-white/80 text-sm">{dest.location}</span>
              </div>
            </div>
            <div className="rounded-xl px-3 py-1.5 flex items-center gap-1" style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span className="text-white font-bold text-base">{dest.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 pb-32">
        {/* Quick stats */}
        <div className="flex gap-3 mt-4">
          {[
            { icon: ICONS.calendar, label: 'Best Time', val: dest.best || 'Oct – Mar' },
            { icon: ICONS.budget, label: 'Est. Cost', val: dest.cost || '₹3,500/day' },
            { icon: ICONS.weather, label: 'Weather', val: '12–22°C' },
          ].map(s => (
            <div key={s.label} className="flex-1 rounded-2xl p-3 text-center" style={{ background: '#f0f7ff', border: '1px solid #dbeafe' }}>
              <div className="flex justify-center mb-1">{s.icon}</div>
              <p className="text-gray-500 text-xs mt-1">{s.label}</p>
              <p className="text-gray-900 text-xs font-bold mt-0.5">{s.val}</p>
            </div>
          ))}
        </div>

        {/* About */}
        <div className="mt-5">
          <h2 className="font-bold text-gray-900 mb-2" style={{ fontFamily: 'var(--font-display)', fontSize: 16 }}>About</h2>
          <p className="text-gray-600 text-sm leading-relaxed">{dest.desc || 'A stunning destination waiting to be explored with unique culture, natural beauty, and unforgettable experiences.'}</p>
        </div>

        {/* Attractions */}
        <div className="mt-5">
          <h2 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: 16 }}>Popular Attractions</h2>
          <div className="space-y-2.5">
            {attractions.map(a => (
              <div key={a.name} className="flex items-center justify-between rounded-2xl p-3" style={{ background: '#f8faff', border: '1px solid #e8f0fe' }}>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl flex items-center justify-center text-lg" style={{ width: 40, height: 40, background: '#eff6ff' }}>{a.icon}</div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">{a.name}</p>
                    <p className="text-gray-500 text-xs">{a.type}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  <span className="text-gray-700 text-sm font-semibold">{a.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hotels */}
        <div className="mt-5">
          <h2 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: 16 }}>Hotels & Stay</h2>
          <div className="space-y-2.5">
            {hotels.map(h => (
              <div key={h.name} className="flex items-center justify-between rounded-2xl p-3" style={{ background: '#f8faff', border: '1px solid #e8f0fe' }}>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl flex items-center justify-center text-lg" style={{ width: 40, height: 40, background: '#eff6ff' }}>🏨</div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">{h.name}</p>
                    <div className="flex">
                      {Array.from({ length: h.stars }).map((_, i) => (
                        <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-sm" style={{ color: '#2563eb' }}>{h.price}</p>
                  <span className="text-xs rounded-full px-2 py-0.5 font-semibold" style={{ background: '#eff6ff', color: '#1d4ed8' }}>{h.tag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Local Food */}
        <div className="mt-5">
          <h2 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: 16 }}>Local Food 🍽️</h2>
          <div className="flex flex-wrap gap-2">
            {food.map(f => (
              <span key={f} className="rounded-full px-3 py-1.5 text-sm font-medium" style={{ background: '#fef3e2', color: '#c2410c' }}>{f}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed bottom CTAs */}
      <div className="fixed z-10 bottom-0 left-0 right-0 px-5 pb-6 pt-4" style={{ background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderTop: '1px solid #e8f0fe' }}>
        <button
          onClick={() => navigate('planner')}
          className="w-full py-3.5 rounded-2xl text-white font-bold text-base mb-2.5 active:scale-[0.98] transition-transform flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg,#2563eb,#0ea5e9)', fontFamily: 'var(--font-display)', boxShadow: '0 4px 16px rgba(37,99,235,0.35)' }}
        >
          Plan a Trip Here {ICONS.plane}
        </button>
        <button
          onClick={() => setSaved(s => !s)}
          className="w-full py-3.5 rounded-2xl font-bold text-base active:scale-[0.98] transition-transform"
          style={{ border: '2px solid #2563eb', color: '#2563eb', background: 'white', fontFamily: 'var(--font-display)' }}
        >
          {saved ? <span className="flex items-center justify-center">{ICONS.heartFilled} Saved!</span> : <span className="flex items-center justify-center">{ICONS.heartOutline} Save Destination</span>}
        </button>
      </div>
    </div>
  );
}

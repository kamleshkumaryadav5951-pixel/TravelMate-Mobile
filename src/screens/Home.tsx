import { useState } from 'react';
import type { ScreenProps } from '../types';

const IMG = (id: string, w = 400, h = 300) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&auto=format`;

const featuredDestinations = [
  { id: '1', name: 'Taj Mahal', location: 'Agra, UP', img: IMG('1564507592333-c60657eea523', 320, 240), rating: 4.9, tag: 'Heritage', tagColor: '#7c3aed' },
  { id: '2', name: 'Kerala Backwaters', location: 'Alleppey, KL', img: IMG('1506461883276-594a12b11cf3', 320, 240), rating: 4.7, tag: 'Nature', tagColor: '#059669' },
  { id: '3', name: 'Ladakh', location: 'Leh, J&K', img: IMG('1621114410742-f886ab91e6f4', 320, 240), rating: 4.8, tag: 'Adventure', tagColor: '#f97316' },
  { id: '4', name: 'Goa Beaches', location: 'Panaji, Goa', img: IMG('1609169038317-1af7b0038c76', 320, 240), rating: 4.6, tag: 'Beach', tagColor: '#0ea5e9' },
  { id: '5', name: 'Jaipur', location: 'Rajasthan', img: IMG('1695395550316-8995ae9d35ff', 320, 240), rating: 4.7, tag: 'Culture', tagColor: '#dc2626' },
  { id: '6', name: 'Manali', location: 'Himachal Pradesh', img: IMG('1606667544139-81e47935d769', 320, 240), rating: 4.8, tag: 'Mountains', tagColor: '#2563eb' },
];

const quickActions = [
  { label: 'AI Planner', sub: 'Generate itinerary', screen: 'planner' as const, gradient: 'linear-gradient(135deg,#2563eb,#0ea5e9)',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5Z"/><path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75Z"/></svg> },
  { label: 'Explore', sub: 'Find destinations', screen: 'explore' as const, gradient: 'linear-gradient(135deg,#7c3aed,#a855f7)',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265Z"/></svg> },
  { label: 'Price AI', sub: 'Estimate your trip', screen: 'price' as const, gradient: 'linear-gradient(135deg,#059669,#10b981)',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg> },
  { label: 'My Trips', sub: 'Saved & ongoing', screen: 'trips' as const, gradient: 'linear-gradient(135deg,#f97316,#fb923c)',
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg> },
];

export default function Home({ navigate }: ScreenProps) {
  const [saved, setSaved] = useState<Set<string>>(new Set());

  return (
    <div className="absolute inset-0 overflow-y-auto pb-32" style={{ background: '#f8faf8' }}>
      {/* Header with gradient */}
      <div style={{
        background: 'linear-gradient(160deg, #183d2b 0%, #255c40 50%, #367c52 100%)',
        paddingBottom: 28,
        paddingTop: 8,
      }}>
        {/* Top row */}
        <div className="flex items-center justify-between px-5 pt-2 pb-4">
          <button onClick={() => navigate('profile')} className="flex items-center gap-3 text-left group active:scale-95 transition-all">
            <div className="rounded-full overflow-hidden transition-all group-hover:border-white" style={{ width: 42, height: 42, border: '2px solid rgba(255,255,255,0.4)' }}>
              <img src="/avatar.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="text-white/70 text-xs">Good morning ☀️</p>
              <p className="text-white font-bold text-base" style={{ fontFamily: 'var(--font-display)', lineHeight: 1.2 }}>Kamlesh Yadav</p>
            </div>
          </button>
          <button className="relative rounded-full flex items-center justify-center active:scale-95 transition-all hover:bg-white/20" style={{
            width: 42, height: 42,
            background: 'rgba(255,255,255,0.18)',
            border: '1px solid rgba(255,255,255,0.3)'
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
            </svg>
            <span className="absolute top-1 right-1 rounded-full" style={{ width: 8, height: 8, background: '#f59e0b', border: '1.5px solid #255c40' }} />
          </button>
        </div>

        {/* Search bar */}
        <button onClick={() => navigate('explore')} className="mx-5 w-[calc(100%-40px)] text-left active:scale-[0.98] transition-all hover:bg-white/20" style={{
          background: 'rgba(255,255,255,0.18)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.3)',
          borderRadius: 16,
          padding: '12px 16px',
          display: 'flex',
          alignItems: 'center',
          gap: 10
        }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2.5" strokeLinecap="round">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
          </svg>
          <span className="text-white/70 text-sm font-medium flex-1" style={{ fontFamily: 'var(--font-display)' }}>Where do you want to go?</span>
          <div className="rounded-xl flex items-center justify-center transition-all" style={{
            width: 32, height: 32, background: 'rgba(255,255,255,0.2)'
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="6" x2="20" y2="6"/><line x1="8" y1="12" x2="20" y2="12"/><line x1="12" y1="18" x2="20" y2="18"/>
            </svg>
          </div>
        </button>
      </div>

      <div style={{ marginTop: -12 }}>
        {/* Featured Places Cards */}
        <section className="mt-6">
          <div className="flex justify-between items-center px-5 mb-3">
            <h2 className="font-bold text-gray-900" style={{ fontFamily: 'var(--font-display)', fontSize: 17 }}>Featured Places</h2>
            <button onClick={() => navigate('explore')} className="text-sm font-semibold" style={{ color: '#37784d' }}>See all</button>
          </div>
          <div className="flex gap-3 px-5 overflow-x-auto pb-2">
            {featuredDestinations.map(d => (
              <button
                key={d.id}
                onClick={() => navigate('destination', { dest: d })}
                className="flex-shrink-0 rounded-2xl overflow-hidden relative"
                style={{ width: 155, height: 210, boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}
              >
                <img src={d.img} alt={d.name} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)' }} />
                {/* Save button */}
                <button
                  className="absolute top-2.5 right-2.5 rounded-full flex items-center justify-center"
                  onClick={e => { e.stopPropagation(); setSaved(s => { const n = new Set(s); n.has(d.id) ? n.delete(d.id) : n.add(d.id); return n; }); }}
                  style={{ width: 30, height: 30, background: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill={saved.has(d.id) ? '#ef4444' : 'none'} stroke={saved.has(d.id) ? '#ef4444' : 'white'} strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                {/* Tag */}
                <div className="absolute top-2.5 left-2.5 rounded-full px-2 py-0.5 text-white font-semibold" style={{ fontSize: 10, background: d.tagColor }}>
                  {d.tag}
                </div>
                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                  <p className="text-white font-bold text-sm leading-tight" style={{ fontFamily: 'var(--font-display)' }}>{d.name}</p>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-1">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/>
                      </svg>
                      <span className="text-white/80 text-xs">{d.location}</span>
                    </div>
                    <div className="flex items-center gap-0.5">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      <span className="text-white text-xs font-semibold">{d.rating}</span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Quick Actions */}
        <section className="px-5 mt-6">
          <h2 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: 17 }}>Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            {quickActions.map(a => (
              <button
                key={a.label}
                onClick={() => navigate(a.screen)}
                className="rounded-2xl p-4 text-left flex items-center gap-3 transition-transform active:scale-95"
                style={{ background: a.gradient, boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
              >
                <div className="rounded-xl flex items-center justify-center flex-shrink-0" style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.2)' }}>
                  {a.icon}
                </div>
                <div>
                  <p className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-display)' }}>{a.label}</p>
                  <p className="text-white/70 text-xs mt-0.5">{a.sub}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Price Predictor Banner */}
        <section className="px-5 mt-6">
          <button
            onClick={() => navigate('price')}
            className="w-full rounded-3xl p-4 flex items-center gap-4 text-left transition-transform active:scale-[0.98]"
            style={{ background: 'linear-gradient(135deg,#059669 0%,#0ea5e9 100%)', boxShadow: '0 6px 24px rgba(5,150,105,0.25)' }}
          >
            <div className="rounded-2xl flex items-center justify-center flex-shrink-0" style={{ width: 52, height: 52, background: 'rgba(255,255,255,0.2)' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 mb-1" style={{ background: 'rgba(255,255,255,0.25)', fontSize: 10 }}>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="white"><path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5Z"/></svg>
                <span className="text-white font-semibold">AI POWERED</span>
              </div>
              <p className="text-white font-bold text-sm" style={{ fontFamily: 'var(--font-display)' }}>Price Predictor</p>
              <p className="text-white/70 text-xs mt-0.5">Know your trip cost before you book</p>
            </div>
            <div className="rounded-xl px-3 py-1.5 flex-shrink-0" style={{ background: 'rgba(255,255,255,0.2)' }}>
              <span className="text-white text-xs font-bold">Try →</span>
            </div>
          </button>
        </section>

        {/* Upcoming Trip */}
        <section className="px-5 mt-6 mb-4">
          <h2 className="font-bold text-gray-900 mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: 17 }}>Upcoming Trip</h2>
          <button onClick={() => navigate('tracker')} className="w-full text-left rounded-3xl overflow-hidden relative transition-transform active:scale-[0.98]" style={{ height: 175, boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}>
            <img
              src="https://images.unsplash.com/photo-1606667544139-81e47935d769?w=800&h=400&fit=crop&auto=format"
              alt="Manali"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.35) 100%)' }} />
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-white font-semibold" style={{ fontSize: 11, background: '#10b981' }}>
                  <span className="rounded-full" style={{ width: 6, height: 6, background: 'white', display: 'inline-block' }} />
                  UPCOMING
                </div>
                <h3 className="text-white font-bold text-lg mt-1.5" style={{ fontFamily: 'var(--font-display)' }}>Manali Adventure</h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="2" strokeLinecap="round">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span className="text-white/80 text-xs">Jul 15 – Jul 20 · 5 Days</span>
                </div>
              </div>
              <div className="flex items-end justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between text-white/70 text-xs mb-1">
                    <span>Trip Progress</span><span>40%</span>
                  </div>
                  <div className="rounded-full overflow-hidden" style={{ height: 4, background: 'rgba(255,255,255,0.2)' }}>
                    <div className="h-full rounded-full" style={{ width: '40%', background: 'linear-gradient(90deg,#10b981,#34d399)' }} />
                  </div>
                </div>
                <div
                  className="rounded-xl px-3.5 py-2 text-xs font-bold flex-shrink-0 whitespace-nowrap shadow-sm group-hover:scale-105 transition-transform"
                  style={{ background: 'rgba(255,255,255,0.95)', color: '#183d2b', fontFamily: 'var(--font-display)' }}
                >
                  View Trip
                </div>
              </div>
            </div>
          </button>
        </section>
      </div>
    </div>
  );
}

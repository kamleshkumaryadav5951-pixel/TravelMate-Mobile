import { useState } from 'react';
import type { ScreenProps } from '../types';

const IMG = (id: string) => `https://images.unsplash.com/photo-${id}?w=600&h=400&fit=crop&auto=format`;

const categories = ['All', 'Popular', 'Hidden Gems', 'Nature', 'Adventure', 'Culture', 'Beaches', 'Mountains'];

const destinations = [
  { id: '1', name: 'Taj Mahal', location: 'Agra, Uttar Pradesh', img: IMG('1564507592333-c60657eea523'), rating: 4.9, cat: 'Popular', tag: 'Heritage', tagColor: '#b45309', desc: 'A UNESCO World Heritage Site and one of the seven wonders of the world.', cost: '₹3,000/day', best: 'Oct – Mar' },
  { id: '2', name: 'Kerala Backwaters', location: 'Alleppey, Kerala', img: IMG('1506461883276-594a12b11cf3'), rating: 4.7, cat: 'Nature', tag: 'Nature', tagColor: '#059669', desc: 'Serene network of canals, lagoons and lakes fringed with lush palms.', cost: '₹4,500/day', best: 'Nov – Feb' },
  { id: '3', name: 'Ladakh', location: 'Leh, Jammu & Kashmir', img: IMG('1621114410742-f886ab91e6f4'), rating: 4.8, cat: 'Adventure', tag: 'Adventure', tagColor: '#f97316', desc: 'High-altitude desert landscape with ancient monasteries and clear skies.', cost: '₹5,000/day', best: 'Jun – Sep' },
  { id: '4', name: 'Goa Beaches', location: 'Panaji, Goa', img: IMG('1609169038317-1af7b0038c76'), rating: 4.6, cat: 'Beaches', tag: 'Beach', tagColor: '#0ea5e9', desc: 'Golden sandy beaches, vibrant nightlife, and Portuguese-influenced architecture.', cost: '₹3,500/day', best: 'Nov – Feb' },
  { id: '5', name: 'Jaipur', location: 'Rajasthan', img: IMG('1695395550316-8995ae9d35ff'), rating: 4.7, cat: 'Culture', tag: 'Culture', tagColor: '#dc2626', desc: 'The Pink City, home to magnificent forts, palaces, and vibrant bazaars.', cost: '₹3,000/day', best: 'Oct – Mar' },
  { id: '6', name: 'Manali', location: 'Himachal Pradesh', img: IMG('1606667544139-81e47935d769'), rating: 4.8, cat: 'Mountains', tag: 'Mountains', tagColor: '#0f766e', desc: 'A gateway to adventure in the Himalayas with snow-capped peaks and apple orchards.', cost: '₹4,000/day', best: 'Oct – Jun' },
  { id: '7', name: 'Hampi', location: 'Karnataka', img: IMG('1566323124620-d22adb71d2a2'), rating: 4.6, cat: 'Hidden Gems', tag: 'Hidden Gem', tagColor: '#d97706', desc: 'Ruins of the Vijayanagara Empire amid surreal boulder-strewn landscapes.', cost: '₹2,500/day', best: 'Oct – Feb' },
];

export default function Explore({ navigate }: ScreenProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set());

  const filtered = activeCategory === 'All' ? destinations : destinations.filter(d => d.cat === activeCategory);

  return (
    <div className="absolute inset-0 overflow-y-auto pb-[110px]" style={{ background: '#f8faff' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(160deg,#37784d,#40916c)', paddingBottom: 24, paddingTop: 8 }}>
        <div className="flex items-center justify-between px-5 pt-2 pb-4">
          <div>
            <p className="text-white/70 text-xs">Discover</p>
            <h1 className="text-white font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>Explore the World</h1>
          </div>
          <button className="rounded-full flex items-center justify-center active:scale-95 transition-all hover:bg-white/30" style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.3)' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
        </div>
        {/* Category chips */}
        <div className="flex gap-2 px-5 overflow-x-auto pb-1 hide-scrollbar">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="rounded-full px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap flex-shrink-0 transition-all active:scale-95"
              style={{
                background: activeCategory === cat ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.18)',
                color: activeCategory === cat ? '#37784d' : 'rgba(255,255,255,0.85)',
                border: activeCategory === cat ? 'none' : '1px solid rgba(255,255,255,0.25)',
                fontFamily: 'var(--font-display)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div style={{ marginTop: -10 }}>
        <div className="px-5 pt-3 pb-4">
          <p className="text-gray-500 text-xs font-medium">{filtered.length} destinations found</p>
        </div>

        <div className="px-5 space-y-4 pb-24">
          {filtered.map((d, idx) => (
            <button
              key={d.id}
              onClick={() => navigate('destination', { dest: d })}
              className="w-full rounded-3xl overflow-hidden text-left active:scale-[0.98] transition-transform block"
              style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)', animationDelay: `${idx * 0.06}s` }}
            >
              <div className="relative" style={{ height: 200 }}>
                <img src={d.img} alt={d.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)' }} />
                <div className="absolute top-3 left-3 rounded-full px-2.5 py-1 text-white font-semibold" style={{ fontSize: 11, background: d.tagColor }}>
                  {d.tag}
                </div>
                <button
                  className="absolute top-3 right-3 rounded-full flex items-center justify-center"
                  onClick={e => { e.stopPropagation(); setSavedIds(s => { const n = new Set(s); n.has(d.id) ? n.delete(d.id) : n.add(d.id); return n; }); }}
                  style={{ width: 34, height: 34, background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill={savedIds.has(d.id) ? '#ef4444' : 'none'} stroke={savedIds.has(d.id) ? '#ef4444' : 'white'} strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                {/* Bottom overlay info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-display)', lineHeight: 1.1 }}>{d.name}</h3>
                      <div className="flex items-center gap-1 mt-0.5">
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2" strokeLinecap="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span className="text-white/75 text-xs">{d.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 rounded-xl px-2.5 py-1" style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="#fbbf24" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                      <span className="text-white text-sm font-bold">{d.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card bottom */}
              <div className="bg-white px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div>
                    <p className="text-gray-500 text-xs">Best time</p>
                    <p className="text-gray-900 text-sm font-semibold">{d.best}</p>
                  </div>
                  <div className="w-px h-8" style={{ background: '#e2e8f0' }} />
                  <div>
                    <p className="text-gray-500 text-xs">Est. cost</p>
                    <p className="text-gray-900 text-sm font-semibold">{d.cost}</p>
                  </div>
                </div>
                <div className="rounded-xl px-3 py-1.5" style={{ background: '#ecfdf5' }}>
                  <span className="text-xs font-bold" style={{ color: '#059669', fontFamily: 'var(--font-display)' }}>Explore →</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

import { useState } from 'react';
import type { ScreenProps } from '../types';

const IMG = (id: string) => `https://images.unsplash.com/photo-${id}?w=400&h=250&fit=crop&auto=format`;

const trips = [
  {
    id: '1', destination: 'Manali Adventure', location: 'Himachal Pradesh',
    img: IMG('1606667544139-81e47935d769'),
    start: 'Jul 15', end: 'Jul 20', days: 5,
    progress: 40, budget: '₹15,000', spent: '₹7,800',
    status: 'upcoming' as const, tag: 'Mountains'
  },
  {
    id: '2', destination: 'Goa Beach Escape', location: 'Goa',
    img: IMG('1609169038317-1af7b0038c76'),
    start: 'Jun 1', end: 'Jun 5', days: 4,
    progress: 100, budget: '₹12,000', spent: '₹11,200',
    status: 'completed' as const, tag: 'Beach'
  },
  {
    id: '3', destination: 'Kerala Backwaters', location: 'Kerala',
    img: IMG('1506461883276-594a12b11cf3'),
    start: 'Aug 10', end: 'Aug 15', days: 5,
    progress: 0, budget: '₹18,000', spent: '₹0',
    status: 'upcoming' as const, tag: 'Nature'
  },
  {
    id: '4', destination: 'Jaipur Heritage', location: 'Rajasthan',
    img: IMG('1695395550316-8995ae9d35ff'),
    start: 'May 5', end: 'May 8', days: 3,
    progress: 100, budget: '₹9,000', spent: '₹8,400',
    status: 'completed' as const, tag: 'Culture'
  },
  {
    id: '5', destination: 'Ladakh Expedition', location: 'Leh, J&K',
    img: IMG('1621114410742-f886ab91e6f4'),
    start: 'Sep 2', end: 'Sep 10', days: 8,
    progress: 0, budget: '₹25,000', spent: '₹0',
    status: 'upcoming' as const, tag: 'Adventure'
  },
];

const tabs = ['Upcoming', 'Ongoing', 'Completed'];

const tagColors: Record<string, string> = {
  Mountains: '#2563eb', Beach: '#0ea5e9', Nature: '#059669',
  Culture: '#dc2626', Adventure: '#37784d',
};

export default function MyTrips({ navigate }: ScreenProps) {
  const [activeTab, setActiveTab] = useState('Upcoming');

  const filtered = trips.filter(t => {
    if (activeTab === 'Upcoming') return t.status === 'upcoming';
    if (activeTab === 'Ongoing') return (t.status as string) === 'ongoing';
    if (activeTab === 'Completed') return t.status === 'completed';
    return true;
  });

  return (
    <div className="absolute inset-0 overflow-y-auto pb-[110px]" style={{ background: '#f8faff' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(160deg,#37784d,#40916c)', paddingBottom: 20, paddingTop: 8 }}>
        <div className="flex items-center justify-between px-5 pt-2 pb-3">
          <div>
            <p className="text-white/70 text-xs">Your journeys</p>
            <h1 className="text-white font-bold text-xl" style={{ fontFamily: 'var(--font-display)' }}>My Trips</h1>
          </div>
          <button
            onClick={() => navigate('planner')}
            className="flex items-center gap-1.5 rounded-full px-3.5 py-2 active:scale-95 transition-transform"
            style={{ background: 'rgba(255,255,255,0.2)', border: '1px solid rgba(255,255,255,0.3)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            <span className="text-white text-xs font-semibold" style={{ fontFamily: 'var(--font-display)' }}>New Trip</span>
          </button>
        </div>

        {/* Stats */}
        <div className="flex gap-3 px-5">
          {[['5', 'Total Trips'], ['2', 'Countries'], ['3', 'Upcoming']].map(([val, label]) => (
            <div key={label} className="flex-1 rounded-2xl p-3 text-center" style={{ background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.25)' }}>
              <p className="text-white font-bold text-lg" style={{ fontFamily: 'var(--font-display)' }}>{val}</p>
              <p className="text-white/70 text-xs mt-0.5">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex bg-white" style={{ borderBottom: '1px solid #e8f0fe' }}>
        {tabs.map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className="flex-1 py-3.5 text-sm font-semibold transition-all"
            style={{
              fontFamily: 'var(--font-display)',
              color: activeTab === tab ? '#37784d' : '#94a3b8',
              borderBottom: activeTab === tab ? '2.5px solid #37784d' : '2.5px solid transparent'
            }}>
            {tab}
          </button>
        ))}
      </div>

      {/* Trip cards */}
      <div className="px-5 py-4 space-y-4 pb-24">
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-5xl mb-4">🗺️</div>
            <h3 className="font-bold text-gray-900 text-base mb-2" style={{ fontFamily: 'var(--font-display)' }}>No {activeTab} trips</h3>
            <p className="text-gray-500 text-sm mb-5">Start planning your next adventure!</p>
            <button onClick={() => navigate('planner')}
              className="rounded-2xl px-6 py-3 text-white font-bold text-sm active:scale-95 transition-transform"
              style={{ background: 'linear-gradient(135deg,#37784d,#40916c)', fontFamily: 'var(--font-display)' }}>
              Plan a Trip
            </button>
          </div>
        ) : (
          filtered.map(trip => (
            <div key={trip.id} className="rounded-3xl overflow-hidden bg-white" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
              {/* Image */}
              <div className="relative" style={{ height: 140 }}>
                <img src={trip.img} alt={trip.destination} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)' }} />
                <div className="absolute top-3 left-3 rounded-full px-2.5 py-1 text-white font-semibold" style={{ fontSize: 11, background: tagColors[trip.tag] || '#2563eb' }}>
                  {trip.tag}
                </div>
                {trip.status === 'completed' && (
                  <div className="absolute top-3 right-3 rounded-full px-2.5 py-1 font-semibold flex items-center gap-1" style={{ fontSize: 11, background: 'rgba(16,185,129,0.9)', color: 'white' }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                    Completed
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <h3 className="text-white font-bold text-base" style={{ fontFamily: 'var(--font-display)' }}>{trip.destination}</h3>
                  <p className="text-white/70 text-xs">{trip.location}</p>
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round">
                      <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    <span className="text-gray-600 text-xs font-medium">{trip.start} – {trip.end}</span>
                  </div>
                  <span className="text-gray-400">·</span>
                  <span className="text-gray-600 text-xs font-medium">{trip.days} days</span>
                </div>

                {/* Budget progress */}
                <div className="mb-3">
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="text-gray-500 font-medium">Budget: <span className="text-gray-900 font-semibold">{trip.budget}</span></span>
                    <span className="font-semibold" style={{ color: trip.status === 'completed' ? '#10b981' : '#37784d' }}>Spent: {trip.spent}</span>
                  </div>
                  <div className="rounded-full overflow-hidden" style={{ height: 5, background: '#f1f5f9' }}>
                    <div className="h-full rounded-full transition-all" style={{
                      width: `${trip.progress}%`,
                      background: trip.status === 'completed'
                        ? 'linear-gradient(90deg,#10b981,#34d399)'
                        : 'linear-gradient(90deg,#37784d,#40916c)'
                    }} />
                  </div>
                </div>

                <button
                  onClick={() => navigate(trip.status === 'upcoming' ? 'tracker' : 'itinerary')}
                  className="w-full py-2.5 rounded-xl text-sm font-bold transition-all active:scale-[0.98]"
                  style={{
                    fontFamily: 'var(--font-display)',
                    background: trip.status === 'completed' ? '#f0fdf4' : 'linear-gradient(135deg,#37784d,#40916c)',
                    color: trip.status === 'completed' ? '#166534' : 'white',
                    boxShadow: trip.status === 'completed' ? 'none' : '0 3px 12px rgba(249,115,22,0.3)'
                  }}>
                  {trip.status === 'completed' ? '📋 View Itinerary' : '▶ Continue Trip'}
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

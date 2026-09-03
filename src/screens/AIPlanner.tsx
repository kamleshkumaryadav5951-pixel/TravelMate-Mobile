import { ICONS } from '../icons';
import { useState, useEffect } from 'react';
import type { ScreenProps } from '../types';




const interests = [
  { label: 'Food', icon: ICONS.food },
  { label: 'Adventure', icon: ICONS.adventure },
  { label: 'Hiking', icon: ICONS.hiking },
  { label: 'Nature', icon: ICONS.nature },
  { label: 'Culture', icon: ICONS.culture },
  { label: 'Shopping', icon: ICONS.shopping },
  { label: 'Photography', icon: ICONS.photography },
  { label: 'Nightlife', icon: ICONS.nightlife },
  { label: 'Historical', icon: ICONS.historical }
];
const travelTypes = [
  { label: 'Solo', icon: ICONS.solo, desc: 'Explore independently' },
  { label: 'Couple', icon: ICONS.couple, desc: 'Romantic getaway' },
  { label: 'Family', icon: ICONS.family, desc: 'Fun for everyone' },
  { label: 'Friends', icon: ICONS.friends, desc: 'Group adventure' },
];
const budgetOptions = [
  { label: 'Budget', icon: ICONS.budget, desc: 'Under ₹5,000/day', color: '#059669' },
  { label: 'Moderate', icon: ICONS.moderate, desc: '₹5,000–₹12,000/day', color: '#2563eb' },
  { label: 'Premium', icon: ICONS.premium, desc: '₹12,000+/day', color: '#7c3aed' },
];

const destinationChips = [
  {
    name: 'Manali',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M10 4L2 19H18L10 4Z" fill="#3b82f6" />
        <path d="M10 4L6.5 10.5L10 12L13.5 10.5L10 4Z" fill="#dbeafe" />
        <path d="M16 11L12.5 19H21L16 11Z" fill="#1d4ed8" />
        <path d="M16 11L14.5 14L16 15L17.5 14L16 11Z" fill="#bfdbfe" />
      </svg>
    ),
  },
  {
    name: 'Goa',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 21C11.5 16 12 13 12 9" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 9C9 9 5 7 4 3C7 3 10 6 12 9Z" fill="#10b981" />
        <path d="M12 9C15 9 19 7 20 3C17 3 14 6 12 9Z" fill="#10b981" />
        <path d="M12 9C10 6 9.5 2.5 12 1.5C14.5 2.5 14 6 12 9Z" fill="#059669" />
        <path d="M12 9C8.5 11 5.5 14 5 17C7 15 10 13 12 9Z" fill="#10b981" />
        <path d="M12 9C15.5 11 18.5 14 19 17C17 15 14 13 12 9Z" fill="#10b981" />
        <path d="M8 21H16" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Jaipur',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M4 21V11C4 9.5 5.5 9 6.5 9C7.5 9 9 9.5 9 11V21" fill="#fda4af" stroke="#f43f5e" strokeWidth="1.5" />
        <path d="M15 21V11C15 9.5 16.5 9 17.5 9C18.5 9 20 9.5 20 11V21" fill="#fda4af" stroke="#f43f5e" strokeWidth="1.5" />
        <path d="M8 21V8C8 5.5 10.5 4 12 4C13.5 4 16 5.5 16 8V21" fill="#fecdd3" stroke="#f43f5e" strokeWidth="1.5" />
        <path d="M12 4V1.5" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.5 13C10.5 11.5 13.5 11.5 13.5 13V21H10.5V13Z" fill="#f43f5e" />
        <circle cx="6.5" cy="13" r="1" fill="#f43f5e" />
        <circle cx="17.5" cy="13" r="1" fill="#f43f5e" />
      </svg>
    ),
  },
  {
    name: 'Kerala',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 21C11.5 16 12 13 12 9" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M12 9C9 9 5 7 4 3C7 3 10 6 12 9Z" fill="#10b981" />
        <path d="M12 9C15 9 19 7 20 3C17 3 14 6 12 9Z" fill="#10b981" />
        <path d="M12 9C10 6 9.5 2.5 12 1.5C14.5 2.5 14 6 12 9Z" fill="#059669" />
        <path d="M12 9C8.5 11 5.5 14 5 17C7 15 10 13 12 9Z" fill="#10b981" />
        <path d="M12 9C15.5 11 18.5 14 19 17C17 15 14 13 12 9Z" fill="#10b981" />
        <path d="M8 21H16" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: 'Ladakh',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M10 4L2 19H18L10 4Z" fill="#8b5cf6" />
        <path d="M10 4L6.5 10.5L10 12L13.5 10.5L10 4Z" fill="#ede9fe" />
        <path d="M16 11L12.5 19H21L16 11Z" fill="#6d28d9" />
        <path d="M16 11L14.5 14L16 15L17.5 14L16 11Z" fill="#ddd6fe" />
      </svg>
    ),
  },
  {
    name: 'Taj Mahal',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M12 2.5C9.5 4.5 9 7.5 9 9.5H15C15 7.5 14.5 4.5 12 2.5Z" fill="#93c5fd" stroke="#2563eb" strokeWidth="1.2" />
        <path d="M12 2.5V1" stroke="#2563eb" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M6 9.5H18V21H6V9.5Z" fill="#dbeafe" stroke="#2563eb" strokeWidth="1.2" />
        <path d="M9.5 21V14.5C9.5 13.2 14.5 13.2 14.5 14.5V21" fill="#2563eb" />
        <path d="M3 7V21M21 7V21" stroke="#2563eb" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M2 7L3 5L4 7H2ZM20 7L21 5L22 7H20Z" fill="#2563eb" />
      </svg>
    ),
  },
];

const processingSteps = [
  { text: 'Analyzing destination...', icon: ICONS.search },
  { text: 'Finding top attractions...', icon: ICONS.pin },
  { text: 'Optimizing your route...', icon: ICONS.map },
  { text: 'Calculating estimated costs...', icon: ICONS.budget },
  { text: 'Creating your itinerary...', icon: ICONS.sparkles },
];

export default function AIPlanner({ navigate, params }: ScreenProps) {
  const [step, setStep] = useState(params?.step === 'processing' ? 7 : 1);
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [budget, setBudget] = useState('');
  const [travelType, setTravelType] = useState('');
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [processingStep, setProcessingStep] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (step !== 7) return;
    setDone(false);
    setProcessingStep(0);
    const interval = setInterval(() => {
      setProcessingStep(p => {
        if (p >= processingSteps.length - 1) {
          clearInterval(interval);
          setTimeout(() => setDone(true), 600);
          return processingSteps.length - 1;
        }
        return p + 1;
      });
    }, 900);
    return () => clearInterval(interval);
  }, [step]);

  useEffect(() => {
    if (done) {
      const t = setTimeout(() => navigate('itinerary'), 500);
      return () => clearTimeout(t);
    }
  }, [done, navigate]);

  const toggleInterest = (i: string) => {
    setSelectedInterests(prev => prev.includes(i) ? prev.filter(x => x !== i) : [...prev, i]);
  };

  const totalSteps = 6;
  const progress = ((step - 1) / totalSteps) * 100;

  if (step === 7) {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #1d4ed8 0%, #2563eb 50%, #7c3aed 100%)' }}>
        <div className="absolute rounded-full opacity-20" style={{ width: 280, height: 280, top: -80, right: -80, background: 'radial-gradient(circle, #93c5fd, transparent)', animation: 'pulse-ring 3s ease-in-out infinite' }} />
        <div className="absolute rounded-full opacity-15" style={{ width: 200, height: 200, bottom: -40, left: -40, background: 'radial-gradient(circle, #c4b5fd, transparent)', animation: 'pulse-ring 4s ease-in-out infinite 1s' }} />

        <div className="relative mb-8">
          <div className="rounded-full flex items-center justify-center active:scale-90 transition-transform" style={{
            width: 100, height: 100,
            background: 'rgba(255,255,255,0.18)',
            border: '3px solid rgba(255,255,255,0.4)',
            boxShadow: '0 0 60px rgba(255,255,255,0.2)'
          }}>
            {done ? (
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
                <path d="M10 22 L18 30 L34 14" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="20" strokeDashoffset={done ? 0 : 20} style={{ transition: 'stroke-dashoffset 0.4s ease' }} />
              </svg>
            ) : (
              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" style={{ animation: 'spin-slow 1.5s linear infinite' }}>
                <circle cx="22" cy="22" r="18" stroke="rgba(255,255,255,0.2)" strokeWidth="3"/>
                <path d="M22 4 A18 18 0 0 1 40 22" stroke="white" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            )}
          </div>
        </div>

        <h2 className="text-white font-bold text-xl mb-2 text-center" style={{ fontFamily: 'var(--font-display)' }}>
          {done ? 'Your Trip is Ready! 🎉' : 'Creating Your Perfect Trip'}
        </h2>
        <p className="text-white/60 text-sm mb-10 text-center px-8">
          {done ? 'Your personalized itinerary has been generated' : 'AI is personalizing your experience...'}
        </p>

        <div className="w-72 space-y-3">
          {processingSteps.map((s, i) => {
            const isDone = i < processingStep || (i === processingStep && done);
            const isActive = i === processingStep && !done;
            return (
              <div key={i} className="flex items-center gap-3 rounded-2xl px-4 py-3 transition-all" style={{
                background: isDone ? 'rgba(255,255,255,0.18)' : isActive ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.05)',
                border: isActive ? '1px solid rgba(255,255,255,0.4)' : '1px solid rgba(255,255,255,0.08)',
                transform: isActive ? 'scale(1.02)' : 'scale(1)',
              }}>
                <span className="text-lg text-white" style={{ opacity: isDone || isActive ? 1 : 0.45 }}>{s.icon}</span>
                <p className="text-white text-sm font-medium flex-1" style={{ opacity: isDone || isActive ? 1 : 0.45 }}>{s.text}</p>
                {isDone && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M20 6L9 17l-5-5"/>
                  </svg>
                )}
                {isActive && (
                  <div className="flex gap-0.5">
                    {[0,1,2].map(j => (
                      <div key={j} className="rounded-full bg-white" style={{ width: 4, height: 4, animation: 'dots 1.2s ease-in-out infinite', animationDelay: `${j*0.2}s` }} />
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden" style={{ background: '#f8faff' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(160deg,#37784d,#40916c)', paddingBottom: 20, paddingTop: 6 }}>
        <div className="flex items-center gap-3 px-5 pt-2 pb-3">
          {step > 1 ? (
            <button onClick={() => setStep(s => s - 1)} className="rounded-full flex items-center justify-center active:scale-90 transition-transform" style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.2)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
          ) : (
            <button onClick={() => navigate('home')} className="rounded-full flex items-center justify-center active:scale-90 transition-transform" style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.2)' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
          )}
          <div className="flex-1">
            <p className="text-white/70 text-xs">Step {step} of {totalSteps}</p>
            <h1 className="text-white font-bold text-base" style={{ fontFamily: 'var(--font-display)' }}>AI Trip Planner </h1>
          </div>
        </div>
        {/* Progress bar */}
        <div className="mx-5 rounded-full overflow-hidden" style={{ height: 4, background: 'rgba(255,255,255,0.2)' }}>
          <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progress}%`, background: 'rgba(255,255,255,0.9)' }} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 pt-6">
        {/* Step 1: Destination */}
        {step === 1 && (
          <div className="anim-slide-up">
            <h2 className="font-bold text-gray-900 text-xl mb-1" style={{ fontFamily: 'var(--font-display)' }}>Where are you going? <span className="inline-block ml-1 text-blue-500">{ICONS.map}</span></h2>
            <p className="text-gray-500 text-sm mb-6">Enter your dream destination</p>
            <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid #e2e8f0', background: 'white', boxShadow: '0 2px 12px rgba(0,0,0,0.06)' }}>
              <div className="flex items-center gap-3 px-4 py-3.5">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z"/><circle cx="12" cy="10" r="3"/>
                </svg>
                <input
                  value={destination}
                  onChange={e => setDestination(e.target.value)}
                  placeholder="e.g. Manali, Himachal Pradesh"
                  className="flex-1 outline-none text-gray-900 text-sm font-medium bg-transparent"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>
            </div>
            {/* Popular destinations */}
            <div className="flex items-center gap-2 mt-7 mb-3.5">
              <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="#3b82f6" strokeWidth="2" fill="#eff6ff" />
                  <polygon points="16.24 7.76 13.5 13.5 7.76 16.24 10.5 10.5 16.24 7.76" fill="#3b82f6" />
                </svg>
              </div>
              <h2 className="font-bold text-gray-900 text-[16.5px] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
                Popular destinations
              </h2>
            </div>
            
            <div className="flex flex-wrap gap-2.5">
              {destinationChips.map(d => (
                <button
                  key={d.name}
                  onClick={() => setDestination(d.name)}
                  className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full transition-all cursor-pointer select-none active:scale-95"
                  style={{
                    background: destination === d.name ? '#eff6ff' : 'white',
                    border: `1px solid ${destination === d.name ? '#3b82f6' : 'rgba(0,0,0,0.06)'}`,
                    boxShadow: destination === d.name ? '0 0 0 1px #3b82f6' : '0 3px 12px rgba(0,0,0,0.03)',
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  <div className="flex items-center justify-center flex-shrink-0">
                    {d.icon}
                  </div>
                  <span className="text-[13.5px] font-semibold tracking-tight" style={{ color: destination === d.name ? '#1d4ed8' : '#1f2937' }}>
                    {d.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Dates */}
        {step === 2 && (
          <div className="anim-slide-up">
            <h2 className="font-bold text-gray-900 text-xl mb-1" style={{ fontFamily: 'var(--font-display)' }}>When are you traveling? <span className="inline-block ml-1 text-orange-500">{ICONS.calendar}</span></h2>
            <p className="text-gray-500 text-sm mb-6">Select your travel dates</p>
            {[['Start Date', startDate, setStartDate], ['End Date', endDate, setEndDate]].map(([label, val, setter]) => (
              <div key={label as string} className="mb-4">
                <p className="text-gray-700 text-sm font-semibold mb-2">{label as string}</p>
                <div className="rounded-2xl overflow-hidden" style={{ border: '2px solid #e2e8f0', background: 'white' }}>
                  <input
                    type="date"
                    value={val as string}
                    onChange={e => (setter as (v: string) => void)(e.target.value)}
                    className="w-full px-4 py-3.5 text-gray-900 text-sm font-medium outline-none bg-transparent"
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>
              </div>
            ))}
            {startDate && endDate && (
              <div className="rounded-2xl p-4 text-center" style={{ background: '#eff6ff', border: '1px solid #bfdbfe' }}>
                <p className="font-bold text-2xl" style={{ color: '#2563eb', fontFamily: 'var(--font-display)' }}>
                  {Math.max(0, Math.ceil((new Date(endDate).getTime() - new Date(startDate).getTime()) / 86400000))} Days
                </p>
                <p className="text-gray-500 text-sm mt-1">of incredible adventure</p>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Budget */}
        {step === 3 && (
          <div className="anim-slide-up">
            <h2 className="font-bold text-gray-900 text-xl mb-1" style={{ fontFamily: 'var(--font-display)' }}>What's your budget? <span className="inline-block ml-1 text-emerald-500">{ICONS.budget}</span></h2>
            <p className="text-gray-500 text-sm mb-6">Choose your spending style</p>
            <div className="space-y-3">
              {budgetOptions.map(b => (
                <button key={b.label} onClick={() => setBudget(b.label)}
                  className="w-full rounded-2xl p-4 flex items-center gap-4 transition-all active:scale-[0.98]"
                  style={{ background: budget === b.label ? b.color : 'white', border: `2px solid ${budget === b.label ? b.color : '#e2e8f0'}`, boxShadow: budget === b.label ? `0 4px 20px ${b.color}35` : 'none' }}>
                  <div className="rounded-xl flex items-center justify-center text-xl" style={{ width: 48, height: 48, background: budget === b.label ? 'rgba(255,255,255,0.2)' : '#f8faff', color: budget === b.label ? 'white' : b.color }}>{b.icon}</div>
                  <div className="text-left">
                    <p className="font-bold text-base" style={{ fontFamily: 'var(--font-display)', color: budget === b.label ? 'white' : '#1e293b' }}>{b.label}</p>
                    <p className="text-sm mt-0.5" style={{ color: budget === b.label ? 'rgba(255,255,255,0.75)' : '#94a3b8' }}>{b.desc}</p>
                  </div>
                  {budget === b.label && (
                    <div className="ml-auto rounded-full flex items-center justify-center" style={{ width: 24, height: 24, background: 'rgba(255,255,255,0.3)' }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 4: Travel Type */}
        {step === 4 && (
          <div className="anim-slide-up">
            <h2 className="font-bold text-gray-900 text-xl mb-1" style={{ fontFamily: 'var(--font-display)' }}>Who's traveling? <span className="inline-block ml-1 text-indigo-500">{ICONS.family}</span></h2>
            <p className="text-gray-500 text-sm mb-6">Select your travel group</p>
            <div className="grid grid-cols-2 gap-3">
              {travelTypes.map(t => (
                <button key={t.label} onClick={() => setTravelType(t.label)}
                  className="rounded-2xl p-4 flex flex-col items-center text-center transition-all active:scale-[0.98]"
                  style={{ background: travelType === t.label ? '#2563eb' : 'white', border: `2px solid ${travelType === t.label ? '#2563eb' : '#e2e8f0'}`, boxShadow: travelType === t.label ? '0 4px 20px rgba(37,99,235,0.3)' : 'none' }}>
                  <span className="text-3xl mb-2">{t.icon}</span>
                  <p className="font-bold text-sm" style={{ fontFamily: 'var(--font-display)', color: travelType === t.label ? 'white' : '#1e293b' }}>{t.label}</p>
                  <p className="text-xs mt-0.5" style={{ color: travelType === t.label ? 'rgba(255,255,255,0.7)' : '#94a3b8' }}>{t.desc}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Interests */}
        {step === 5 && (
          <div className="anim-slide-up">
            <h2 className="font-bold text-gray-900 text-xl mb-1" style={{ fontFamily: 'var(--font-display)' }}>What do you love? <span className="inline-block ml-1 text-rose-500">{ICONS.heart}</span></h2>
            <p className="text-gray-500 text-sm mb-6">Pick all your interests</p>
            <div className="flex flex-wrap gap-2.5">
              {interests.map(i => {
                const active = selectedInterests.includes(i.label);
                return (
                  <button key={i.label} onClick={() => toggleInterest(i.label)}
                    className="inline-flex items-center rounded-full px-3.5 py-2 text-sm font-semibold transition-all active:scale-95"
                    style={{ background: active ? '#2563eb' : 'white', color: active ? 'white' : '#334155', border: `2px solid ${active ? '#2563eb' : '#e2e8f0'}`, boxShadow: active ? '0 2px 10px rgba(37,99,235,0.3)' : 'none' }}>
                    {i.icon} <span className="ml-1.5">{i.label}</span>
                  </button>
                );
              })}
            </div>
            {selectedInterests.length > 0 && (
              <div className="mt-4 rounded-2xl px-4 py-3" style={{ background: '#eff6ff' }}>
                <p className="text-sm font-medium" style={{ color: '#1d4ed8' }}>✓ {selectedInterests.length} interest{selectedInterests.length > 1 ? 's' : ''} selected</p>
              </div>
            )}
          </div>
        )}

        {/* Step 6: Generate */}
        {step === 6 && (
          <div className="anim-slide-up text-center">
            <div className="rounded-3xl mx-auto mb-6 flex items-center justify-center" style={{
              width: 100, height: 100,
              background: 'linear-gradient(135deg,#2563eb,#7c3aed)',
              boxShadow: '0 10px 40px rgba(37,99,235,0.35)'
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <path d="M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5Z"/>
                <path d="M19 14l.75 2.25L22 17l-2.25.75L19 20l-.75-2.25L16 17l2.25-.75Z"/>
                <path d="M3 6l.5 1.5L5 8l-1.5.5L3 10l-.5-1.5L1 8l1.5-.5Z"/>
              </svg>
            </div>
            <h2 className="font-bold text-gray-900 text-2xl mb-2" style={{ fontFamily: 'var(--font-display)' }}>Ready to Generate! <span className="inline-block ml-1 text-yellow-400">{ICONS.sparkles}</span></h2>
            <p className="text-gray-500 text-sm mb-8 px-6">Our AI will craft the perfect itinerary based on your preferences</p>
            <div className="rounded-2xl p-4 text-left space-y-2.5 mb-6" style={{ background: '#f8faff', border: '1px solid #e2e8f0' }}>
              {[[ICONS.pin, 'Destination', destination || 'Manali'], [ICONS.calendar, 'Duration', startDate && endDate ? `${startDate} → ${endDate}` : '5 Days'], [ICONS.budget, 'Budget', budget || 'Moderate'], [ICONS.family, 'Travel', travelType || 'Solo'], [ICONS.heart, 'Interests', selectedInterests.length > 0 ? `${selectedInterests.length} selected` : 'All types']].map(([icon, label, val], idx) => (
                <div key={idx} className="flex items-center gap-3 text-gray-400 [&>span>svg]:w-[18px] [&>span>svg]:h-[18px]">
                  <span className="text-base">{icon}</span>
                  <span className="text-gray-500 text-sm w-20">{label}</span>
                  <span className="text-gray-900 text-sm font-semibold truncate">{val}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="px-5 pb-[110px] pt-3" style={{ background: '#f8faff', borderTop: '1px solid #e2e8f0' }}>
        <button
          onClick={() => step < 6 ? setStep(s => s + 1) : setStep(7)}
          disabled={step === 1 && !destination}
          className="w-full py-4 rounded-2xl text-white font-bold text-base transition-all active:scale-[0.98]"
          style={{
            fontFamily: 'var(--font-display)',
            background: (step === 1 && !destination) ? '#94a3b8' : 'linear-gradient(135deg,#2563eb,#0ea5e9)',
            boxShadow: (step === 1 && !destination) ? 'none' : '0 4px 20px rgba(37,99,235,0.35)'
          }}
        >
          {step === 6 ? '🚀 Generate My Trip' : 'Continue →'}
        </button>
      </div>
    </div>
  );
}

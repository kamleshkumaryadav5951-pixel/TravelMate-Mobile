import { useEffect, useState } from 'react';
import type { ScreenProps } from '../types';

export default function Splash({ navigate }: ScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => navigate('onboarding'), 200);
          return 100;
        }
        return p + 2;
      });
    }, 40);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center overflow-hidden preserve-color"
      style={{ background: 'linear-gradient(160deg, #183d2b 0%, #255c40 50%, #367c52 100%)' }}
    >
      {/* Background orbs */}
      <div className="absolute rounded-full opacity-20" style={{
        width: 300, height: 300, top: -80, right: -80,
        background: 'radial-gradient(circle, #a7f3d0, transparent)',
        animation: 'pulse-ring 4s ease-in-out infinite'
      }} />
      <div className="absolute rounded-full opacity-15" style={{
        width: 250, height: 250, bottom: -60, left: -60,
        background: 'radial-gradient(circle, #6ee7b7, transparent)',
        animation: 'pulse-ring 5s ease-in-out infinite 1s'
      }} />

      {/* Mountain-Plane Logo */}
      <div className="relative mb-6 anim-bounce-in" style={{ animationDelay: '0.2s' }}>
        <div className="rounded-3xl flex items-center justify-center" style={{
          width: 96, height: 96,
          background: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '2px solid rgba(255,255,255,0.3)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
        }}>
          <svg width="60" height="54" viewBox="0 0 76 66" fill="none">
            <path
              d="M34 6C36 3 40 3 42 6L68 44C71 49 67 55 61 55H15C9 55 5 49 8 44L34 6Z"
              fill="#ffffff"
            />
            <path
              d="M48 20L63 42C66 47 62 52 57 52H42L48 20Z"
              fill="#e6f2eb"
            />
            <path
              d="M37 22L40 33L49 35L41 38L42 44L38 41L35 44L36 38L28 36L37 33Z"
              fill="#25573e"
            />
          </svg>
        </div>
        {/* Rotating ring */}
        <div className="absolute rounded-full border-2 border-dashed" style={{
          inset: -10,
          borderColor: 'rgba(255,255,255,0.25)',
          animation: 'spin-slow 12s linear infinite'
        }} />
      </div>

      {/* Logo text */}
      <div className="text-center anim-slide-up" style={{ animationDelay: '0.4s' }}>
        <h1 className="text-white font-bold tracking-tight" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 34,
          letterSpacing: '-0.5px',
          textShadow: '0 2px 20px rgba(0,0,0,0.2)'
        }}>
          TravelMate
        </h1>
        <p className="text-white/70 mt-1.5 font-medium tracking-widest text-xs" style={{ fontFamily: 'var(--font-display)' }}>
          EXPLORE THE WORLD
        </p>
      </div>

      {/* Tagline */}
      <p className="text-white/70 text-xs mt-4 text-center px-10 anim-fade-in" style={{ animationDelay: '0.7s' }}>
        Your AI-powered travel companion for every adventure
      </p>

      {/* Progress bar */}
      <div className="absolute bottom-16 left-10 right-10">
        <div className="rounded-full overflow-hidden" style={{ height: 3, background: 'rgba(255,255,255,0.2)' }}>
          <div
            className="h-full rounded-full transition-all"
            style={{ width: `${progress}%`, background: 'white', transition: 'width 0.04s linear' }}
          />
        </div>
        <div className="flex justify-center mt-4 gap-1.5">
          {[0,1,2].map(i => (
            <div key={i} className="rounded-full" style={{
              width: 6, height: 6,
              background: 'rgba(255,255,255,0.9)',
              animation: `dots 1.4s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`
            }} />
          ))}
        </div>
      </div>
    </div>
  );
}

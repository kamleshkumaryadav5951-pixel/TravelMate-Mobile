import { useState } from 'react';
import type { ScreenProps } from '../types';

export default function Login({ navigate, params }: ScreenProps) {
  const initialTab = params?.tab === 'signup' ? 'signup' : 'signin';
  const [tab, setTab] = useState<'signin' | 'signup'>(initialTab);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = () => {
    navigate('home');
  };

  return (
    <div
      className="absolute inset-0 flex flex-col overflow-y-auto preserve-color"
      style={{ background: 'linear-gradient(160deg, #1e4632 0%, #2d6a4f 50%, #40916c 100%)' }}
    >
      {/* Header */}
      <div className="px-6 pt-8 pb-5 text-center">
        {/* Mountain Airplane Logo */}
        <div className="flex flex-col items-center mb-3">
          <svg width="60" height="52" viewBox="0 0 76 66" fill="none">
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
            <ellipse cx="38" cy="62" rx="14" ry="3.5" fill="#143022" fillOpacity="0.6" />
          </svg>
        </div>
        <h1
          className="text-white font-bold text-2xl mb-1 tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          TravelMate
        </h1>
        <p className="text-white/75 text-xs">Your AI-powered travel companion</p>
      </div>

      {/* Card */}
      <div
        className="mx-4 rounded-3xl overflow-hidden flex-1 mb-6"
        style={{
          background: 'rgba(255,255,255,0.98)',
          boxShadow: '0 24px 80px rgba(0,0,0,0.25)',
        }}
      >
        {/* Tab switcher */}
        <div className="flex border-b border-gray-100 px-6 pt-5">
          {(['signin', 'signup'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="flex-1 pb-3 text-sm font-semibold relative"
              style={{
                fontFamily: 'var(--font-display)',
                color: tab === t ? '#2d6a4f' : '#94a3b8',
              }}
            >
              {t === 'signin' ? 'Sign In' : 'Create Account'}
              {tab === t && (
                <div
                  className="absolute bottom-0 left-0 right-0 rounded-full"
                  style={{ height: 3, background: '#2d6a4f' }}
                />
              )}
            </button>
          ))}
        </div>

        <div className="px-6 py-6 space-y-4">
          {tab === 'signup' && (
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Kamlesh Yadav"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3.5 rounded-xl text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[#37784d]/30"
                style={{
                  background: '#f8fafc',
                  border: '1.5px solid #e2e8f0',
                  fontFamily: 'var(--font-sans)',
                }}
              />
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[#37784d]/30"
              style={{
                background: '#f8fafc',
                border: '1.5px solid #e2e8f0',
                fontFamily: 'var(--font-sans)',
              }}
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl text-sm text-gray-900 outline-none focus:ring-2 focus:ring-[#37784d]/30"
              style={{
                background: '#f8fafc',
                border: '1.5px solid #e2e8f0',
                fontFamily: 'var(--font-sans)',
              }}
            />
          </div>

          {tab === 'signin' && (
            <div className="text-right">
              <button className="text-xs text-[#2d6a4f] font-semibold hover:underline">Forgot password?</button>
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="w-full py-4 rounded-2xl font-bold text-white text-sm mt-2 transition-transform active:scale-[0.98]"
            style={{
              fontFamily: 'var(--font-display)',
              background: '#37784d',
              boxShadow: '0 8px 24px rgba(55, 120, 77, 0.35)',
            }}
          >
            {tab === 'signin' ? 'Sign In' : 'Create Account'}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-100" />
            <span className="text-xs text-gray-400">or continue with</span>
            <div className="flex-1 h-px bg-gray-100" />
          </div>

          {/* Social */}
          <div className="grid grid-cols-2 gap-3">
            {['Google', 'Apple'].map((provider) => (
              <button
                key={provider}
                onClick={handleSubmit}
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-gray-700 active:bg-gray-100 transition-colors"
                style={{
                  fontFamily: 'var(--font-sans)',
                  border: '1.5px solid #e2e8f0',
                  background: '#f8fafc',
                }}
              >
                {provider === 'Google' ? (
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                )}
                {provider}
              </button>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 pb-2">
            By continuing, you agree to our{' '}
            <button className="text-[#2d6a4f] font-medium hover:underline">Terms</button> &{' '}
            <button className="text-[#2d6a4f] font-medium hover:underline">Privacy Policy</button>
          </p>
        </div>
      </div>
    </div>
  );
}

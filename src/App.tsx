import { useState } from 'react';
import type { Screen, Navigate } from './types';

import Splash from './screens/Splash';
import Onboarding from './screens/Onboarding';
import Login from './screens/Login';
import Home from './screens/Home';
import Explore from './screens/Explore';
import DestinationDetail from './screens/DestinationDetail';
import AIPlanner from './screens/AIPlanner';
import Itinerary from './screens/Itinerary';
import PricePredictor from './screens/PricePredictor';
import LiveTracker from './screens/LiveTracker';
import MyTrips from './screens/MyTrips';
import Profile from './screens/Profile';
import Settings from './screens/Settings';
import BottomNav from './components/BottomNav';

const BOTTOM_NAV_SCREENS: Screen[] = ['home', 'explore', 'planner', 'trips', 'profile'];
const DARK_SCREENS: Screen[] = [];
const FULL_SCREENS: Screen[] = ['splash', 'onboarding', 'login'];

export default function App() {
  const [screen, setScreen] = useState<Screen>('onboarding');
  const [params, setParams] = useState<Record<string, unknown>>({});

  const navigate: Navigate = (s, p = {}) => {
    setScreen(s);
    setParams(p);
    document.getElementById('screen-scroll')?.scrollTo(0, 0);
  };

  const showBottomNav = BOTTOM_NAV_SCREENS.includes(screen);
  const isDark = DARK_SCREENS.includes(screen);

  const screenEl = (() => {
    switch (screen) {
      case 'splash': return <Splash navigate={navigate} />;
      case 'onboarding': return <Onboarding navigate={navigate} />;
      case 'home': return <Home navigate={navigate} />;
      case 'explore': return <Explore navigate={navigate} />;
      case 'destination': return <DestinationDetail navigate={navigate} params={params} />;
      case 'planner': return <AIPlanner navigate={navigate} />;
      case 'itinerary': return <Itinerary navigate={navigate} />;
      case 'price': return <PricePredictor navigate={navigate} />;
      case 'tracker': return <LiveTracker navigate={navigate} />;
      case 'trips': return <MyTrips navigate={navigate} />;
      case 'profile': return <Profile navigate={navigate} />;
      case 'login': return <Login navigate={navigate} params={params} />;
      case 'settings': return <Settings navigate={navigate} />;
      default: return <Home navigate={navigate} />;
    }
  })();

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #d3ded6 0%, #e8f0ea 45%, #c9d7cd 100%)', padding: '16px 0' }}
    >
      {/* Phone outer frame */}
      <div
        id="phone-outer-frame" className="relative select-none"
        style={{
          width: 390,
          height: 844,
          background: '#141414',
          borderRadius: 54,
          boxShadow: '0 40px 100px rgba(0,0,0,0.45), 0 0 0 1.5px #333, inset 0 0 0 1.5px #3a3a3a',
          flexShrink: 0,
          overflow: 'hidden',
        }}
      >
        {/* Phone screen inset */}
        <div
          id="phone-screen-inner"
          className="absolute"
          style={{
            inset: 9,
            borderRadius: 46,
            overflow: 'hidden',
            background: isDark ? '#060f1e' : '#ffffff',
            transform: 'translateZ(0)',
          }}
        >
          {/* Dynamic Island */}
          <div
            className="absolute z-50"
            style={{
              top: 12,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 126,
              height: 36,
              background: '#000',
              borderRadius: 20,
            }}
          />

          {/* Status bar */}
          <div
            className="absolute top-0 left-0 right-0 z-40 flex items-center justify-between px-7"
            style={{ height: 52, paddingTop: 2 }}
          >
            <span
              className="text-xs font-bold"
              style={{
                fontFamily: 'var(--font-display)',
                color: isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.85)',
                letterSpacing: '-0.2px',
              }}
            >
              9:41
            </span>
            <div style={{ width: 130 }} />
            <div className="flex items-center gap-1.5" style={{ color: isDark ? 'rgba(255,255,255,0.9)' : 'rgba(0,0,0,0.85)' }}>
              {/* Signal bars */}
              <div className="flex gap-0.5 items-end" style={{ height: 11 }}>
                {[3, 5, 7, 9].map((h, i) => (
                  <div key={i} className="rounded-sm bg-current" style={{ width: 2.5, height: h, opacity: i < 3 ? 1 : 0.35 }} />
                ))}
              </div>
              {/* WiFi */}
              <svg width="14" height="10" viewBox="0 0 24 17" fill="currentColor">
                <path d="M12 3C8.2 3 4.8 4.6 2.4 7.2L0 4.8C3.1 1.8 7.3 0 12 0s8.9 1.8 12 4.8l-2.4 2.4C19.2 4.6 15.8 3 12 3zm0 6c-2.2 0-4.2.9-5.7 2.3L4 9c2.1-2 5-3.3 8-3.3s5.9 1.3 8 3.3l-2.3 2.3C16.2 9.9 14.2 9 12 9zm0 6c-1.1 0-2 .4-2.8 1.2L12 19l2.8-2.8C14 15.4 13.1 15 12 15z"/>
              </svg>
              {/* Battery */}
              <div className="relative rounded-sm" style={{ width: 24, height: 11, border: '1.5px solid currentColor' }}>
                <div className="absolute" style={{ top: 2, left: 2, right: 6, bottom: 2, background: 'currentColor', borderRadius: 1 }} />
                <div className="absolute" style={{ top: '25%', right: -4, width: 3, height: '50%', background: 'currentColor', borderRadius: '0 1px 1px 0' }} />
              </div>
            </div>
          </div>

          {/* Main content */}
          <div
            className="absolute left-0 right-0 bottom-0"
            style={{ top: 52 }}
            id="screen-scroll"
          >
            {screenEl}
          </div>

          {/* Bottom nav overlay */}
          {showBottomNav && (
            <BottomNav currentScreen={screen} navigate={navigate} />
          )}

          {/* Home indicator */}
          <div
            className="absolute bottom-1.5 left-1/2 -translate-x-1/2 rounded-full z-50"
            style={{
              width: 130,
              height: 4,
              background: isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.18)',
            }}
          />
        </div>

        {/* Side buttons */}
        <div className="absolute rounded-l-full" style={{ left: -3, top: 140, width: 4, height: 28, background: '#2a2a2a' }} />
        <div className="absolute rounded-l-full" style={{ left: -3, top: 180, width: 4, height: 28, background: '#2a2a2a' }} />
        <div className="absolute rounded-l-full" style={{ left: -3, top: 215, width: 4, height: 42, background: '#2a2a2a' }} />
        <div className="absolute rounded-r-full" style={{ right: -3, top: 170, width: 4, height: 62, background: '#2a2a2a' }} />
      </div>

      {/* Screen label hint */}
      {/* <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-xs font-medium"
        style={{
          background: 'rgba(255,255,255,0.7)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          color: '#475569',
          fontFamily: 'var(--font-display)',
          border: '1px solid rgba(255,255,255,0.9)',
          boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        }}
      >
        TravelMate · {screen.charAt(0).toUpperCase() + screen.slice(1)}
      </div> */}
    </div>
  );
}

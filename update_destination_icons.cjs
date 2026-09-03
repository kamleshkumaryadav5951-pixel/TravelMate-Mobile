const fs = require('fs');
let content = fs.readFileSync('src/screens/DestinationDetail.tsx', 'utf-8');

const ICONS = `
const ICONS = {
  calendar: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>,
  budget: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  weather: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-500"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>,
  temple: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-rose-500"><path d="M22 20v-6a2 2 0 0 0-2-2h-4.5"/><path d="M2 20v-6a2 2 0 0 1 2-2h4.5"/><path d="M12 22v-9"/><path d="M15 12h-6"/><path d="M12 12V3.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V12"/><path d="M12 12V3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V12"/></svg>,
  adventure: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-500"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>,
  mountain: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-sky-500"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>,
  shopping: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
  plane: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block ml-1.5"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.6L3 8l6 5-3 3-3-1-2 2 5 2 2 5 2-2-1-3 3-3 5 6 1.2-.7c.4-.2.7-.6.6-1.1Z"/></svg>,
  heartOutline: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-1.5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
  heartFilled: <svg width="18" height="18" viewBox="0 0 24 24" fill="#ef4444" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-1.5"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
};
`;

content = content.replace("const attractions = [", ICONS + "\nconst attractions = [");

// Replace attractions array
content = content.replace(
  "{ name: 'Hadimba Temple', type: 'Heritage', icon: '🛕', rating: 4.7 }",
  "{ name: 'Hadimba Temple', type: 'Heritage', icon: ICONS.temple, rating: 4.7 }"
);
content = content.replace(
  "{ name: 'Solang Valley', type: 'Adventure', icon: '⛷️', rating: 4.8 }",
  "{ name: 'Solang Valley', type: 'Adventure', icon: ICONS.adventure, rating: 4.8 }"
);
content = content.replace(
  "{ name: 'Rohtang Pass', type: 'Scenic', icon: '🏔️', rating: 4.9 }",
  "{ name: 'Rohtang Pass', type: 'Scenic', icon: ICONS.mountain, rating: 4.9 }"
);
content = content.replace(
  "{ name: 'Mall Road', type: 'Shopping', icon: '🛍️', rating: 4.5 }",
  "{ name: 'Mall Road', type: 'Shopping', icon: ICONS.shopping, rating: 4.5 }"
);

// Replace quick stats array
content = content.replace(
  "{ icon: '📅', label: 'Best Time', val: dest.best || 'Oct – Mar' }",
  "{ icon: ICONS.calendar, label: 'Best Time', val: dest.best || 'Oct – Mar' }"
);
content = content.replace(
  "{ icon: '💰', label: 'Est. Cost', val: dest.cost || '₹3,500/day' }",
  "{ icon: ICONS.budget, label: 'Est. Cost', val: dest.cost || '₹3,500/day' }"
);
content = content.replace(
  "{ icon: '🌡️', label: 'Weather', val: '12–22°C' }",
  "{ icon: ICONS.weather, label: 'Weather', val: '12–22°C' }"
);

// Fix the mapping rendering for quick stats to just use the icon directly instead of wrapping it if needed.
// actually s.icon will render fine, but the <p className="text-lg">{s.icon}</p> might mess with size.
content = content.replace(
  '<p className="text-lg">{s.icon}</p>',
  '<div className="flex justify-center mb-1">{s.icon}</div>'
);

// Replace Plan a Trip button
content = content.replace("Plan a Trip Here ✈️", "Plan a Trip Here {ICONS.plane}");

// Replace Save Destination button
content = content.replace(
  "{saved ? '❤️ Saved!' : '🤍 Save Destination'}",
  "{saved ? <span className=\"flex items-center justify-center\">{ICONS.heartFilled} Saved!</span> : <span className=\"flex items-center justify-center\">{ICONS.heartOutline} Save Destination</span>}"
);

fs.writeFileSync('src/screens/DestinationDetail.tsx', content);

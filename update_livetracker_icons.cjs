const fs = require('fs');
let content = fs.readFileSync('src/screens/LiveTracker.tsx', 'utf-8');

const ICONS = `
const ICONS = {
  calendar: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>,
  budget: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  weather: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-400"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>,
  temple: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-orange-100"><path d="M22 20v-6a2 2 0 0 0-2-2h-4.5"/><path d="M2 20v-6a2 2 0 0 1 2-2h4.5"/><path d="M12 22v-9"/><path d="M15 12h-6"/><path d="M12 12V3.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V12"/><path d="M12 12V3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V12"/></svg>,
  food: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-100"><path d="m2 22 20-20"/><path d="m14 10 4-4"/><path d="M10 14 6 18"/><path d="m5 13 4-4"/><path d="m19 7 2-2"/></svg>,
  adventure: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-100"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>,
  scenic: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-100"><path d="M3 20h18L14 7l-4 7-2-3-5 9Z"/></svg>,
  hotel: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-pink-100"><path d="M10 22v-6.57"/><path d="M12 11h.01"/><path d="M12 7h.01"/><path d="M14 15.43V22"/><path d="M15 16a5 5 0 0 0-6 0"/><path d="M16 11h.01"/><path d="M16 7h.01"/><path d="M8 11h.01"/><path d="M8 7h.01"/><rect x="4" y="2" width="16" height="20" rx="2"/></svg>,
  note: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block mr-1 opacity-60"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>,
};
`;

content = content.replace("const timeline = [", ICONS + "\nconst timeline = [");

// Timeline emojis
content = content.replace("'🛕'", "ICONS.temple");
content = content.replace("'🍽️'", "ICONS.food");
content = content.replace("'⛷️'", "ICONS.adventure");
content = content.replace("'🌄'", "ICONS.scenic");
content = content.replace("'🏨'", "ICONS.hotel");

// Stats emojis
content = content.replace("'📅'", "ICONS.calendar");
content = content.replace("'🌡️'", "ICONS.weather");
content = content.replace("'💵'", "ICONS.budget");

// Quick stats rendering
content = content.replace(
  '<p className="text-lg">{s.icon}</p>',
  '<div className="flex justify-center mb-1">{s.icon}</div>'
);

// Note emoji rendering
content = content.replace(
  "📝 {item.note}",
  "{ICONS.note} {item.note}"
);

fs.writeFileSync('src/screens/LiveTracker.tsx', content);

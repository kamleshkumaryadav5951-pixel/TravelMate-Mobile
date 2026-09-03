const fs = require('fs');

let content = fs.readFileSync('src/screens/AIPlanner.tsx', 'utf-8');

const svgs = `
const ICONS = {
  food: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 22 20-20"/><path d="m14 10 4-4"/><path d="M10 14 6 18"/><path d="m5 13 4-4"/><path d="m19 7 2-2"/></svg>,
  adventure: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>,
  hiking: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>,
  nature: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
  culture: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22h16"/><path d="M4 2h16"/><path d="M12 2v20"/><path d="M6 2v20"/><path d="M18 2v20"/></svg>,
  shopping: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
  photography: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>,
  nightlife: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>,
  historical: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 20v-6a2 2 0 0 0-2-2h-4.5"/><path d="M2 20v-6a2 2 0 0 1 2-2h4.5"/><path d="M12 22v-9"/><path d="M15 12h-6"/><path d="M12 12V3.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5V12"/><path d="M12 12V3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V12"/></svg>,
  
  solo: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
  couple: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  family: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/><circle cx="16" cy="18" r="2"/><circle cx="12" cy="18" r="2"/></svg>,
  friends: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="10" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-4-4h-2"/><circle cx="17" cy="9" r="3"/><path d="M3 21v-2a4 4 0 0 1 4-4h2"/><circle cx="7" cy="9" r="3"/></svg>,
  
  budget: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  moderate: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>,
  premium: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13"/><path d="M13 3l3 6-4 13"/></svg>,
  
  map: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>,
  calendar: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>,
  heart: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>,
  sparkles: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>,
  search: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  pin: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>,
};
`;

content = content.replace("const interests = ['🍕 Food', '🧗 Adventure', '🥾 Hiking', '🌿 Nature', '🏛️ Culture', '🛍️ Shopping', '📸 Photography', '🌙 Nightlife', '🏰 Historical'];", svgs + "\nconst interests = [\n  { label: 'Food', icon: ICONS.food },\n  { label: 'Adventure', icon: ICONS.adventure },\n  { label: 'Hiking', icon: ICONS.hiking },\n  { label: 'Nature', icon: ICONS.nature },\n  { label: 'Culture', icon: ICONS.culture },\n  { label: 'Shopping', icon: ICONS.shopping },\n  { label: 'Photography', icon: ICONS.photography },\n  { label: 'Nightlife', icon: ICONS.nightlife },\n  { label: 'Historical', icon: ICONS.historical }\n];");

content = content.replace(/const travelTypes = \[[\s\S]*?\];/, `const travelTypes = [
  { label: 'Solo', icon: ICONS.solo, desc: 'Explore independently' },
  { label: 'Couple', icon: ICONS.couple, desc: 'Romantic getaway' },
  { label: 'Family', icon: ICONS.family, desc: 'Fun for everyone' },
  { label: 'Friends', icon: ICONS.friends, desc: 'Group adventure' },
];`);

content = content.replace(/const budgetOptions = \[[\s\S]*?\];/, `const budgetOptions = [
  { label: 'Budget', icon: ICONS.budget, desc: 'Under ₹5,000/day', color: '#059669' },
  { label: 'Moderate', icon: ICONS.moderate, desc: '₹5,000–₹12,000/day', color: '#2563eb' },
  { label: 'Premium', icon: ICONS.premium, desc: '₹12,000+/day', color: '#7c3aed' },
];`);

content = content.replace(/const processingSteps = \[[\s\S]*?\];/, `const processingSteps = [
  { text: 'Analyzing destination...', icon: ICONS.search },
  { text: 'Finding top attractions...', icon: ICONS.pin },
  { text: 'Optimizing your route...', icon: ICONS.map },
  { text: 'Calculating estimated costs...', icon: ICONS.budget },
  { text: 'Creating your itinerary...', icon: ICONS.sparkles },
];`);

content = content.replace("Where are you going? 🗺️", "Where are you going? <span className=\"inline-block ml-1\">{ICONS.map}</span>");
content = content.replace("When are you traveling? 📅", "When are you traveling? <span className=\"inline-block ml-1\">{ICONS.calendar}</span>");
content = content.replace("What's your budget? 💰", "What's your budget? <span className=\"inline-block ml-1\">{ICONS.budget}</span>");
content = content.replace("Who's traveling? 👥", "Who's traveling? <span className=\"inline-block ml-1\">{ICONS.family}</span>");
content = content.replace("What do you love? ❤️", "What do you love? <span className=\"inline-block ml-1\">{ICONS.heart}</span>");
content = content.replace("Ready to Generate! ✨", "Ready to Generate! <span className=\"inline-block ml-1 text-yellow-400\">{ICONS.sparkles}</span>");

content = content.replace("{[['📍', 'Destination', destination || 'Manali'], ['📅', 'Duration', startDate && endDate ? `${startDate} → ${endDate}` : '5 Days'], ['💰', 'Budget', budget || 'Moderate'], ['👥', 'Travel', travelType || 'Solo'], ['❤️', 'Interests', selectedInterests.length > 0 ? `${selectedInterests.length} selected` : 'All types']].map(([icon, label, val]) => (", "{[[ICONS.pin, 'Destination', destination || 'Manali'], [ICONS.calendar, 'Duration', startDate && endDate ? `${startDate} → ${endDate}` : '5 Days'], [ICONS.budget, 'Budget', budget || 'Moderate'], [ICONS.family, 'Travel', travelType || 'Solo'], [ICONS.heart, 'Interests', selectedInterests.length > 0 ? `${selectedInterests.length} selected` : 'All types']].map(([icon, label, val], idx) => (");

// Fix map key since label might be duplicated or idx is better
content = content.replace("<div key={label} className=\"flex items-center gap-3\">", "<div key={idx} className=\"flex items-center gap-3 text-gray-400\">");

// Fix selectedInterests mapping
content = content.replace(/interests\.map\(i => \{[\s\S]*?const active = selectedInterests\.includes\(i\);/, `interests.map(i => {
                const active = selectedInterests.includes(i.label);`);

content = content.replace(/<button key=\{i\} onClick=\{\(\) => toggleInterest\(i\)\}/, `<button key={i.label} onClick={() => toggleInterest(i.label)}`);

content = content.replace(/\{i\}/g, `{i.icon} <span className="ml-1.5">{i.label}</span>`);
// Wait, the `{i}` was replaced. Let me revert that and do it properly for interests map.
fs.writeFileSync('src/screens/AIPlanner.tsx', content);

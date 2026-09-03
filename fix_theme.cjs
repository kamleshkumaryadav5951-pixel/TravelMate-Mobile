const fs = require('fs');
let content = fs.readFileSync('src/screens/LiveTracker.tsx', 'utf-8');

// Root container
content = content.replace(
  '<div className="absolute inset-0 overflow-y-auto preserve-color" style={{ background: \'#060f1e\' }}>',
  '<div className="absolute inset-0 overflow-y-auto" style={{ background: \'#f8faff\' }}>'
);

// Header
content = content.replace(
  '<div className="px-5 pt-4 pb-5" style={{ background: \'rgba(255,255,255,0.04)\', borderBottom: \'1px solid rgba(255,255,255,0.08)\' }}>',
  '<div className="px-5 pt-4 pb-5" style={{ background: \'white\', borderBottom: \'1px solid #e2e8f0\' }}>'
);

content = content.replace(
  "color: 'rgba(255,255,255,0.5)'",
  "color: '#64748b'"
);

content = content.replace(
  'style={{ color: \'white\', fontFamily: \'var(--font-display)\' }}',
  'style={{ color: \'#0f172a\', fontFamily: \'var(--font-display)\' }}'
);

content = content.replace(
  '<span className="text-white/40 text-xs">•</span>',
  '<span className="text-gray-300 text-xs">•</span>'
);

content = content.replace(
  '<span className="text-white/60 text-xs">Jul 16, 2025</span>',
  '<span className="text-gray-500 text-xs">Jul 16, 2025</span>'
);

// Progress rings
content = content.replace(
  /stroke="rgba\(255,255,255,0\.08\)"/g,
  'stroke="#e2e8f0"'
);

// We need to replace all instances of text-white inside progress rings and stats
content = content.replace(/text-white/g, 'text-gray-900');
content = content.replace(/text-white\/50/g, 'text-gray-500');
content = content.replace(/text-white\/70/g, 'text-gray-600');
content = content.replace(/text-white\/60/g, 'text-gray-500');
content = content.replace(/text-white\/40/g, 'text-gray-400');

// Fix the ICONS. The SVGs now have "text-emerald-100" which looks invisible on white.
// Let's replace them with "-500" colors
content = content.replace(/text-orange-100/g, 'text-orange-500');
content = content.replace(/text-emerald-100/g, 'text-emerald-500');
content = content.replace(/text-blue-100/g, 'text-blue-500');
content = content.replace(/text-indigo-100/g, 'text-indigo-500');
content = content.replace(/text-pink-100/g, 'text-pink-500');

// Stats row
content = content.replace(
  /background: 'rgba\(255,255,255,0\.07\)', border: '1px solid rgba\(255,255,255,0\.1\)'/g,
  "background: 'white', border: '1px solid #e2e8f0', boxShadow: '0 2px 12px rgba(0,0,0,0.03)'"
);

// Timeline unselected button background
content = content.replace(
  /background: item.done\s*\?\s*`\$\{typeColors\[item.type\] \|\| '#2563eb'\}`\s*:\s*'rgba\(255,255,255,0\.08\)'/g,
  "background: item.done ? `${typeColors[item.type] || '#2563eb'}` : 'white'"
);
// Button border
content = content.replace(
  /border: `2px solid \$\{item.done \? typeColors\[item.type\] \|\| '#2563eb' : 'rgba\(255,255,255,0\.15\)'\}`/g,
  "border: `2px solid ${item.done ? typeColors[item.type] || '#2563eb' : '#cbd5e1'}`"
);

// Vertical timeline line
content = content.replace(
  /background: item.done \? `\$\{typeColors\[item.type\] \|\| '#2563eb'\}60` : 'rgba\(255,255,255,0\.08\)'/g,
  "background: item.done ? `${typeColors[item.type] || '#2563eb'}60` : '#e2e8f0'"
);

// Card background
content = content.replace(
  /background: item.done \? `\$\{typeColors\[item.type\] \|\| '#2563eb'\}18` : 'rgba\(255,255,255,0\.06\)'/g,
  "background: item.done ? `${typeColors[item.type] || '#2563eb'}12` : 'white'"
);

// Card border
content = content.replace(
  /border: `1px solid \$\{item.done \? typeColors\[item.type\] \+ '40' \|\| 'rgba\(37,99,235,0\.4\)' : 'rgba\(255,255,255,0\.1\)'\}`/g,
  "border: `1.5px solid ${item.done ? typeColors[item.type] || '#2563eb' : '#e2e8f0'}`, boxShadow: '0 2px 8px rgba(0,0,0,0.03)'"
);

// Card time color unselected
content = content.replace(
  /color: item.done \? typeColors\[item.type\] \|\| '#60a5fa' : 'rgba\(255,255,255,0\.5\)'/g,
  "color: item.done ? typeColors[item.type] || '#2563eb' : '#94a3b8'"
);

// Note top border
content = content.replace(
  /borderTop: '1px solid rgba\(255,255,255,0\.08\)'/g,
  "borderTop: '1px solid #e2e8f0'"
);

// Card type pill
content = content.replace(
  /background: 'rgba\(255,255,255,0\.06\)'/g,
  "background: '#f1f5f9'"
);
content = content.replace(
  /color: 'rgba\(255,255,255,0\.6\)'/g,
  "color: '#64748b'"
);

// Wait, the icons ICONS.temple etc when `item.done` is true should be white if the background is solid colored.
// Currently the icons have `className="text-orange-500"`. If the button background is `#f97316`, then an orange-500 icon on orange background is invisible!
// The button in timeline is:
// <button ... > {item.icon} </button>
// In the old version, the button background was solid color for `item.done`, and the emoji was visible. For SVGs, if we set the color to orange-100 it was visible.
// But now we changed to orange-500, which won't be visible on an orange-500 background.
// Instead, we can apply a filter or change the color using CSS.
// Let's add a style to the button to force SVG color to white if done!
content = content.replace(
  /boxShadow: item.done \? `0 0 12px \$\{typeColors\[item.type\] \|\| '#2563eb'\}60` : 'none',/g,
  "boxShadow: item.done ? `0 0 12px ${typeColors[item.type] || '#2563eb'}60` : 'none',\n                  color: item.done ? 'white' : typeColors[item.type] || '#2563eb',"
);

// And we can strip the hardcoded `text-XYZ-500` classes from the SVGs if they inherit `currentColor`!
content = content.replace(/className="text-blue-400"/g, '');
content = content.replace(/className="text-emerald-400"/g, '');
content = content.replace(/className="text-orange-400"/g, '');
content = content.replace(/className="text-orange-500"/g, '');
content = content.replace(/className="text-emerald-500"/g, '');
content = content.replace(/className="text-blue-500"/g, '');
content = content.replace(/className="text-indigo-500"/g, '');
content = content.replace(/className="text-pink-500"/g, '');

fs.writeFileSync('src/screens/LiveTracker.tsx', content);

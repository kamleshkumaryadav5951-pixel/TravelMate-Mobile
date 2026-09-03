const fs = require('fs');
let content = fs.readFileSync('src/screens/Explore.tsx', 'utf-8');

// Header gradient
content = content.replace(
  "background: 'linear-gradient(160deg,#7c3aed,#2563eb)'",
  "background: 'linear-gradient(160deg,#37784d,#40916c)'"
);

// Active category pill text color
content = content.replace(
  "color: activeCategory === cat ? '#7c3aed' : 'rgba(255,255,255,0.85)'",
  "color: activeCategory === cat ? '#37784d' : 'rgba(255,255,255,0.85)'"
);

// Explore -> button
content = content.replace(
  "background: '#eff6ff'",
  "background: '#ecfdf5'"
);
content = content.replace(
  "color: '#2563eb'",
  "color: '#059669'"
);

// Heritage tag from purple to a warm terracotta/amber so it looks professional
content = content.replace(
  "tagColor: '#7c3aed'",
  "tagColor: '#b45309'"
);

// Manali (Mountains) tag from bright blue to a cool slate/teal
content = content.replace(
  "tagColor: '#2563eb'",
  "tagColor: '#0f766e'"
);

fs.writeFileSync('src/screens/Explore.tsx', content);

const fs = require('fs');
let content = fs.readFileSync('src/screens/Home.tsx', 'utf-8');

const target = '<div className="w-full h-full flex items-center justify-center font-bold text-white transition-all group-hover:bg-white/30" style={{ background: \'rgba(255,255,255,0.2)\', fontSize: 16, fontFamily: \'var(--font-display)\' }}>K</div>';
const replacement = '<img src="/avatar.jpg" alt="Profile" className="w-full h-full object-cover" />';

content = content.replace(target, replacement);

fs.writeFileSync('src/screens/Home.tsx', content);

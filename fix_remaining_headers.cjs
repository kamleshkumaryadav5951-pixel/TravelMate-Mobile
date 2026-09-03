const fs = require('fs');

// AIPlanner
let plannerContent = fs.readFileSync('src/screens/AIPlanner.tsx', 'utf-8');
plannerContent = plannerContent.replace(
  "background: 'linear-gradient(160deg,#1d4ed8,#2563eb)'",
  "background: 'linear-gradient(160deg,#37784d,#40916c)'"
);
fs.writeFileSync('src/screens/AIPlanner.tsx', plannerContent);

// Profile
let profileContent = fs.readFileSync('src/screens/Profile.tsx', 'utf-8');
profileContent = profileContent.replace(
  "background: 'linear-gradient(160deg, #0f172a 0%, #1e3a5f 100%)'",
  "background: 'linear-gradient(160deg, #37784d, #40916c)'"
);
fs.writeFileSync('src/screens/Profile.tsx', profileContent);

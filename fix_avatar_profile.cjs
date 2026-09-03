const fs = require('fs');
let content = fs.readFileSync('src/screens/Profile.tsx', 'utf-8');

content = content.replace("              K", "              <img src=\"/avatar.jpg\" alt=\"Profile\" className=\"w-full h-full object-cover rounded-full\" />");

fs.writeFileSync('src/screens/Profile.tsx', content);

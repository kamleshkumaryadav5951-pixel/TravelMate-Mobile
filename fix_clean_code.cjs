const fs = require('fs');

const files = [
  'src/screens/PricePredictor.tsx',
  'src/screens/AIPlanner.tsx',
  'src/screens/Profile.tsx',
  'src/screens/DestinationDetail.tsx',
  'src/screens/LiveTracker.tsx'
];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf-8');
  
  // Find "const ICONS = {" and its matching closing "};"
  const start = content.indexOf('const ICONS = {');
  if (start !== -1) {
    let braceCount = 0;
    let end = -1;
    let inString = false;
    let stringChar = '';
    
    // Simple parsing to find end of ICONS block
    for (let i = start + 'const ICONS = {'.length - 1; i < content.length; i++) {
      const char = content[i];
      if (!inString) {
        if (char === "'" || char === '"' || char === '`') {
          inString = true;
          stringChar = char;
        } else if (char === '{') {
          braceCount++;
        } else if (char === '}') {
          braceCount--;
          if (braceCount === 0) {
            // Find trailing semicolon
            if (content[i+1] === ';') {
              end = i + 2;
            } else {
              end = i + 1;
            }
            break;
          }
        }
      } else {
        if (char === stringChar && content[i-1] !== '\\') {
          inString = false;
        }
      }
    }
    
    if (end !== -1) {
      content = content.substring(0, start) + content.substring(end);
      
      // Add import at the top
      content = "import { ICONS } from '../icons';\n" + content;
      
      fs.writeFileSync(file, content);
      console.log('Cleaned ' + file);
    }
  }
});

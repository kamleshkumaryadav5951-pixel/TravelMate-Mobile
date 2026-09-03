const fs = require('fs');
let content = fs.readFileSync('src/screens/Itinerary.tsx', 'utf-8');

// Add state for days
content = content.replace(
  "const [activeDay, setActiveDay] = useState(0);",
  "const [activeDay, setActiveDay] = useState(0);\n  const [days, setDays] = useState(initialDays);\n\n  const toggleActivity = (activityIndex) => {\n    setDays(prev => {\n      const newDays = [...prev];\n      newDays[activeDay] = { ...newDays[activeDay] };\n      newDays[activeDay].activities = [...newDays[activeDay].activities];\n      newDays[activeDay].activities[activityIndex].done = !newDays[activeDay].activities[activityIndex].done;\n      return newDays;\n    });\n  };"
);

// We replace the Done badge with the checkbox in the correct location.
// Right now the code is:
/*
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-xs font-semibold" style={{ color: typeColors[a.type] || '#2563eb' }}>{a.time}</span>
                    {a.done && (
                      <span className="rounded-full px-1.5 py-0.5 text-xs font-bold" style={{ background: typeColors[a.type] + '20' || '#eff6ff', color: typeColors[a.type] || '#2563eb' }}>Done</span>
                    )}
                  </div>
*/

// Let's remove the Done badge
content = content.replace(
  /\{a\.done && \([\s\S]*?<\/[sS]pan>[\s\S]*?\)\}/,
  ""
);

// We add a checkbox on the right side of the card header.
// Currently the right side of the card has the pill for "type":
/*
                  </div>
                </div>
                <span className="rounded-lg px-2 py-1 text-xs font-bold" style={{ background: typeColors[a.type] + '15' || '#f0f7ff', color: typeColors[a.type] || '#2563eb' }}>{a.type}</span>
              </div>
*/
const oldHeaderTail = `</div>
                </div>
                <span className="rounded-lg px-2 py-1 text-xs font-bold" style={{ background: typeColors[a.type] + '15' || '#f0f7ff', color: typeColors[a.type] || '#2563eb' }}>{a.type}</span>
              </div>`;

const newHeaderTail = `</div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="rounded-lg px-2 py-1 text-xs font-bold" style={{ background: typeColors[a.type] + '15' || '#f0f7ff', color: typeColors[a.type] || '#2563eb' }}>{a.type}</span>
                  <button onClick={() => toggleActivity(i)} className="w-6 h-6 rounded-md flex items-center justify-center transition-all active:scale-90" style={{ background: a.done ? typeColors[a.type] || '#2563eb' : 'transparent', border: \`1.5px solid \${a.done ? typeColors[a.type] || '#2563eb' : '#cbd5e1'}\` }}>
                    {a.done && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                  </button>
                </div>
              </div>`;

content = content.replace(oldHeaderTail, newHeaderTail);

fs.writeFileSync('src/screens/Itinerary.tsx', content);

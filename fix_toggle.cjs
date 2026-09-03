const fs = require('fs');
let content = fs.readFileSync('src/screens/Itinerary.tsx', 'utf-8');

content = content.replace(
  "      newDays[activeDay].activities[activityIndex].done = !newDays[activeDay].activities[activityIndex].done;",
  "      newDays[activeDay].activities[activityIndex] = { ...newDays[activeDay].activities[activityIndex] };\n      newDays[activeDay].activities[activityIndex].done = !newDays[activeDay].activities[activityIndex].done;\n      console.log('Toggled activity', activityIndex, newDays[activeDay].activities[activityIndex].done);"
);

fs.writeFileSync('src/screens/Itinerary.tsx', content);

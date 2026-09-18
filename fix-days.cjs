const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'i18n', 'translations.js');
let content = fs.readFileSync(filePath, 'utf8');

// Replace the long Arabic days array with short initials so they fit on mobile
const searchString = "bookingDays: ['الأحد', 'الإثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],";
const replaceString = "bookingDays: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],";

// In case the search fails due to spacing
content = content.replace(/bookingDays:\s*\[['"]الأحد['"],\s*['"]الإثنين['"],\s*['"]الثلاثاء['"],\s*['"]الأربعاء['"],\s*['"]الخميس['"],\s*['"]الجمعة['"],\s*['"]السبت['"]\]/, "bookingDays: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س']");

fs.writeFileSync(filePath, content, 'utf8');
console.log("Days fixed.");

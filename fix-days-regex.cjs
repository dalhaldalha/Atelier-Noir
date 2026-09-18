const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'i18n', 'translations.js');
let content = fs.readFileSync(filePath, 'utf8');

const arStart = content.indexOf('ar: {');
const beforeAr = content.substring(0, arStart);
let afterAr = content.substring(arStart);

// Match the bookingDays array in the Arabic section regardless of its content
afterAr = afterAr.replace(/bookingDays:\s*\[[^\]]+\]/, "bookingDays: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س']");

fs.writeFileSync(filePath, beforeAr + afterAr, 'utf8');
console.log("bookingDays fixed via robust regex.");

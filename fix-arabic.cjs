const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'i18n', 'translations.js');
let content = fs.readFileSync(filePath, 'utf8');

// The AR section starts after `ar: {`
const arIndex = content.indexOf('ar: {');

if (arIndex !== -1) {
  let beforeAr = content.substring(0, arIndex);
  let afterAr = content.substring(arIndex);

  // Replace only in the Arabic section
  afterAr = afterAr.replace(/requestPrivateHire:\s*'Request Private Hire'/, "requestPrivateHire: 'طلب حجز خاص'");
  afterAr = afterAr.replace(/conciergePhone:\s*'\+966 50 123 4567'/, "conciergePhone: '+٩٦٦ ٥٠ ١٢٣ ٤٥٦٧'");
  afterAr = afterAr.replace(/footerPhone:\s*'\+966 50 123 4567'/, "footerPhone: '+٩٦٦ ٥٠ ١٢٣ ٤٥٦٧'");
  
  content = beforeAr + afterAr;
  fs.writeFileSync(filePath, content, 'utf8');
  console.log("Translations fixed!");
} else {
  console.log("Could not find 'ar: {'");
}

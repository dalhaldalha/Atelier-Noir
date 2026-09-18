const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'i18n', 'translations.js');
let content = fs.readFileSync(filePath, 'utf8');

// Replace standard Arabic numbers with dollar sign to Riyals
content = content.replace(/\$٨٥/g, "٨٥ ر.س");
content = content.replace(/\$٧٥/g, "٧٥ ر.س");
content = content.replace(/\$٦٥/g, "٦٥ ر.س");
content = content.replace(/\$١٥٠/g, "١٥٠ ر.س");

// Just in case any others got missed
content = content.replace(/\$85/g, "SAR 85");
content = content.replace(/\$75/g, "SAR 75");
content = content.replace(/\$65/g, "SAR 65");
content = content.replace(/\$150/g, "SAR 150");

fs.writeFileSync(filePath, content, 'utf8');
console.log("Currency updated!");

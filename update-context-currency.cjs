const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'contexts', 'BookingContext.jsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/85 ر.س/g, "٨٥ ر.س");
content = content.replace(/75 ر.س/g, "٧٥ ر.س");
content = content.replace(/65 ر.س/g, "٦٥ ر.س");
content = content.replace(/150 ر.س/g, "١٥٠ ر.س");

fs.writeFileSync(filePath, content, 'utf8');
console.log("BookingContext updated!");

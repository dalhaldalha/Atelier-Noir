const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'Services', 'Services.jsx');
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/getIndex\('01',\s*'[^']+'\)/g, "getIndex('01', '٠١')");
content = content.replace(/getIndex\('02',\s*'[^']+'\)/g, "getIndex('02', '٠٢')");
content = content.replace(/getIndex\('03',\s*'[^']+'\)/g, "getIndex('03', '٠٣')");
content = content.replace(/getIndex\('04',\s*'[^']+'\)/g, "getIndex('04', '٠٤')");

fs.writeFileSync(filePath, content, 'utf8');
console.log("Services.jsx fixed.");

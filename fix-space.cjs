const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'Space', 'Space.jsx');
let content = fs.readFileSync(filePath, 'utf8');

// Use regex to replace the entire getNumber function safely
content = content.replace(/const getNumber = \(num\) => \{[\s\S]*?return num\.toString\(\)\.padStart\(2, '0'\);\s*\};/, 
  "const getNumber = (num) => {\n    if (lang === 'ar') {\n      const arNums = ['٠١', '٠٢', '٠٣'];\n      return arNums[num - 1];\n    }\n    return num.toString().padStart(2, '0');\n  };");

fs.writeFileSync(filePath, content, 'utf8');
console.log("Space.jsx fixed.");

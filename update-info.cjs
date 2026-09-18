const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'i18n', 'translations.js');
let content = fs.readFileSync(filePath, 'utf8');

// Replace Locations
content = content.replace(/locationAddress: '742 Mercer Street'/g, "locationAddress: 'Al Olaya District'");
content = content.replace(/locationDistrict: 'Soho Arts District, New York, NY 10012'/g, "locationDistrict: 'Riyadh, Saudi Arabia'");
content = content.replace(/locationDescription: 'Located on the cobble-paved stretch of Mercer between Spring & Prince\. Direct private discreet entrance adjacent to the gallery courtyard\.'/g, "locationDescription: 'Located in the prestigious Al Olaya district, steps away from Kingdom Centre. Direct private discreet entrance.'");

content = content.replace(/locationAddress: '742 شارع ميرسر'/g, "locationAddress: 'حي العليا'");
content = content.replace(/locationDistrict: 'حي الفنون في سوهو، نيويورك NY 10012'/g, "locationDistrict: 'الرياض، المملكة العربية السعودية'");
content = content.replace(/locationDescription: 'يقع على امتداد مرصوف بالحصى لشارع ميرسر بين سبرينغ وبرنس\. مدخل خاص وسري مباشر بجوار ساحة المعرض\.'/g, "locationDescription: 'يقع في حي العليا الراقي، على بعد خطوات من مركز المملكة. مدخل خاص وسري مباشر.'");

content = content.replace(/footerAddress: '428 West 19th St, Chelsea Arts District, New York'/g, "footerAddress: 'Al Olaya District, Riyadh, KSA'");
content = content.replace(/footerAddress: '428 ويست 19 ستريت، حي تشيلسي للفنون، نيويورك'/g, "footerAddress: 'حي العليا، الرياض، المملكة العربية السعودية'");

// Replace Phone
content = content.replace(/\+1 \(212\) 555-0198/g, "+966 50 123 4567");
content = content.replace(/\+1 \(212\) 840-0920/g, "+966 50 123 4567");

// Replace Currency (Dollar to SAR)
content = content.replace(/\$85/g, "SAR 85");
content = content.replace(/\$75/g, "SAR 75");
content = content.replace(/\$65/g, "SAR 65");
content = content.replace(/\$150/g, "SAR 150");

content = content.replace(/85 دولار/g, "85 ر.س");
content = content.replace(/75 دولار/g, "75 ر.س");
content = content.replace(/65 دولار/g, "65 ر.س");
content = content.replace(/150 دولار/g, "150 ر.س");

fs.writeFileSync(filePath, content, 'utf8');

const bookingCtxPath = path.join(__dirname, 'src', 'contexts', 'BookingContext.jsx');
let bookingCtx = fs.readFileSync(bookingCtxPath, 'utf8');
bookingCtx = bookingCtx.replace(/price: '\$150'/g, "price: 'SAR 150'");
bookingCtx = bookingCtx.replace(/price: `\$\$\{price\}`/g, "price: `SAR ${price}`");
fs.writeFileSync(bookingCtxPath, bookingCtx, 'utf8');

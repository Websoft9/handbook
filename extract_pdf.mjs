import fs from 'fs';
import pdf from 'pdf-parse';

const pdfPath = '/data/cdl/handbook/docs/sales/marketplace/_azure/Microsoft Marketplace Best Practice Guide v7.pdf';
const dataBuffer = fs.readFileSync(pdfPath);

pdf(dataBuffer).then(function(data) {
  console.log('Total Pages:', data.numpages);
  console.log('\n' + '='.repeat(80) + '\n');
  console.log(data.text);
}).catch(err => console.error(err));

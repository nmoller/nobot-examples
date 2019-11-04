const querystring = require('querystring');

const url = 'http://www.opencanvas.co.uk?test01=Nelson&test02=toto&test03=titi';
const parsedUrl = querystring.parse(url.substring(url.indexOf('?') + 1));

console.log(`Test01: ${parsedUrl.test01}`);
console.log(`Test02: ${parsedUrl.test02}`);
console.log(`Test03: ${parsedUrl.test03}`);

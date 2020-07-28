
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import "lazysizes/plugins/unveilhooks/ls.unveilhooks";
const lqip = require('lqip');

const file = './images/lead.png';

lqip.base64(file).then(res => {
  console.log(res); 
});

import Test from './js/components/Test';
import SecondTest from './js/components/SecondTest';

new Test();
new SecondTest();

const numbers = [2, 3, 4];
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);


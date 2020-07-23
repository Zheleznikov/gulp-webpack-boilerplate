import Test from './js/components/Test';
import SecondTest from './js/components/SecondTest';

new Test();
new SecondTest();
console.log('it works');

const numbers = [2, 3, 4];
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers);
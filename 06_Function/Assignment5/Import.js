import {func1 as loan} from '/HW05.js';
const people1 = loan(1000);
console.log(people1(400));
console.log(people1(5000));
console.log(people1());

const people2 = loan(4000);
console.log(people2(2500));
console.log(people2(0));
console.log(people2(1500));

const people3 = loan(1000000000)
console.log(people3(50000));
console.log(people3(10000000));
console.log(people3(700000000));
console.log(people3(50000));
console.log(people3(289900000));
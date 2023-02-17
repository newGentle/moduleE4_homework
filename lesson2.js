"use strict"; 

const obj = {
  item1: 1,
  item2: 2,
  item3: 3
};

let txt1 = 'item1';
let txt2 = 'item';

function func(txt, prop) {
  return txt in prop;
};

console.log(func(txt1, obj));
console.log(func(txt2, obj));
"use strict"; 

const obj = {
  item1: 1,
  item2: 2,
  item3: 3
};

function func(prop) {

  for (let item in prop) {
    if (prop.hasOwnProperty(item)) {
      console.log(`${item}: ${prop[item]}`);
    };
  }
  
}

func(obj);

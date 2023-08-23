const glass = {
  name: "glass",
  color: "red",
  price: 12,
  isCleaned: true,
};

console.log(glass);
// all properties name
const keys = Object.keys(glass);
// console.log(keys);
// [ 'name', 'color', 'price', 'isCleaned' ]

// all values name
const values = Object.values(glass);
// console.log(values);
// [ 'glass', 'red', 12, true ]

const entries = Object.entries(glass);
// console.log(entries);
// array of array , two dimensional array
// [
//     [ 'name', 'glass' ],
//     [ 'color', 'red' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//   ]

// delete glass.isCleaned
// console.log(glass);

const { isCleaned, ...shortGlass } = glass;
console.log(shortGlass);

//  freeze
Object.freeze(glass);
Object.freeze(glass);
delete glass.name;
glass.price = 9000;
glass.source = "Bangladesh";
console.log(glass);


// seal
Object.seal(glass);
delete glass.name;
glass.price = 9000;
glass.source = "Bangladesh";
console.log(glass);

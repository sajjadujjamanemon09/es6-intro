// for of use an array or string not in object
// for in use an object

const numbers = [1, 3, 5, 6]
// for (let i = 0; i < numbers.length; i++){}
// while
for(const num of numbers){
    // console.log(num);
}


const nobab = 'Siraj Ud Doula'
for (const char of nobab){
    console.log(char);
}


const glass = {
    name: "glass",
    color: "red",
    price: 12,
    isCleaned: true,
  };
// for (const key of glass){
//     console.log(key);
// }
for (const key in glass){
    const value = glass[key]
    // console.log(key, value);
}



// optional
const keys = Object.keys(glass)
console.log(keys);

for (const key of keys){
    const value = glass[ key]
    console.log(key, value);
}
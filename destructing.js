const actor = {
    name : 'Rohim',
    age : 23,
    phone : +8823474567,
    money : 12347782473
}

//  if right side is an object left side of destructing will be object as well
//  use property name as a variable that contains the property value
const {phone, age: boyos} = actor
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(boyos);


// array destructing 
const numbers = [45 , 66]
const [first, second] = numbers
const [x, y] = [23, 45]

// advanced
function doubleThem(a, b){
    return [a*2 , b*2]
}

const [prothom, ditiyo] = doubleThem(5, 4)
console.log(prothom, ditiyo);
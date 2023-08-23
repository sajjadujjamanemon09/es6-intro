const difference = (x, y) => x - y
const multiply = (first, second, third) => first * second * third

const getAge = (person) => person.age 
const student = {name : 'ananta', age : 45}
const age = getAge(student)
console.log(age);

const getThird = numbers => numbers[2]
const third = getThird([5, 6, 7, 8, 9, 20])
console.log(third);

const doubleUIt = num => num * 2

// no parameter
const getPI  =() => math.PI 

// large arrow function . if you want to get anything returned from this function . then you have to use the return keyword
const doMath = (x, y, z) => {
    const sum = x + y + z
    const multi = x * y * z
    const result  = sum + multi
    return result
}


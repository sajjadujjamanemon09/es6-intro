// var : no reason to use var
// let : allow it to re use
// const : do not allow it to re use


const money = 25
//  money = 50
const rich = money + 25
console.log(rich);


let count = 0
count = count + 10
console.log(count);

const numbers = [23, 4, 23, 21, 45]
// number = [4, 5, 6, 7]
numbers[1]= 55
numbers.push(8, 9, 8)
console.log(numbers);


// objcts 

const student ={
    name : 'moyna pakhi',
    class: 12
}

// student = {name: 'kokil pakhi'}
student.name = 'moyur pakhi'
console.log(student);

// loop 

let sum = 0
for (let i = 0; i < 10; i++){
    const sum = i;
    sum = sum + sum
}

console.log(sum);
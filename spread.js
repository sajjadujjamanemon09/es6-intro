const max = Math.max(6, 45, 34, 56, 99)
const numbers = [3, 4, 5, 6, 7, 8, 9, 90]
const arrayMax = Math.max(...numbers)
// console.log(...numbers)
console.log(arrayMax);

// use spread operator to copy
const friends = [4, 5, 6, 7]
const bondhu = friends
const dosto = [...friends]
console.log(dosto);
friends.push(100)
console.log(dosto);
console.log(friends);

// advanced
const songkha = [...friends, 9999]  // add extra element while copy
console.log(songkha);
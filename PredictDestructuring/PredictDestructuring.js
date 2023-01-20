const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar) // Tesla -- pulling first index & reassigning value to randomCar
console.log(otherRandomCar) // Mercedes

const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;  // this renames 'name' to 'otherName'
//Predict the output
// console.log(name); // ReferenceError -- name is no longer defined
console.log(otherName); // Elon

const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345'; // declares pw
const { password: hashedPassword } = person; // renames declaration pw to hashedPassword 
//Predict the output
console.log(password); // ReferenceError - pw no longer defined
console.log(hashedPassword); // 12345

const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers; // assigning first with first index = 2
const [,,,second] = numbers; // assigning second with third index = 5
const [,,,,,,,,third] = numbers; // assigning third with 8th index = 2
//Predict the output
console.log(first == second); // boolean response => false
console.log(first == third); // boolean response => true

const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]  // dict with arr
}
const { key } = lastTest;  // key = value
const { secondKey } = lastTest;  // assigning secondKey with lastTest values
const [ ,willThisWork] = secondKey;   // assigning willThisWork with first index = 5
//Predict the output
console.log(key);           // value
console.log(secondKey);     // [ 1, 5, 1, 8, 3, 3 ]
console.log(secondKey[0]);  // 1
console.log(willThisWork);  // 5


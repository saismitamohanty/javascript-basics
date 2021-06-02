
let person = {"firstName": "Django","age":40 , "email":"d@gmail.com"}
let {firstName: x ,age:y} = person; //destructuring
// console.log(firstName);
console.log(x);
console.log(y);

function logNameAge({firstName,age}){
    console.log(`My name is $[firstName] and i am $[age] year old`);
}
logNameAge(person)
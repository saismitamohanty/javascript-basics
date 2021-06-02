// var stringArray = ["string1", "string2","string3", "string4","string5"]
var stringArray = [1,2,3,4,5,6,7,8];
function strcatFunc(str1 ,str2, str3){
    console.log(str1+str2+str3);
}
// strcatFunc(...stringArray);



let numberStore = [0,1,2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];
console.log(numberStore);


let numberStore = [0,2,5];
let newNumber = [12,17,8];
numberStore = [...numberStore, ...newNumber];

// numberStore.push(newNumber);
console.log(numberStore);




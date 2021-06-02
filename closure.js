function makeAdder(valueToAdd){
    var baseValue = 10;
    // function add(valueToAdd,baseValue)
   function sum(parameter){
        return valueToAdd + parameter;
    }
    return sum();
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(10));
console.log(add10(10));
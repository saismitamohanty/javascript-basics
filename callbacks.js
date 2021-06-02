function sendbackTheSumToPrint(number1,number2, callback){
    let sum = number1+number2;
    callback(sum);
}
function logTheSum(sum)
{
    console.log(`sum is ${sum}`)
}
sendbackTheSumToPrint(10,20, logTheSum);
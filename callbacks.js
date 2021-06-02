// function sendbackTheSumToPrint(number1,number2, callback){
//     let sum = number1+number2;
//     callback(sum);
// }
// function logTheSum(sum)
// {
//     console.log(`sum is ${sum}`)
// }
// sendbackTheSumToPrint(10,20, logTheSum);
function sendbackThePostToPrint(number1,number2, callback){
    let request = new XMLHttpRequest();
    request.open("GET","https://jsonplaceholder.typicode.com/posts");

    request.send();
    request.onload= () =>
    {
        // console.log(request.response);
        callback(request.response);
    }
}
function logPosts(posts) {
    console.log(`posts are ${posts}`)
}
sendBackThePostsToPrint(logPosts);

const getEmployeeIds = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("trying to resolve after 5sec");
        resolve([2,3,4,6,7])
    }, 2000)  
}
);

getEmployeeIds
.then((idArray) => {
    console.log("Promise resolved. Ids : ", idArray);
})
.catch(error => {
    console.log("Promise rejected. Error : ", error);
})
// Calling API using fetch that returns a promise
function logPosts(posts) {
    console.log(`posts are ${posts}`)
}
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response =>logPosts(response));

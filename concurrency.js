//concurrency-- property of system to execute multiple task in single piece of time or in parallel or simultaneously
//cCALLBACKS-- a fn pass an argument in another or a fn calling another fn

//  function dosomthing(callback){
//     callback();
//  }
//  function sayhi(){
//     console.log("hiiiiiiii")
//  }
//  dosomthing(sayhi);

 function judge(grade){
    switch(true){
        case grade =='A':
            console.log("you got ",grade, ": excellent")
            break;
        case grade =='B':
            console.log("you got ",grade, ": well done")
            break;
        case grade =='C':
            console.log("you got ",grade, ": good")
            break;
        case grade =='D':
            console.log("you got ",grade, ": work hard")
            break;
        default:
            console.log("you got ",grade, ": whatttt????")
            break;
    }
 }
 function getgrade(score,callback){
    let grade;
    switch(true){
        case score >= 90:
            grade ='A'
            break;
        case score >= 80:
            grade ='B'
            break;
        case score >= 70:
            grade ='C'
            break;
        case score >= 60:
            grade ='D'
            break;
        default:
            grade ="E"
            break;
    }
    callback(grade)
 }
 getgrade(80, judge)

 ////what is difference between synchronous and asynchronous?
// Synchronous programming is a programming paradigm where tasks are executed one after another, in a sequential manner. 
// In synchronous code, each task must complete before the next one begins. This can lead to blocking behavior,
//  where the program waits for a task to finish before moving on to the next one. For example, if a synchronous function 
// makes a network request, the entire program will wait until that request is completed before continuing execution.


// This can result in slower performance and a less responsive user experience, especially in applications that rely on I/O 
// operations or long-running tasks.

//
// Asynchronous programming, on the other hand, allows tasks to be executed independently of one another.
//  In asynchronous code, tasks can be initiated and then continue executing other tasks without waiting for the previous ones
//  to finish.
//  This is achieved through the use of callbacks, Promises, or async/await syntax. Asynchronous programming is particularly 
// useful for handling I/O operations, such as network requests or file reading, where waiting for a response can lead to performance
//  bottlenecks. By using asynchronous techniques, developers can create more efficient and responsive applications that can handle
//  multiple tasks concurrently without blocking the main thread of execution.

//WHAT IS PROMISES?
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//it can take two arguments
// 1. resolve: a function that is called when the asynchronous operation is successful, passing the result as an argument.
// 2. reject: a function that is called when the asynchronous operation fails, passing the error as an argument.


let promise = new Promise(function(resolve, reject) {
    let x=20;
    if(x>10){
        resolve(x); //fulfilled
    }
    else{
        reject("error"); //rejected
    }
})

promise.then(function(value) {
    console.log("success", value); //success 20
},
function(error) {
    console.log("error", error); //error
})


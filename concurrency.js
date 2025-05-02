//concurrency-- property of system to execute multiple task in single piece of time or in parallel or simultaneously
//CALLBACKS--just an fn that passes an argument in another fn

//  function dosomthing(callback){
//     callback();
//     console.log("hi again");
//  }
//  function sayhi(){
//     console.log("hiiiiiiii")
//  }
//  dosomthing(sayhi);

//  function judge(grade){
//     switch(true){
//         case grade =='A':
//             console.log("you got ",grade, ": excellent")
//             break;
//         case grade =='B':
//             console.log("you got ",grade, ": well done")
//             break;
//         case grade =='C':
//             console.log("you got ",grade, ": good")
//             break;
//         case grade =='D':
//             console.log("you got ",grade, ": work hard")
//             break;
//         default:
//             console.log("you got ",grade, ": whatttt????")
//             break;
//     }
//  }
//  function getgrade(score,callback){
//     let grade;
//     switch(true){
//         case score >= 90:
//             grade ='A'
//             break;
//         case score >= 80:
//             grade ='B'
//             break;
//         case score >= 70:
//             grade ='C'
//             break;
//         case score >= 60:
//             grade ='D'
//             break;
//         default:
//             grade ="E"
//             break;
//     }
//     callback(grade)
//  }
//  getgrade(80, judge)

//  ////what is difference between synchronous and asynchronous?
// // Synchronous programming is a programming paradigm where tasks are executed one after another, in a sequential manner. 
// // In synchronous code, each task must complete before the next one begins. This can lead to blocking behavior,
// //  where the program waits for a task to finish before moving on to the next one. For example, if a synchronous function 
// // makes a network request, the entire program will wait until that request is completed before continuing execution.


// // This can result in slower performance and a less responsive user experience, especially in applications that rely on I/O 
// // operations or long-running tasks.

// //
// // Asynchronous programming, on the other hand, allows tasks to be executed independently of one another.
// //  In asynchronous code, tasks can be initiated and then continue executing other tasks without waiting for the previous ones
// //  to finish.
// //  This is achieved through the use of callbacks, Promises, or async/await syntax. Asynchronous programming is particularly 
// // useful for handling I/O operations, such as network requests or file reading, where waiting for a response can lead to performance
// //  bottlenecks. By using asynchronous techniques, developers can create more efficient and responsive applications that can handle
// //  multiple tasks concurrently without blocking the main thread of execution.

// //WHAT IS PROMISES?
// // A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// //it can take two arguments
// // 1. resolve: a function that is called when the asynchronous operation is successful, passing the result as an argument.
// // 2. reject: a function that is called when the asynchronous operation fails, passing the error as an argument.


// let promise = new Promise(function(resolve, reject) {
//     let x=20;
//     if(x>10){
//         resolve(x); //fulfilled // .then() --call by resolve
//     }
//     else{
//         reject("error"); //rejected//  .catch() -- call by reject
//     }
// })

// promise.then(function(value) {
//     console.log("success", value); //success 20
// },
// function(error) {
//     console.log("error", error); //error
// })


// count Promise=new Promise((ressolve,reject)=>
// {
//     ressolve("success");

// });
// .then((value)=>{
//     console.log(value);
//     return success
// });
// .catch((value)=>{
//     console.log(valu)
//  })
 //then--ressolve
 //catch--rejet


 //ASYNC AND AWAIT
 //async-- keyword, using this we can make a fn return a promise
 //await-- wait untill promises done its function

//  function saysomthing(x){
//     return new Promise(resolve =>{
//         setTimeout(()=>{ 
//             resolve("somthing", + x);
//         }, 2000);
//     });

//  }
//  async function talk(x){
//     const words=await saysomthing(x); //independently calll and wait ni karega
//     console.log(words);
//  }
// talk(2);
// talk(4);
// talk(8); //3no ka output 2 sec me print ho jaega kyuki seTimeout 2 sec ka gap leta hai or fn asynchronous h toh 2 sec me output aa jaega
//but in case of synchronous fn , the total output will be print after 6 sec(2+2+2)


//EVENT LOOP ---javascript is a single thrreadded language. thread--lightweight process
//CALLSTACK AND CALLBACK QUEUE
//the event loop is a process thta is constantly monitoring this call stack and whenever there are tasks to do, the event loop does them one by one.

// console.log("hi there")
// add(4,5);
// function add(x,y){
//    return x + y;
// }

console.log("hi there");
setTimeout(()=> console.log("sorry  i'm late"),1000);
console.log(add(5,5));
function add(x,y){
        return x + y;
    }

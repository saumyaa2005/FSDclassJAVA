//VARIABLE SCOPE IN FUNCTION
//scope

// function testAvailability(x){
//     console.log("available here", x);

// }
// textavailibility("hi");
// console.log("not available here",x);

// function testavailability(){
//     let y="local variable";
//     console.log("available here",y)
// }

// testavailibility():
// console.log("not available here",y);

// function doingstuff(){
//     if (True){
//         console.log(x);
//         var x="local";
//     }
// }

// doingstuff();

//global variable

// let globalVar = "Assessible everywhere";
// console.log("outside function",globalVar);
// function creatingnewscope(x){
//     console.log
// }

//11-04-25

//IMMEDIATELY INVOKED FUNCTION EXPRESSION
//anomous fn= fun having no name
// (function(){
//     console.log("iife");
// }
// )();

// (()=>{
//     console.log("iife");
// })();

// here we use () to invoke the fn we created

//RECURSIVE FN

// function getrecursive(nr){
//     console.log(nr);
//     getrecursive(--nr); //nr-1
// }

// getrecursive(3);

// function getrecursive(nr){
//     //console.log(nr);
//     if(nr > 0){
//       getrecursive(--nr); //nr-1
//     }
//     console.log(nr);
// }

// getrecursive(3);

// function logrecur(nr){
//     console.log("started function",nr);
//     if(nr>0){
//         logrecur(nr-1);
//     }
//     else{
//         console.log("done with recursion");
//     }
//     console.log("ended fn",nr);
// }
// logrecur(3);

//the performance of recursion is slightly worse than the performance of regular iteration using a loop, So if this causes a bottleneck situation that wouldreally slow dpwn your application.
//NESTED FN
// function doOuterFn(nr){
//     console.log("outer fn");
//     doInnerfn(nr);
//     function doInnerfn(x){
//         console.log(x+7);
//         console.log("i can access outer variable",nr);
//     }
// }

// doOuterFn(9);

// function outerfn(nr){
//     innerfn(nr);
//     function innerfn(x){
//         let z=10;
//     }
//     console.log("not accessible",z);
// }
// outerfn(2);

// function outerfn(nr){
//     innerfn(nr);
//     function innerfn(x){
//         let z=10;

//     }
// }
// innerfn(3); //reference error= onner function  is not defined

//ANONYMOUS FN

// function anonymous(){
//     console.log("not so secret though");
// };

//FUNCTION CALLBACKS

// passing a fn as an arugument to another fn

// let functionvariable= function(){

//     console.log("not so secret");
// }
// function flexible(executestuff){
//     executestuff();
//     console.log("inside doflexiblestuff function");
// }

// flexible(functionvariable);

//In js, there are many build in fn

// let gotthis =function(){
//     console.log("you are doing really well, keep coding");
// }

// //setTimer(gotthis,1000);
// setInterval(gotthis, 4000); // 1000(1 second) //terminate= comtrol+c

//quizess

//QUIZ 1
// let val=10;
// function tester(val){
//     val+= 10;
//     if(val< 100){
//         return tester(val);
//     }
//     return val;
// }
// tester(val);
// console.log(val); // answer=10 beacuse value modification local scope me hai aur value globally declare kari hue hai toh answer ki value store ni hue
// console.log(tester(val));

//2
// let testfn= function(){
//     console.log("hello");
// }();

// //3
// (function(){
//     console.log("Welcome");
// })();

// (function (){
//     let firstname= "Saumya";
// })();

// let result=(function (){
//     let firstname="Saumya";
//     return firstname;
// })();
// console.log(result);
// (function (fristname){
//     console.log("my name is " + fristname);
// })("Saumya");

//4
// let test2=(num) => num+5;
// console.log(test2(15));

//5
// var addFive1= function addFive1(num){
//     return num +2;
// };

// let addFive2=(num) => num+3;
// console.log(addFive1(14));














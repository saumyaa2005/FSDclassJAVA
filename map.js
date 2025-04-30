//MAPS -- predefined class
//example
//create a map
// const fruits= new Map([
//     ["apple", 500],
//     ['banana', 300],
//     ['oranges', 200]])
// console.log(fruits);


// //set map values
// fruits.set("apple", 500);
// fruits.set("banana",300);
// fruits.set("oranges",200);

// //get() method
// console.log(fruits.get('apple'));

// //maps are object,typeof returns object
// console.log(typeof fruits);

// //javascript object vs maps
// // object-- not diectly iterable -- keys must be string -- keys are not well defined
// //maps-- keys can be any datatype --keys are well defined

// //JAVASCRIPT MAP METHOD

// // Map.get()
// // Map.set()
//map.size()
//map,instanceof()
//map.typeof()
// console.log(fruits.size)

// //map.delete -- delete element
// fruits.delete("apple");
// console.log(fruits);
//Map.clear()-- clear all the elements
// fruits.clear();
// const fruits= new Map([
//     ["apple", 500],
//     ['banana', 300],
//     ['oranges', 200]])
// console.log(fruits);

// //map.has()
// console.log(fruits.has("apple"));
// fruits.delete("apple");
// console.log(fruits.has("apple"));

//map.foreach()
//list all entries
// let text=" "; //global scope
// fruits.forEach(function(value,key){
//     text+= key + "=" + value;
// )}
// console.log(text)

//map.entries()
// let text="";
// for(const x of fruits.entries()){
//     text +=x;
// }
// console.log(text)

//map.keys()
// let text="";
// // for(const x of fruits.keys()){
// //     text +=x;
// // }
// // console.log(text)

// //map.values()
// let text="";
// for(const x of fruits.values()){
//     text +=x;
// }
// console.log(text)

//sum of all values
// let total=0;
// for(const x of fruits.values()){
//     total+=x;
// }
// console.log(total);

//CREATE OBJECT
// const apples={name : "apples"};
// const banana={name : "banana"};
// const oranges={name : "oranges"};
// //create map
// const fruits=new Map([]);
// fruits.set(apples,500);
// fruits.set(banana,200);
// fruits.set(oranages,300);
// console.log(fruits);

//create array- collection of object
// const fruit=[
//     {name : 'apples',quantity : 500},
//     {name : 'banana' ,quantity : 200},
//     {name : 'oranges' ,quantity : 300}
// ];
// //collection to group elements
// function myCallBack({quantity}){
//     return quntity >200 ? "ok" : 'low';

// }
// //map by groupby
// const result =map.groupBy(fruits,myCallBack);
// console.log(result);

//JAVASCRIPT DESTRUCTUING
// //CREATE OBJECT
// const person={
//     firstname:"john" ,
//     lastname :"doe",
//     age:50
// }
// //desturing
// // let {firstname,lastname}=person; //the orrder of the properties doesn't matter
// // console.log(firstname) 
// // console.log(lastname) 

// //object proprerty aliass
// let {firstname, lastname, age}=person; //destructuring object
// console.log(firstname); //John

//string destructuring
//crreate a string
// let name ="gururkulschool";
// //destructing
// let( a,b,c,d,e,f)=name;
// console.log(a);

//array destructuring
// const fruits=['banana','apple', 'oranges',' mango']
// // let [fruit1,fruits2]=fruits;
// // console.log(fruit1,fruit2)
// let[fruit1,,,fruit2]=fruits;
// console.log(fruit1);
// console.log(fruit2);

//indexing
// const fruit=['banana','apple','watermelon','mango']
// let {[0]:fruit1, [1]:fruit2}=fruit;
// console.log(fruit1)
// console.log(fruit2)

//rest property
// const no=[10,20,30,40,50];
// const[a,b,...rest]=no;
// console.log(rest)
// console.log(a)

// const fruit=new Map([
//     ['apple', 500],
//     ["banana",200],
//     ['mango',400],
//     ['watermelon',600],

// ]);

// let test=" ";
// for(const[key,value] of fruit){
//     test +=key +" is " + value;
// }
// console.log(test)

// let  firstname="john"
// let lastname="doe";
// [firstname,lastname]=[lastname,firstname]
// console.log(firstname)
// console.log(lastname)

//EXPONENCIAL
// let x=5
// let z=x**2;
// console.log(z)
// let x=5
// let z =Math.pow(x,2);
// console.log(z)

//JAVASCRIPT ARRAY .....
// const fruit=['banana','mango','apple'];
// console.log(fruit.includes('mango'))
// console.log(fruit.includes('banana',3)) //starting from 3
 
//include method is case sensitive and return true when element is found amd return false when it doesn't(boolean)

//TRAILING COMMA --(let & const==block scope)
// const arr=[
//     "one",
//     "two",
//     "three",,
// ]
// console.log(arr)
// console.log(arr.length)
// const sparsArray=[,]
// console.log(sparsArray)

// const person={
//     firstname: 'john',
//     lastname : "doe",
//     age :30,
// }

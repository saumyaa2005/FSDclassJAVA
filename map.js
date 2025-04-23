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
// //maps-- keys can be any datatype --keys are not well defined

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
const fruits= new Map([
    ["apple", 500],
    ['banana', 300],
    ['oranges', 200]])
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
let total=0;
for(const x of fruits.values()){
    total+=x;
}
console.log(total);




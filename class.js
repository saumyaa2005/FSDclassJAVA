//CLASS

//classes and objects 



// class ClassName{
//     constructor(prop1, prop2){
//         this.first=prop1;
//         this.second=prop2;
//     }
// }

// let obj=new ClassName("arg1","arg2")
// console.log(obj.first)
// console.log(obj.second)

// class Dog{
//     constructor(dogname, weight, color , breed){
//         this.dogname=dogname
//         this.weight=weight
//         this.color=color
//         this.breed=breed
//     }
// }

// let dog= new Dog("husky","45","black","huskyyy")
// console.log(dog) /// javascript ka object key value pair me rehta hai

//ELEMENTS OF CLASS
//constructors
// there can only be one constructor in a class
//it is convention to start class name with capital letter

// class Person{
//     constructor(firstname, secondname){
//         this.firstname=firstname
//         this.secondname=secondname
//     }
// }

// let p=new Person("Saumya", "Mishra")
// console.log(p)

//methods
//( data- attributes, function-method)
// class ke andar function initialise krne ke lia function keyword ke =i need nhi hoti

// class Person{
//     constructor(firstname, secondname){
//         this.firstname=firstname
//         this.secondname=secondname
//     }

//     greet(){
//         console.log("hi there! I am", this.firstname)
//     }
//     complement(name,object){
//         return "Thats wonderfull"+object+" ,"+name;
//     }
// }

// let p=new Person("Saumya", "Mishra")
// p.greet()

// let complement= p.complement("Saumya", "Mishra")
// console.log(complement)
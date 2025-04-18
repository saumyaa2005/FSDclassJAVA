//CLASS

//classes and objects //class=blueprint 

// class ClassName{
//     constructor(prop1, prop2){  //constructor- initlisie the object automatically in a class
//         this.first=prop1;    //this:-current calling object {this... local}
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
//constructors:- co initilise the object automatically
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

//abse....

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

//PROPERTIES ;- also called field,hold the data for class

//we can directly access things using object
//private-that can be acced within the class
//default- private

// class Person{
//     #firstname;
//     #secondname;

//     constructor(firstname, secondname){
//         this.#firstname=firstname
//         this.#secondname=secondname
//     }
// }

// let p=new Person("saumya", "mishra")
// console.log(p.firstname)

// class Person{
//     constructor(firstname, secondname){
//         if(firstname.startsWith("P")){
//             this.firstname=firstname;
//         }
//         else{
//             this.firstname="P"+firstname; //if name does not start with P, then add P to the name
//         }
        
//         this.secondname=secondname
//     }

//     greet(){
//         console.log("hi there! I am", this.firstname)
//     }

// }

// let p=new Person("saumya", "mishra")
// p.greet()

 //private-matter public-object

//  class person{
//     #firstname
//     #lastname
//     coonstructor(firstname, lastnamw){
//        this.#firstname=firstname
//        this.#lastname=secondname
//     }
//     get firstname(){  //get & set-- user defined function--- methods of the class--benefit-  data hide{incapsulation}
//         return this.#firstname;
//     }
//     set firstname(firstname){
//         this.#firstname =firstname;
//     }
//  }
//  let p=new Person("saumya", "mishra")
// p.greet()

//INHERITANCE :-re-usability of the code----- parent class me common code paste kr skte hai; 
//typess:- 1.single level-- 1 parent and 1 child class  2.multi-level-- A se B banaya or B se C banaya  3.mulltiple  4. hirerarichal class or hybrid

//properties can be inhert from parent to child class
//generalization[parent] to specilization 

// class Vehicle{
//     constructor(color,currentspeed, maxspeed){
//         this.color =color;
//         this.currentspeed =currentspeed;
//         this.maxspeed= maxspeed;
//     }
//     move(){
//         console.log("moving at",this.currentspeed);
//     }
//     accelerate(amount){
//         this.currentspeed += amount;
//     }
// }

// class MoterCycle extends Vehicle{
//     constructor(color, currentSpeed, maxSpeed, fuel){
//         super(color, currentSpeed, maxSpeed) //super is used to call the constructor of the parent class
//         this.fuel=fuel
//     }
    
//    doWheelie(){
//         console.log("Driving on one wheel")
//     }
// }
// let motor=new MoterCycle("red", 50, 100, "petrol")
// console.log(motor.color)
// motor.accelerate(50);
// motor.move();

//we cannot access any method property in parent class, because inheritance is from parent to child not from child to parent( child subset h, or parent superset)

//PROTOYPES --- is a property that is avaiable for all classes and is always named "prototype"

class Person{
  
    constructor(firstname, secondname){
        this.firstname=firstname
        this.secondname=secondname
    }
    greet(){
        console.log("good morning " + this.firstname)
    }
}
 Person.prototype.introduce =function(){
    console.log("my name is ",this.firstname )
 }
let p=new Person("saumya", "mishra")
console.log(p.firstname)
p.greet()






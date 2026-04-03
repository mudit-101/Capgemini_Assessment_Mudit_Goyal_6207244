// console.log("Hello World");
// //type inference
// let a = 10
// a = 20
// // a = "Hello" // Error: Type 'string' is not assignable to type 'number'
// //type annotation
// let b:string = "Hello"
// //  b->5 // Error: Type 'number' is not assignable to type 'string'
// let e:null = null
// console.log(e)
// let f:undefined = undefined
// console.log(f)
// let g;
// console.log(g) // undefined
// g = 42;
// console.log(g) // 42
// g = undefined;
// console.log(g) // undefined
// // Array and tuple types
// let arr:number[] = [1, 2, 3];
// arr.push(4);
// console.log(arr) // [1, 2, 3, 4]
// let arr1:any[]=["two", 1]; // TypeScript infers this as (string | number | boolean)[]
// arr1.push([1, 2, 3, "true"]); // Allowed, arr1 is of type (string | number | boolean)[]
// console.log(arr1) // [1, "two", true]
// let stu:{name:string, age:number} = {
//     name:"John",   // explicitly annotated as string
//     age:20
// }
// console.log(stu) // { name: 'John', age: 20 }
// // let s1 = {
// //     name:"Alice",    // implicitly inferred as string
// //     age:25
// // }
// // console.log(s1) // { name: 'Alice', age: 25
// function greet(name?:string, age:number=21):void{
//     console.log(`Hello ${name}, you are ${age} years old.`);
// }
// greet("Mudit")
// let sum = (a:number, b:number):number => {
//     return a + b;
// }
// // function add(a:number, b:number):number{
// //     return a + b;    
// // }
// console.log(sum(5, 10)) // 15
// // add(5, 10) // 15
// let arr3:(string | number)[] = [123, "Hello", 456, "World"];
// arr3.push(789); // Allowed, arr3 is of type (string | number)[]
// console.log(arr3) // [123, "Hello", 456, "World", 789]
// //interface
// interface Person {
//     readonly id: number;
//     name: string,
//     age: number,
//     gender?: string
// }
// let obj:Person = {
//     id: 124,
//     name: "nikhil",
//     age: 21,    
//     gender: "Male",
// }
// obj.name = "Nikhil" // Allowed, name is not readonly
// // obj.id = 125 // Error: Cannot assign to 'id' because it is a read-only property.
// console.log(obj) // { id: 124, name: 'Nikhil Kumar', age: 21
// interface Animal{
//     name: string,
//     age: number
// }
// interface Dog extends Animal{
//     breed?: string,
// }
// let mydog: Dog = {
//     name: "Buddy",
//     age: 3,
//     breed: "Golden Retriever",
// }
// console.log(mydog) // { name: 'Buddy', age: 3, breed: 'Golden Retriever' }
// interface car{
//     brand: string,
//     colour: string,
//     sunroof(): string,
// }
// let mycar: car = {
//     brand: "Toyota",
//     colour: "Red",
//     sunroof() {
//         return "Sunroof is open";
//     }
// }
//oops
//class
//blueprint
//structure of object
// class demo{
//    //properties
//    //methods
// //  constructer -> special method 
// constructor(){
// }
// }
// class Car{
//     private brand:string;
//     color:string = "blue";
//     display():void{
//         console.log("display");
//     }
//     constructor(brand:string,color:string,display:void){
//         this.brand=brand;
//         this.color=color;
//         this.display()
//         // this.display=() =>{
//         //     console.log("new display");
//         // };
//          this.display= function d(){
//             console.log((this.brand),(this.color));
//         };
//         this.display();
//     }
//     start():void{
//         console.log("this is my car");
//     }
// }
// let car=new Car("Toyota", "Black")
// car.brand = "Toyota"
// console.log(car.brand);
// console.log(car);
// Access Modifiers
//private
//public
//protected
//basic inheritance
// class Animal{
//     eat(){
//         console.log("all animals eat");
//     }
// }
// class Cat extends Animal{
//     sound(){
//         console.log("meow");
//     }
// }
// let cat=new Cat()
// cat.eat()
// cat.sound()
class Person {
    constructor(name) {
        this.name = "Mudit";
    }
}
export class teacher extends Person {
    constructor(name, company) {
        super(name);
        this.company = "Capgemini";
        this.name = name;
        this.company = company;
    }
    display() {
        console.log(this.name);
        console.log(this.company);
    }
}
let t = new teacher("Nikhil", "all");
t.display();
console.log(t);
// let obj={
//     name:"MG"
// }
// console.log(obj);
export function add(a, b) {
    return a + b;
}
console.log(add(30, 20));

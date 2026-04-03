// import {add} from "./index"
// console.log(add(40,50));
// import {teacher} from "./index"
// let t=new teacher("Nikhil", "all");
// t.display()
// console.log(t);
// asynchronous programming
/**
 * timer function
 * promises
 * async and await --> ES8 --> 2017
 */
// function task1(){
//     console.log("task1");
// }
// function task2(){
//     console.log("task2");
// }
// task1();
// task2();
//setTimeOut ---> 3000 --> one time
//setInterval --> 3000 --> after each iteration it will execute
// console.log("start");
// setTimeout(()=>{
//     console.log("task completed");
// }, 5000)
// setInterval(() => {
//     console.log("task completed 2");
// }, 3000);
// console.log("end");
// console.log("start");
// const id =  function (): number {
//     const timer =  setInterval(function () {
//         console.log("Inside interval");
//     }, 3000);
//     return timer;
// }
// const timer = id();
// let promise = new Promise(function(resolve, reject){
//     console.log("i am a promise");
// })
// console.log("hello");
// setTimeout(function(){
//     console.log("hello in 2 sec");
// }, 2000)
// console.log("my name is " + "john")
// console.log("start");
// setTimeout(() => {
//     console.log("task1 is completed");
// }, 2000);
// console.log("end");
// console.log("start");
// setInterval(() => {
//     console.log("task1 is completed");
// }, 2000);
// console.log("end");
// console.log("start");
// const id = function() :number{
//     const timer = setInterval(function(){
//         console.log("task is completed");   
//     }, 3000)
//     return timer;
// }
// const timer = id()
// console.log("end");
// let p1 = new Promise<string>((a, b) =>{
//     let success = true; 
//     if(success==true){
//         a("login successful")
//     }
//     else{
//         b("login failed")
//     }
// })
// console.log(p1)
// p1.then((ele) => {
//     console.log("Resolved value:", ele);
// }).catch((error) => {
//     console.log("Rejected error:", error);
// }).finally(() => {
//     console.log("Promise execution completed.");
// });
// function getUser():Promise<string>{
//     return new Promise((resolve, reject) =>{
//         reject("user is there")
//         resolve("user not found")
//     })
// }
// getUser().catch((ele)=>{
//     console.log(ele);
// }).then((res)=>{console.log(res);
// })
let p2 = new Promise((resolve) => {
    resolve(40);
});
p2.then((value) => {
    console.log("resolved", value / 4);
    return value / 4;
}).then((value) => {
    console.log("resolved value with operations", value - 5);
    return value - 5;
}).then((value) => {
    console.log(value);
});

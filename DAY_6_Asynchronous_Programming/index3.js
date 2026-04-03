// console.log('start');
// setTimeout(()=>{
//     console.log("hii");
// }, 3000);
// console.log("end");
const id = function () {
    const timer = setInterval(function () {
        console.log("hii");
    }, 3000);
    return timer;
};
const timer = id();
// const p1 = new Promise<string>((resolve, reject)=>{
//     let t1 = true;
//     if(t1){
//         resolve("hii");
//     }
//     else {
//         reject("hello");
//     }
// })
// p1.then((ele)=>{
//     console.log("resolved", ele)
// }).catch((error) =>{
//     console.log("reject", error)
// })

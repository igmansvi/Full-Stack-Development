// callbacks | promises | async-await

// sync = sequential operations - blockingCode
// async = excuting parallel operations without blocking next instruction - non-blockingCode


// console.log("one");
// console.log("two");
// function sayHello() {
//     console.log("Hello");
// }
// setTimeout(sayHello, 4000);
// setTimeout(()=> {
//     console.log("World");
// }, 4000)
// console.log("three");
// console.log("four");

// function sum(a, b) {
//     console.log(a+b);
// }
// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }
// calculator(1, 2, sum);
// sum - a callback function => a function passed as parameter to another function

// callback hell - a nested callback stack
// function getData(dataId, getNextData) {
//     setTimeout(() => {
//         console.log("data: ", dataId);
//         if(getNextData) getNextData();
//     }, 2000)
// }
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4, () => {
//                 getData(5);
//             })
//         })
//     });
// });

// Promises => a 'eventual' completion of an task, a object, solution to callback.hell
// promise - resolve, reject (callback functions by JS)
// resolve -> then promiseState = fulfilled
// reject -> then promiseState = rejected
// let promise = new Promise((resolve, reject) => {
    // console.log("a promise");
    // resolve(123);
    // reject("error!");
// })
// console.log(promise);
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             // console.log("data: ", dataId);
//             // resolve('success')
//             reject('error');
//             if(getNextData) {
//                 console.log(getNextData);
//             }
//         }, 5000)
//     })
// }
// let result = getData(123);
// console.log(result);
// let result = getData(123)
// undefined
// callbacks_promises_async-await.js:58 data:  123
// result
// Promise {<fulfilled>: 'success'}[[Prototype]]: Promise[[PromiseState]]: "fulfilled"[[PromiseResult]]: "success"
// let result = getData(345)
// undefined
// result
// Promise {<pending>}
// callbacks_promises_async-await.js:58 data:  345
// result
// Promise {<fulfilled>: 'success'}
// let promise = getData(123)
// undefined
// promise
// Promise {<pending>}
// callbacks_promises_async-await.js:60 Uncaught (in promise) error
// (anonymous) @ callbacks_promises_async-await.js:60
// setTimeout
// (anonymous) @ callbacks_promises_async-await.js:57
// getData @ callbacks_promises_async-await.js:56
// (anonymous) @ VM1261:1Understand this errorAI
// promise
// Promise {<rejected>: 'error'}

// const getPromise = (error) => {
//     return new Promise((resolve, reject) => {
//         console.log('a promise created');
//         if(error) {
//             resolve('promise-fulfilled');
//         } else {
//             reject('promise-rejected');
//         }
//     })
// }
// let promise = getPromise(true);
// console.log(promise);
// promise.then((data) => {
//     console.log("data: ",data);
// })
// promise.catch((error) => {
//     console.log("error: ",error);
// })

// Promise-chaining - chained promises result using .then to return next function after previous_one executes
// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log('promise1 created');
//             resolve('promise1-fulfilled')
//         }, 3000)
//     })
// }
// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log('promise2 created');
//             resolve('promise2-fulfilled')
//         }, 3000)
//     })
// }
// console.log("fetching data1...");
// asyncFunc1().then((data) => {
//     console.log("data1: ",data);
//     console.log("fetching data2...");
//     asyncFunc2().then((data) => {
//         console.log("data2: ",data);
//     })
// })
// console.log("fetching data2");
// let promise_2 = asyncFunc2();
// promise_2.then((data) => {
//     console.log("data2: ",data);
// })
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log("data: ", dataId);
//             resolve('success');
//             // reject('error');
//         }, 5000)
//     })
// }
// getData(1)
// .then((data1) => {
//     console.log(data1);
//     return getData(2);
// })
// .then((data2) => {
//     console.log(data2);
//     return getData(3);
// })
// .then((data3) => {
//     console.log(data3);
// })

// async-await - returning promises and make awaits functions to complete current promises
// async function hello() {
//     console.log('hello');
// } // returns a promises by default
// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather-data");
//             resolve(200);
//         }, 2000)
//     })
// }
// await api();
// async function getApi() {
//     await api(); // 1st-call
//     // next excutes once first fulfilled
//     await api(); // 2nd-call
// }
// getApi();
// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log("data: ", dataId);
//             resolve('success');
//             // reject('error');
//         }, 3000)
//     })
// }
// async function getAllData() {
//     await getData(1).then((data) => console.log(data));
//     console.log("data_1 done!");
//     await getData(2).then((data) => console.log(data));
//     console.log("data_2 done!");
//     await getData(3).then((data) => console.log(data));
//     console.log("data_3 done!");
// }
// getAllData();
// IIFE - immediatly invoked function expression
// (async () => {
//     await getData(1).then((data) => console.log(data));
//     await getData(2).then((data) => console.log(data));
//     await getData(3).then((data) => console.log(data));
// })();

// async-await > promises > callbacks
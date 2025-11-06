// // callback functions
// function getData(callback) {
//     setTimeout(() => {
//         console.log("getting data");
//         callback();
//     }, 2000)
// }

// function processData(callback) {
//     setTimeout(() => {
//         console.log("processing data");
//         callback();
//     }, 2000)
// }

// function saveData(callback) {
//     setTimeout(() => {
//         console.log("saving data");
//         callback();
//     }, 2000)
// }

// getData(() => {
//     processData(() => {
//         saveData(() => { // pyramid of doom
//             console.log("completed"); // callback hell
//         })
//     })
// })

// Promises
// function checkPromise(marks) {
//   return new Promise((resolve, reject) => {
//     console.log("checking for result...");
//     setTimeout(() => {
//       if (marks >= 40) {
//         resolve("resolve -> you have passed the exam");
//       } else {
//         reject("reject -> you have failed the exam");
//       }
//     }, 2000);
//   });
// }

// checkPromise(39)
//   .then((data) => {
//     console.log("result: ", data); // resolve
//   })
//   .catch((err) => {
//     console.log("result: ", err); // reject
//   })
//   .finally(() => {
//     console.log("completed");
//   });

// Async and Await
// function Task(success) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(success) {
//                 resolve("task successfull");
//             } else {
//                 reject("task failed");
//             }
//         }, 2000)
//     })
// }

// async function checkTask(success) {
//     const response = await Task(success);
//     console.log("result:", response);
// }

// checkTask(true);

// Fetch
// async function getApiData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
//         const data = await response.json();
//         console.log(data);
//     } catch(err) {
//         console.log("error: ", err);
//     }
// }
// getApiData();

// async function getUserData() {
//     try {
//         const user = await fetch('https://randomuser.me/api/?results=3&nat=in');
//         const data = await user.json();
//         console.log(data);
//     } catch(error) {
//         console.log("error:", error);
//     }
// }
// getUserData();

// http// import http from 'http';
// create server
// const server = http.createServer((req, res) => {
//     // res.end('hello, world');
//     console.log(req.url);
//     res.end('request recieved');
// })
// const PORT=3000
// server.listen(PORT, () => {
//     console.log(`server is running at: http://localhost:${PORT}`);
// })

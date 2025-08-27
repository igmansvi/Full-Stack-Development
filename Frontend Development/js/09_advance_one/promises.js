// fetch('https://api.github.com/users/igmansvi').then().catch().finally();

const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log("Async task is complete");
        resolve();
    },1000)
})
promiseOne.then(function() {
    console.log("Promise consumed");
})

new Promise(function(resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000)
}).then(function() {
    console.log("Promise 2")
})

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve({username: "chai", email: "chaiaurcode@ex.com"});
    },1000)
})
promiseThree.then((user)=>{
    console.log(user);
})

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username: "mavi", password: "@m4vi"});
        } else {
            reject("Error: Something went wrong!");
        }
    }, 1000)
})
promiseFour.then( (data) => {
    console.log(data);
    return data.username;
}).then( (username) => {
    console.log(username);
}).catch( (error) => {
    console.log(error);
}).finally( () => {
    console.log("Promise complete");
    console.log("Not known:- fullfiled or rejected");
})

const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve({username: "mavi", password: "@m4vi"})
        } else {
            reject("Error: JS went wrong!")
        }
    }, 1000)
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}
consumePromiseFive();

// async function getUser() {
//     try{
//         const response = await fetch('https://api.github.com/users/igmansvi');
//         const data = await response.json();
//         console.log(data);
//     } catch(error) {
//         console.log("Error: ",error);
//     }
// }
// getUser();

fetch('https://api.github.com/users/igmansvi')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error)); 
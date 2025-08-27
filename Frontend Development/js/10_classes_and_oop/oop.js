const user = {
    username: "mansvi",
    isLoggedin: false,
    loginCount: 0,
    getUserDetails: () => {
        // console.log("Got user details from dataBase");
        console.log(this.username);
    }
}
// console.log(user.isLoggedin);
// console.log(user.getUserDetails());

// const promise = new Promise();
// const data = new Date();

function User(username, loginCount, isLoggedin) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedin = isLoggedin;
    // return this;
}
const userOne = new User("mansvi", 11, false);
const userTwo = new User("m4vi", 0, true);
console.log(userOne);
console.log(userTwo);
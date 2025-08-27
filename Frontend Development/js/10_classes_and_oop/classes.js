// es6

// class User {
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }
//     encrypt() {
//         return `${this.password}abc`;
//     }
//     changeUsername() {
//         return `${this.username.toUpperCase()}`;
//     }
// }
// const chai = new User('m4vi', 'm4vi@4.in', '@m4i');
// console.log(chai.encrypt());
// console.log(chai.changeUsername());

// behind the scene

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}
User.prototype.encrypt = () => {
    return `${this.password}abc`;
}
User.prototype.changeUsername = () => {
    return `${this.username.toUpperCase()}`;
}
const coffee = new User("m4vi", "m4vi@4.in", "@m4i");
// console.log(coffee.encrypt());
// console.log(coffee.changeUsername());
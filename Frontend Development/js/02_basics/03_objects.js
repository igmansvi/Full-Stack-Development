// singleton - created from constructor
// --Object.create()

// object literals
const sym = Symbol("key");
const JsUser = {
    name: "Mansvi",
    "full name": "Mansvi Kumar",
    id: 101,
    age: 21,
    [sym]: "key",
    email: "hello@123.in"
}
// console.log(JsUser);
// console.log(JsUser.id);
// console.log(JsUser.name);
// console.log(JsUser["name"]);
// console.log(JsUser["full name"]);
// Object.freeze(JsUser);
// JsUser.email = "mansvi.k@mail.in"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log(`Hello Js user, ${this.name}`);
}
console.log(JsUser.greeting());
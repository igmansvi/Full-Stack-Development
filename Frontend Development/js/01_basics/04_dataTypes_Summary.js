// Primitive
// 7 types - String, Number, Boolean, null, undefined, Symbol, BigInt
// - called by value
const score = 100 /* scoreValue = 99.9 {Number} */
const name = ""
const isTrue = false
const isNull = null
let isUndefined;
const id= Symbol(123);
const anotherId= Symbol(123); /* Unique */
console.log(id === anotherId);
const bigNumber = 12345678901234567890n

// References (Non-primitive)
// - called by references
// Array, Objects, Functions
const heros = ["IronMan", "SpiderMan"];
let data = {
    isName: "Null",
    age: 0
}
const myFunction = function() {
    console.log("Hello, world!");
}
console.table([typeof(heros), typeof(data), typeof(myFunction)]);
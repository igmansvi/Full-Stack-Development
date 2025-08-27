const constVar = 123;
let letVar = "hello";
var  varVar = 1.23;
Var = false;
// constVar = 321; --! not allowed
// console.log(constVar);
letVar = "world";
console.log(letVar);
varVar = 2.34;
console.log(varVar);
console.table([letVar, varVar, constVar, Var]);
/*
var - globle scope - creates issues with functional and block scope
let - local scope
const - constant
*/
// array
const myArr = [0, 1, 2, 3, 4];
// console.log(myArr[0]);

// const anotherArr = myArr;
// console.log(anotherArr[0]);
// myArr[0] = 5; // --shallow copy
// console.log(anotherArr[0]);

// myArr.push(5);
// myArr.unshift(2);
// console.log(myArr);

// myArr.shift();
// myArr.pop();
// console.log(myArr);

// console.log(myArr.includes(3));

// const newArr = myArr.join();
// console.log(newArr); 
// console.log(typeof newArr); 

console.log("a ", myArr);
const myn1 = myArr.slice(1, 3);
console.log(myn1);
console.log("b ", myArr);
const myn2 = myArr.splice(1, 3);
console.log(myn2);
console.log("c ",myArr)
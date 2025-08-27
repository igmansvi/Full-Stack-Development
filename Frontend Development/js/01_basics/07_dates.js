// let myDate = new Date();
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toLocaleString('en-IN'));
// console.log(myDate.toLocaleDateString('en-IN'));

// let myCreatedDate = new Date(2025, 0, 23);
let myCreatedDate = new Date(2025, 0, 23, 11, 22, 20);
// let myCreatedDate = new Date("12-19-2024");
// console.log(myCreatedDate.toString());

let timeStamp = Date.now();
console.log(timeStamp);
console.log(myCreatedDate.getTime());
console.log(`day is ${myCreatedDate.getDay()} and month is ${myCreatedDate.getMonth()}`);

myCreatedDate.toLocaleString('default', {
    weekday: "long",
    timeZone: 'IN',
})
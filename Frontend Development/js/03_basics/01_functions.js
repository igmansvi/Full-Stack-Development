const name = "Mansvi"
function greet() {
    console.log(`Hello ${name}`);
}
// greet();

function loginUser(username) {
    if(!username) {
        return "invalid login!"
    }
    return `${username} just logged in`;
}
// const message = loginUser("User1");
const message = loginUser();
// console.log(message);

function calculatePrice(...num1) {
    return num1
}
// console.log(calculatePrice(200, 300));

const user = {
    username: "hitesh",
    price: null
}
function handleObject(anyobject) {
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// const str = handleObject(user);
// console.log(str);
// handleObject({
//     username: "mansvi",
//     price: null
// })

const arr = [1,2,3,4,5]
function returnVal(arr) {
    return arr[2]
}
// console.log(returnVal(arr));
// console.log(returnVal([2,3,4,5]))


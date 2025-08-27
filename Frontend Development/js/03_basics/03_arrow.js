const user = {
  username: "hitesh",
  price: null,
  welcomeMessage: function () {
    console.log(this);
    console.log(`Hello, ${this.username}`);
  },
};
// user.welcomeMessage();

function chai() {
  console.log(this);
}
// chai();

const greet = () =>  {
    let username = "hitesh"
    console.log(this);
}
// greet()

// --explicit return
// const addTwo = (num1, num2) => {
//     return num1+num2
// }

// --implicit return
// const addTwo = (num1, num2) => num1 + num2
// console.log(addTwo(1, 2));


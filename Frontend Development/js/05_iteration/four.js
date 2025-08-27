const lang = ['js', 'rb', 'py', 'java', 'cpp']
// const values = lang.forEach((item)=>{
//     return item;
// })

const nums = [1, 2, 3, 4, 5, 6, 7, 8]
// const values = nums.filter((num) => num > 4)
// console.log(values);

// const values = nums.map((val) => val+10)
// const values = nums.map((val) => {return val+10})
// console.log(values);

// const values = nums.map((item) => item*10).filter((item) => item > 41).map((item)=>item+1)
// console.log(values);

// const values = nums.reduce(function (acc, currVal){
//     return acc + currVal;
// }, acc = 0)
// console.log(values);

// const values = nums.reduce((acc, currVal) => acc+currVal, 0)
// console.log(values);

const course = [
    {
        courseName: "JavaScript",
        coursePrice: 999
    },
    {
        courseName: "Cpp",
        coursePrice: 1999
    },
    {
        courseName: "Java",
        coursePrice: 1999
    }
]
const totalPrice = course.reduce((acc, item) => acc+item.coursePrice, 0);
// const totalPrice = course.reduce((acc, item) => { return acc+item.coursePrice}, 0);
// const totalPrice = course.reduce(function (acc, item) {
//     return acc+item.coursePrice
// }, acc = 0);
console.log(totalPrice);
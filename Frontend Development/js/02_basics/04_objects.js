const jsUser = {}

jsUser.id = "123abc"
jsUser.name = "lorem"
jsUser.isLoggedIn = false

// console.log(jsUser);

const regularUser = {
    email: "user1@gmail.com",
    full_name: {
        first_name: "user1",
        last_name: ""
    },
    id: null
}
// console.log(regularUser.full_name.last_name);

const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {4: "d", 5: "e"}
// const obj3 = Object.assign(obj1, obj2); --takes obj1 as target and remaining as source, returns obj1
// const obj3 = Object.assign({}, obj1, obj2); --takes a empty object as target and remaining as source, returns a new object
const obj3 = {...obj1, ...obj2};
// console.log(obj3);

const users = [
    {
        id: 101
    },
    {
        id: 102,
        email: ""
    }
]
// console.log(users[1]);

// console.log(Object.keys(jsUser));
// console.log(Object.values(jsUser));
// console.log(Object.entries(jsUser));

// console.log(jsUser.hasOwnProperty('id'));

const course = {
    courseName: "JavaScript",
    price: null,
    courseInstructor: "Hitesh Choudhary"
}
// course.courseInstructor

// de-structure
const {courseInstructor: instructor, price: fee, courseName: name} = course
// console.log(instructor);
// console.log(fee);
// console.log(name);
// console.log(typeof instructor);


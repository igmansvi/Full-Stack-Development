// for of

const arr = [1, 2, 3, 4, 5]
// for (const i of arr) {
//     console.log(i);
// }

const greeting = "Hello, World!"
// for (const greet of greeting) {
//     console.log(greet);
// }


// Maps
const maps = new Map()
maps.set('IN', "India")
maps.set('USA', "United States of America")
maps.set('Fr', "France")

// console.log(maps);
// for(const key of maps) {
//     console.log(key);
// }
// for(const [key, value] of maps) {
//     console.log(key, ':-', value);
// }

const game =  {
    'game1': 'NFS',
    'game2': 'GTA-V'
}
// for(const key in game) {
//     console.log(game[key], key);
// }

const programming = ['js', 'rb', 'py', 'java', 'cpp']
// for (const key in programming) {
//     console.log(key, programming[key]);
// }

// programming.forEach((val) => {
//     console.log(val);
// })
// programming.forEach(function (val) {
//     console.log(val);
// })
// function print(val) {
//     console.log(val);
// }
// programming.forEach(print)

// programming.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })

const lang = [
    {
        language: "java",
        languageCode: "java"
    },
    {
        language: "javaScript",
        languageCode: "Js"
    },
    {
        language: "cpp",
        languageCode: "c++"
    }
]
lang.forEach((item) => {
    console.log(item.languageCode);
})
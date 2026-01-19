// concat()
// let family = new Array("me", "father", "mother", "brother");
// let cousins = new Array("cousin1", "cousin2", "cousin3");
// let friends = new Array("friend1", "friend2", "friend3");
// let data = family.concat(cousins, friends);
// console.log(data);

// every()
// let numbers = [2, 4, 6, 8, 10];
// let numbers = [2, 4, 5, 8, 10];
// let ans = numbers.every((x)=>x%2==0);
// console.log(ans);

// filter()
// let nums = [2, 4, 5, 7, 8, 11, 14, 18, 20, 24];
// let even = nums.filter((x)=>x%2==0);
// let odd = nums.filter((x)=>x%2!=0);
// console.log(nums);
// console.log(even);
// console.log(odd);

// let obj = [
//     {
//         name: 'jkl',
//         section: 'tuv',
//         cgpa: 9
//     },
//     {
//         name: 'xyz',
//         section: 'mno',
//         cgpa: 8
//     },
//     {
//         name: 'abc',
//         section: 'pqr',
//         cgpa: 7
//     }
// ];
// console.table(obj);
// let data = obj.filter((obj) => obj.cgpa >= 8);
// console.table(data);

// find()
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// console.log(nums.find((x) => x % 3 == 0));

// let obj = [
//     {
//         name: 'abc',
//         cgpa: 9,
//     },
//     {
//         name: 'xyz',
//         cgpa: 8,
//     },
//     {
//         name: 'mno',
//         cgpa: 8,
//     }
// ]
// console.table(obj);
// console.log(obj.find((obj) => obj.cgpa == 8));

// forEach()
// let nums = [2, 4, 5, 7, 8, 11, 14, 18, 20, 24];
// nums.forEach((value, index) => {
//     console.log(value, index);
// })
// nums.forEach((val, idx) => {
//     if(idx % 2 == 0) nums[idx] = val * 2;
//     else nums[idx] = val * 0;
// })
// console.log(nums);

// let str = "let's go to rishikesh, and chill."
// let word = Array.from(str);
// console.log(word);

// push & unshift -changes original array
// let nums = [10, 20, 'Ram', 'Shyam', 'Sita', 786];
// push adds in the ending
// unshift adds in the beginning
// nums.push(787);
// nums.unshift(9);
// console.log(nums);

// pop & shift
// pop removes last element
// shift removes first element
// nums.pop();
// nums.shift();
// console.log(nums);

// let str = 'welcome student in the class'
// let strArr = str.split(' ');
// console.log(strArr);

// let str = 'shyam'
// let arr = Array.from(str)
// console.log(arr)

// let fruits = ['apples', 'mango', 'banana', 'papaya', 'kiwi']
// let idx = fruits.indexOf('banana');
// console.log('index of banana: ',idx);

// let fruits = ['apples', 'mango', 'banana', 'papaya', 'kiwi']
// fruits.map((x, y) => {
//     console.log(y, ' ', x);
// }) // multiline function
// fruits.map((x, y) => console.log(x, ' ', y));

// let nums = [10, 20 , 30, 40, 50];
// function sumOfArray(nums) {
//     let  sum = 0;
//     nums.forEach(element => {
//         sum += element;
//     });
//     return sum;
// }
// console.log(sumOfArray(nums));
// let sum = nums.reduce((x, y) => x = x+y, 0);
// console.log(sum);

// let nums = [10, 20, 30, 40, 50];
// nums.reverse();
// console.log(nums);

// let nums = [10, 20, 30, 40, 50];
// let arr = nums.slice(2, 4);
// console.log(arr);

// let fruits = ['mango', 'banana', 'papaya', 'apple'];
// let vegetables = ['carrot', 'peas', 'tomato'];
// let frvg1 = [fruits, vegetables];

// // using spread operator
// let frvg2 = [...fruits, ...vegetables];
// console.log(frvg1);
// console.log(frvg2);

// function with rest operator
// function printFruits(...fruits) {
//     console.log(fruits);
//     fruits.forEach((fruit) => console.log(fruit));
// }
// printFruits(fruits);


// destructuring array
// let fruits = ['mango', 'banana', 'papaya', 'apple'];
// let [a, b, c] = fruits;
// console.log(a, b, c);


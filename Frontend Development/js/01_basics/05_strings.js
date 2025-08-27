const name = "Mansvi"
const count = 1
console.log(name + count);
console.log(`hello my name is ${name}`);
console.log(name[0]);
console.log(name.toUpperCase());
console.log(name.charAt(2));
console.log(name.__proto__);
console.log(name.indexOf('s'));

const newStr = name.substring(0, 3);
console.log(newStr);

const anotherStr = name.slice(2, 4);
console.log(anotherStr);

const url = "https://www.google.com/Mansvi%11Kumar"
console.log(url.replace('%11', '-'));

const str1 = '        hello      '
console.log(str1);
console.log(str1.trim());
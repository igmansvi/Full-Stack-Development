// json object
const student = {
    'name': 'mansvi',
    'section': 'k23dx',
    'rollno': 5,
    isAvailable: true,
}
console.table(student);

// json array
const fruits = [
    {
        'name': 'apple',
    },
    {
        'name': 'banana',
    }
]
console.table(fruits);

let str = JSON.stringify(student);
console.log(str,'type '+typeof str);

let obj = JSON.parse(str);
console.log(obj,'type '+typeof obj);

console.log(`"section": ${obj.section}`);
console.log(`"fruits": ${fruits[0].name}`);


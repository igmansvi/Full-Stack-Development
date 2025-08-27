const marvel_heros = ["captainAmerica", "ironman", "spiderman"];
const dc_heros = ["superman", "batman", "flash"];

// marvel_heros.push(dc_heros);
// console.log(marvel_heros);
// const heros = marvel_heros.concat(dc_heros)
// marvel_heros.concat(dc_heros);
// console.log(heros);

// const heros = [...marvel_heros, ...dc_heros];
// console.log(heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 5, [1, 2, 3]]];
// const real_another_array = another_array.flat(Infinity);
// console.log(real_another_array);

console.log(Array.isArray("Hello"));
console.log(Array.from("Hello"));

let a = 1;
let b = 2;
let c = 3;
console.log(Array.of(a, b, c));
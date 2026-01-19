import fs, { read, write } from 'fs';
import { Transform } from 'stream';
import { createServer } from 'net';

// const readStream = fs.createReadStream('./file.txt', 'utf-8');

// const readStream = fs.createReadStream('./readfile.txt', {
//     encoding: 'utf-8',
//     start: 0,
//     end: 24 // reading 25 bytes
// });

// readStream.on("data", (chunk) => {
//     console.log("recieved the data: ", chunk);
// })

// readStream.on("end", () => {
//     console.log("finished reading the file");
// })

// readStream.on("error", (err) => {
//     console.log("error reading the file", err);
// })

// readStream.on("data", (chunk) => {
//     console.log(`size of chunk: ${chunk.length} bytes`);
// })

// write stream ( write data into file )
// const writeStream = fs.createWriteStream('./writefile.txt');

// writeStream.write('hello, world');

// writeStream.end(() => {
//     const readStream = fs.createReadStream('./writefile.txt', {
//         encoding: 'utf-8'
//     });

//     readStream.on('data', (chunk) => {
//         console.log("recieved data: ", chunk);
//     })

//     readStream.on("error", (err) => {
//         console.log("error: ", err);
//     })

//     readStream.on("end", () => {
//         console.log("finished reading the file");
//     })
// })

// transform stream

// const toUpper = new Transform({
//     transform(chunk, encoding, callback) {
//         callback(null, chunk.toString().toUpperCase());
//     }
// })
// console.log("write to console");

// pipe method connect readable stream to writable stream
// pipe => input => transform => output

// process.stdin.pipe(toUpper).pipe(process.stdout);
// console.log("done");

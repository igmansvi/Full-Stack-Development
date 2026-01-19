// const fs = require('fs');
import fs from 'fs';

// compression and decompression library
// const zlib = require('zlib');
import zlib from 'zlib';

// create a sample file
fs.writeFileSync('sample.txt', 'this is a sample file');

// pipeline for zip file creation
const gzip = zlib.createGzip();

// reading file
const input = fs.createReadStream('sample.txt', 'utf-8');

// writing to a zip file
const output = fs.createWriteStream('compress.txt.gz');

// pipe method
// read -> compress -> output
input.pipe(gzip).pipe(output)
output.on("finish", () => {
    console.log("finished compressing file.");
})

// decompress the file
// create transform stream for decompress the file
const gunzip = zlib.createGunzip();
const compressFileInput = fs.createReadStream('compress.txt.gz');
const decompressOutput = fs.createWriteStream('decompressed.txt');

compressFileInput.pipe(gunzip).pipe(decompressOutput);
decompressOutput.on("finish", () => {
    console.log("finished decompressing file.")
})

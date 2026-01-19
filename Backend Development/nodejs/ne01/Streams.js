const express = require('express');  // type: commonjs
// or rename the file as .mjs extension
// import e from 'express'; // type: module
const status = require('express-status-monitor');

const fs = require('fs');

const app = express();

const PORT = 3000;

app.use(status());

app.get('/', (req, res) => {
    res.send("hello, world!");
})

app.get('/api', (req, res) => {
    res.send('hello, express!');
})

app.get('/read', (req, res) => {
    fs.readFile('./readfile.txt', (err, data) => {
        if(err) {
            console.log("error: ",err);
            return res.status(500).send('error reading file');
        }
        res.end(data);
    })
})

app.get('/readStream', (req, res) => {
    const readStream = fs.createReadStream('./readfile.txt', {
        encoding: 'utf-8',
        start: 0,
        end: 23,
    });
    readStream.on("data", (chunk) => {
        res.write(chunk);
    })
    readStream.on("end", () => res.end());
})

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});

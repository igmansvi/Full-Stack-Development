// core modules
const fs = require('fs');

// third party modules - installation using npm and then importing
const moment = require('moment');

// local modules
const index = require('./index');

const sum = index.add(10, 20);
const diff = index.sub(10, 20);

// creates a file `node.txt` and write given things in file;
fs.writeFileSync("node.txt", `the sum is ${sum}\nthe diff is ${diff}\ntoday's moment: ${moment().format('MMMM DD YYYY, h:mm:ss')}`);


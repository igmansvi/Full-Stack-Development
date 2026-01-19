const fs = require('fs');

// sync method - blocking operation
// create / write file
// fs.writeFileSync('file_sync.txt', 'file created -sync');
// console.log('sync method call');
// fs.readFileSync('file_sync.txt');

// async method - non-blocking operation
// fs.writeFile('file_async.txt', 'file created -async', (err) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log('async method call');
//     }
// })
// fs.readFile('file_async.txt', (err) => console.log(err));

// fs.appendFileSync('file_sync.txt', '\ndata appended -sync');
// fs.readFileSync('file_sync.txt');

// fs.copyFileSync('file_sync.txt', 'file_sync_copy.txt');
// fs.readFileSync('file_sync_copy.txt');

// fs.copyFile('file_sync.txt', 'file_async_copy.txt', (err) => console.log(err));

// setTimeout(() => {
//     fs.unlinkSync('file_sync.txt');
//     fs.unlinkSync('file_async.txt');
//     fs.unlinkSync('file_sync_copy.txt');
// }, 5000);

// fs.copyFileSync('file_async.txt', 'file_async_copy.txt', (err) => console.log(err));


// fs.writeFileSync('file.txt', 'hello, world');

// const stats = fs.statSync('file.txt');
// console.log('file stats');
// console.log('file', stats.isFile());
// console.log('file size', stats.size, 'bytes');
// console.log('file created at: ', stats.birthtime);

// fs.mkdirSync('./files');
// fs.writeFileSync('./file/file.txt', 'hello, world');

// Note: fails to call vice-versa function calls on file-process of creations
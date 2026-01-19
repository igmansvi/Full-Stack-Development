import express, { urlencoded } from "express";
import fs from "fs";
import zlib from "zlib";

const app = express();
const port = 3000;

app.use(urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.sendFile(process.cwd() + "/index.html");
// });

// app.get("/delete-file", (req, res) => {
//   const filename = req.query.filename;
//   const filepath = process.cwd() + "/" + filename;
//   fs.unlink(filepath, (err) => {
//     if (err) {
//       res.send(`error deleting ${filename}: ${err}`);
//     } else {
//       res.send(`${filename} deleted!`);
//     }
//   });
// });/

app.get("/", (req, res) => {
  res.send(`
        <form action='/create-file' method='post'>
            <label for="filename">Create file</label><br>
            <input name="filename" placeholder="enter file name"><br>
            <input name="filedata" placeholder="enter file data"><br>
            <input type="submit" value="submit">
        </form>
        `);
});

app.post("/create-file", (req, res) => {
  const { filename, filedata } = req.body;
  fs.writeFile(filename, filedata, (err) => {
    if (err) {
      res.send(`error creating ${filename}: ${err}`);
    } else {
      res.send(
        `${filename} created successfully!<br> <a href='/read-file?filename=${filename}'>read-file</a>`
      );
    }
  });
});

app.get("/read-file", (req, res) => {
  const filename = req.query.filename;
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      res.send(`error reading ${filename}: ${err}`);
    } else {
      res.send(
        `filedata: ${data}<br> <a href='/compress-file?filename=${filename}'>compress-file</a>`
      );
    }
  });
});

app.get("/compress-file", (req, res) => {
  const filename = req.query.filename;
  const compressfile = `${filename}.compressed.gz`;
  const glib = zlib.createGzip();
  const input = fs.createReadStream(filename);
  const output = fs.createWriteStream(compressfile);
  input.pipe(glib).pipe(output);
  output.on("finish", (err) => {
    if (err) {
      res.send(`error: ${err}`);
    } else {
      res.send(
        `${filename} compressed!<br> <a href='/decompress-file?filename=${compressfile}'>decompress-file</a>`
      );
    }
  });
});

app.get("/decompress-file", (req, res) => {
  const filename = req.query.filename;
  const decompressfile = `${filename}.decompressed.txt`;
  const gunlib = zlib.createGunzip();
  const input = fs.createReadStream(filename);
  const output = fs.createWriteStream(decompressfile);
  input.pipe(gunlib).pipe(output);
  output.on("finish", (err) => {
    if (err) {
      res.send(`error: ${err}`);
    } else {
      res.send(
        `${filename} decompressed!<br> <a href='/compress-file?filename=${decompressfile}'>compress-file</a><br><a href='/read-file?filename=${decompressfile}'>read-file</a>`
      );
    }
  });
});

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});

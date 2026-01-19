import e from "express";
import { connectDb } from "./db/connect.js";
import Travel from "./model/travel.model.js";

const port = 5000;
const api_uri = "mongodb://localhost:27017/test";

await connectDb(api_uri);

const app = e();
app.use(e.json());
app.use(e.urlencoded({ extended: true }));
app.use(e.static("public"));

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});

app.post("/add-travel", async (req, res) => {
  try {
    const response = await Travel(req.body).save();
    res.send(`travel data saved successfully! <br> <a href='/'>back</a>`);
  } catch (error) {
    console.log(`${error}`);
  }
});

app.get("/see-travel", async (req, res) => {
  try {
    const response = await Travel.find();
    res.send(`${JSON.stringify(response)}
        <br>
        <a href='/'>back</a> <br>
        <a href='/search-data'>Search Data</a> <br>
        <a href='/delete-data'>Delete Data</a>
    `);
  } catch (error) {
    console.log(`${error}`);
  }
});

app.get("/search-data", (req, res) => {
  res.send(`
            <form action='/search' method='get'>
                <input type='text' name='city' placeholder='enter city name'>
                <input type='submit' value='submit'>
            </form>
            <a href='/'>back</a> <br>
            <a href='/delete-data'>Delete Data</a> <br>
            <a href='/search-data'>Search Data</a> <br>
        `);
});

app.get("/delete-data", (req, res) => {
  res.send(`
            <form action='/delete' method='get'>
                <input type='text' name='city' placeholder='enter city name'>
                <input type='submit' value='submit'>
            </form>
            <a href='/'>back</a> <br>
            <a href='/delete-data'>Delete Data</a> <br>
            <a href='/search-data'>Search Data</a> <br>
        `);
});

app.get("/search", async (req, res) => {
  try {
    const { city } = req.query;
    const response = await Travel.find({ city: city });
    res.send(`${JSON.stringify(response)}
            <br>
            <a href='/search-data'>back</a> <br>
    `);
  } catch (error) {
    console.log(`${error}`);
  }
});

app.get("/delete", async (req, res) => {
  try {
    const { city } = req.query;
    const response = await Travel.deleteOne({ city: city });
    res.send(`${JSON.stringify(response)}
            <br>
            <a href='/delete-data'>back</a> <br>
    `);
  } catch (error) {
    console.log(`${error}`);
  }
});

app.listen(port, () =>
  console.log(`server is running at: http://localhost:${port}`)
);

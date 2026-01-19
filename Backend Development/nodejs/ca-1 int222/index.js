import express from "express";

const app = express();
const port = 3000;

function databaseQuery(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`fetching id: ${id}`);
    }, 2000);
    if(id == 101) {
        resolve({id: 101, product: 'Laptop', price: 1000});
    } else {
        reject('Product not found');
    }
  })
}

app.use(express.json());

app.get("/product/:id", async (req, res) => {
  try {
    const response = await databaseQuery(req.params.id);
    res.json(response);
  } catch (err) {
    res.status(404).json(err);
  }
});

app.listen(port || process.env.PORT, () => {
  console.log(`server is running at http://localhost:${port}`);
});

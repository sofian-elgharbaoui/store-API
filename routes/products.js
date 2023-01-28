const Product = require("./models/products");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
  //   res.sendFile(path.resolve(__dirname, "./public/index.html"));
});

app.get("/products", async (req, res) => {
  try {
    let products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.log(error);
  }
});

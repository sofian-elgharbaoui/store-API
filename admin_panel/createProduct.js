const Product = require("../models/product");
const asyncWrapper = require("../middlewares/async-wrapper");

const createProduct = asyncWrapper(async (req, res) => {
  let productInfo = req.body;
  const newProduct = await Product.create(productInfo);
  res.json({ status: "success", data: newProduct });
});

module.exports = createProduct;

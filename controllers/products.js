const Product = require("../models/product");
const asyncWrapper = require("../middlewares/async-wrapper");
const { createErr } = require("../middlewares/custom_error");

// this mean that the page will run the code after the needed async one,
// and await make just the code after it to be waiting for it to complete resolve/reject.

const getAllProducts = asyncWrapper(async (req, res) => {
  let products = await Product.find({});
  res.json({ status: "success", data: products });
});

const getProduct = asyncWrapper(async (req, res, next) => {
  let productID = req.params.id;
  const product = await Product.findById(productID);
  if (!product) {
    return next(
      createErr(`there is no product with this id: ${productID}`, 404)
    );
  }
  res.json({ status: "success", data: product });
});

module.exports = { getAllProducts, getProduct };

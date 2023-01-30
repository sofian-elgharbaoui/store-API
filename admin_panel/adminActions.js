const Product = require("../models/product");
const success = require("../helpers/success");

const createProduct = async (req, res) => {
  let productInfo = req.body;
  const product = await Product.create(productInfo);
  success(res, product);
};

const editProduct = async (req, res, next) => {
  let productID = req.params.id;
  let newInfo = req.body;
  const product = await Product.findByIdAndUpdate(productID, newInfo);
  success(res, product);
};

const deleteProduct = async (req, res, next) => {
  let productID = req.params.id;
  const product = await Product.findByIdAndDelete(productID);
  success(res, product);
};

module.exports = { createProduct, editProduct, deleteProduct };

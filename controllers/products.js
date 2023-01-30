const Product = require("../models/product");
const success = require("../helpers/success");
const { createErr } = require("../errors/custom_error");

// this mean that the page will run the code after the needed async one,
// and await make just the code after it to be waiting for it to complete resolve/reject.

const getAllProducts = async (req, res) => {
  let products = await Product.find({});
  success(res, products);
};

const getProduct = async (req, res, next) => {
  const productID = req.params.id;
  const product = await Product.findOne({ _id: productID }).select("images");

  if (!product) {
    return next(
      createErr(`there is no product with this id: ${productID}`, 404)
    );
  }
  // res.type(".png"); // or res.contentType(product.images[0].contentType)
  // res.send(product.images[0].data); // I have used send() method, not json() method.
  success(res, product);
};

const getCertainProducts = async (req, res, next) => {
  // to avoid the situation in which the user pass wrong keys in the query:
  // 1- set all query keys you want
  let { name, description, price, category, rating } = req.query;
  // 2- set a new obj
  const queryObj = {};

  // 3- check if they are exist in the queryStr
  if (name) queryObj.name = name;
  else if (description) queryObj.description = description;
  else if (price) queryObj.price = price;
  else if (category) queryObj.category = category;
  else if (rating) queryObj.rating = rating;

  // 4- pass the new obj to the find method in mongoose
  const products = await Product.find(queryObj);
  if (!products) {
    return next(
      createErr(
        `the stock is empty from these products for the time being`,
        404
      )
    );
  }
  success(res, products);
};

module.exports = { getAllProducts, getProduct, getCertainProducts };

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
  const { id: productID } = req.params;
  // const { name, price } = req.query;
  // first way to select certain keys from the document
  // const product = await Product.findOne({ _id: productID }, "name price");
  // second way to select certain keys from the document
  const product = await Product.findOne({ _id: productID }).select(
    "name price"
  );

  if (!product) {
    return next(
      createErr(`there is no product with this id: ${productID}`, 404)
    );
  }
  // res.contentType(product.images[0].contentType); // or res.type(".png")
  // res.send(product.images[0].data); // I have used send() method, not json() method.
  success(res, product);
};

const getCertainProducts = async (req, res, next) => {
  // To avoid the situation in which the user pass wrong keys in the query:
  // 1- set all query keys you want
  let { name, price, category, rating, sort, fields } = req.query;
  // 2- set a new obj
  const queryObj = {};

  // 3- check if they are exist in the queryObj
  // if here is a vlue that returns true/false from the form, it will return a string value,
  // then I have make a condition to return it to boolean. like:
  // if (featured) queryObject.featured = featured === 'true' ? true : false;
  if (name) queryObj.name = name;
  if (description) queryObj.description = description;
  if (price) queryObj.price = price;
  if (category) queryObj.category = category;
  if (rating) queryObj.rating = rating;

  // 4- pass the new obj to the find method in mongoose
  // 5- it'll return an empty array if the value(s) doesn't match any item in the db.
  const products = await Product.find(queryObj);
  if (!products) {
    return next(
      createErr(
        `the stock is empty from these products for the time being`,
        404
      )
    );
  }
  // after getting all documents that satisfied the query, do the next:
  // 1- if I just want them to be like that. return them
  success(res, products);
  // 2- if I want to sort them or select some fields and then return the documents:
  // 2-1- I have to remove the await from the promise, as well as the const (use let instead)
  /// let products = Product.find(queryObj);
  // 2-2- then apply the sort methd if it exist in the query
  /// if (sort) {
  ///   let sortList = sort.split(",").join("") // because in the URL it'll lokes like "sort=name,price"
  ///   products = products.sort(sortList);
  /// // if I want to do some functionality, I'll use else
  /// } else {
  ///   products = products.sort('createdAt');
  /// }
  // 2-3- then apply the select methd if the fields exist in the query
  /// if (fields) {
  ///   const fieldsList = fields.split(',').join(' ');
  ///   products = products.select(fieldsList);
  /// }

  /// const page = Number(req.query.page) || 1;
  /// const limit = Number(req.query.limit) || 10;
  /// const skip = (page - 1) * limit;

  /// result = result.skip(skip).limit(limit);
  // // 23
  // // 4 7 7 7 2

  // const products = await result;

  // if (numericFilters) {
  //   const operatorMap = {
  //     '>': '$gt',
  //     '>=': '$gte',
  //     '=': '$eq',
  //     '<': '$lt',
  //     '<=': '$lte',
  //   };
  //   const regEx = /\b(<|>|>=|=|<|<=)\b/g;
  //   let filters = numericFilters.replace(
  //     regEx,
  //     (match) => `-${operatorMap[match]}-`
  //   );
  //   const options = ['price', 'rating'];
  //   filters = filters.split(',').forEach((item) => {
  //     const [field, operator, value] = item.split('-');
  //     if (options.includes(field)) {
  //       queryObject[field] = { [operator]: Number(value) };
  //     }
  //   });
  // }
  // success(res, products);
};

module.exports = { getAllProducts, getProduct, getCertainProducts };

const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: String,
  img: Buffer,
  price: Number,
});

module.exports = mongoose.model("product", productSchema);

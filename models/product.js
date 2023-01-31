const { Schema, model } = require("mongoose");

const ImageSchema = new Schema({
  data: Buffer,
  contentType: String,
});

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, "you must include the product's name"],
  },

  description: {
    type: String,
    required: [true, "you must include the product's description"],
  },

  images: [ImageSchema],

  category: {
    type: String,
    required: [true, "you must include the product's category"],
  },

  price: {
    type: Number,
    required: [true, "you must include the product's price"],
  },

  quantity: {
    type: Number,
    required: [true, "you must include the quantity of products in the stock"],
  },

  rating: {
    type: String,
    default: "4.0",
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
  // // if I want to pass a value that matches one of the specefied values: enum: {values:[], message:"",}

  // company: {
  //   type: String,
  //   enum: {
  //     values: ["nike", "puma", "adidas"],
  //     message: "This {VALUE} is not supported",
  //   },
  // },
});

module.exports = model("Product", ProductSchema);

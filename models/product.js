const { Schema, model } = require("mongoose");

const ImageSchema = new Schema({
  data: Buffer,
  contentType: String,
});

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  description: {
    type: String,
    required: true,
  },

  images: [ImageSchema],

  category: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },

  rating: {
    type: String,
    required: true,
    default: "4.0",
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = model("Product", ProductSchema);

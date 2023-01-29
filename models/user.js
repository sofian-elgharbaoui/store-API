const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  productsInCart: {
    type: Array,
    defaule: [],
  },

  finalCost: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("user", userSchema);

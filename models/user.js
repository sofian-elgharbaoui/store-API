const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
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

module.exports = model("User", userSchema);

const express = require("express");
const router = express.Router();

const {
  createProduct,
  editProduct,
  deleteProduct,
} = require("../admin_panel/adminActions");

const {
  getAllProducts,
  getProduct,
  getCertainProducts,
} = require("../controllers/products");

router.route("/").get(getAllProducts).post(createProduct);
router.route("/static").get(getCertainProducts);
router.route("/:id").get(getProduct).patch(editProduct).delete(deleteProduct);

module.exports = router;

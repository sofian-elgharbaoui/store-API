const express = require("express");
const router = express.Router();
const createProduct = require("../admin_panel/createProduct");
const { getAllProducts, getProduct } = require("../controllers/products");

router.route("/").get(getAllProducts).post(createProduct);
router.route("/:id").get(getProduct);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getUserInfo,
  addNewUser,
} = require("../controllers/users");

router.route("/").get(getAllUsers).post(addNewUser);
router.route("/:id").get(getUserInfo);

module.exports = router;

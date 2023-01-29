const User = require("../models/user");
const asyncWrapper = require("../middlewares/async-wrapper");
const { createErr } = require("../middlewares/custom_error");

const getAllUsers = asyncWrapper(async (req, res) => {
  let allUsers = await User.find({});
  res.json({ status: "success", data: allUsers });
});

const addNewUser = asyncWrapper(async (req, res) => {
  let userInfo = req.body;
  let newUser = await User.create(userInfo);
  res.json({ status: "success", userInfo: newUser });
});

const getUserInfo = asyncWrapper(async (req, res, next) => {
  let userID = req.params.id;
  let user = await User.findOne({ _id: userID });
  if (!user) {
    return next(createErr(`there is no user with this id: ${productID}`, 404));
  }
  res.json({ status: "success", data: user });
});

module.exports = {
  getAllUsers,
  getUserInfo,
  addNewUser,
};

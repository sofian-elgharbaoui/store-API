const User = require("../models/user");
const success = require("../helpers/success");
const { createErr } = require("../errors/custom_error");

const getAllUsers = async (req, res) => {
  let allUsers = await User.find({});
  success(res, allUsers);
};

const addNewUser = async (req, res) => {
  let userInfo = req.body;
  let user = await new User(userInfo);
  // let user = await User.create(userInfo);
  success(res, user);
};

const getUserInfo = async (req, res, next) => {
  let userID = req.params.id;
  let user = await User.findOne({ _id: userID });
  if (!user) {
    return next(createErr(`there is no user with this id: ${productID}`, 404));
  }
  success(res, user);
};

module.exports = {
  getAllUsers,
  getUserInfo,
  addNewUser,
};

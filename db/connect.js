const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connetToDB = (uri) => {
  return mongoose.connect(uri);
};

module.exports = connetToDB;

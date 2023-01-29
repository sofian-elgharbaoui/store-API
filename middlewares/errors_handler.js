const { CustomError } = require("./custom_error");

const errorsHandler = (err, req, res, next) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).json({ status: "failure", msg: err.message });
  }
  return res.status(500).json({ status: "failure", msg: "Something broke!" });
};

module.exports = errorsHandler;

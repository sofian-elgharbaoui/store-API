class CustomError extends Error {
  constructor(message, statusCode) {
    // I have to give the same name of the old class chosen property to the super
    super(message);
    this.statusCode = statusCode;
  }
}

let createErr = (message, statusCode) => {
  return new CustomError(message, statusCode);
};

module.exports = { CustomError, createErr };

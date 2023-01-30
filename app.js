const express = require("express");
const app = express();

const connetToDB = require("./db/connect");
require("dotenv").config();

require("express-async-errors");

// Bring Routes
const productsRouter = require("./routes/products");
const usersRouter = require("./routes/users");

// errors handler
const errorsHandler = require("./middlewares/errors_handler");
//not found pages
const notFoundPages = require("./middlewares/not_found");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// static files
app.use(express.static("./public"));

// routes
app.use("/api/v1/products", productsRouter);
app.use("/users", usersRouter);

// unexisted pages - 404
app.use(notFoundPages);

// errors handler
app.use(errorsHandler);

(async () => {
  try {
    await connetToDB(process.env.uri);
    app.listen(3000, console.log(`Server is listening on port 3000...`));
  } catch (error) {
    console.error(error);
  }
})();

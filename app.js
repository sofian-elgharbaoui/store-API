const express = require("express");
const path = require("path");
const app = express();

const connetToDB = require("./db/connect");
require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

(async () => {
  try {
    await connetToDB(process.env.uri);
    app.listen(3000, console.log(`Server is listening on port 3000...`));
  } catch (error) {
    console.error(error);
  }
})();

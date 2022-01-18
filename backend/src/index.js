const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const app = express();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to mongo db database");
  })
  .catch((err) => {
    console.log("Error connecting to database" + err);
  });

app.get("/hello-world", (req, res) => {
  res.send("Hello world!");
});

app.listen(process.env.PORT, () => {
  console.log("Backend server has stated at" + process.env.PORT);
});

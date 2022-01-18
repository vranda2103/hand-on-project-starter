const express = require("express");

const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/helloWorld", (req, res) => {
  res.send("Hello World");
});

app.listen(process.env.PORT, () => {
  console.log("Backend server has started at "+process.env.PORT);
});
